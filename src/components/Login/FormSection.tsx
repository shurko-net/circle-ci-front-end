import React from 'react';
import styled from 'styled-components';

interface FormSectionProps {
  inputLabel: string;
  onChange: (e: any) => void;
  placeholder: string;
  value: string;
}

const Container = styled.div`
    margin-top: 12px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.75);
`;

const TextInputFlex = styled.div`
    display: flex;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0.75);
    color: rgba(0, 0, 0, 0.9);
    border-width: 1px;
    border-style: solid;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14px;
    padding-bottom: 14px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        border-color: rgba(0, 0, 0, 0.9);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.9);
        cursor: pointer;
        border-width: 1px;
    }
    &:hover input {
        background: initial;
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.08);
        border-color: rgba(0, 0, 0, 0.9);
        cursor: pointer;
        border-width: 1px;
    }
    background: #ECECEC;
    border: 1px solid #A6A6A6;
    border-radius: 20px;
`;

const Input = styled.input`
    outline-width: 0px;
    font-size: 16px;
    flex-grow: 1;
    border: 1px solid transparent;
    background: #ECECEC;
`;

function FormSection({
  inputLabel, value, onChange, placeholder,
}:FormSectionProps) {
  return (
    <Container>
      <Body>
        <InputLabel>{inputLabel}</InputLabel>
        <TextInputFlex>
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </TextInputFlex>
      </Body>
    </Container>
  );
}

export default FormSection;
