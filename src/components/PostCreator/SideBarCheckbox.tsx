import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type SideBarCheckboxProps = {
  text: string;
};

const SettingsBody = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.375rem;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    background: #D9D9D9;
    border-radius: 5px;
    cursor: pointer;
    width: 19px;
    height: 19px;
    margin-right: 0.8125rem;
`;

const Text = styled.p`
    color: #414141;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875;
    margin-right: 0.375rem;
`;

function SideBarCheckbox({ text } : SideBarCheckboxProps) {
  return (
    <SettingsBody>
      <CheckBox />
      <Text>{text}</Text>
      <FontAwesomeIcon
        style={{
          cursor: 'pointer',
          color: '#666666',
        }}
        icon={faCircleExclamation}
      />
    </SettingsBody>
  );
}

export default SideBarCheckbox;
