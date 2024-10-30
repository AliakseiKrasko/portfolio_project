import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import { Link } from "react-scroll";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link activeClass="active" to="home" spy={true} smooth={true} hashSpy={true} offset={-40}>
                        <span>#</span>home
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} hashSpy={true} offset={-40}>
                        <span>#</span>skills
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="project" spy={true} smooth={true} hashSpy={true} offset={-40}>
                        <span>#</span>project
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} hashSpy={true} offset={-30}>
                        <span>#</span>about-me
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="contacts" spy={true} smooth={true} hashSpy={true} offset={-60}>
                        <span>#</span>contacts
                    </Link>
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

    ul > li {
        margin-left: 20px;
        color: #ABB2BF;

        &:hover {
            color: #FFFFFF;
            font-weight: bold;
            cursor: pointer;
        }
    }

    ul > li > .active, ul > li > a.active { 
        color: #FFFFFF;
        font-weight: bold;
        background-color: #333; /* Яркий фон для проверки */
    }

    ul > li > a {
        color: #ABB2BF;
        text-decoration: none;

        &:hover {
            color: #FFFFFF;
        }
    }

    ul > li > a > span {
        color: #E4A2E7;
    }
`;
