
let Employee = {

    empname:"Maruthi",
    empid:1023,
    job:"Developer",
    salary:4000,
    bonus:function () 
          {
              return ((this.salary*10)/100)
          }

};

console.log("----Employee Details----");
console.log("Name:-",Employee.empname);
console.log("Id:-",Employee.empid);
console.log("Job:-",Employee.job);
console.log("Salary:-",Employee.salary);
console.log("Bonus:-",Employee.bonus())
