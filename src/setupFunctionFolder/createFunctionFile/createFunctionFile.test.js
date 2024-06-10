import { describe } from "../../../testingLibrary/testingLibrary.js"
import { it } from "../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../testingLibrary/testingLibrary.js"

import { readFile } from "../../fileSystem/readFile/readFile.js"
import { createFunctionFile } from "./createFunctionFile.js"

export const createFunctionFile_test = () => {
    describe("create function file", () => {
        it("create function file", async () => {
            const filePath =
                "src/setupFunctionFolder/createFunctionFile/tests/testFunctionName/testFunctionName.js"

            await createFunctionFile({ filePath })
            const expected = "function testFunctionName() {}\n"

            const result = await readFile({
                path: "src/setupFunctionFolder/createFunctionFile/tests/testFunctionName/testFunctionName.js",
                encoding: "utf8",
            }).then((data) => data)

            expect(result).toBe(expected)
        })
    })
}
