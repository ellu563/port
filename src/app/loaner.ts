export class Loaner {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    calculate: number;
    box: boolean;

    constructor() {
        this.id = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.calculate = 0;
        this.box = false;
    }
}
