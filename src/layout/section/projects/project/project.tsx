import React from 'react';
import styled from 'styled-components';
import {StyledButton} from "../../../../components/StyledButton";


type CardPropsType = {
    img: string;
    title: string;
    description: string;  // Описание или текст под заголовком
    h4: string;
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <ImageWrapper>
                <img src={props.img} alt="Card"/>
            </ImageWrapper>
            <CardBody>
                <p>{props.title}</p>
                <div className="separator"></div>
                <h4>{props.h4}</h4>

                <p>{props.description}</p>
                <ButtonWrapper>
                    <StyledButton padding="8px 16px">Live &lt;~&gt;</StyledButton>
                    <StyledButton>Button 2</StyledButton>
                </ButtonWrapper>
            </CardBody>
        </StyledCard>
    );
};

// Styled Components
const StyledCard = styled.div`
    width: 32%;   /* Максимальная ширина карточки */
    min-width: 300px;
    height: 390px;
    border: 1px solid #ABB2BF;
    overflow: hidden;

`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 150px; /* Половина карточки */
    border-bottom: 1px solid #ABB2BF;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CardBody = styled.div`
    padding: 20px;
    text-align: start;
    color: #ABB2BF;
    position: relative;
    

    p:first-of-type {
        font-size: 16px;
        margin-bottom: 15px;
        
    }

    .separator {
        width: calc(100% + 40px); /* Увеличиваем ширину с учетом padding */
        height: 1px;
        background-color: #ABB2BF; /* Цвет линии */
        margin: 10px -20px; /* Компенсация отступов */
    }

    h4 {
        color: #FFFFFF;
        
    }
    
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: start;
    margin-top: 20px;
    
`;



