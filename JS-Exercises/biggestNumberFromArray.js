// primim un array de numere si trebuie sa returnam care este cel mai mare numar din array
// EX: [1, 7, 9, 10, 101, 3, 77] raspunsul va fi 101

let firstArray = [1, 7, 9, 10, 101, 3, 77];
let maxNumber = firstArray[0];

function findBiggestNumber() {
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] > maxNumber)
            maxNumber = firstArray[i];
    }
    return maxNumber;
}
console.log(findBiggestNumber());