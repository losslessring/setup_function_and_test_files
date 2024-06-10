var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/setupFunctionFolder/createFunctionFile/createFunctionFile.test.js
var createFunctionFile_test_exports = {};
__export(createFunctionFile_test_exports, {
  createFunctionFile_test: () => createFunctionFile_test
});

// node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// node_modules/ramda/es/internal/_curry1.js
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// node_modules/ramda/es/internal/_curry2.js
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

// node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

// node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

// node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}

// node_modules/ramda/es/internal/_has.js
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/ramda/es/internal/_isArguments.js
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
    return toString.call(x) === "[object Arguments]";
  } : function _isArguments2(x) {
    return _has("callee", x);
  };
}();
var isArguments_default = _isArguments;

// node_modules/ramda/es/keys.js
var hasEnumBug = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_default = keys;

// node_modules/ramda/es/type.js
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
var type_default = type;

// node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b2, aItem) {
    return !_includesWith(eq, aItem, b2);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (objectIs_default(a, b)) {
    return true;
  }
  var typeA = type_default(a);
  if (typeA !== type_default(b)) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && objectIs_default(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys_default(a);
  if (keysA.length !== keys_default(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// node_modules/ramda/es/equals.js
var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
  return _equals(a, b, [], []);
});
var equals_default = equals;

// testingLibrary/testingLibrary.js
var logColors = {
  Reset: "\x1B[0m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgWhite: "\x1B[37m",
  FgGray: "\x1B[90m"
};
var loggerFn = console.log;
var TestMatchers = class {
  constructor({ actual, logColors: logColors2, logFn = console.log }) {
    this.actual = actual;
    this.logFn = logFn;
    this.logColors = logColors2;
  }
  toBe(expected) {
    if (equals_default(expected, this.actual)) {
      this.logFn(
        `${this.logColors.FgGreen}Succeeded${this.logColors.Reset}`
      );
    } else {
      this.logFn(
        `${this.logColors.FgRed}Test failed
Actual:
${JSON.stringify(
          this.actual
        )}
                
Expected:
${JSON.stringify(expected)}
${this.logColors.Reset}`
      );
      throw new Error();
    }
  }
  toBeTruthy() {
    if (this.actual) {
      this.logFn(`Succeeded`);
    } else {
      this.logFn(
        `Fail - Expected value to be truthy but got ${this.actual}`
      );
      throw new Error(
        `Fail - Expected value to be truthy but got ${this.actual}`
      );
    }
  }
};
function expect(actual) {
  return new TestMatchers({ actual, logColors, logFn: loggerFn });
}
function describe(suiteName, fn, logFn = loggerFn) {
  try {
    logFn(`suite: ${suiteName}`);
    fn();
  } catch (err) {
    logFn(`${logColors.FgRed}${err.message}${logColors.Reset}`);
  }
}
function it(testName, fn, logFn = loggerFn) {
  logFn(`test: ${testName}`);
  try {
    fn();
  } catch (err) {
    logFn(`${logColors.FgGray}`);
    logFn(err);
    logFn(`${logColors.Reset}`);
    throw new Error("Test run failed");
  }
}

// src/fileSystem/readFile/readFile.js
import { promises as fs } from "fs";
async function readFile({ path, encoding }) {
  try {
    const data = await fs.readFile(path, {
      encoding
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

// src/setupFunctionFolder/createFunctionFile/createFunctionFile.js
import { promises as fs2 } from "fs";
async function createFunctionFile({ filePath }) {
  const splittedPath = filePath.split("/");
  const functionName = splittedPath[splittedPath.length - 1].split(".")[0];
  const content = `function ${functionName}() {}
`;
  return await fs2.writeFile(filePath, content);
}

// src/setupFunctionFolder/createFunctionFile/createFunctionFile.test.js
var createFunctionFile_test = () => {
  describe("create function file", () => {
    it("create function file", async () => {
      const filePath = "src/setupFunctionFolder/createFunctionFile/tests/testFunctionName/testFunctionName.js";
      await createFunctionFile({ filePath });
      const expected = "function testFunctionName() {}\n";
      const result = await readFile({
        path: "src/setupFunctionFolder/createFunctionFile/tests/testFunctionName/testFunctionName.js",
        encoding: "utf8"
      }).then((data) => data);
      expect(result).toBe(expected);
    });
  });
};

// src/fileSystem/writeFile/writeFile.test.js
var writeFile_test_exports = {};
__export(writeFile_test_exports, {
  writeFile_test: () => writeFile_test
});
import * as fs4 from "fs";

// src/fileSystem/writeFile/writeFile.js
import { promises as fs3 } from "fs";
async function writeFile({ filePath, content }) {
  return await fs3.writeFile(filePath, content);
}

// src/fileSystem/writeFile/writeFile.test.js
var writeFile_test = () => {
  describe("write file", () => {
    it("write data to a file", async () => {
      const filePath = "./src/fileSystem/writeFile/tests/writeFile/writeFileTest.json";
      const content = "test";
      const expected = "test";
      await writeFile({ filePath, content: JSON.stringify(content) });
      const result = JSON.parse(
        fs4.readFileSync(
          "./src/fileSystem/writeFile/tests/writeFile/writeFileTest.json"
        )
      );
      expect(result).toBe(expected);
    });
  });
};

// src/fileSystem/readFile/readFile.test.js
var readFile_test_exports = {};
__export(readFile_test_exports, {
  readFile_test: () => readFile_test
});
var readFile_test = () => {
  describe("read file", () => {
    it("read data from file", async () => {
      const expected = {
        key0: "value0",
        key1: "value1"
      };
      const result = await readFile({
        path: "./src/fileSystem/readFile/tests/readFileTest.json",
        encoding: "utf8"
      }).then((data) => JSON.parse(data));
      expect(result).toBe(expected);
    });
  });
};

// testsAutoImport.js
var tests = { ...createFunctionFile_test_exports, ...writeFile_test_exports, ...readFile_test_exports };
export {
  tests
};
