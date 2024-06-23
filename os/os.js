const os = require('os');
console.log(os.platform(), os.freemem())

const remover = os.getPriority();

module.exports = {remover};