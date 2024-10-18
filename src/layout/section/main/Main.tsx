import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/Image.png'
import {FlexWrapper} from './../../../components/FlexWrapper';
import {Menu} from "../../../components/menu/Menu";
import {Icon} from "../../../components/icon/Icon";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <StyledSection>
                    <StyledMainText>Alex <StyledName>Krasko</StyledName> is a <StyledName>frontend developer</StyledName></StyledMainText>
                    <StyledText>He crafts responsive websites where technologies meet creativity</StyledText>
                    <StyledButton>Contact me !!</StyledButton>
                </StyledSection>
                <Icon iconId='logoSquare' fill={`#C778DD`} height={`156`} width={`156`} viewBox={`0 0 156 156`}/>
                <Photo src={photo} alt="img"/>
                <Icon iconId='square' fill={`#C778DD`}/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledSection = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledMain = styled.div` 
    min-height: 100vh;
    margin: 0 auto;
    background-color: #282C33;
    padding: 5px 20px;

`

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: contain;
`
const StyledButton = styled.button` 
    padding: 10px 20px;
    border: 1px solid #C778DD;
    background-color: transparent;
    color: #FFFFFF;
    margin-top: 20px;
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

