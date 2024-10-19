import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <SkillCardTitle>Languages</SkillCardTitle>
            <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
            <SkillTitle>TypeScript</SkillTitle>
            <SkillText>TypeScript</SkillText>
        </StyledSkill>
    );
};

const SkillCardTitle = styled.h3` 
    padding: 20px 40px;
`

const StyledSkill = styled.p` 
    
`


const SkillTitle = styled.h3` 
    cdolor: 
`
const SkillText = styled.div` 
    
`

