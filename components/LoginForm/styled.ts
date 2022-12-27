import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgray;

  h1 {
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2;
  }

  label {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 14px;
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }
  input {
    height: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 98%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const SignInButton = styled.button`
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  cursor: pointer;
`;

const RegisterButton = styled.button`
  border: 1px solid #a88734 #9c7e31 #846a29;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  width: 100%;
  height: 30px;
  cursor: pointer;
`;

export { Container, SignInButton, RegisterButton };
