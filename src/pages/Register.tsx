import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Register/Wrapper';
import RegisterBox from '../components/Register/RegisterBox';
import FormEmail from '../components/Register/FormEmail';
import FormPassword from '../components/Register/FormPassword';

const Submit = styled.button`
  cursor:pointer;
  width:100%;
  height:46px;
  border-radius: 3px;
  font-size: 22px;
  margin-top: 28px;
  color: #fff;
  background: #2b2c28;
`;

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

function Register() {
  return (
    <Wrapper>
      <RegisterBox>
        <H2>Registration</H2>
        <P>Enter your details</P>
        <Form>
          <FormEmail htmlFor="email" nameLabel="Email" type="email" placeholder="Your email" />
          <FormEmail htmlFor="name" nameLabel="Name" type="text" placeholder="Your name" />
          <FormPassword htmlFor="password" nameLabel="Password" type="password" placeholder="Your password" />
          <FormPassword htmlFor="confirmPassword" nameLabel="Confirm Password" type="password" placeholder="Confirm Password" />
          <Submit>Submit</Submit>
        </Form>
      </RegisterBox>
    </Wrapper>
  );
}

export default Register;
