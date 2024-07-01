import React from 'react';
import iconsSprite from "../accets/img/Sprite.svg"


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "90"} height={props.height || "90"} viewBox={props.viewBox || "0 0 90 90"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};

