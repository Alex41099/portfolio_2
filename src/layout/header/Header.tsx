import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styled/Theme";
import {Button} from "../../components/Button";

export const Header = () => {
    return (
        <S_Header>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems="center">
                    <S_Link>Home</S_Link>
                    <div>
                        <S_Link>Contact</S_Link>
                        <Button title="Contact"></Button>
                    </div>
                </FlexWrapper>
            </Container>
        </S_Header>
    );
};

const S_Header = styled.header`
    height: 100px;
    background-color: ${theme.color.backgroundSection};
    
    Button {
        margin-left: 88px;
        
        @media ${theme.media.tablet} {
            margin-left: 32px;
        }
    }
    
`

const S_Link = styled.a`
    
    
`