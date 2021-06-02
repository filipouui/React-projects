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
    @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 356px) {
    width: 100%;
  }
  @media (max-width: 256px) {
    width: 100%;
  }
}


`;

export default GlobalStyle;
