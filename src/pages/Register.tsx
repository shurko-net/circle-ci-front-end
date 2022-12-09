import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Wrapper from '../components/Register/Wrapper';
import RegisterBox from '../components/Register/RegisterBox';
import Input from '../components/Register/InputRegister';

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
          <Input htmlFor="email" nameLabel="Email" type="email" placeholder="Your email" muiKitIcon={<EmailIcon fontSize="medium" />} />
          <Input htmlFor="name" nameLabel="Name" type="text" placeholder="Your name" muiKitIcon={<PersonIcon fontSize="medium" />} />
          <Input htmlFor="password" nameLabel="Password" type="password" placeholder="Your password" muiKitIcon={<LockIcon fontSize="medium" />} />
          <Input htmlFor="confirmPassword" nameLabel="Confirm Password" type="password" placeholder="Confirm Password" muiKitIcon={<LockOutlinedIcon fontSize="medium" />} />
          <Submit>Submit</Submit>
        </Form>
      </RegisterBox>
    </Wrapper>
  );
}

export default Register;
