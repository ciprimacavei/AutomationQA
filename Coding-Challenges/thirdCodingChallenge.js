/* John and his family went on a holiday and went to 3 different restaurants
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the
bill is between $50 and $200 and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip)
*/

let bills = [124, 48, 268];

function calculatorOfTip() {
    let tips = [];
    let finalCheck = [];
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] < 50) {
            tips[i] = Math.round(bills[i] * 0.2);
        }
        else if (bills[i] >= 50 && bills[i] < 200) {
            tips[i] = Math.round(bills[i] * 0.15);
        }
        else tips[i] = Math.round(bills[i] * 0.1);
    }

    for (i = 0; i < bills.length; i++) {
        finalCheck[i] = bills[i] + tips[i];
    }
    return [tips, finalCheck];
}

console.log(calculatorOfTip(bills));
