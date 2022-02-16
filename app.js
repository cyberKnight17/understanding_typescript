"use strict";
console.log("your code goes here");
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length + " employees: " + this.employees);
    }
    describe() {
        console.log("Department ID: " + this.id + "\n" + "Department Name: " + this.name);
    }
}
const departmentAccounting = new Department("d1", "accounting");
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
