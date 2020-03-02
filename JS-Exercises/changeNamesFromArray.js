// primim ca input un array de nume de fete in limba romana iar rezulataul va fi un nou array in care articulam numele fetelor in cazul in care articularea este posibila
// EX: ['ioana', 'maria', 'carmen'] rezultat ['ioanei', 'mariei', 'carmen'] vom presupune ca doar numele care se termina in "a" pot fi articulate inlocuindu-se "a" cu "ei"

let mainArray = ['ioana', 'maria', 'carmen', 'iuliana'];


function changeNameOfItems() {
    for (let i = 0; i < mainArray.length; i++) {

        const name = mainArray[i];
        if (name[name.length - 1] === 'a') {
            mainArray[i] = name.slice(0, name.length- 1);
            mainArray[i] = mainArray[i].concat('ei');
        }
    }
    return mainArray;
}

console.log(changeNameOfItems());