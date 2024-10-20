import React from 'react';
import styled from "styled-components";

type TitleProps = {
    title: string;
    color?: string;
    hashColor?: string;
    lineLength?: string;  // Пропс для длины линии
    lineColor?: string;   // Пропс для цвета линии
}

export const SectionTitle = ({ title, color, hashColor, lineLength, lineColor }: TitleProps) => {
    return (
        <TitleWrapper>
            <Hash color={hashColor}>#</Hash>
            <StyledTitle color={color}>{title}</StyledTitle>
            <Line lineLength={lineLength} lineColor={lineColor} />
        </TitleWrapper>
    );
};

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;  /* Центрируем элементы по вертикали */
`;

const Hash = styled.span<{ color?: string }>`
    color: ${props => props.color || '#C778DD'};
    margin-right: 8px;  /* Отступ между # и заголовком */
    font-size: 24px;
    font-weight: bold;
`;

const StyledTitle = styled.span<{ color?: string }>`
    color: ${props => props.color || '#FFFFFF'};
    font-size: 24px;
    font-weight: bold;
`;

const Line = styled.div<{ lineLength?: string; lineColor?: string }>`
    height: 1px;  /* Толщина линии */
    background-color: ${props => props.lineColor || '#C778DD'};  /* Цвет линии */
    margin-left: 16px;  /* Отступ между текстом и линией */
    width: ${props => props.lineLength || '100px'};  /* Длина линии */
`;