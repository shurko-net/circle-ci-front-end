import React, { useState } from 'react';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import axios from 'axios';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e: any) => {
    setSecondName(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    secondName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5),
  });

  const onSubmit = () => {
    schema.validate({
      firstName,
      secondName,
      email,
      password,
    }).then((res: any) => {
      if (password === confirmPassword) {
        axios.post('https://localhost:7297/api/User', {
          name: res.firstName,
          surname: res.secondName,
          email,
          password,
        });
        localStorage.setItem('login', email);
        localStorage.setItem('password', password);
        navigate('/');
      } else {
        alert('Password not equals to Confirm password');
      }
    }).catch((error: string) => {
      alert(error);
    });
  };

  return (
    <Wrapper>
      <RegisterBox>
        <H2>Registration</H2>
        <P>Enter your details</P>
        <Form>
          <Input htmlFor="email" nameLabel="Email" type="email" placeholder="Your email" muiKitIcon={<EmailIcon fontSize="medium" />} onChange={handleEmailChange} />
          <Input htmlFor="firstName" nameLabel="First name" type="text" placeholder="Your first name" muiKitIcon={<PersonIcon fontSize="medium" />} onChange={handleFirstNameChange} />
          <Input htmlFor="secondName" nameLabel="Last name" type="text" placeholder="Your last name" muiKitIcon={<PersonOutlineOutlinedIcon fontSize="medium" />} onChange={handleSecondNameChange} />
          <Input htmlFor="password" nameLabel="Password" type="password" placeholder="Your password" muiKitIcon={<LockIcon fontSize="medium" />} onChange={handlePasswordChange} />
          <Input htmlFor="confirmPassword" nameLabel="Confirm Password" type="password" placeholder="Confirm Password" muiKitIcon={<LockOutlinedIcon fontSize="medium" />} onChange={handleConfirmPasswordChange} />
          <Submit onClick={onSubmit}>Submit</Submit>
        </Form>
      </RegisterBox>
    </Wrapper>
  );
}

export default Register;
