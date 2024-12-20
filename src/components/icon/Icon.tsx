import React from 'react';
import IconsSprite from './../../assets/images/logo.svg';


type IconPropsType = {
    iconId: string;
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    style?: React.CSSProperties
    zIndex?: number;
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "52"} height={props.height || "52"}
             viewBox={props.viewBox || "0 0 52 52"} fill={props.fill || "none"}
             xmlns="http://www.w3.org/2000/svg" style={{ ...props.style, zIndex: props.zIndex || 0 }}>
        <use xlinkHref={ `${IconsSprite}#${props.iconId}` }></use>
        </svg>
    );
};


