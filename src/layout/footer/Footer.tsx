import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {GoTopBtn} from "../../components/goTopBtn/GoTopBtn";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
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
            </Container>

        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    margin-top: 80px;
    border-top: 1px solid #ABB2BF;
    position: relative;
`
const Name = styled.span`
    color: #FFFFFF;
    margin-left: auto;
    margin-right: 85px;
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
    width: 100%;
`

const StyledText = styled.p` 
    color: #FFFFFF;
`