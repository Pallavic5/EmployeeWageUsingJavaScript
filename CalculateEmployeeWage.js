//UC 2 Ability to calculate daily employee wage based on part time or full time work.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let employeeHours = 0;

/*The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive) it always return a number always less than 1
Math.random() used with Math.floor() can be used to return random integers. */

employeeCheck = Math.floor(Math.random() * 10) % 3;  
switch(employeeCheck){
    case IS_PART_TIME: 
            employeeHours = PART_TIME_HOURS;
            console.log("Employee present Part time.")
            break;
    case IS_FULL_TIME: 
            employeeHours = FULL_TIME_HOURS;
            console.log("Employee present Full time.")
            break;
    default:
            employeeHours = 0;
            console.log("Employee Absent.")
}
let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Employee Wage: " + employeeWage);