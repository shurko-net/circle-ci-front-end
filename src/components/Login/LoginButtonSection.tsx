import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { bool } from 'yup';
import { useAppDispatch } from '../../hook';
import { login } from '../../store/slices/authSlice';

interface LoginButtonSectionProps {
  email: string;
  password: string;
  inputValidPassword: boolean;
  inputValidEmail: boolean;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: 600;
    color: #60BDC2;;
    text-decoration: none;
    line-height: 1.25;
    font-size: 1rem;
    margin-top: 16px;
    margin-bottom: 16px;
    width: fit-content;
    &:hover {
        text-decoration: underline;
    }
`;

const Button = styled.button`
    cursor: pointer;
    flex-shrink: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    height: min-content;
    min-height: 48px;
    border-radius: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid transparent;
    text-decoration-line: none;
    background: #60BDC2;
    color: #fff;
    &:hover {
        box-shadow: 0 0 0 1px var(--color-button-container-primary-border);
        background-color: #339989;
    }
`;

function LoginButtonSection({ inputValidEmail, inputValidPassword }: LoginButtonSectionProps) {
  return (
    <Container>
      <StyledLink to="/register">Forgot password?</StyledLink>
      <Button disabled={!inputValidEmail || !inputValidPassword} type="submit">Sign in</Button>
    </Container>
  );
}

export default LoginButtonSection;
