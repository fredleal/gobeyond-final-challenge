import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background : #000000;
        
        --white: #FFFFFF;
        --gray: #707070;
        --light-gray: #f4f4f4;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        -webkit-text-decoration: none;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    //REM = 1rem = font-size

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, select, button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    button, a{
        cursor: pointer;
        color: #000000;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`