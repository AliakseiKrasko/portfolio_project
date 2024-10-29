import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {StyledButton} from "../../../components/StyledButton";
import photo from "../../../assets/images/Group 50.svg"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <WrapperAbout>
            <Container>
                <StyledAbout>
                    <SectionTitle title="about-me" lineLength="300px"/>
                </StyledAbout>
                <WrapperContent>

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


                    <ImgWrapper>
                        <StyledImage src={photo} alt="img"/>
                    </ImgWrapper>
                </WrapperContent>
            </Container>

        </WrapperAbout>
    );
};

const WrapperAbout = styled.section`
    max-width: 100%;
    margin: 110px auto;
    padding-top: 48px;
    position: relative;

    
`

const StyledAbout = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100vh;

    justify-content: space-between;
    align-items: center;
    padding-bottom: 48px;
`


const ImgWrapper = styled.div`
    display: flex;
    max-width: 50%;
    justify-content: center;
    align-items: center;


`

const WrapperContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        width: 100%;
        flex-direction: column;
        margin: 70px auto;
        align-items: center;
        justify-content: center;
    }
`

const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    color: #FFFFFF;

    p {
        margin-bottom: 27px;

    }

    ${StyledButton} {
        align-self: flex-start; /* или align-self: center, если нужно по центру */
    }
`

const StyledImage = styled.img`
    max-width: 457px;
    max-height: 450px;
    object-fit: contain;
    
    
`