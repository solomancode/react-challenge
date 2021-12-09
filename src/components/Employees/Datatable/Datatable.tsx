import { useContext } from "react";
import { Employee } from "../../../models/Employee";
import { EmployeesContext } from "../EmployeesContainer";
import { DatatableStyle } from "./DatatableStyle";
import { EmployeeRow } from "./Row";

interface Props {
    employees: Employee[];
}

export function EmployeesDatatable({ employees }: Props) {
    const context = useContext(EmployeesContext);
    const toggleCollapsed = () => {
        context.update(c => ({
            ...c,
            collapseEditState: !c.collapseEditState
        }));
    }
    return (
        <DatatableStyle className={context.collapseEditState ? 'collapsed' : ''}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>State <button onClick={toggleCollapsed} type="button">{context.collapseEditState ? '↔' : '←'}</button></th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => <EmployeeRow key={employee.id} employee={employee} />)}
            </tbody>
        </DatatableStyle>
    )
}