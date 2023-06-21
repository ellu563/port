export class Buyer {
    firstName: string;
    lastName: string;
    email: string;

    result: number;
    studentresult: number;
    seniorresult: number;

    finalPrice: number;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";

        this.result = 0;
        this.studentresult = 0;
        this.seniorresult = 0;

        this.finalPrice = 0;
    }
}
