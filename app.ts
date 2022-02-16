console.log("your code goes here");

class Department {
  private employees: string[] = [];

  constructor(private id: string, private name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo(this: Department) {
    console.log(this.employees.length + " employees: " + this.employees);
  }
  describe(this: Department) {
    console.log(
      "Department ID: " + this.id + "\n" + "Department Name: " + this.name
    );
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
