import styled from "@emotion/styled";

export const EmployeeFormFieldStyle = styled.label`
    display: flex;
    position: relative;
    flex-direction: column;

    .label {
        top: -0.6em;
        margin-bottom: 4px;
        font-size: .85em;
        font-weight: bold;
    }

    input {
        height: 32px;
        padding: 0;
        border-radius: 3px;
        border: 1px solid #ccc;
    }
`