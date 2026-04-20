const os = require("os");

function getSystemInfo() {
    return `
OS Platform: ${os.platform()}
Architecture: ${os.arch()}
Total Memory: ${os.totalmem()}
Free Memory: ${os.freemem()}
CPU Cores: ${os.cpus().length}
Hostname: ${os.hostname()}
`;
}

module.exports = { getSystemInfo };