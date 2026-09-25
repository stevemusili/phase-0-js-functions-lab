function calculateTax(amount) {
    return amount * 0.10;
}

calculateTax(5000)

console.log("Tax value;", calculateTax(5000))


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };