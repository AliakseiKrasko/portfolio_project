import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./headerMenu/Menu";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {GroupSocialIcons} from "../../components/GroupSocialIcons";

export const Header = () => {
    return (
        <StyledHeader>
            <GroupSocialIcons />
            <Container>
                <FlexWrapper justify="space-between" align="center" direction="row">
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    margin: 0 auto;
    background-color: #282C33;
    
    min-height: 61px;
    justify-content: space-between;
    padding-top: 23px;
    font-family: 'Fira Code', monospace;
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;

    
`
