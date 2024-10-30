import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Card} from "./project/project";
import project2 from "./../../../../src/assets/images/Rectangle 23.jpg"
import project3 from "./../../../../src/assets/images/Rectangle 24.jpg"
import project from "./../../../../src/assets/images/Rectangle 22.jpg"
import {Container} from "../../../components/Container";


export const Projects = () => {
    return (
        <CardWrapper id={"project"}>
            <Container>
                <StyledProjects>
                    <SectionTitle title="projects" lineLength="300px"/>
                    <Icon iconId="view" width="200px" height="40px"/>
                </StyledProjects>
                <FlexWrapper align="start" justify="start" gap="20px" margin="0 auto" wrap="wrap">
                    <Card img={project} title="HTML SCSS Python Flask" h4="ChertNodes"
                          description="Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting Minecraft servers hosting"/>
                    <Card img={project2} title="snn" h4="ProtectX" description="Discord anti-crash bot"/>
                    <Card img={project3} title="snn" h4="ProtectX" description="Get answers to your kahoot quiz"/>

                </FlexWrapper>
            </Container>

        </CardWrapper>
    );
};

const CardWrapper = styled.section`
    padding: 50px 0;
    margin-top: 100px;
    
`

const StyledProjects = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 50vh;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    //padding-bottom: 48px;
`