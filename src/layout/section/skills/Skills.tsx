import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle"
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>skills</SectionTitle>
            <FlexWrapper justify="flex-end" wrap="wrap">
                <Skill iconId={"github"} title="Languages"/>
                <Skill iconId={"github"} title="Databases"/>
                <Skill iconId={"github"} title="Other"/>
                <Skill iconId={"github"} title="Tools"/>
                <Skill iconId={"github"} title="Frameworks"/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    width: 50%;
    margin-left: auto;
    
`