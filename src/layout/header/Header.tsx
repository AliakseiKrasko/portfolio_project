import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    margin: 0 auto;
    background-color: #282C33;
    max-width: 80%;
    min-height: 61px;
    justify-content: space-between;
    padding-top: 23px;
    font-family: 'Fira Code', monospace;
    //padding-left: 170px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
`
