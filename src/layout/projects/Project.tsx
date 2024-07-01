import React from 'react';
import styled from "styled-components";
import {Button} from "../../components/Button";
import {theme} from "../../styled/Theme";

type projectPropsType = {
    photo: string
    title: string
    text: string
}

export const Project: React.FC<projectPropsType> = (props: projectPropsType) => {
    return (
        <S_Div>
            <Image src={props.photo}/>
            <S_DivWrapper>
                <S_h2>{props.title}</S_h2>
                <S_DivWrapperButton>
                    <Button title={"JavaScript"}/>
                    <Button title={"PostgreSQL"}/>
                    <Button title={"React"}/>
                    <Button title={"React"}/>
                </S_DivWrapperButton>
                <S_P>{props.text}</S_P>
            </S_DivWrapper>
        </S_Div>
    );
};


const S_Div = styled.div`
    max-width: 522px;
    min-width: 362px;
    width: 100%;
    
    min-height: 363px;
    border-radius: 6px;
    background: #222525;
    
    
    Button {
        padding: 8px 16px;
        border-radius: 4px;
        
        span {
            font-size: 10px;
            font-weight: 400;
            line-height: 14px; 
            letter-spacing: 1.2px;
            text-transform: uppercase;
        }
    }
`

const S_DivWrapper = styled.div`
    margin: 30px 8px 30px 26px;
    
`

const S_h2 = styled.h2`
    text-transform: uppercase;
    
    color: #D9F2F2;
    font-size: 20px;
    font-weight: 600;
`

const S_DivWrapperButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;    
    margin: 10px 0 20px;

    @media ${theme.media.tablet} {
        margin: 10px 0 16px;
    }
`

const Image = styled.img`
    width: 100%;
    min-height: 296px;
    max-height: 388px;
    object-fit: cover;
`

const S_P = styled.p`
    max-width: 486px;
    min-height: 104px;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: 0.64px;
`