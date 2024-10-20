import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle"
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title="skills" lineLength="239px"/>
            <FlexWrapper justify="centr" wrap="wrap">
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
    margin-left: 173px;
    margin-top: 73px;
    width: 50%;
    min-height: 100vh;
`