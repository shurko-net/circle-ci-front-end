import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../hook';
import { registration } from '../../store/slices/authSlice';

interface RegisterButtonSectionProps {
  inputValidPassword: boolean;
  inputValidEmail: boolean;
  inputValidName: boolean;
  inputValidSurname: boolean;
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

function RegisterButtonSection({
  inputValidEmail, inputValidPassword,
  inputValidName, inputValidSurname,

}: RegisterButtonSectionProps) {
  return (
    <Container>
      <StyledLink to="/auth/login">Forgot password?</StyledLink>
      <Button disabled={!inputValidEmail || !inputValidPassword || !inputValidName || !inputValidSurname} type="submit">Register</Button>
    </Container>
  );
}

export default RegisterButtonSection;
