import styled from "styled-components";

export const StyledFileUpload = styled.div`
  padding-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 4rem;
    font-family: "Pattaya", sans-serif;
    font-weight: 100;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f3f3f3;
  }
  button {
    margin-top: 1rem;
    width: 100%;
    font-size: 1rem;
    height: 2.5rem;
    background-color: blue;
    color: white;
    font-weight: normal;
    border: none;
    cursor: pointer;
    &&:focus {
      outline: none;
    }
  }
`;
export const StyledImage = styled.div`
  width: 30vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1rem;
  }
  img {
    width: 30vw;
  }
`;

export const StyledMessage = styled.div`
  color: blue;
  text-align: center;
  height: 2rem;
`;
