export class UserResults {
    constructor(a, b) {
        this.name = a;
        this.country = b;
    }
    format() {
        return `${this.name} your country is ${this.country}. Good luck!`;
    }
}
