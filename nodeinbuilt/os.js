var os = require('os');
console.log(os.platform())
console.log(`${os.freemem()} byte`)
console.log(os.arch())
console.log(`${os.cpus().length} core system`)
console.log(os.hostname())
console.log(`${os.uptime()} sec`)