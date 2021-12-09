import { getRandomId } from "../utils";

export enum EmployeeState {
    ADDED = 1,
    IN_CHECK = 2,
    APPROVED = 3,
    ACTIVE = 4,
    INACTIVE = 5,
};

export class Employee {
    id = getRandomId();
    constructor(
        public name: string,
        public country: string,
        public state: EmployeeState) { }
}