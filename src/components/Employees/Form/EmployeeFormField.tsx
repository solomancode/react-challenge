import { FormEvent, useState } from "react"
import { EmployeeFormFieldStyle } from "./EmployeeFormFieldStyle";

interface Props {
    label: string;
    name: string;
    value: string;
}

export function EmployeeFormField({ name, value, label }: Props) {
    const [_value, setValue] = useState(value);
    const onEditValue = (e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    return (
        <EmployeeFormFieldStyle>
            <span className="label">{label}</span>
            <input name={name} value={_value} onInput={onEditValue} type="text" />
        </EmployeeFormFieldStyle>
    )
}
