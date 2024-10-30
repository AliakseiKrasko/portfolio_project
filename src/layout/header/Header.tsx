import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./headerMenu/Menu";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {GroupSocialIcons} from "../../components/GroupSocialIcons";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <GroupSocialIcons/>
                <HeaderWrapper>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </HeaderWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    
    //background-color: #282C33;
    
    //min-height: 61px;
    //justify-content: center;
    padding-top: 10px;
    //font-family: 'Fira Code', monospace;
    //width: 100%;
    //position: fixed;
    //left: 0px;
    //right: 0;
    //top: 0;
    //z-index: 999;

    @media ${theme.media.tablet} {
        width: 100%;
        
        
    }


`
const HeaderWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`