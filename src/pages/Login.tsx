import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Login/Wrapper';
import LoginBox from '../components/Login/LoginBox';
import FormEmail from '../components/Login/FormEmail';
import FormPassword from '../components/Login/FormPassword';
import LoginButton from '../components/Login/LoginButton';

const H2 = styled.h2`
  font-size: 2.2rem;
`;

const P = styled.p`
  color: #404040;
  margin-top: 4px;
  font-size: 1.2rem;
`;

const Form = styled.div`
  text-align: left;
  margin-top: 30px;
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
          <FormEmail htmlFor="email" nameLabel="Email" type="email" placeholder="Your email" />
          <FormPassword htmlFor="password" nameLabel="Password" type="password" placeholder="Your password" />
          <Forgot>Forgot your password?</Forgot>
          <LoginButton>Log in</LoginButton>
        </Form>
      </LoginBox>
    </Wrapper>
  );
}

export default Login;
