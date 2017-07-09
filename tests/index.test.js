const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

const config = require("./webpack.config.js");
const compiler = webpack(config);

describe("source map support plugin", () => {
  test("compiles files with banner", done => {
    expect.assertions(3);
    return compiler.run((err, res) => {
      expect(err).toBeNull();
      const dist = fs.readFile(path.resolve(__dirname, "dist/entry.bundle.js"), { encoding: "utf-8" }, (err, res) => {
        expect(err).toBeNull();
        const firstLine = res.split("\n")[0];
        const expected = 'require("source-map-support").install();';
        expect(firstLine).toBe(expected);
        done();
      });
    });
  });
});
