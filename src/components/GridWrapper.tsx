import styled from "styled-components";

type GridWrapperProps = {
    gridTemplateColumns ?: string;
    gridTemplateRows?: string;
    align?: string;
    gap?: number;
    marginLeft?: number;
}

export const StyledGrid = styled.div<GridWrapperProps>`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns  || "1fr 1fr 1fr"};
    grid-template-rows:${props => props.gridTemplateRows || "auto"};
    gap: ${props => props.gap || "10px"};
    align-items: ${props => props.align || "center"};
    
`