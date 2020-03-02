//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

// function findLongestString(word) {
//     let longestString = word[0];
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > longestString.length) { longestString = word[i]; }
//     }
//     return longestString;
// }
// console.log(findLongestString('Long Longer New'))

function find_longest_word(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Long Longer New Longer'));