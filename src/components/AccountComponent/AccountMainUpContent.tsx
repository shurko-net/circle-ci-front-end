import React from 'react';
import styled from 'styled-components';
import AccountButton from '../AccountButtonPanel/AccountButton';
import Flex from '../Flex';

interface AccountMainUpContainerProps {
  text?: string;
  nameFirstButton?: string;
  nameSecondButton?: string;
  firstUrl: string;
  secondUrl: string;
  marginBottom?: string;
}

const Block = styled.div`
    display: block;
`;

const UpContent = styled(Block)<{ marginBottom?: string; }>`
    margin-bottom: ${(props) => props.marginBottom || '0px'};
    margin-top: 52px;
`;

const TitleBlock = styled(Block)`
    margin-bottom: 40px;
`;

const Text = styled.h1`
    letter-spacing: 0;
    max-height: 52px;
    line-height: 52px;
    font-size: 42px;
    word-break: break-all;
    overflow: hidden;
    font-weight: 500;
    color: rgba(41, 41, 41, 1);
`;

const Overflow = styled.div`
    overflow-x: auto;
`;

const ButtonGroup = styled.div`
    height: 39px;
    overflow: hidden;
    box-shadow: inset 0 -1px 0 rgb(230 230 230);
    position: relative;
    display: block;
`;

const ButtonGroupFlex = styled.div`
    padding: 2px 0;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    align-items: center;
`;

function AccountMainUpContent({
  text,
  nameFirstButton, nameSecondButton,
  firstUrl, secondUrl, marginBottom,
}:AccountMainUpContainerProps) {
  return (
    <UpContent
      marginBottom={marginBottom}
    >
      <TitleBlock>
        <Text>{text}</Text>
      </TitleBlock>
      <Overflow>
        <ButtonGroup>
          <ButtonGroupFlex>
            <Flex>
              <AccountButton name={nameFirstButton} url={firstUrl} />
              <AccountButton name={nameSecondButton} url={secondUrl} />
            </Flex>
          </ButtonGroupFlex>
        </ButtonGroup>
      </Overflow>
    </UpContent>
  );
}

export default AccountMainUpContent;
