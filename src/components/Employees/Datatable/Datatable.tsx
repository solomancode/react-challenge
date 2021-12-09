import { Employee } from "../../../models/Employee";
import { EmployeeRow } from "./Row";

interface Props {
    employees: Employee[];
}

export function EmployeesDatatable({ employees }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => <EmployeeRow key={employee.id} employee={employee} />)}
            </tbody>
        </table>
    )
}