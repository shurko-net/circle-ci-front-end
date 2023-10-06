import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import FormSection from './FormSection';
import LoginButtonSection from './LoginButtonSection';
import useForm from '../../hooks/useForm';
import { useAppDispatch, useAppSelector } from '../../hook';
import { login } from '../../store/slices/authSlice';

const Main = styled.main`
    display: flex;
    width: 100%;
    max-width: 1128px;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const MainContainer = styled.div`
    width: 416px;
`;

const MainBody = styled.div`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 24px 32px 32px 32px;
    background: #fff;
    position: relative;
    transition: visibility 0s linear 0.1s,opacity 0.1s linear;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.15), 0px 0px 2px rgba(0,0,0,0.15);
`;

const MainHeaderText = styled.h2`
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    color: rgba(0, 0, 0, 0.9);
`;

const FormBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const OrContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding-bottom: 24px;
    padding-top: 16px;
    &::before {
        height: 1px;
        width: 50%;
        background-color: rgb(0 0 0 / .35);
        content: "";
    }
    &::after {
        height: 1px;
        width: 50%;
        background-color: rgb(0 0 0 / .35);
        content: "";
    }
`;

const OrText = styled.p`
    color: rgba(0, 0, 0, 0.9);
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    
`;

const AuthWallSign = styled.p`
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    margin-top: 20px;
    text-align: center;
    font-size: 1rem;
`;

const AuthWallSignButton = styled(Link)`
    color: #60BDC2;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

function LoginMain() {
  const email = useForm('', {
    isEmpty: true, minLength: 3, maxLength: 320, isEmail: true,
  });
  const errRespons = useAppSelector((state) => state.auth.error);
  console.log(errRespons, 'login');
  const password = useForm('', {
    isEmpty: true, minLength: 8, maxLength: 128, errRespons,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (e:any) => {
    e.preventDefault();
    dispatch(login({ email: email.value, password: password.value })).then(() => {
      navigate('/');
    });
  };
  return (
    <Main>
      <MainContainer>
        <MainBody>
          <MainHeaderText>Sign in</MainHeaderText>
          <form onSubmit={handleLogin}>
            <FormBody>
              <FormSection
                onChange={(e: any) => email.onChange(e)}
                inputLabel="Email"
                placeholder="Email"
                value={email.value}
                onBlur={(e:any) => email.onBlur(e)}
                errorMessage={email.errorMessage}
              />
              <FormSection
                onChange={(e: any) => password.onChange(e)}
                inputLabel="Password"
                placeholder="Password"
                value={password.value}
                errorMessage={password.errorMessage}
                onBlur={(e:any) => password.onBlur(e)}
              />
            </FormBody>
            <LoginButtonSection
              inputValidEmail={email.inputValid}
              inputValidPassword={password.inputValid}
              password={password.value}
              email={email.value}
            />
            <OrContainer>
              <OrText> or </OrText>
            </OrContainer>
          </form>
          <AuthWallSign>
            New to CircleCi?
            <AuthWallSignButton to="/auth/register"> Join now </AuthWallSignButton>
          </AuthWallSign>
        </MainBody>
      </MainContainer>
    </Main>
  );
}

export default LoginMain;
