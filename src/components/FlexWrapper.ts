import styled from "styled-components";

type flexWrapperPropsType = {
    justifyContent?: string
    alignContent?: string
    alignItems?: string
    flexDirection?: string
    flexWrap?: string
    gap?: number
}


export const FlexWrapper = styled.div<flexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-content: ${props => props.alignContent || "flex-start"};
    align-items: ${props => props.alignItems || "flex-start"};
    flex-direction: ${props => props.flexDirection || "row"};
    flex-wrap: ${props => props.flexWrap || "flex-start"};
    height: 100%;
    gap: ${props => `${props.gap}px` || `${0}px`};
`

