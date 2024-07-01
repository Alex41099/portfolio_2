import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styled/Theme";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <S_Footer>
            <Container>
                <FlexWrapper flexDirection={"column"} alignItems={"center"}>
                    <S_div>
                        <S_a href="#">
                            <Icon width={"38"} height={"38"} viewBox={"0 0 38 38"} iconId={"gmailSvg"}/>
                            <span className={"gmail"}>GMAIL</span>
                        </S_a>
                        <S_a href="#">
                            <Icon width={"38"} height={"38"} viewBox={"0 0 38 38"} iconId={"linkedinSvg"}/>
                            <span>LINKEDIN</span>
                        </S_a>
                        <S_a href="#">
                            <Icon width={"38"} height={"38"} viewBox={"0 0 38 38"} iconId={"gitSvg2"}/>
                            <span className={"git"}>GITHUB</span>
                        </S_a>

                    </S_div>
                    <S_div2>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </S_div2>
                    <S_span>web developer 2021</S_span>
                </FlexWrapper>
            </Container>
        </S_Footer>
    );
};

const S_Footer = styled.footer`
    background-color: ${theme.color.backgroundSection};
    padding: 190px 0 100px;
    
    @media ${theme.media.tablet} {
        padding: 75px 0 100px;
    }
`

const S_div = styled.div`
    display: flex;
    gap: 92px;
    margin-bottom: 70px;
    
    @media ${theme.media.tablet} {
        gap: 98px;
    }
`

const S_div2 = styled.div`
    display: flex;
    gap: 48px;

    a {
        font-size: 14px;
        font-weight: 400;
    }
`


const S_a = styled.a`
    span {
        position: absolute;
        bottom: -20px;
        left: -14px;
        pointer-events: none;

        text-align: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 11.105px;
        letter-spacing: 1.44px;
        text-transform: uppercase;

    }

    .gmail {
        left: -4px;
    }

    .git {
        left: -7.5px;
    }


    position: relative;
    width: 38px;
    height: 38px;
    fill: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
`

const S_span = styled.span`
    text-transform: uppercase;
    margin-top: 50px;

    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.56px;
`