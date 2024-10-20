import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const IconBlock = () => {
    return (
        <SkillIcon>
            <Icon iconId={`code`} />
            <Icon iconId={`square`} />
        </SkillIcon>
    );
};


const SkillIcon = styled.div` 
    display: flex;
`