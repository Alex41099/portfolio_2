import React from 'react';
import styled from "styled-components";

export const MobileButton = () => {
    return (
        <S_MobileButton>
            SEE ALL PROJECTS
        </S_MobileButton>
    );
};

const S_MobileButton = styled.button`
    display: flex;
    width: 304px;
    height: 56px;
    padding: 12px 20px 13px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 6px;
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
`