const { spawnSync } = require('child_process');

console.log("hook_test: " + new Date());
console.log(spawnSync("yarn", [ "list" ]).stdout.toString());
