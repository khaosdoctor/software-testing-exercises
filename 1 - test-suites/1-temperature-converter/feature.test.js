const { describe, it } = require('node:test')
const assert = require('node:assert')
const { converter } = require('./feature')

const tests = [
  { C: 100, F: 212, K: 373.15 },
  { C: 0, F: 32, K: 273.15 },
  { C: 22.5, F: 72.5, K: 295.65 },
  { C: -10, F: 14, K: 263.15 },
  { C: -30.45, F: -22.81, K: 242.7 }
]
