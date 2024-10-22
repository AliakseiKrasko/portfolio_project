import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle title="projects" lineLength="239px"/>
                <Icon iconId="view" width="200px"/>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`
    display: flex;
    max-height: 100vh;
    justify-content: space-between;
    align-items: center;
`