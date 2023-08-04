<p align="center">
<img src="https://static.datasquirel.com/images/user-images/user-2/npm/server-watch/logo.png" width="200" height="200" />
</p>

# Server Watch

A feather-light package that watches and actively reloads node js server instances

---

## Installation

To install this package run:

```bash
npm install server-watch
```

To install globally run:

```bash
npm install -g server-watch
```

## How to use

There are two ways to run server-watch

### CLI run with arguments

```bash
npx server-watch node index.js
```

### Setting up an `sw.config.json` file

If you add an `sw.config.json` to your root directory, you only need to run:

```bash
npx server-watch
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
