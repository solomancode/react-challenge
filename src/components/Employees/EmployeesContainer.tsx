import { useEmployees } from "../../hooks/useEmployees";
import { EmployeesDatatable } from "./Datatable/Datatable";
import { EmployeeForm } from "./Form/EmployeeForm";

export function EmployeesContainer() {
    const { employees } = useEmployees();
    return (
        <section>
            👷‍♂️ Employees
            <EmployeeForm />
            <EmployeesDatatable employees={employees.data || []} />
        </section>
    )
}