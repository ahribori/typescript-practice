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
  earnedIncomeTaxDeduction: number;

  constructor(salaryType: SalaryType, value: number) {
    this.annualSalary = salaryType === SalaryType.MONTH ? value * 12 : value;
    this.salary = Math.round(this.annualSalary / 12);
    this.rangeSalary = this.calculateRangeSalary();
    this.rangeAnnualSalary = this.rangeSalary * 12;
    this.earnedIncomeTaxDeduction = this.calculateEarnedIncomeTaxDeduction();
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

  private calculateEarnedIncomeTaxDeduction() {
    if (this.rangeAnnualSalary <= 5000000) {
      return Math.round(this.rangeAnnualSalary * 0.7);
    } else if (this.rangeAnnualSalary <= 15000000) {
      return Math.round(3500000 + (this.rangeAnnualSalary - 5000000) * 0.4);
    } else if (this.rangeAnnualSalary <= 45000000) {
      return Math.round(7500000 + (this.rangeAnnualSalary - 15000000) * 0.15);
    } else if (this.rangeAnnualSalary <= 100000000) {
      return Math.round(12000000 + (this.rangeAnnualSalary - 45000000) * 0.05);
    } else {
      return Math.round(14750000 + (this.rangeAnnualSalary - 100000000) * 0.02);
    }
  }
}

const salary = new MySalary(SalaryType.ANNUAL, 3000000);

console.log(salary);
