import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Card} from "./project/project";
import project2 from "./../../../../src/assets/images/Rectangle 23.jpg"
import project3 from "./../../../../src/assets/images/Rectangle 24.jpg"
import project from "./../../../../src/assets/images/Rectangle 22.jpg"


export const Projects = () => {
    return (
        <CardWrapper>
            <StyledProjects>
                <SectionTitle title="projects" lineLength="300px"/>
                <Icon iconId="view" width="200px" height="40px"/>
            </StyledProjects>
            <FlexWrapper align="center" justify="space-between" gap="20px" margin="0 auto" wrap="wrap" width="80%" paddingBottom="48px">
                <Card img={project} title="HTML SCSS Python Flask" h4="ChertNodes" description="Minecraft servers hosting "/>
                <Card img={project2} title="snn" h4="ProtectX" description="Discord anti-crash bot"/>
                <Card img={project3} title="snn" h4="ProtectX" description="Get answers to your kahoot quiz"/>
                <Card img={project2} title="snn" h4="ProtectX" description="Get answers to your kahoot quiz"/>
            </FlexWrapper>
        </CardWrapper>
    );
};

const CardWrapper = styled.section` 
    padding: 20px 0;
`

const StyledProjects = styled.div`
    display: flex;
    max-width: 80%;
    max-height: 100vh;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 48px;
`