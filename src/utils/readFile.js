const fs = require("fs");
const path = require("path");
function generateIndexFile(dirPath) {
    const components = fs
        .readdirSync(dirPath)
        .filter((file) => !file.endsWith(".ts"))
        .map((file) => {
            const componentName = path.basename(`${file}/index`, ".tsx");
            return `export { default as ${file} } from ./${file}/${componentName}.tsx';`;
        });

    const indexContent = components.join("\n");
    fs.writeFileSync(path.join(dirPath, "index.ts"), indexContent);
}

// Example usage: generateIndexFile('./src/components');
generateIndexFile("../pages");
