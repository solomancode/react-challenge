import { FormEvent } from "react";
import { useEmployees } from "../../../hooks/useEmployees";
import { Employee, EmployeeState } from "../../../models/Employee";
import { EmployeeFormField } from "./EmployeeFormField";

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
        <form onSubmit={onCreate}>
            <EmployeeFormField name="name" value="" label="Name" />
            <EmployeeFormField name="country" value="" label="Country" />
            <button>Create</button>
        </form>
    )
}