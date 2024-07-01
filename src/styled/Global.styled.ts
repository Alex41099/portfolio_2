import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        color: ${theme.color.font};
        min-width: 414px;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${theme.color.font}
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        color: ${theme.color.btnColor};
        font-family: Montserrat, sans-serif;
        cursor: pointer;
    }
    
    
    
`