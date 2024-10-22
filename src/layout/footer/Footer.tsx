import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Alex Krasko</Name>
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
                <Copyrigth>© Copyright 2022. Made by Elias</Copyrigth>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    
`
const Name = styled.span`
    color: #FFFFFF;
`

const SocialList = styled.ul`
    display: flex;
    padding-top: 30px;
`

const SocialItems = styled.li`

`

const SocialLink = styled.a`

`

const Copyrigth = styled.small` 
    color: #ABB2BF;
    padding-top: 30px;
`