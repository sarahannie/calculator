import app from "../src/App";
import { assert } from "chai";
import { describe, it } from "mocha";
describe("Operations", function () {
  it("1+1=2", function () {
    assert.equal(add(), 2);
  });
});
