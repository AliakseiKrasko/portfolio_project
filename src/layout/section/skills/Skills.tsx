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
        <StyledSkills id={"skills"}>
            <Container>
                <SectionTitle title="skills" lineLength="239px"/>
                <FlexWrapper justify="space-between" gap="20px" margin="0 auto">
                    <IconBlock>
                        <StyledIcon src={group} alt="group"/>
                    </IconBlock>
                    <WrapperGrid>
                        <Skill
                            title="Languages"
                            skills="TypeScript JavaScript Python"
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
                            title="Tools"
                            skills="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
                            gridColumn={2}
                            gridRow={2}
                        />
                        <Skill
                            title="Other"
                            skills="HTML CSS EJS SCSS REST Jinja"
                            gridColumn={3}
                            gridRow={1}
                        />
                        <Skill
                            title="Frameworks"
                            skills="React Vue Lua Disnake Discord.js Flask Express.js"
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
    //margin-top: 80px;
    height: auto;
    padding-top: 50px;
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
    //grid-template-rows: auto 1fr;
    gap: 15px;
    width: 60%;
    align-items: start;
    justify-content: end;
    margin-top: 60px;
    
       

    @media ${theme.media.tablet} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;
