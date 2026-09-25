// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

calculateTax(5000)

console.log(calculateTax(5000))

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
convertToUpperCase("steve")
console.log(convertToUpperCase("steve"))



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };