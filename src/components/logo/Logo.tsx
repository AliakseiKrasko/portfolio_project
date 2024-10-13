import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo href="">
            <Icon iconId={`code`} fill={`#C778DD`}/><LogoName />
        </StyledLogo>


    );
};



export const LogoName = () => {
    return (
        <StyledLogoName>Krasko</StyledLogoName>
    )
}

const StyledLogo = styled.a ` 
    display: flex;
    text-decoration: none;

`

const StyledLogoName = styled.h2` 
    color: #C778DD;
    
`

