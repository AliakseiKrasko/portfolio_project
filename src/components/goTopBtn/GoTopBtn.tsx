import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const GoTopBtn = () => {
    return (
        <StyledGoTopBtn>
            <Icon iconId={"arrow"} />
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.button` 
    width: 25px;
    height: 25px;
    
   
    position: fixed;
    right: 30px;
    bottom: 30px;
`