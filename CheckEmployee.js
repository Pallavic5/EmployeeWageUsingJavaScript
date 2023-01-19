//UC 1 : Check Employee Presence
/*Variables defined with const cannot be Redeclared, Reassigned and have block scope
  Variables defined with let cannot be Redeclared, must be declared before use and have block scope.*/
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee is Absent");
}else
{
    console.log("Employee is Present");
}