const { returnProvidedNumber } = require("./main.js")

// logs 5 to console
console.log(returnProvidedNumber(5))

// logs 2.5 to console
console.log(returnProvidedNumber(2.5))

// Example of invalid usage, raises typeError
console.log(returnProvidedNumber(true))