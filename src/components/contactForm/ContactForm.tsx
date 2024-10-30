import React from 'react';
import styled from "styled-components";
import {StyledButton} from "../StyledButton";
import {theme} from "../../styles/Theme";

export const ContactForm = () => {
    return (
        <MyForm>
            <FormName>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
            </FormName>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Message" />
            <StyledButton marginTop={"15px"}>Send</StyledButton>
        </MyForm>
    );
};

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    min-width: 300px;
    align-items: start;
    align-self: center;
    border: 1px solid ${theme.colors.accent};
    padding: 20px; /* Дополнительно для удобства */


    input {
        width: 100%;
        margin-top: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: ${theme.colors.accent};
    }

    textarea {
        resize: vertical; /* Запрещает горизонтальное растягивание */
        width: 100%;
        margin-top: 8px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: ${theme.colors.accent};
    }
`;

const FormName = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;

    input {
        width: 50%;
        background: ${theme.colors.accent};
    }
`;



