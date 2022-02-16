console.log("your code goes here");

class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo(this: Department) {
    console.log(this.employees.length + " employees: " + this.employees);
  }
  describe(this: Department) {
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
