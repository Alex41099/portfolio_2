import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styled/Theme";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";

export const Contacts = () => {
    return (
        <S_Section>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S_Form>
                    <FlexWrapper flexDirection={"column"}>
                        <label htmlFor={"d"}>Name</label>
                        <S_Input id={"d"} type="text" placeholder={"Example"}/>
                        <label htmlFor={"dd"}>Email</label>
                        <S_Input id={"dd"} type="text" placeholder={"Example"}/>
                        <label htmlFor={"ddd"}>Mensaje</label>
                        <S_Input id={"ddd"} as={"textarea"} placeholder={"Example"}/>
                        <Button title={"Submit"}/>
                    </FlexWrapper>
                </S_Form>
            </Container>
        </S_Section>
    );
};

const S_Section = styled.section`
    background-color: ${theme.color.backgroundSection};
    padding-top: 140px;
    
    ${SectionTitle} {
        margin-bottom: 28px;
    }
    
    @media ${theme.media.tablet} {
        padding: 50px 0 75px;
    }
    
    Button {
        width: 100%;
    }
    
    label {
        margin-bottom: 6px;
    }
    
    textarea {
        height: 165px;
        resize: none;
    }
`

const S_Form = styled.form`
    max-width: 532px;
    max-height: 730px;
    margin: 0 auto;
`

const S_Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    background-color: #041F31;
    border: 1px solid ${theme.color.font};
    margin-bottom: 25px;
    padding: 15px 18px;

    color: ${theme.color.font};
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    
    &::placeholder {
        color: ${theme.color.placeholder};
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`