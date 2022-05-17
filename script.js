// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;
if (x === 23) console.log(23);

console.log();//comes up when I use "cl"

/* We work for a company building a smart home
thermometer. Our most recent task is: 
Govem am array of temps of one day, calculate the temp
amplitude. Keep in mind that sometimes there
might be a sensor error.
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understand the problem

//2) break up into smaller sub-problems

const calcTempAmplitude = function (temps) {
    let max = temps [0];
    let min = temps [0];

    for (let i = 0; i < temps.length; i ++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if(curTemp>max) max=curTemp;
        if(curTemp<min) min = curTemp;
        return max - min; 
    }
    console.log(max, min);

}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const measurekelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius'))
    }

    const kelvin = measurement.value + 273;
    return kelvin;
};
//a ID the bug. B)find the bug. add a console.log at various points to find what part works and what part doesnt
//prompt always returns a string. that is the problem with this code
//c) fix the bug, Solution to change the string from the prompt to a number
console.log(measureKelvin());

//Coding Challenge 1 
/*Given an array of forecasted maximum temps. the termometer
displays astring with the given temps 
example: [17, 21, 23] will print "...17 C in 1 days... 21 C in 2 days... 23 C in 3 days..."

Tasks:
Create a fucntion 'printForecast' which takes in an array 'arr'
and logs a string like the above to the console. Try with both test data sets
2. use the problem solving framework to understand the problem
and break it up into sub-problems!
*/
// understand the problem: 
//- Array transformed to string, seperated by three dots
//-what are the x days? current index +1 
// breakup the problem into sub-problems
//-transform array into string
//-transform each element to string with C
//-string needs to contain day (index +1)
//-add three dots between elements at start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    //make a forloop
    let string = '';
    for(let i = 0; i<arr.length; i++){
        string += `${arr[i]} C in ${i + 1} days ...`;
    }
    console.log('...' string);
}
printForecast(data1);//prints 17C21C23C

