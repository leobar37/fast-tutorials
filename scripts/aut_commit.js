// # !bin/bash

// set -e

// git add .
// git commit -m "${1}"

const shell = require("shelljs");

const ram = () => (Math.random() + 1).toString(36).substring(7);

shell.exec("git add .");
shell.exec(`git commit -am "Auto-commit ${ram()}"`);
