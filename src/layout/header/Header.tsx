import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import { LogoName } from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            {/*<LogoName />*/}
            <Menu/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    //width: 80%;
    margin: 0 auto;
    background-color: #282C33;
    min-height: 61px;
    justify-content: space-between;
    padding: 20px 60px;
    font-family: 'Fira Code', monospace;
`
