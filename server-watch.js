#! /usr/bin/env node
// @ts-check

const fs = require("fs");
const { spawn } = require("child_process");

/**
 * Start Process
 */
console.log("- \x1b[35mStart:\x1b[0m Process Starting ...");

/**
 * Initialize arguments
 */
let args = [],
    ignore = [],
    targetFile;

/**
 * Check configurations
 */
if (fs.existsSync("./sw.config.json")) {
    try {
        const config = JSON.parse(fs.readFileSync("./sw.config.json", "utf-8"));

        /** @type {string} */
        const exec = config?.exec;

        args = exec.split(" ");

        if (config.ignore) ignore = config.ignore;
    } catch (error) {
        console.log("- \x1b[31mError:\x1b[0m Invalid configuration file!");
        process.exit();
    }
} else if (process.argv.length == 3) {
    args = process.argv;
} else if (process.argv.length == 3) {
    console.log(process.cwd(), process.argv[1], process.argv[2]);
    args = process.argv.slice(1);
} else if (fs.existsSync("./index.js")) {
    args = ["node", "index.js"];
} else {
    console.log("- \x1b[31mError:\x1b[0m Please enter the required arguments to run!");
    process.exit();
}

targetFile = args.at(-1);

/**
 * Spawn a new child process
 */
function child() {
    const watcher = spawn("node", [targetFile], {
        cwd: process.cwd(),
        stdio: "inherit",
    });

    watcher.on("error", (err) => {
        console.log("Watcher Error =>", err.message);
    });

    return watcher;
}

/** @type {import("child_process").ChildProcess} */
let watcher = child();

/**
 * Watch for file changes
 */
fs.watch(process.cwd(), { recursive: true }, (evtType, filename) => {
    const targetIgnore = ignore && Array.isArray(ignore) ? ignore.find((item) => filename?.match(new RegExp(`^${item}`))) : null;

    if (targetIgnore) {
        return;
    }

    console.log("- \x1b[34mInfo:\x1b[0m Restarting server ...");

    const kill = watcher.kill("SIGINT");

    if (kill) {
        console.log("- \x1b[32mSuccess:\x1b[0m Server reloaded Successfully!");
        watcher = child();
    }
});
