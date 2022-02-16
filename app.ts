console.log("your code goes here");

class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("this is ", this.name, "department");
  }
}

const departmentAccounting = new Department("accounting");

console.log(departmentAccounting);

departmentAccounting.describe();

// const copyDepartmentAccounting = { describe: departmentAccounting.describe };

// copyDepartmentAccounting.describe();
