import styled from "@emotion/styled";

export const EditEmployeeStateStyle = styled.form`
    display: flex;
    border: 1px solid #ccc;
    
    .state-select {
        height: 32px;
        border: none;
        padding: 0 20px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        min-width: 10em;

        &:before {
            content: '';
            width: 32px;
            height: 32px;
            transform: rotate(45deg);
            border-radius: 4px;
            box-shadow: 2px 0 20px #555;
            border: 1px solid #ccc;
            display: inline-block;
            position: absolute;
            left: -23px;
            top: 0px;
        }

        &.selected {
            color: #f6f3ff;
            font-weight: bold;
            background-color: #3c11c7;
            border-radius: 2px;
            box-shadow: 1px 1px 1px #555;
            &:before {
                display: none;
            }
        }

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }

        &:first-of-type:before {
            display: none;
        }
    }

    .selected + .state-select:before {
        background-color: #3c11c7;
        border: none;
    }
`