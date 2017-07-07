export class User {
    name: string;
    gender: Gender;
    email: string;
    password: string;
}

enum Gender {
    MALE, FEMALE, UNSPECIFIED
}