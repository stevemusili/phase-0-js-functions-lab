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

// Function 3: findMaximum
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

findMaximum(1, 7)
console.log(findMaximum(1,7))

// Function 4: isPalidrome
function isPalindrome(word) {
   return word === word.split('').reverse().join('');
}

console.log(isPalindrome("racecar"))








// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };