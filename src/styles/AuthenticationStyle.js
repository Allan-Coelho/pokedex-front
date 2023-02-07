import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #fb0505;
  width: 60vw;
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  align-items: column;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  z-index: 5;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 76px;
  margin: 20px auto 20px auto;
  line-height: 84px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const New = styled.p`
  a {
    text-decoration: none;
  }
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  text-decoration-line: underline;
  color: #ffffff;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    width: 85%;
    height: 55px;
    border: solid 1px #d5d5d5;
    font-weight: 700;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    ::placeholder {
      color: #9f9f9f;
    }
  }
`;

const LoginButton = styled.button`
  height: 55px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #30fb05;
  border: none;
  border-radius: 8px;
  font-size: 21px;
  font-weight: 700;
  cursor: pointer;
  color: black;
  margin-bottom: 25px;
`;

export { Wrapper, Title, LoginContainer, New, LoginForm, LoginButton };
