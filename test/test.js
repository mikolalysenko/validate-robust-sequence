"use strict"

var tape = require("tape")
var validate = require("../validate")

tape("validate-robust-sequence", function(t) {

  t.ok(validate([1e-16, 1]))
  t.ok(!validate([0.5, 1.5]))
  t.ok(validate([0]))
  t.ok(!validate([]))
  
  t.end()
})