import { Employee } from "../models/Employee"
import { API, JSONBody } from "./api"

const EmployeesAPI = new API("http://localhost:3001/employees/");

export const getEmployees = async (): Promise<Employee[]> => {
    return EmployeesAPI.get().then(res => res.json());
}

export const postEmployee = async (employee: Employee): Promise<Employee> => {
    return EmployeesAPI.post(new JSONBody(employee)).then(res => res.json());
}

export const patchEmployee = async (employee: Employee): Promise<Employee> => {
    return EmployeesAPI.patch(employee.id, new JSONBody(employee)).then(res => res.json());
}