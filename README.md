validate-robust-sequence
========================
Tests if an array is an increasing non-overlapping sequence

# Example

```javascript
var testSequence = require("validate-robust-sequence")

console.log(testSequence([1e-16, -1]),  [0.5, 1.5])
```

Output:

```javascript
true false
```

# Install

```
npm install validate-robust-sequence
```

# API

#### `require("validate-robust-sequence")(seq)`
Tests if a sequence of numbers is an increasing non-overlapping sequence

* `seq` is an array of floats

**Returns** `true` if the sequence is a robust sequence, `false` otherwise

# Credits
(c) 2014 Mikola Lysenko. MIT License