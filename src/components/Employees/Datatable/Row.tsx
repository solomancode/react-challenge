import { Employee } from "../../../models/Employee";
import { EditEmployeeState } from "../EditEmployeeState";

interface Props {
    employee: Employee
}

export function EmployeeRow({ employee }: Props) {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.country}</td>
            <td><EditEmployeeState employee={employee} /></td>
        </tr>
    )
}