import React from 'react';
import {Project} from "./Project";
import PhotoProj from "../../accets/img/image11-_1_.webp";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";

export const MobileProjects = () => {
    return (
        <Styled>
            <FlexWrapper gap={27} justifyContent={"center"} >
                <Project
                    photo={PhotoProj}
                    title={"Title project"}
                    text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                <Project
                    photo={PhotoProj}
                    title={"Insightgram"}
                    text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
            </FlexWrapper>
        </Styled>
    );
};

const Styled = styled.span`
    @media screen and (max-width: 1120px) {
        ${FlexWrapper} {
            flex-wrap: wrap;
        }
    }
`