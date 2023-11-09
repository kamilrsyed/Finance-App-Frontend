export class CreateAccount {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;

    constructor(data: any) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.userName = data.userName;
        this.password = data.password;
    }
}
