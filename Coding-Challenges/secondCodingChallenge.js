/* John and Mike both play basketball in different teams. In the latest 3 games
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print
the winner to the console. Also include the average score in the output.
3. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 
points. Like before, log the average winner to the console.
*/

let firstScoreForJohn = 89, secondScoreForJohn = 120, thirdScoreForJohn = 103;
let firstScoreForMike = 16, secondScoreForMike = 94, thirdScoreForMike = 123;
let firstScoreForMary = 91, secondScoreForMary = 134, thirdScoreForMary = 105;
let averageScoreJohn = (firstScoreForJohn + secondScoreForJohn + thirdScoreForJohn) / 3;
let averageScoreMike = (firstScoreForMike + secondScoreForMike + thirdScoreForMike) / 3;
let averageScoreMary = (firstScoreForMary + secondScoreForMary + thirdScoreForMary) / 3;

if (averageScoreJohn < averageScoreMike && averageScoreMary < averageScoreMike) {
    console.log("The winner is Mike with an average score of: " + averageScoreMike);
}
else if (averageScoreMike < averageScoreJohn && averageScoreMary < averageScoreJohn) {
    console.log("The winner is John with an average score of: " + averageScoreJohn);
}
else if (averageScoreJohn < averageScoreMary && averageScoreMike < averageScoreMary) {
    console.log("The winner is Mary with an average score of: " + averageScoreMary);
}
else {
    console.log("There is a draw");
}