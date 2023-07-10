/* eslint-disable no-undef */
const productionLogger = require("./productionLogger")
let logger = null;


if (process.env.NODE_ENV !== 'production') {
    logger = productionLogger()
  }


  module.exports = logger