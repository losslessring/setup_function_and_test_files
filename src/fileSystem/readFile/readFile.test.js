import { describe } from "../../../testingLibrary/testingLibrary.js"
import { it } from "../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../testingLibrary/testingLibrary.js"

import { readFile } from "./readFile.js"

export const readFile_test = () => {
    describe("read file", () => {
        it("read data from file", async () => {
            const expected = {
                key0: "value0",
                key1: "value1",
            }

            const result = await readFile({
                path: "./src/fileSystem/readFile/tests/readFileTest.json",
                encoding: "utf8",
            }).then((data) => JSON.parse(data))

            expect(result).toBe(expected)
        })
    })
}
