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
                <StyledSocialIcon>
                    <StyledSpan></StyledSpan>
                    <Icon iconId={`github`} fill={`#ABB2BF`} width={`52`}/>
                    <Icon iconId={`dribble`} fill={`#ABB2BF`} width={`52`}/>
                    <Icon iconId={`figma`} fill={`#ABB2BF`} width={`52`}/>
                </StyledSocialIcon>
                <WrapperMain>

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
                </WrapperMain>
                <WrapperQuote>
                    <Icon iconId="quote" width="712" height="173" viewBox="0 0 712 173"/>
                </WrapperQuote>
                <StyledSquare></StyledSquare>
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

const WrapperMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.tablet} {
        width: 100%;
        flex-direction: column;
        margin: 70px auto;
    }
`

const StyledSection = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: start;

    @media ${theme.media.tablet} {
        width: 100%;
    }
`

const WrapperPhoto = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    margin: 30px 0;

    @media ${theme.media.tablet} {
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`

const StyledPhoto = styled.img`
    padding-top: 30px;
    padding-right: 0;
    max-width: 450px;
    max-height: 390px;
    object-fit: contain;

`

const StyledButtonWorks = styled.button`
    display: flex;
    padding: 10px;
    border: 1px solid #ABB2BF;
    background-color: transparent;
    color: ${theme.colors.font};
    max-width: 400px;
    max-height: 35px;

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

const WrapperQuote = styled.div`
    display: flex;

    max-width: 710px;
    margin: 120px auto;
    justify-content: center;
    align-items: center;
`


const StyledSquare = styled.span`
    min-width: 90px;
    height: 90px;
    border: 1px solid #ABB2BF;
    position: absolute;
    right: -15px;
    top: 710px;

`


