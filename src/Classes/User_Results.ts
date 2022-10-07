export class UserResults {
  name: string;
  country: string;

  constructor(a: string, b: string) {
    this.name = a;
    this.country = b;
  }

  // method
  format() {
    return `${this.name} your country is ${this.country}. Good luck!`;
  }
}
