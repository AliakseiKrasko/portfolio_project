import React from 'react';
import styled from "styled-components";
import {Logo} from "../logo/Logo";
import {Lang} from "../Language/Lang";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href=""><span>#</span>home</a>
                </li>
                <li>
                    <a href=""><span>#</span>works</a>
                </li>
                <li>
                    <a href=""><span>#</span>about-me</a>
                </li>
                <li>
                    <a href=""><span>#</span>contacts</a>
                </li>
                <li>
                    <Lang />
                </li>

            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        margin-right: 30px;
        color: #FFFFFF;
        justify-content: space-between;
        align-items: end;
    }
    

    ul > li > a {
        color: #ABB2BF;
        text-decoration: none;
    }

    ul > li > a > span {
        color: #C778DD;
    ;
    }`