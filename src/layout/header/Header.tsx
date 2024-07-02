import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styled/Theme";
import {Button} from "../../components/Button";
import {Link} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";

export const Header = () => {
    return (
        <S_fixed>
            <S_Header>
                <Container>
                    <FlexWrapper justifyContent="space-around" alignItems="center">
                       <S_Link>
                           <S_A to={"#"} onClick={() => scroll.scrollToTop()}>Home</S_A>
                       </S_Link>
                        <S_Link2>
                            <FlexWrapper alignItems={"center"}>
                                <S_A to={"projects"}
                                     spy={true} // это чтобы react-scroll определял нажатую ссылку
                                     smooth={true} // добавляет поавность при переносе!
                                >Projects</S_A>
                                <S_A to={"contacts"}
                                     spy={true}
                                     smooth={true}>Contact</S_A>
                            </FlexWrapper>
                        </S_Link2>
                    </FlexWrapper>
                </Container>
            </S_Header>
        </S_fixed>
    );
};

const S_fixed = styled.div`
    width: 100%;
    position: fixed;
    z-index: 99;
`

const S_Header = styled.header`
    position: relative;
    height: 100px;
    background-color: ${theme.color.backgroundSection};

    ${FlexWrapper} {
        position: relative;
    }

    Button {
        margin-left: 88px;

        @media ${theme.media.tablet} {
            margin-left: 32px;
        }
    }

`

const S_A = styled(Link)`
    display: inline-flex;
    padding: 12px 20px 13px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    margin-left: 10px;

    font-size: 16px;
    font-weight: 500;
    transition: .7s;

    &:hover {
        background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        color: ${theme.color.btnColor};

    }

`


const S_Link = styled.span`
    position: absolute;
    left: 5px;

    @media ${theme.media.tablet} {
        left: 0;
    }
`

const S_Link2 = styled.a`
    position: absolute;
    right: 55px;

    @media ${theme.media.tablet} {
        right: 0;
    }
`