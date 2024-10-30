import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#home"><span>#</span>home</a>
                </li>
                <li>
                    <a href="#skills"><span>#</span>skills</a>
                </li>
                <li>
                    <a href="#projects"><span>#</span>project</a>
                </li>
                <li>
                    <a href="#about"><span>#</span>about-me</a>
                </li>
                <li>
                    <a href="#contact"><span>#</span>contacts</a>
                </li>
                <li>
                    <p>EN &#x2C5;</p>
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
        color: ${theme.colors.font};
        justify-content: space-between;
        align-items: end;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }

    ul > li > p {
        margin-left: 20px;
        color: #ABB2BF;
        
        
        &:hover {
            color: #FFFFFF;
            cursor: pointer;
        }
    }
    
    ul > li > a {
        color: #ABB2BF;
        text-decoration: none;
        
        &:hover {
            color: #FFFFFF;
        }
    }

    ul > li > a > span {
        color: #E4A2E7;;

        

    }`

