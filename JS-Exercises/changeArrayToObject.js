/* Avem un array de numere [1, 2, 4, 2, 5, 1, 4, 2] functia noastra trebuie a primeasca 
ca input un astfel de array si va genera un obiect care va avea ca si key fiecare numar 
individual din array si ca valoare frecventa(numarul de aparitii al numarului in array) 
{
  1: 2 //1 apare de 2 ori in array
  2: 3 //2 apare de 3 ori in array
  4: 2 //4 apare de 2 ori in array
  5: 1 //5 apare o singura data in array
}*/

function changeArrayToObject(){
const array = [1, 2, 4, 2, 5, 1, 4, 2];
//modificam proprietatea unui obiect, nu obiectul in sine
const result = {};
for (let i = 0; i < array.length; i++) {
    if (result[array[i]] === undefined) {
        result[array[i]] = 1;
    }
    else {
        result[array[i]]++;
    }
}
return result;}

console.log(changeArrayToObject());
