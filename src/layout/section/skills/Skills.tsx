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
            <FlexWrapper justify="space-between">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    width: 80%;
    margin: 0 auto;
`