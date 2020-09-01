const { spawnSync } = require('child_process');

console.log("hook_test");
console.log(spawnSync("yarn", [ "list" ]).stdout.toString());