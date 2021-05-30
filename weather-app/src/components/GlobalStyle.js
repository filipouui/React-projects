import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;

}

.App{
    display: flex;
    width: 100%;
}

`;

export default GlobalStyle;
