const fs = require("fs");
const docPath = require("./docConfig.json").opts.destination;

if (fs.existsSync(docPath)) {
    fs.rmdirSync(docPath, { recursive: true });
}