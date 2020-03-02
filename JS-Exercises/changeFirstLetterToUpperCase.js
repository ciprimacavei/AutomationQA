//Write a JavaScript function that accepts a string as a parameter and converts 
//the first letter of each word of the string in upper case.

function changeFirstLetter(word) {
    let mainArray = word.split(' ');
    let modifiedArray = [];

    for (let i = 0; i < mainArray.length; i++) {
        modifiedArray.push(mainArray[i].charAt(0).toUpperCase() + mainArray[i].slice(1));
    }
    return modifiedArray.join(' ');
}
console.log(changeFirstLetter('ana are mere'));
