import { promises as fs } from "fs"

export async function createFunctionFile({ filePath }) {
    const splittedPath = filePath.split("/")
    const functionName = splittedPath[splittedPath.length - 1].split(".")[0]
    const content = `function ${functionName}() {}\n`
    return await fs.writeFile(filePath, content)
}
