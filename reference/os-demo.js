/* jshint esversion: 6 */

const os = require('os');

// Get Platform
console.log(os.platform());

// Get CPU architecture
console.log(os.arch());

// Get CPU core info.
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());
