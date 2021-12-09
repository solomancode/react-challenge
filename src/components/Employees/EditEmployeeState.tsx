import { useEmployees } from "../../hooks/useEmployees";
import { Employee, EmployeeState } from "../../models/Employee";
import { Loading } from "../Loading";

interface Props {
    employee: Employee
}

interface EditStateButtonProps {
    value: number;
    isSelected: boolean;
    editState: (state: EmployeeState) => void;
}

function EditStateButton({ value, isSelected, editState }: EditStateButtonProps) {
    return (
        <>
            <button type='button' onClick={() => editState(value)}>
                {isSelected ? '⭐' : ''} {EmployeeState[value]}
            </button>
        </>
    )
}

export function EditEmployeeState({ employee }: Props) {
    const { employees, patchEmployee } = useEmployees();
    const isSelected = (value: number) => value === employee.state;
    const onEditState = (state: EmployeeState) => {
        if (state) patchEmployee({ ...employee, state });
    }
    return employees.isLoading ? <Loading /> : (
        <form >
            {Object.keys(EmployeeState).map(key => {
                const value = parseInt(key);
                return (
                    !isNaN(value)
                        ? <EditStateButton key={key} value={value} isSelected={isSelected(value)} editState={onEditState} />
                        : null
                )
            })}
        </form>
    )
}