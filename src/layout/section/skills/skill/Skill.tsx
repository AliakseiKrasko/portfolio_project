import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
   iconId: string;
    title: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillCardTitle>{props.title}</SkillCardTitle>
            <SkillIcon>
                <Icon iconId={props.iconId}  />
                <SkillTitle>TypeScript</SkillTitle>
            </SkillIcon>

            <SkillText>TypeScript</SkillText>
        </StyledSkill>
    );
};

const SkillCardTitle = styled.h3`
    padding: 20px 40px;
    border-bottom: 1px solid #ABB2BF;
    color: #FFFFFF;
`

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 178px;
    border: 1px solid #ABB2BF;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`


const SkillTitle = styled.h4`
    color: #ABB2BF;
    margin-top: 0;
`
const SkillText = styled.p`
    color: #ABB2BF;
`
const SkillIcon = styled.div`
    display: flex;
    align-items: center;
    
`
