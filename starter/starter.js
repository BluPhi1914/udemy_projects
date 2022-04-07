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

//video 19 code challenge

/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀*/

if (markHigherBMI){
    console.log(`Mark's BMI ${markBMI} is higher tan John's BMI ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
}

//video 20 type conversion and coersion
const inputYear = '1991';
console.log(Number(inputYear)); //this will convert the string to a number 
console.log(inputYear + 18); //won't add them because the variable is a string. need a way to convert string to number

console.log(Number('Brad')); //what happens when a string is tried to be turned into a string. Return = NAN (not a number)
console.log(String(23), 23); //this will convert the number to a string.

//Type Coercion 
console.log('I am' + 23 + 'years old'); //type coercion will automatically change the number into a string and concatinate them

//video 21 Falsy and Truthy values.

console.log(Boolean(0)); //false
console.log(Boolean(undefined));//false
console.log(Boolean('Brad'));//true
console.log(Boolean({}));//true

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
} //Else statement comes up because 'money' is a falsy value
//if there is any positive number for 'money' then the condition will be truty and the if statement will be true

let cm;
if(cm) {
    console.log("YAY! cm is defined");
} else {
    console.log('Height is undefined');
} //cm is undefined and undefined is a falsy value, then the if-else statement will return falsy.

//video 22 Equality operators

const age = 18; 
if(age === 18) console.log("You're an adult (strict)" ); //don't need curly braces because it's only a single line

//=== is the 'strict' operator and the == is the 'loose' operator. double equal can change string to number or type coercion.

if(age==18) console.log("You're an adult (loose)");

const favorite = prompt("what is your favorite number?"); //prompt window appears and can input number
console.log(favorite); //input number is created as a string not a number
console.log(typeof favorite); //will prove the result is a string

if(favorite == 23) {
    console.log("Cool! 23 is a great number");
}//will only work if the number is 23 and if it's a string value

if(favorite === 23) {
    console.log("Cool! 23 is an Awesome number"); 
}//nothing will happen because of the strict operator.
else if (favorite === 7 ){
    console.log("7 us also a good number")
}else {
    console.log ("number is not 23 or 7")
}//introductoin of the else-if statement which checks for other conditions

if (favorite !== 23) console.log ("why not 23?"); //introduction of the not operator. '!==' is the strict version '!=' loose version








