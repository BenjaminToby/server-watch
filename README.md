<p align="center">
<img src="https://static.datasquirel.com/images/user-images/user-2/npm/server-watch/logo.png" width="200" height="200" />
</p>

# Server Watch

A feather-light package that watches and actively reloads node js server instances

---

## Installation

To install this package run:

```bash
npm install -g server-watch
```

To install this package on a per-project basis run:

```bash
npm install server-watch
```

## How to use

There are two ways to run server-watch

### CLI run with arguments

If you installed the package globally, just run:

```bash
server-watch index.js
```

If you installed the package for just a specific project, then you need to append the `npx` command to it. Like this:

```bash
npx server-watch index.js
```

### Setting up an `sw.config.json` file

If you add an `sw.config.json` to your root directory, you only need to run:

```bash
server-watch
```

Your configuration in your config file sets the required options for watching the server.

#### Basic configuration

```json
{
    "exec": "node .",
    "ignore": [".git", "node_modules"]
}
```

##### Parameters:

**required**: `exec` - This is your exectuion script

**optional**: `ignore` - This is an array of paths to ignore when waching the server
