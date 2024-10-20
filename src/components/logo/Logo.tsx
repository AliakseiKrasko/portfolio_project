import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo href="">
            <Icon iconId={`code`} width={`30`} height={`30`} fill={`#C778DD`}/>   <LogoName />
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
    align-items: center;
`

const StyledLogoName = styled.h2` 
    color: #C778DD;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 20px;
    
    
`

