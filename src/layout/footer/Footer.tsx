import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <StyledDiv>
                    <Logo/>
                    <StyledTextLink>elias@elias-dev.ml</StyledTextLink>
                    <Name>Media</Name>
                </StyledDiv>
                <StyledDiv>
                    <StyledText>Web designer and front-end developer</StyledText>
                    <SocialList>
                        <SocialItems>
                            <SocialLink>
                                <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
                            </SocialLink>
                        </SocialItems>
                        <SocialItems>
                            <SocialLink>
                                <Icon iconId={`dribble`} fill={`#ABB2BF`} width={`52`}/>
                            </SocialLink>
                        </SocialItems>
                        <SocialItems>
                            <SocialLink>
                                <Icon iconId={`figma`} fill={`#ABB2BF`} width={`52`}/>
                            </SocialLink>
                        </SocialItems>
                    </SocialList>
                </StyledDiv>
                <Copyrigth>© Copyright 2022. Made by Elias</Copyrigth>
            </FlexWrapper>
        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    margin-top: 48px;
`
const Name = styled.span`
    color: #FFFFFF;
    margin-left: auto;
    padding-right: 20px;
`

const SocialList = styled.ul`
    display: flex;
    padding-top: 10px;
    margin-left: auto;
`

const SocialItems = styled.li`

`

const SocialLink = styled.a`
    
`

const Copyrigth = styled.small`
    color: #ABB2BF;
    padding-top: 30px;
`

const StyledTextLink = styled.a`
    color: #ABB2BF;
    margin-left: 24px;
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`

const StyledText = styled.p` 
    color: #FFFFFF;
`