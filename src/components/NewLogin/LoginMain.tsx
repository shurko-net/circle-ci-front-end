import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormSection from './FormSection';
import LoginButtonSection from './LoginButtonSection';

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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Main>
      <MainContainer>
        <MainBody>
          <MainHeaderText>Sign in</MainHeaderText>
          <form>
            <FormBody>
              <FormSection
                onChange={(e: any) => setEmail(e.target.value)}
                inputLabel="Email"
                placeholder="Email"
                value={email}
              />
              <FormSection
                onChange={(e) => setPassword(e.target.value)}
                inputLabel="Password"
                placeholder="Password"
                value={password}
              />
            </FormBody>
            <LoginButtonSection password={password} email={email} />
            <OrContainer>
              <OrText> or </OrText>
            </OrContainer>
          </form>
          <AuthWallSign>
            New to CircleCi?
            <AuthWallSignButton to="/register"> Join now </AuthWallSignButton>
          </AuthWallSign>
        </MainBody>
      </MainContainer>
    </Main>
  );
}

export default LoginMain;
