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
  user?: any;
  userImageLoad?: any;
}

const Block = styled.div`
    display: block;
`;

const UpContent = styled(Block) <{ marginBottom?: string; }>`
    margin-bottom: ${(props) => props.marginBottom || '0px'};
    margin-top: 52px;
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
    padding: 0 24px 18px 24px;
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

const UserCardWrapper = styled.div`
  width: 786px;
  height: 300px;
  margin-bottom: 24px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const UserCardTop = styled.div`
  width: 100%;
  height: 50%;
  background: #60BDC2;
  border-radius: 19px 19px 0px 0px;
`;

const UserCardMain = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  display: flex;
  align-items: end;
  border-radius: 0 0 19px 19px;
`;

const ButtonImg = styled.img`
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display:block;
  width: 125px;
  height: 125px;
  background-size: 100%;
  border: none;
  position: absolute;
  top: -45%;
  left: 5%;
`;

function AccountMainUpContent({
  text,
  nameFirstButton, nameSecondButton,
  firstUrl, secondUrl, marginBottom, user, userImageLoad,
}: AccountMainUpContainerProps) {
  return (
    <UpContent
      marginBottom={marginBottom}
    >
      <UserCardWrapper>
        <UserCardTop />
        <UserCardMain>
          {user
            ? (
              <ButtonImg
                style={{ backgroundImage: `url(${userImageLoad})` }}
              />
            )
            : null}
          <Text>{text}</Text>
        </UserCardMain>
      </UserCardWrapper>
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
