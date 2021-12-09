import styled from "@emotion/styled";

export const DatatableStyle = styled.table`
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;

    &.collapsed .not-selected {
        display: none;
    }

    th {
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
    }

    tbody tr {
        height: 36px;
        &:nth-of-type(even) {
            background-color: #eee;
        }

        td {
            padding: 0 .5em;
        }
    }

    .no-highlight {
        background-color: #fff;
    }
`