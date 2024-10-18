import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/Image.png'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Menu} from "../../../components/menu/Menu";
import {Icon} from "../../../components/icon/Icon";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <StyledSocialIcon>
                    <StyledSpan></StyledSpan>
                    <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
                    <Icon iconId={`dribble`} fill={`#ABB2BF`} width={`52`}/>
                    <Icon iconId={`figma`} fill={`#ABB2BF`} width={`52`}/>
                </StyledSocialIcon>
                <StyledSection>
                    <StyledMainText>Alex <StyledName>Krasko</StyledName> is a <StyledName>frontend developer</StyledName></StyledMainText>
                    <StyledText>He crafts responsive websites where technologies meet creativity</StyledText>
                    <StyledButton>Contact me !!</StyledButton>
                </StyledSection>
                <Icon iconId='logoSquare' fill={`#C778DD`} height={`156`} width={`156`} viewBox={`0 0 156 156`}
                      style={{ position: 'absolute', right: '486px', top: '200px' }} />
                <StyledPhoto src={photo} alt="img"/>
                <StyledButtonWorks>
                    <Icon iconId={`iconColor`}/>
                    Currently working on Portfolio
                </StyledButtonWorks>
                <Icon iconId='square' fill={`#C778DD`} height={`84`} width={`84`} viewBox={`0 0 84 84`}
                      style={{ position: 'absolute', right: '191px', top: '360px' }} zIndex={2} />
                <StyledQuote>With great power comes great electricity bill</StyledQuote>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledSection = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: start;
    min-width: 512px;
    margin-top: 30px;
    position: absolute;
    left: 171px;
    top: 140px;
`

const StyledMain = styled.div` 
    min-height: 100vh;
    margin: 0 auto;
    background-color: #282C33;
    padding: 5px 20px;

`

const StyledPhoto = styled.img`
    width: 457px;
    height: 386px;
    object-fit: contain;
    z-index: 1;
    position: absolute;
    right: 171px;
    top:115px;
`
const StyledButton = styled.button` 
    padding: 10px 20px;
    border: 1px solid #C778DD;
    background-color: transparent;
    color: #FFFFFF;
    margin-top: 20px;
`
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
`

const StyledMainText = styled.h1` 
    color: #FFFFFF;
`

const StyledText = styled.p`
    color: #ABB2BF;

`

const StyledName = styled.span` 
    color: #C778DD;
`

const StyledSocialIcon = styled.div` 
    display: flex;
    flex-direction: column;
    min-width: 52px;
    align-items: start;
    position: absolute;
    top: 0;
    left: 17px;
`
const StyledSpan = styled.span` 
    width: 1px;
    height: 191px;
    background: #ABB2BF;
    margin-left: 15px;
    margin-bottom: 10px;
`

const StyledQuote = styled.div` 
    min-width: 712px;
    height: 35px;
    padding: 32px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ABB2BF;
    position: absolute;
    bottom: 0;
    left: 400px;
    
`



