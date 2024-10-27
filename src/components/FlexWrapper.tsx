import styled from "styled-components";
import { theme } from "../styles/Theme";

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
    flex-wrap: ${props => props.wrap || 'nowrap'}; /* Исправлено на flex-wrap */
    gap: ${props => props.gap || '0'}; /* Заменено на корректное значение */
    margin: ${props => props.margin || '0'}; /* Заменено на корректное значение */
    width: ${props => props.width || 'auto'};
    padding-bottom: ${props => props.paddingBottom || '0'}; /* Заменено на корректное значение */

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
