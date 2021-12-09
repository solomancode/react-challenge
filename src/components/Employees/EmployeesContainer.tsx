import { createContext, SetStateAction, useState } from "react";
import { useEmployees } from "../../hooks/useEmployees";
import { EmployeesDatatable } from "./Datatable/Datatable";
import { EmployeeForm } from "./Form/EmployeeForm";

interface ContextState {
    collapseEditState: boolean
    update: React.Dispatch<React.SetStateAction<ContextState>>
}

const DEFAULT_CONTEXT: ContextState = {
    collapseEditState: false,
    update: function (value: SetStateAction<ContextState>): void {
        throw new Error("Function not implemented.");
    }
}

export const EmployeesContext = createContext(DEFAULT_CONTEXT);

export function EmployeesContainer() {
    const { employees } = useEmployees();
    const [context_value, update] = useState(DEFAULT_CONTEXT);
    return (
        <EmployeesContext.Provider value={{ ...context_value, update }}>
            <h1>👷‍♂️ Employees</h1>
            <EmployeeForm />
            <EmployeesDatatable employees={employees.data || []} />
        </EmployeesContext.Provider>
    )
}