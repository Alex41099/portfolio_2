import React from 'react';
import styled from "styled-components";

type buttonPropsType = {
    title: string
}

export const Button = (props: buttonPropsType) => {
    return (
        <S_Button>
            <span>
                {props.title}
            </span>
        </S_Button>
    );
};

const S_Button = styled.button`
    display: inline-flex;
    padding: 12px 20px 13px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    
    span {
        font-size: 16px;
        font-weight: 500;
    }
`