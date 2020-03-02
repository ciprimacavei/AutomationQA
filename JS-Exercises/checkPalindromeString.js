//Write a JavaScript function that checks whether a passed string is palindrome or not?

let isPalindrome = '';
function checkPalindrome(word) {
    word = word + "";
    isPalindrome = word.split("").reverse().join("");

    let check = (isPalindrome === word) ? 'Cuvantul e palindrom' : 'Cuvantul nu e palindrom';
    return check;
}
console.log(checkPalindrome('carac'));
