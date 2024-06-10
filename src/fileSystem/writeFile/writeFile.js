import { promises as fs } from "fs"

export async function writeFile({ filePath, content }) {
    return await fs.writeFile(filePath, content)
}
