import React from 'react';
import styled from "styled-components";
import {Project} from "./Project";
import PhotoProj from "../../accets/img/image11-_1_.webp"
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {SectionTitle} from "../../components/SectionTitle";
import {theme} from "../../styled/Theme";
import {MobileProjects} from "./MobileProjects";
import {MobileButton} from "./MobileButton";


export const Projects = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    const [allProject, setAllProject] = React.useState(false);

    return (
        <S_Section>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper flexWrap={"wrap"} justifyContent={"center"} gap={27}>
                    <Project
                        photo={PhotoProj}
                        title={"Title project"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                    <Project
                        photo={PhotoProj}
                        title={"Insightgram"}
                        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                        {allProject? <MobileProjects/>: null}
                    <span onClick={() => {setAllProject(!allProject)}}>{width > breakpoint? <MobileProjects/>: <MobileButton/>}</span>
                </FlexWrapper>
            </Container>
        </S_Section>
    );
};

const S_Section = styled.section`
    background-color: ${theme.color.backgroundSection};
    
    ${SectionTitle} {
        margin-bottom: 32px;
    }

    @media ${theme.media.tablet} {
        padding: 50px 0;
        
        ${FlexWrapper} {
            gap: 16px;
        }
    }
`

