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
    height: 130vh;
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
    justify-content: end;
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
    align-self: center;
`

const StyledButtonWorks = styled.button`
    display: flex;
    padding: 10px;
    border: 1px solid #ABB2BF;
    background-color: transparent;
    color: ${theme.colors.font};
    width: 380px;
    max-height: 35px;
    align-self: center;
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


