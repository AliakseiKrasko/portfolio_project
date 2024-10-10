import React from 'react';
import LanguageSprite from './../logo/../../assets/images/State=Default.svg';


type LanguagePropsType = {
    langId: string;
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Language = (props: LanguagePropsType) => {
    return (
        <svg width={props.width || "40"} height={props.height || "40"} viewBox={props.viewBox || "0 0 40 40"}
             fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${LanguageSprite}#${props.langId}`}></use>
        </svg>
    );
};

