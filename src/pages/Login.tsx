import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family:'Varela Round' sans-serif;
`;

const Input = styled.input`
  width: 374px;
  height: 40px;
  margin-top: 6px;
  padding: 0px 12px 0 12px;
  border: 2px solid #c4c4c4;
  border-radius: 3px;
  font-size: 18px;
  outline: none;
  transition: .3s;
  &:focus {
    border-color: #339989;
    box-shadow: 0 0 12px #7de2d1;
  }
`;

const H2 = styled.h2`
  font-size: 2.2rem;
`;

const P = styled.p`
  color: #404040;
  margin-top: 4px;
  font-size: 1.2rem;
`;

const LoginBox = styled.div`
  width: 400px;
  padding: 40px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 16px;
  text-align: center;
`;

const Form = styled.div`
  text-align: left;
  margin-top: 30px;
`;

const FormGroup = styled.div`
  margin: 18px 0;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  color: #101010;
`;

const LoginButton = styled.button`
  cursor:pointer;
  width:100%;
  height:46px;
  border-radius: 3px;
  font-size: 22px;
  margin-top: 20px;
  color: #fff;
  background: #2b2c28;
`;

const Forgot = styled.div`
  cursor:pointer;
  color: #339989;
  font-size: 16px;
  &:hover {
    color: #7de2d1;
  }
`;

function Login() {
  return (
    <Wrapper>
      <LoginBox>
        <H2>Welcome back</H2>
        <P>Enter your details</P>
        <Form>
          <FormGroup>
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              placeholder="Your password"
              required
            />

          </FormGroup>
          <Forgot>Forgot your password?</Forgot>
          <LoginButton>Log in</LoginButton>
        </Form>
      </LoginBox>
    </Wrapper>
  );
}

export default Login;
