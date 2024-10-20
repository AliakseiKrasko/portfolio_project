import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle"
import {Skill} from "./skill/Skill";
import {IconBlock} from "./Icons/IconBlock";
import {StyledGrid} from "../../../components/GridWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title="skills" lineLength="239px"/>
            <Wrapper>
                <IconBlock/>
                <StyledGrid>
                    <Skill
                        title="Programming Skills"
                        skills={[
                            {iconId: "js-icon", skillTitle: "JavaScript"},
                            {iconId: "react-icon", skillTitle: "React"},
                            {iconId: "css-icon", skillTitle: "CSS"}
                        ]}
                        gridColumn={1}
                        gridRow={1}
                    />
                    <Skill
                        title="Programming Skills"
                        skills={[
                            {iconId: "js-icon", skillTitle: "JavaScript"},
                            {iconId: "react-icon", skillTitle: "React"},
                            {iconId: "css-icon", skillTitle: "CSS"}
                        ]}
                        gridColumn={2}
                        gridRow={1}
                    />
                    <Skill
                        title="Programming Skills"
                        skills={[
                            {iconId: "js-icon", skillTitle: "JavaScript"},
                            {iconId: "react-icon", skillTitle: "React"},
                            {iconId: "css-icon", skillTitle: "CSS"}
                        ]}
                        gridColumn={2}
                        gridRow={2}
                    />
                    <Skill
                        title="Programming Skills"
                        skills={[
                            {iconId: "js-icon", skillTitle: "JavaScript"},
                            {iconId: "react-icon", skillTitle: "React"},
                            {iconId: "css-icon", skillTitle: "CSS"}
                        ]}
                        gridColumn={3}
                        gridRow={1}
                    />
                    <Skill
                        title="Programming Skills"
                        skills={[
                            {iconId: "js-icon", skillTitle: "JavaScript"},
                            {iconId: "react-icon", skillTitle: "React"},
                            {iconId: "css-icon", skillTitle: "CSS"}
                        ]}
                        gridColumn={3}
                        gridRow={2}
                    />


                </StyledGrid>
            </Wrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    //display: flex;
    margin-left: 173px;
    margin-top: 73px;
    width: 80%;
    min-height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    margin-top: 73px;
`