import { Employee, EmployeeState } from "./models/Employee";

const randomString = () => (Math.random() + 1).toString(36).substring(7);

export const getRandomId = () => (Math.random() * 10000) << 1;

export function getRandomEmployee() {
    const _random = new Employee("_random " + randomString(), "_country " + randomString(), EmployeeState.ADDED);
    return _random;
}