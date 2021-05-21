

exports.returnProvidedNumber = function(num) {
    if (typeof num === "number") {
        return num;
    } 
    else throw new TypeError("Provided value was not an number");
};