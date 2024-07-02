import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import Photo from "../../accets/img/image-_1_.webp"
import {Container} from "../../components/Container";
import {theme} from "../../styled/Theme";
import {Button} from "../../components/Button";
import {font} from "../../styled/Common";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <S_Section>
            <Container>
                <FlexWrapper justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
                    <FlexWrapper flexDirection={"column"} justifyContent={"center"}>
                        <S_H1 className={"H1_None"}>Web developer</S_H1>
                        <S_H1>
                            <Typewriter
                                options={{
                                    strings: ['Web developer', 'React developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}
                            />
                        </S_H1>
                        <S_H2>John Doe</S_H2>
                        <S_P>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt.</S_P>
                        <Button title={"Contact Me"}/>
                    </FlexWrapper>

                    <S_Img src={Photo} alt=""/>
                </FlexWrapper>
            </Container>
        </S_Section>
    );
};

const S_Section = styled.section`
    position: relative;
    padding: 96px 0 184px;
    width: 100%;
    min-height: 526px;
    background-color: ${theme.color.backgroundSection};
    
    @media ${theme.media.tablet} {
        padding: 30px 0 36px;
        
        ${FlexWrapper} {
            align-items: center;
        }
    }
    
    .H1_None {
        display: none;
    }
`

const S_H1 = styled.h1`
    text-transform: uppercase;
    color: #D7E5EC;
    font-family: Tinos, sans-serif;
    ${font({weight: 400, Fmax: 20, Fmin: 16})}
    
`

const S_H2 = styled.h2`
    ${font({weight: 600, Fmax: 72, Fmin: 40})}
    margin: 10px 0;

    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${theme.media.tablet} {
        margin: 12px 0 16px;
        line-height: 100%; 
    }
`

const S_P = styled.p`
    max-width: 514px;
    margin-bottom: 30px;
    
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: 0.64px;

    @media ${theme.media.tablet} { 
        margin-bottom: 16px;
        text-align: center;
      
    }
`

const S_Img = styled.img`
    margin-bottom: 26px;

    @media screen and (max-width: 1063px) {
        order: -1;        
        margin-bottom: 0;
    }

    @media ${theme.media.mobile} {
        width: 318px;
    }
`