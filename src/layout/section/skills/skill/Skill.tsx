import React from 'react';
import styled from "styled-components";

type SkillPropsType = {
    title: string;         // Заголовок навыка
    skills: string;        // Строка с навыками
    gridColumn?: number;
    gridRow?: number;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill gridColumn={props.gridColumn} gridRow={props.gridRow}>
            <SkillCardTitle>{props.title}</SkillCardTitle>
            <SkillsText>{props.skills}</SkillsText>
        </StyledSkill>
    );
};

const SkillCardTitle = styled.h3`
    padding: 10px 20px;
    border-bottom: 1px solid #ABB2BF;
    color: #FFFFFF;
    margin: 0;
`;

const StyledSkill = styled.div<{ gridColumn?: number; gridRow?: number }>`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    min-width: 100px;
    height: auto;
    border: 1px solid #ABB2BF;
    overflow: hidden;
    justify-content: start;
    align-items: center;
    grid-column: ${props => props.gridColumn || 'auto'};
    grid-row: ${props => props.gridRow || 'auto'};
`;

const SkillsText = styled.div`
    color: #ABB2BF;
    margin: 0;
    padding: 10px;
    text-align: center;
    justify-items: start;
`;
