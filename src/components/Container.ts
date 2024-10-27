import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Container = styled.div`
    //max-width: 100%;
    width: 80%;
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    border: 1px solid red;

    @media ${theme.media.tablet} {
        width: 100%;
        padding: 10px 20px;
        
    }
`