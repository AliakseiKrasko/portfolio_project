import React from 'react';
import {Language} from "../icon/language";
import styled from "styled-components";


export const Lang = () => {
    return (
        <StyledLang>
            <Language langId={`lang`} fill={`#ABB2BF`}/>
        </StyledLang>
    );
};

const StyledLang = styled.div`
    position: absolute;
    top: 24px;
    right: 130px;
    `

