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
    height: 200px;
    width: 200px;
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
    width: 150px;
    height: 150px;
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
  }
`;

export const StyledRightPanel = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  flex-direction: column;
`;

export const Daily = styled.div`
  display: flex;
  width: 100%;
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
`;
