import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/Group 46.svg'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";
import {StyledButton} from "../../../components/StyledButton";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-beetween">
                    <StyledSocialIcon>
                        <StyledSpan></StyledSpan>
                        <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
                        <Icon iconId={`dribble`} fill={`#ABB2BF`} width={`52`}/>
                        <Icon iconId={`figma`} fill={`#ABB2BF`} width={`52`}/>
                    </StyledSocialIcon>
                    <StyledSection>
                        <StyledMainText>Alex <StyledName>Krasko</StyledName> is a <StyledName>frontend
                            developer</StyledName></StyledMainText>
                        <StyledText>He builds responsive websites and interactive web applications where {'\n'}
                            technology meets creativity</StyledText>
                        <StyledButton marginTop="24px">Contact me !!</StyledButton>
                    </StyledSection>
                    <WrapperPhoto>
                        <StyledPhoto src={photo} alt="img"/>
                        <StyledButtonWorks>
                            <Icon iconId={`iconColor`}/>
                            <p>Currently working on Portfolio</p>
                        </StyledButtonWorks>
                    </WrapperPhoto>


                    <StyledQuote>Programmers, like artists, create something out of nothing, and they do it with
                        elegance</StyledQuote>
                    <StyledQuoteMini>- Shawn Pearce, Git developer</StyledQuoteMini>
                    <Icon iconId={`qutes`}
                          style={{position: 'absolute', left: '412px', top: '665px'}} zIndex={2}/>
                    <Icon iconId={`qutes`}
                          style={{position: 'absolute', right: '212px', top: '730px'}} zIndex={2}/>
                    <StyledSquare></StyledSquare>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};


const StyledMain = styled.div`
    height: 120vh;
    margin: 60px auto;
    justify-content: space-between;
    background-color: ${theme.colors.primaryBg};
    overflow: hidden;
    position: relative;
`

const StyledSection = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: start;
    
`

const WrapperPhoto = styled.div` 
    display: flex;
    flex-direction: column;
    
    width: 50%;
    position: relative;
    margin: 30px 0;
`

const StyledPhoto = styled.img`
    padding-top: 30px;
    padding-right: 0;
    width: 457px;
    height: 386px;
    object-fit: contain;
    
`

const StyledButtonWorks = styled.button`
    display: flex;
    padding: 10px ;
    border: 1px solid #ABB2BF;
    background-color: transparent;
    color: ${theme.colors.font};
    width: 402px;
    height: 37px;
    
`

const StyledMainText = styled.h1`
    color: #FFFFFF;
`

const StyledText = styled.p`
    color: #ABB2BF;
    white-space: pre-line;
    line-height: 1.6;
    margin-top: 32px;
`

const StyledName = styled.span`
    color: #E4A2E7;
`

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

const StyledQuote = styled.div`
    display: flex;
    min-width: 712px;
    height: 35px;
    padding: 32px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ABB2BF;
    position: absolute;
    top: 620px;
    left: 400px;
    color: #FFFFFF;
    font-size: 16px;
    margin: 60px auto;
`

const StyledQuoteMini = styled.div`
    display: flex;
    min-width: 163px;
    height: 30px;
    padding: 32px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ABB2BF;
    position: absolute;
    top: 745px;
    left: 966px;
    color: #FFFFFF;
    font-size: 16px;
`

const StyledSquare = styled.span`
    min-width: 90px;
    height: 90px;
    border: 1px solid #ABB2BF;
    position: absolute;
    right: -15px;
    top: 710px;

`



