//UC 4 : Calculating wages for a month assuming 20 working days in a month.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;
let employeeHours = 0;
function getWorkingHours(employeeCheck){
    switch(employeeCheck){
        case IS_PART_TIME:
            console.log("Employee present Part time.");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("Employee present Full time.");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee Absent.");
            return 0;
    }
}
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours += getWorkingHours(employeeCheck);
}
let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Total Hours: " + employeeHours + "\nEmployee Wage: " + employeeWage);