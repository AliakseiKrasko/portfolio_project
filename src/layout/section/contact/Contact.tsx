import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {ContactForm} from "../../../components/contactForm/ContactForm";

export const Contact = () => {
    return (
        <StyledContact id={"contacts"}>
            <Container>
                <SectionTitle title="contact" lineLength="130px"/>
                <FlexWrapper>
                    <DivWrapper>
                        <StyledText>
                            I’m interested in freelance opportunities. However,
                            if you have other request or question, don’t hesitate to contact me
                        </StyledText>
                        <StyledInfo>
                            <StyledWrapper>
                                <h4>Message me here</h4>
                                <StyledDiv><Icon iconId="email" width="32" height="32" viewBox="0 0 32 32"/>
                                    <p>alexkrasko1985@gmail.com</p></StyledDiv>
                                <StyledDiv><Icon iconId="discord" width="32" height="32" viewBox="0 0 32 32"/>
                                    <p> https://t.me/alekskrasko</p></StyledDiv>
                            </StyledWrapper>
                        </StyledInfo>
                    </DivWrapper>
                    <ContactForm/>
                </FlexWrapper>


            </Container>
        </StyledContact>
    )
        ;
};

const StyledContact = styled.div`

    margin-top: 80px;
    min-height: 80vh;
    padding-top: 50px;
    align-items: start;



`

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const StyledText = styled.div`
    width: 100%;
    
    color: ${theme.colors.accent};
`

const StyledInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-top: 5px;

    @media ${theme.media.tablet} {
        margin: 20px auto;
        align-items: center;
        justify-content: center;
    }
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF;
    max-width: 300px;
    height: 140px;
    justify-content: center;
    align-items: start;
    color: ${theme.colors.accent};
    text-align: center;
    padding: 5px 10px;

    h4 {

        color: ${theme.colors.font};
    }

`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }
`
