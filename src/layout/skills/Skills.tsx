import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/Icon";
import {Container} from "../../components/Container";
import {theme} from "../../styled/Theme";
import {SectionTitle} from "../../components/SectionTitle";
import {font} from "../../styled/Common";

const array = [
    {
        icon: "jsSvg",
        title: "JavaScript"
    },
    {
        icon: "tsSvg",
        title: "typeScript"
    },
    {
        icon: "mongoSvg",
        title: "mongo db"
    },
    {
        icon: "postgre",
        title: "postgreSQL"
    },
    {
        icon: "jest",
        title: "jest"
    },
    {
        icon: "express",
        title: "express js"
    },
    {
        icon: "nestSvg",
        title: "nest js"
    },
    {
        icon: "dockerSvg",
        title: "docker"
    },
    {
        icon: "reactSvg",
        title: "react js"
    },
    {
        icon: "reactNative",
        title: "react native",
        class: "reactNactive"
    },
    {
        icon: "styledComponents",
        title: "styled Components",
        class: "styledComponents"
    },
    {
        icon: "reduxSvg",
        title: "redux"
    },
    {
        icon: "gitSvg",
        title: "git"
    },
]

export const Skills = () => {
    return (
        <S_Section>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justifyContent={"center"} gap={120} flexWrap={"wrap"}>
                    <S_span>
                        <Icon iconId={"jsSvg"}/>
                        <span>JAVACRIPT</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"tsSvg"}/>
                        <span>typescript</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"mongoSvg"}/>
                        <span>mongo db</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"postgreSvg"}/>
                        <span>PostgreSQL</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"jest"}/>
                        <span>jest</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"express"}/>
                        <span>Express JS</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"nestSvg"}/>
                        <span>Nest JS</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"dockerSvg"}/>
                        <span>Docker</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"reactSvg"}/>
                        <span>react js</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"reactNative"}/>
                        <span className={"reactNative"}>react nactive</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"styledComponentsSvg"}/>
                        <span className={"styledComponents"}>Styled Components</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"reduxSvg"}/>
                        <span>Redux</span>
                    </S_span>
                    <S_span>
                        <Icon iconId={"gitSvg"}/>
                        <span className={"git"}>git</span>
                    </S_span>
                </FlexWrapper>
            </Container>
        </S_Section>
    );
};

const S_Section = styled.section`
    padding: 140px 0 0;

    background-color: ${theme.color.backgroundSection};
    
    ${SectionTitle} {
        margin-bottom: 28px;
    }

    .reactNative {
        margin-left: -20px;
    }
    
    .styledComponents {
        margin-left: -55px;
    }
    
    @media screen and (max-width: 889px) {
        padding: 50px 0;
        
        ${FlexWrapper} {
            gap: 48px;
        }
        
    }

    @media screen and (max-width: 841px) {
        .reactNative {
            margin-left: -2px;
            white-space: wrap;
        }

        .styledComponents {
            margin-left: 0;
            white-space: wrap;
        }

    }

    @media ${theme.media.tablet} {
        .git {
            position: absolute;
            bottom: 40px;
            left: 30px;
        }

        .reactNative {
            white-space: wrap;
            padding: 0 10px;
        }

    }
    
    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            gap: 0;
        }

        Icon {
            & + & {
                margin-left: 48px;
            }
        }
    }
`

const S_span = styled.span`
    position: relative;
    max-width: 120px;
    min-width: 90px;
    height: 164px;
    text-align: center;
    

    span {
        display: inline-block;
        margin-top: 20px;
        white-space: nowrap;
        text-align: center;
        ${font({weight: 400, Fmax: 16, Fmin: 12})}
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 2.1px;
        text-transform: uppercase;
        
        @media ${theme.media.tablet} {
            letter-spacing: 1.6px;
        }
    }
    
`