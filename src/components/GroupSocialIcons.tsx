import React from 'react';
import {Icon} from "./icon/Icon";
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const GroupSocialIcons = () => {
    return (
            <StyledSocialIcon>
                <StyledSpan></StyledSpan>
                <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
                <Icon iconId={`dribble`} fill={`#ABB2BF`} width={`52`}/>
                <Icon iconId={`figma`} fill={`#ABB2BF`} width={`52`}/>
            </StyledSocialIcon>

    );
};

const StyledSocialIcon = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 52px;
    align-items: start;
    position: fixed;
    top: 0;
    left: 17px;
    z-index: 9999;

    @media ${theme.media.tablet} {
        display: none;
    }

    &:hover {
        cursor: pointer;

    }
`
const StyledSpan = styled.span`
    width: 1px;
    height: 191px;
    background: #ABB2BF;
    margin-left: 15px;
    margin-bottom: 10px;
`