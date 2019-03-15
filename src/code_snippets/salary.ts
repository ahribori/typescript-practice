interface ISalaryInterface {
  annualSalary: number;
  salary: number;
}

class Salary implements ISalaryInterface {
  annualSalary: number;
  salary: number;
  annualTax: number;
  tax: number;
  realAnnualSalary: number;
  realSalary: number;

  constructor(myAnnualSalary: number) {
    this.annualSalary = myAnnualSalary;
    this.salary = this.getSalary();
    this.annualTax = this.getTax();
    this.tax = Math.round(this.annualTax / 12);
    this.realAnnualSalary = this.getRealAnnualSalary();
    this.realSalary = Math.round(this.realAnnualSalary / 12);
  }

  getSalary(): number {
    return Math.round(this.annualSalary / 12);
  }

  getTax(): number {
    let tax = 0;
    if (this.annualSalary <= 12000000) {
      tax = Math.round(this.annualSalary * 0.06);
    } else if (this.annualSalary <= 46000000) {
      tax = Math.round(720000 + (this.annualSalary - 12000000) * 0.15);
    } else if (this.annualSalary <= 88000000) {
      tax = Math.round(5820000 + (this.annualSalary - 46000000) * 0.24);
    } else if (this.annualSalary <= 150000000) {
      tax = Math.round(15900000 + (this.annualSalary - 88000000) * 0.35);
    } else if (this.annualSalary <= 500000000) {
      tax = Math.round(37600000 + (this.annualSalary - 15900000) * 0.38);
    } else {
      tax = Math.round(170600000 + (this.annualSalary - 500000000) * 0.4);
    }
    return tax;
  }

  getRealAnnualSalary(): number {
    return this.annualSalary - this.annualTax;
  }
}

const salary = new Salary(24000000);

console.log(salary);
