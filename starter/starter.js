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

//Boolean logic. 'And', 'Or', and 'Not' operators
//video 24 Logic operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //combines two variables using && operators
console.log(hasDriversLicense || hasGoodVision); //uses the OR operator to check if one is true
console.log(!hasDriversLicense); //NOT operator changes true to false

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log("Sarah is able to drive")
} else {
    console.log ("someone else should drive")
} //will come back true because both are true statements. If one was false, then it would return the else statement

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired); 

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log ("Sarah can drive")
} else {
    console.log ("Sarah should not drive")
} //would return else statement because Sarah is tired.. if her statement was put in a false at the beginnning then it would return her as true.

//CODE CHALLENGE 3 video 25
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score) 
3. Bonus1:Include a requirement for a minimum score of 100 .With this rule , a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀 */

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

//challenge 1
const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
//Challenge 2
if (dolphinAverage > koalaAverage) {
    console.log("Dolphins win the cup!")
} else if (dolphinAverage === koalaAverage) {
    console.log("Both teams are tied")
} else {
    console.log('Koalas win the cup')
}

//bonus challenge 1 including a requirement to have minimum score of 100 and more than the other team 
const dolphinScoreBonus1 = 97;
const dolphinScoreBonus2 = 112;
const dolphinScoreBonus3 = 101;

const koalaScoreBonus1 = 109;
const koalaScoreBonus2 = 95;
const koalaScoreBonus3 = 123;

const dolphinAverageBonus = (dolphinScoreBonus1 + dolphinScoreBonus2 + dolphinScoreBonus3) / 3;
const koalaAverageBonus = (koalaScoreBonus1 + koalaScoreBonus2 + koalaScoreBonus3) / 3;

if (dolphinAverageBonus >= koalaAverageBonus && dolphinAverageBonus >= 100) {
    console.log("Dolphins win the cup")
} else if (dolphinAverageBonus <= koalaAverageBonus && koalaAverageBonus >= 100) {
    console.log("Koals win the cup")
} else {
    console.log("Neither team wins the cup")
}

//bonus challenge 2 include a requirement for both teams to have >100 and be equal for it to be a draw. Or neither teamwins
//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinScoreBonus4 = 97;
const dolphinScoreBonus5 = 112;
const dolphinScoreBonus6 = 101;

const koalaScoreBonus4 = 109;
const koalaScoreBonus5 = 95;
const koalaScoreBonus6 = 123;

const dolphinAverageBonus1 = (dolphinScoreBonus4 + dolphinScoreBonus5 + dolphinScoreBonus6) / 3;
const koalaAverageBonus1 = (koalaScoreBonus4 + koalaScoreBonus5 + koalaScoreBonus6) / 3;

if (dolphinAverageBonus1 >= koalaAverageBonus1 && dolphinAverageBonus1 >= 100 && koalaAverageBonus1 >=100) {
    console.log("Dolphins win the cup")
} else if (dolphinAverageBonus1 <= koalaAverageBonus1 && dolphinAverageBonus1 >= 100 && koalaAverageBonus1 >= 100) {
    console.log("Koals win the cup")
} else if(koalaAverageBonus1 === dolphinAverageBonus1 && dolphinAverageBonus1 >= 100 && koalaAverageBonus1 >= 100) {
    console.log("Both teams tied")
} else {
    console.log("Neither team wins the cup")











