interface ISalaryInterface {
  annualSalary: number;
  salary: number;
}

enum SalaryType {
  MONTH = 0,
  ANNUAL = 1,
}

class MySalary implements ISalaryInterface {
  annualSalary: number;
  salary: number;

  constructor(salaryType: SalaryType, value: number) {
    this.annualSalary = salaryType === SalaryType.MONTH ? value * 12 : value;
    this.salary = Math.round(this.annualSalary / 12);
  }
}

const salary = new MySalary(SalaryType.MONTH, 3200000);

console.log(salary);
