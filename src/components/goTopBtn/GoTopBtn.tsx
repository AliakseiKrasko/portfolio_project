import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, [])
    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrow"}/>
                </StyledGoTopBtn>
            )}

        </>

    );
};

const StyledGoTopBtn = styled.button`
    width: 25px;
    height: 25px;
    position: fixed;
    right: 30px;
    bottom: 30px;


    &:hover {
        cursor: pointer;
    }
`