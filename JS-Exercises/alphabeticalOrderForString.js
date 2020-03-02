//Write a JavaScript function that returns a passed string with letters in alphabetical order

function orderString(word) {

    return word.split('').sort().join('');
}
console.log(orderString('karcb'));
