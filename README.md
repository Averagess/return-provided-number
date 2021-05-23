# return-provided-number

This package contains a method that returns the number you provide to the method.

## Usage

First install the package by running

`npm install return-provided-number`

Then, you can begin using the package. Small example below:

```javascript
const { returnProvidedNumber } = require("return-provided-number");

// Returns 5
console.log(returnProvidedNumber(5));

// Example invalid usage, raises typeError
console.log(returnProviedNumber(true));
```

## Other

Stars and possible code fixes are gladly welcome by the Github repo.

Since the beginning we have proudly been 100% dependency free!