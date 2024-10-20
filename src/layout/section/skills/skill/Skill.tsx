import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillIconType = {
    iconId: string;
    skillTitle: string;

}

type SkillPropsType = {
    title: string;
    skills: SkillIconType[]; // Массив иконок с текстом
    gridColumn?: number;
    gridRow?: number;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill gridColumn={props.gridColumn} gridRow={props.gridRow}>
            <SkillCardTitle>{props.title}</SkillCardTitle>
            {props.skills.map((skill, index) => (
                <SkillIcon key={index}>
                    <Icon iconId={skill.iconId} width="20px" height="20px" viewBox="0 0 200 200" />
                    <SkillTitle>{skill.skillTitle}</SkillTitle>
                </SkillIcon>
            ))}
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
    min-width: 178px;
    border: 1px solid #ABB2BF;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    grid-column: ${props => props.gridColumn || 'auto'};
    grid-row: ${props => props.gridRow || 'auto'};
`;

const SkillTitle = styled.h4`
    color: #ABB2BF;
    margin: 0;
    padding: 10px;
`;

const SkillIcon = styled.div`
    display: flex;
    align-items: center;
    
`;

