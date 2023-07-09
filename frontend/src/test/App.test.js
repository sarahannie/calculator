import React from "react";
import ReactDOM from "react-dom";
import { handleCalculate } from "../hooks/handleCalculate";
import { assert } from "chai";

describe("Should return the operation depending on the operator passed", function () {
  it("1+1=2", function () {
    assert.equal(handleCalculate("+", "1", "1"), 2);
  });
  it("10-5=5", function () {
    assert.equal(handleCalculate("-", "10", "5"), 5);
  });
  it("20*5=100", function () {
    assert.equal(handleCalculate("*", "20", "5"), 100);
  });
  it("10/5=2", function () {
    assert.equal(handleCalculate("/", "10", "5"), 2);
  });
});
