import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle"
import {Skill} from "./skill/Skill";
import {IconBlock} from "./Icons/IconBlock";
import {StyledGrid} from "../../../components/GridWrapper";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title="skills" lineLength="239px"/>
                <FlexWrapper>
                    <IconBlock/>
                    <StyledGrid>
                        <Skill
                            title="Languages"
                            skills={[
                                {iconId: "javascript" , skillTitle: "JavaScript"},
                                {iconId: "ts", skillTitle: "TypeScript"},
                                {iconId: "bootstrap", skillTitle: "PHP"}
                            ]}
                            gridColumn={1}
                            gridRow={1}
                        />
                        <Skill
                            title="Databases"
                            skills={[
                                {iconId: "bootstrap", skillTitle: "JavaScript"},
                                {iconId: "react-icon", skillTitle: "React"},
                                {iconId: "css-icon", skillTitle: "CSS"}
                            ]}
                            gridColumn={2}
                            gridRow={1}
                        />
                        <Skill
                            title="Other"
                            skills={[
                                {iconId: "html", skillTitle: "HTML"},
                                {iconId: "css", skillTitle: "CSS"},
                                {iconId: "sass", skillTitle: "SASS"}
                            ]}
                            gridColumn={2}
                            gridRow={2}
                        />
                        <Skill
                            title="Tools"
                            skills={[
                                {iconId: "js-icon", skillTitle: "VSCode"},
                                {iconId: "react-icon", skillTitle: "Figma"},
                                {iconId: "css-icon", skillTitle: "Git"}
                            ]}
                            gridColumn={3}
                            gridRow={1}
                        />
                        <Skill
                            title="Frameworks"
                            skills={[
                                {iconId: "js-icon", skillTitle: "JavaScript"},
                                {iconId: "react-icon", skillTitle: "TypeScript"},
                                {iconId: "css-icon", skillTitle: "PHP"}
                            ]}
                            gridColumn={3}
                            gridRow={2}
                        />


                    </StyledGrid>
                </FlexWrapper>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
       
    margin-top: 73px;
    min-height: 90vh;
`

