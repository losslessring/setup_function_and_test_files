import { promises as fs } from "fs"

export async function readFile({ path, encoding }) {
    try {
        const data = await fs.readFile(path, {
            encoding,
        })
        return data
    } catch (err) {
        console.log(err)
    }
}
