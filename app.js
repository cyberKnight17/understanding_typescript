"use strict";
console.log("your code goes here");
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length + " employees: " + this.employees);
    }
    describe() {
        console.log("This is " + this.name + "department");
    }
}
const departmentAccounting = new Department("accounting");
console.log(departmentAccounting);
departmentAccounting.describe();
// const copyDepartmentAccounting = { describe: departmentAccounting.describe };
// copyDepartmentAccounting.describe();
departmentAccounting.addEmployee("Jake");
departmentAccounting.addEmployee("John");
departmentAccounting.addEmployee("Joseph");
departmentAccounting.printEmployeeInfo();
// departmentAccounting.employees[0] = "Lawrence";
// departmentAccounting.printEmployeeInfo();
