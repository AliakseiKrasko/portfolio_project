import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/Image.png'
import {FlexWrapper} from './../../../components/FlexWrapper';
import {Menu} from "../../../components/menu/Menu";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <StyledMainText>Alex <StyledName>Krasko</StyledName> is a <StyledName>frontend developer</StyledName></StyledMainText>
                    <StyledText>He crafts responsive websites where technologies meet creativity</StyledText>

                </div>
                <Photo src={photo} alt="img"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div` 
    min-height: 100vh;
    margin: 0 auto;
    background-color: #282C33;
    padding: 5px 20px;
;
`

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: contain;
`

const StyledMainText = styled.h1` 
    color: #FFFFFF;
`

const StyledText = styled.p`
    color: #FFFFFF;
`

const StyledName = styled.span` 
    color: #C778DD;
`

