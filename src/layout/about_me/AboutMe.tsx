import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styled/Theme";
import {SectionTitle} from "../../components/SectionTitle";

export const AboutMe = () => {
    return (
        <S_Section>
            <Container>
                <FlexWrapper flexDirection={"column"}>
                    <SectionTitle>About me</SectionTitle>
                    <S_P>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of
                        a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains
                        were placed within this chamber during the Neolithic period, representing at least nine or ten
                        individuals.</S_P>
                </FlexWrapper>
            </Container>
        </S_Section>
    );
};

const S_Section = styled.section`
    padding: 82px 0 90px;
    min-height: 170px;
    background-color: ${theme.color.backgroundSection};
    
    ${SectionTitle} {
        margin-left: 22px;
    }

    @media ${theme.media.tablet} {
        padding: 36px 0 50px;
    }
`

const S_P = styled.p`
    max-width: 843px;
    min-height: 123px;

    font-size: 18px;
    font-weight: 400;
    line-height: 26px; 
    letter-spacing: 0.72px;

    position: relative;
    margin-top: 20px;
    margin-left: 22px;
    
    &::before {
        content: "";
        position: absolute;
        width: 116px;
        height: 5px;
        transform: rotate(-90deg);
        border-radius: 2px;
        background: ${theme.color.btnBackground};
        
        top: 63px;
        left: -80px;
    }
`