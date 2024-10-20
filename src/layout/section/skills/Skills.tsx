import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle"
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title="skills"/>
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
    
`