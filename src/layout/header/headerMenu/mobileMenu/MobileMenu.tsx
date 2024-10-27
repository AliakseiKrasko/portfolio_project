import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";



export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <MobileButton isOpen={true}>
                <span></span>
            </MobileButton>

            <MobileMenuPopap isOpen={true}>
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
                        <p>EN &#x2C5;</p>
                    </li>

                </ul>
            </MobileMenuPopap>

        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
    `

const MobileMenuPopap = styled.div<{isOpen: boolean}>` 
    position: fixed;
    background: ${theme.colors.primaryBg};
    top: 0;
    right: 0;
    bottom: 0;
    left: -9px;
    z-index: 99999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
   
    ul {
        display: block;
        gap: 30px;
        color: ${theme.colors.font};
       
    }

    

    ul > li > p {
        color: ${theme.colors.accent};


        &:hover {
            color: ${theme.colors.accent};
            cursor: pointer;
        }
    }

    ul > li > a {
        color: ${theme.colors.accent};
        //text-decoration: none;

        &:hover {
            color: ${theme.colors.font};
        }
    }

    ul > li > a > span {
        color: ${theme.colors.secondaryBg};
    
    
    }
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
    }
    
`

const MobileButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 30px;
    right: 10px;
    width: 40px; /* Увеличенный размер кнопки для удобства */
    height: 40px;
    z-index: 999999;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        display: block;
        width: 24px; /* Устанавливаем ширину для верхней линии */
        height: 2px;
        background-color: ${theme.colors.font};
        position: relative;
        transition: background-color 0.3s;

        /* Скрываем центральную линию при открытом состоянии */
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before,
        &::after {
            content: "";
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transition: transform 0.3s;
        }

        /* Верхняя линия: полная ширина */
        &::before {
            width: 24px; /* Полная ширина */
            top: -8px; /* Позиционируем выше основной линии */
            left: 0;
            display: none;

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg); /* Поворачиваем для создания крестика */
                top: 0; /* Центрируем по вертикали */
                display: block;
            `}
        }

        /* Нижняя линия: короче и прижата к правому краю */
        &::after {
            width: 15px; /* Более короткая линия */
            top: 8px; /* Позиционируем ниже основной линии */
            right: 0; /* Прижимаем к правому краю */

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg); /* Поворачиваем для создания крестика */
                top: 0; /* Центрируем по вертикали */
                right: 0;
                width: 24px;
            `}
        }
    }
`;

