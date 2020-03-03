/* Mark and John are trying to compare their BMI, which is calculated 
using the formula BMI = mass/ height^2
1. For each of them, create an object with properties for their full name,
mass and height
2. Calculate both their BMIs in a method. Save the BMI to the object and also
return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full
name and the respective BMI. Don't forget they might have the same BMI
*/

let Mark = {
    fullName: 'Mark Johnson',
    massMark: 80,
    heightMark: 170,
    BMIMark: function () {
        return this.massMark / (this.heightMark * this.heightMark);
    }
}

let John = {
    fullName: 'John Smith',
    massJohn: 80,
    heightJohn: 160,
    BMIJohn: function () {
        return this.massJohn / (this.heightJohn * this.heightJohn)
    }
}

if (Mark.BMIMark() < John.BMIJohn()) {
    console.log(John.fullName + " has the higher BMI with the value of: " + John.BMIJohn());
} else if (John.BMIJohn() < Mark.BMIMark()) {
    console.log(Mark.fullName + " has the higher BMI with the value of: " + Mark.BMIMark());
} else { console.log("They have the same BMI"); }
