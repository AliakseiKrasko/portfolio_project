import styled from "styled-components";
type FlexWrapperProps = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    margin?: string;
    width?: string;
    paddingBottom?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>` 
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-direction: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || 'normal'};
    margin: ${props => props.margin || 'normal'};
    width: ${props => props.width || 'auto'};
    padding-bottom: ${props => props.paddingBottom || 'normal'};
`