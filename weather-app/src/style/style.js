import styled from "styled-components";

export const StyledLeftPanel = styled.div`
  width: 30%;
  background-color: #101041;
  color: #dfdfdf;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 5vh;
    margin-bottom: 20px;
    font-size: 2rem;
  }
  .inputButton {
    display: flex;
    justify-content: center;
  }
  input {
    width: 20rem;
    height: 3rem;
    font-size: 1rem;
    border: none;
    font-size: 1.3rem;
    padding-left: 1rem;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 5rem;
    height: 3rem;
    font-size: 1rem;
    border: none;
    background-color: #d4d4d4;
    font-size: 1.3rem;
    cursor: pointer;
  }
  form {
    margin-bottom: 2rem;
  }
  .icon {
    cursor: pointer;
  }
  h2 {
    margin-bottom: 2rem;
  }
  img {
    margin-top: 5rem;
    background-color: #f6f6f6;
    height: 250px;
    width: 250px;
    background-color: #101041;
  }
  h4 {
    font-size: 7rem;
  }
  span {
    font-size: 1rem;
  }
  p {
    margin-top: 1rem;
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    h1 {
      margin-top: 5vh;
      margin-bottom: 20px;
      font-size: 2rem;
    }
    .inputButton {
      display: flex;
      justify-content: center;
    }
    input {
      width: 60%;

      &:focus {
        outline: none;
      }
    }
    button {
      width: 5rem;
      height: 3rem;
      font-size: 1rem;
      border: none;
      background-color: #d4d4d4;
      font-size: 1.3rem;
      cursor: pointer;
    }
    form {
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 0rem;
    }
    img {
      margin-top: 0rem;
      background-color: #f6f6f6;
      height: 200px;
      width: 200px;
      background-color: #101041;
    }
    h4 {
      font-size: 3rem;
    }
    @media (max-width: 380px) {
      h3 {
        padding-bottom: 2rem;
      }
      p {
        font-size: 1rem;
      }
      span {
        font-size: 0.8rem;
        display: none;
      }
      input {
        width: 60%;
        height: 2rem;
      }
      button {
        height: 2rem;
      }
      img {
        height: 100px;
        width: 100px;
      }
    }
  }
`;

export const StyledCard = styled.div`
  color: black;
  height: 100%;
  display: flex;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8ff;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  img {
    width: 60%;
    height: 10vh;
    object-fit: cover;
    box-shadow: 2px 2px 15px 5px #ededf3;
    border-radius: 100%;
  }
  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: normal;
  }
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 50%;
      height: fit-content;
      border-radius: 20%;
    }
    h1 {
      font-size: 2rem;
      border-top: 2px solid grey;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

export const StyledRightPanel = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Daily = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  height: 100%;
  h1 {
    font-size: 3rem;
    padding-top: 2rem;
    color: #1f1f1f;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    .flex {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 2rem;
      width: 100%;
      .container {
        background-color: #101041;
        color: #dddddd;
        font-weight: normal;
        padding: 1.5rem;
        width: 500px;
        display: flex;
        flex-direction: column;
        h4 {
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      text-align: center;
    }
    .main {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .container {
      text-align: center;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 380px) {
    width: 100vw;
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
