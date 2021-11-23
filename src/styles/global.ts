import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --violet-50: #8D91EB;
        --violet-500: #3A3EBF;
        --blue-violet: #3E44C9;

        --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width:720px){
        html{
            font-size: 87.5%;
        }
    }

    body, input, textarea, select, button{
        font: 400 1rem "Source Sans Pro", sans-serif;
    }
    
    button {
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

`