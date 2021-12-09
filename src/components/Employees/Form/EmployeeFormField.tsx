import { FormEvent, useState } from "react"

interface Props {
    label: string;
    name: string;
    value: string;
}

export function EmployeeFormField({ name, value, label }: Props) {
    const [_value, setValue] = useState(value);
    const onEditValue = (e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    return (
        <label>
            {label}
            <input name={name} value={_value} onInput={onEditValue} type="text" />
        </label>
    )
}
