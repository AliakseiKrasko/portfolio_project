import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/Group 46.svg'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";
import {StyledButton} from "../../../components/StyledButton";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-beetween">
                <StyledSocialIcon>
                    <StyledSpan></StyledSpan>
                    <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
                    <Icon iconId={`dribble`} fill={`#ABB2BF`} width={`52`}/>
                    <Icon iconId={`figma`} fill={`#ABB2BF`} width={`52`}/>
                </StyledSocialIcon>
                <StyledSection>
                    <StyledMainText>Alex <StyledName>Krasko</StyledName> is a <StyledName>frontend developer</StyledName></StyledMainText>
                    <StyledText>He builds responsive websites and interactive web applications where {'\n'}
                        technology meets creativity</StyledText>
                    <StyledButton margin="20px">Contact me !!</StyledButton>
                </StyledSection>
                {/*<Icon iconId='logoSquare' fill={`#E4A2E7`} height={`156`} width={`156`} viewBox={`0 0 156 156`}*/}
                {/*      style={{ position: 'absolute', right: '486px', top: '200px' }} />*/}
                <StyledPhoto src={photo} alt="img"/>
                <StyledButtonWorks>
                    <Icon iconId={`iconColor`}/>
                    Currently working on Portfolio
                </StyledButtonWorks>
                {/*<Icon iconId='square' fill={`#E4A2E7`} height={`84`} width={`84`} viewBox={`0 0 84 84`}*/}
                {/*      style={{ position: 'absolute', right: '191px', top: '360px' }} zIndex={2} />*/}
                <StyledQuote>Programmers, like artists, create something out of nothing, and they do it with elegance</StyledQuote>
                <StyledQuoteMini>- Shawn Pearce, Git developer</StyledQuoteMini>
                <Icon iconId={`qutes`}
                      style={{ position: 'absolute', left: '412px', top: '665px' }} zIndex={2}/>
                <Icon iconId={`qutes`}
                      style={{ position: 'absolute', right: '212px', top: '730px' }} zIndex={2}/>
                <StyledSquare></StyledSquare>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledSection = styled.div` 
    display: flex;
    min-width: 50%;
    flex-direction: column;
    align-items: start;
    //min-width: 512px;
    margin-top: 200px;
    //position: absolute;
    //left: 171px;
    //top: 140px;
`

const StyledMain = styled.div` 
    min-height: 120vh;
    max-width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    background-color: #282C33;
    //padding: 5px 20px;
    font-family: 'Fira Code', monospace;
    //position: relative;
    overflow: hidden;
`

const StyledPhoto = styled.img`
    width: 457px;
    height: 386px;
    object-fit: contain;
    z-index: 1;
    position: absolute;
    right: 171px;
    top:120px;
`
// const StyledButton = styled.button`
//     padding: 10px 20px;
//     border: 1px solid #E4A2E7;
//     background-color: transparent;
//     color: #FFFFFF;
//     margin-top: 20px;
//     font-family: 'Fira Code', monospace;
// `
const StyledButtonWorks = styled.button` 
    padding: 10px 20px;
    border: 1px solid #ABB2BF;
    background-color: transparent;
    color: #FFFFFF;
    width: 402px;
    height: 37px;
    display: flex;
    justify-content: start;
    position: absolute;
    right: 206px;
    top:501px;
    font-family: 'Fira Code', monospace;
`

const StyledMainText = styled.h1` 
    color: #FFFFFF;
`

const StyledText = styled.p`
    color: #ABB2BF;
    white-space: pre-line;
    line-height: 1.6;
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



