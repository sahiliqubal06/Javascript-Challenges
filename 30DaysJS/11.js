// function to check if a string is a palindrome

function checkPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (str === rev) {
    return `${str} is a palindrome`;
  } else {
    return `${str} is not a palindrome`;
  }
}

console.log(checkPalindrome("sahil"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("121321"));

// function to check if a string is a palindrome
function isPalindrome(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return `${str} is not a palindrome`;
    }
  }
  return `${str} is a palindrome`;
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("1213121"));