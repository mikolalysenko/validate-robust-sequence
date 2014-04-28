"use strict"

module.exports = validateSequence

var testOverlap = require("test-float-overlap")

function validateSequence(x) {
  var n = x.length
  if(n < 1) {
    return false
  }
  for(var i=1; i<n; ++i) {
    if(Math.abs(x[i-1]) >= Math.abs(x[i])) {
      return false
    }
    if(testOverlap(x[i], x[i-1])) {
      return false
    }
  }
  return true
}