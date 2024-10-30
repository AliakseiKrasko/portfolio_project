import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import group from "../../../assets/images/Group 36.svg";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title="skills" lineLength="239px"/>
                <FlexWrapper justify="space-between" gap="20px" margin="0 auto">
                    <IconBlock>
                        <StyledIcon src={group} alt="group"/>
                    </IconBlock>
                    <WrapperGrid>
                        <Skill
                            title="Languages"
                            skills="JavaScript, TypeScript, PHP"
                            gridColumn={1}
                            gridRow={1}
                        />
                        <Skill
                            title="Databases"
                            skills="MySQL, MongoDB, PostgreSQL"
                            gridColumn={2}
                            gridRow={1}
                        />

                        <Skill
                            title="Languages"
                            skills="JavaScript, TypeScript, PHP"
                            gridColumn={2}
                            gridRow={2}
                        />
                        <Skill
                            title="Databases"
                            skills="MySQL, MongoDB, PostgreSQL"
                            gridColumn={3}
                            gridRow={1}
                        />
                        <Skill
                            title="Languages"
                            skills="JavaScript, TypeScript, PHP"
                            gridColumn={3}
                            gridRow={2}
                        />

                    </WrapperGrid>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    margin-top: 73px;
    height: auto;
`;

const IconBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: end;
    margin: 40px 0;

    @media ${theme.media.tablet} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;

const StyledIcon = styled.img`
    width: 100%;
    height: auto;
    align-self: end;
    background-size: cover;
    object-fit: cover;
`;

const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
    width: 60%;
    align-items: start;
    justify-content: end;
    margin-top: 60px;
    row-gap: 5px;
    column-gap: 15px;

    @media ${theme.media.tablet} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;
