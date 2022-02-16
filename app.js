"use strict";
console.log("your code goes here");
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log("this is ", this.name, "department");
    }
}
const departmentAccounting = new Department("accounting");
console.log(departmentAccounting);
departmentAccounting.describe();
// const copyDepartmentAccounting = { describe: departmentAccounting.describe };
// copyDepartmentAccounting.describe();
