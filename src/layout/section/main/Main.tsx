import React from 'react';
import photo from './assets/images/Image.png'
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <h1>Elias is a web designer and front-end developer</h1>
            <span>He crafts responsive websites where technologies meet creativity</span>

            <Photo src={photo} alt="img"/>
        </div>
    );
};

const Photo = styled.img` 
    width: 457px;
    height: 386px;
`

