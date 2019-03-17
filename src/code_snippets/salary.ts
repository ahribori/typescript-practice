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
  rangeSalary: number;
  rangeAnnualSalary: number;

  constructor(salaryType: SalaryType, value: number) {
    this.annualSalary = salaryType === SalaryType.MONTH ? value * 12 : value;
    this.salary = Math.round(this.annualSalary / 12);
    this.rangeSalary = this.calculateRangeSalary();
    this.rangeAnnualSalary = this.rangeSalary * 12;
  }

  private calculateRangeSalary(): number {
    if (this.salary < 1500000) {
      return this.salary - (this.salary % 5000) + 2500;
    } else if (this.salary < 3000000) {
      return this.salary - (this.salary % 10000) + 5000;
    } else if (this.salary < 10000000) {
      return this.salary - (this.salary % 20000) + 10000;
    } else {
      return this.salary;
    }
  }
}

const salary = new MySalary(SalaryType.ANNUAL, 83000000);

console.log(salary);
