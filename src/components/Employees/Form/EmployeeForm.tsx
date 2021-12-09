import { FormEvent } from "react";
import { useEmployees } from "../../../hooks/useEmployees";
import { Employee, EmployeeState } from "../../../models/Employee";
import { EmployeeFormField } from "./EmployeeFormField";
import { EmployeeFormStyle } from "./EmployeeFormStyle";

export function EmployeeForm() {
    const { postEmployee } = useEmployees();
    const onCreate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = fd.get('name'), country = fd.get('country')
        if (name && country) {
            const created = new Employee(name as string, country as string, EmployeeState.ADDED);
            postEmployee(created);
            console.log(created);
        } else {
            alert("Invalid Form Data:\n\n" + JSON.stringify({
                name,
                country
            }, null, 2));
        }
    };
    return (
        <EmployeeFormStyle onSubmit={onCreate}>
            <EmployeeFormField name="name" value="" label="Name" />
            <EmployeeFormField name="country" value="" label="Country" />
            <button className="submit">Create</button>
        </EmployeeFormStyle>
    )
}