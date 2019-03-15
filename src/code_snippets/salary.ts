interface ISalaryInterface {
  annualSalary: number;
  salary: number;
}

class Salary implements ISalaryInterface {
  annualSalary: number;
  salary: number;

  constructor(myAnnualSalary: number) {
    this.annualSalary = myAnnualSalary;
    this.salary = this.getSalary();
  }

  private getSalary(): number {
    return Math.round(this.annualSalary / 12);
  }
}

const salary = new Salary(90000000);

console.log(salary);
