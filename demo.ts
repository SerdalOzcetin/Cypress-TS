interface Contact extends Address {
    id: number;
    name: ContactName; // it means "string" or "number"
    birthDate?: Date; // ? means that it is optional.
    status: ContactStatus02
}

type ContactName = string | number;

type ContactStatus02 =    "active" | "inactive" | "new"

enum ContactStatus01 {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact = {
    //birthDate: new Date("11-11-2023"),
    id: 123,
    name: "serdar",
    line1: "string",
    line2: "string",
    province: "string",
    region: "string",
    postalCode: "string",
    //status: ContactStatus01.Active
    status: "inactive",
}

type ContactFields = keyof Contact
const field: ContactFields = "line1";

/*-------------------------------------*/

function getValue<T, U extends keyof T>(source: T, propertyName: U){

    return source[propertyName]

}

const value = getValue({min:1, max:2},"min") // incredible !!!!