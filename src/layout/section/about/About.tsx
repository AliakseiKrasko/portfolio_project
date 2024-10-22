import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {StyledButton} from "../../../components/StyledButton";
import photo from "../../../assets/images/Group 50.svg"

export const About = () => {
    return (
        <WrapperAbout>
            <StyledAbout>
                <SectionTitle title="about-me" lineLength="300px"/>
            </StyledAbout>
            <WrapperContent>
                <TextWrapper>
                    <StyledText>
                        <p>Hello, i’m Elias!<br/><br/><br/>

                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
                            develop responsive websites from scratch and raise them into modern user-friendly
                            web experiences.<br/><br/><br/>

                            Transforming my creativity and knowledge into a websites has been my passion for over
                            a year. I have been helping various clients to establish their presence online. I always
                            strive to learn about the newest technologies and frameworks.</p>
                        <StyledButton>Read more &rarr;</StyledButton>
                    </StyledText>

                </TextWrapper>
                <ImgWrapper>
                    <StyledImage src={photo} alt="img"/>
                </ImgWrapper>
            </WrapperContent>
        </WrapperAbout>
    );
};

const WrapperAbout = styled.section`
    max-width: 80%;
    margin: 0 auto;
    padding-top: 48px;

`

const StyledAbout = styled.div`
    display: flex;
    max-width: 80%;
    max-height: 100vh;

    justify-content: space-between;
    align-items: center;
    padding-bottom: 48px;
`

const TextWrapper = styled.div`
    display: flex;
    max-width: 50%;

`

const ImgWrapper = styled.div`
    display: flex;
    max-width: 50%;
`

const WrapperContent = styled.div` 
    display: flex;
    justify-content: space-between;
`

const StyledText = styled.div`
    color: #FFFFFF;

    p {
        margin-bottom: 27px;

    }
`

const StyledImage = styled.img`
    max-width: 457px;
    max-height: 450px;
    object-fit: contain;
    justify-content: center;
    position: absolute;
    right: 180px;
    top: 2400px;
`