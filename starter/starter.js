let country = 'South Korea';
let continent = 'Asia';
let population = '25 Million people';

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height invariables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK*/

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markMass1 = 95;
const johnMass1 = 85;
const markHeight1 = 1.88;
const johnHeight1 = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI2 = johnMass1 / johnHeight1 ** 2;

console.log(markBMI, johnBMI);
const markHigherBMI = markBMI >= johnBMI;

console.log(markBMI1, johnBMI2);
const markHigherBMI1 = markBMI1>= johnBMI2;

//video 17 if-else statements
const age = 19;
const isOldEnough = age >=18;

if(isOldEnough) {
    console.log('Sarah can start her driving license');
}
 else{
     const yearsLeft = 18- age;
     console.log('Sarah cannot start her driving license');
 } //known as an if-else control structure

const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
    console.log(`Your birth year is the 20th century`);
} else {
    century = 21;
    console.log( `Your birth year is the 21st century`);
}

console.log(century);
