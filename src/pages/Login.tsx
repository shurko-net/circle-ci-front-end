import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Wrapper from '../components/Register/Wrapper';
import LoginBox from '../components/Register/RegisterBox';
import Input from '../components/Register/InputRegister';
import LoginButton from '../components/Register/RegisterButton';

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

// const Forgot = styled.div`
//   cursor:pointer;
//   color: #339989;
//   font-size: 16px;
//   &:hover {
//     color: #7de2d1;
//   }
// `;

function Login() {
  return (
    <Wrapper>
      <LoginBox>
        <H2>Welcome back</H2>
        <P>Enter your details</P>
        <Form>
          <Input htmlFor="email" nameLabel="Email" type="email" placeholder="Your email" muiKitIcon={<PersonIcon fontSize="medium" />} />
          <Input htmlFor="password" nameLabel="Password" type="password" placeholder="Your password" muiKitIcon={<LockIcon fontSize="medium" />} />
          <LoginButton>Log in</LoginButton>
        </Form>
      </LoginBox>
    </Wrapper>
  );
}

export default Login;
