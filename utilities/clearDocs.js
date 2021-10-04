const fs = require("fs");
const docPath = require("./docConfig.json").opts.destination;

if (fs.existsSync(docPath)) {
	fs.rm(docPath, { recursive: true }, () => {});
}
