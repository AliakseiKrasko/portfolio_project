import styled from "styled-components";

type ButtonPropsType = {
    padding?: string;
    margin?: string;
}
export const StyledButton = styled.button<ButtonPropsType>`
    padding: ${props => props.padding || "10px 20px"};
    margin: ${props => props.margin || "0px"};
    background-color: inherit;
    color: #ABB2BF;
    border: 1px solid #C778DD;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: #C778DD;
        color: black;
    }
`
