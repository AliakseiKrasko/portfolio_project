import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle title="contact" lineLength="130px"/>
                <FlexWrapper>
                    <StyledText>
                        I’m interested in freelance opportunities. However,
                        if you have other request or question, don’t hesitate to contact me
                    </StyledText>
                    <StyledInfo>
                        <StyledWrapper>
                            <h4>Message me here</h4>
                            <StyledDiv><Icon iconId="email" width="32" height="32" viewBox="0 0 32 32"/> <p>!Elias#3519</p></StyledDiv>
                            <StyledDiv><Icon iconId="discord" width="32" height="32" viewBox="0 0 32 32"/><p> elias@elias.me</p></StyledDiv>
                        </StyledWrapper>
                    </StyledInfo>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.div` 
    margin-top: 80px;
`

const StyledText = styled.div` 
    width: 50%;
    color: ${theme.colors.accent};
`

const StyledInfo = styled.div` 
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: end;
`

const StyledWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF;
    width: 220px;
    height: 140px;
    justify-content: center;
    align-items: start;
    color: ${theme.colors.accent};
    text-align: center;
    padding: 8px 10px;
    
    h4 {
        
        color: ${theme.colors.font};
}
    
`

const StyledDiv = styled.div` 
    display: flex;
    align-items: center;
    margin-top: 16px;
`
