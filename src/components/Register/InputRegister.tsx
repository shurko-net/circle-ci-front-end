import React from 'react';
import styled from 'styled-components';

interface FromGroupProps {
  htmlFor: string;
  nameLabel: string;
  type: string;
  placeholder: string;
  muiKitIcon: any;
  onChange?: (e: any) => void;
}

const Icon = styled.div`
  position: absolute;
  width: 1em;
  font-size: 20px;
  transform: translateX(10px) translateY(17px);
`;

const FormGroup = styled.div`
    margin: 18px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: space-around;
    flex-wrap: wrap;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 6px;
  padding: 0px 12px 0 35px;
  border: 2px solid #c4c4c4;
  border-radius: 3px;
  font-size: 18px;
  outline: none;
  transition: .3s;
  &:focus {
    border-color: #339989;
    box-shadow: 0 0 12px #7de2d1;
  }
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  color: #101010;
`;

function InputRegister({
  htmlFor, nameLabel, type, placeholder, muiKitIcon, onChange,
}:FromGroupProps) {
  return (
    <FormGroup>
      <Label htmlFor={htmlFor}>
        {nameLabel}
      </Label>
      <Icon>{muiKitIcon}</Icon>
      <Input
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </FormGroup>

  );
}

export default InputRegister;
