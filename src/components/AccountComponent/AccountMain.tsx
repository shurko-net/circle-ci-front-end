import React from 'react';
import styled from 'styled-components';
// import AccountButton from '../AccountButtonPanel/AccountButton';
import Flex from '../Flex';
import AccountMainUpContent from './AccountMainUpContent';

interface AccountMainProps {
  text?: string;
  nameFirstButton?: string;
  nameSecondButton?: string;
  firstUrl: string;
  secondUrl: string;
}

const Body = styled.div`
    min-width: 728px;
    max-width: 728px;
    flex: 1 1 auto;
`;

const Container = styled.div`
    max-width: 680px;
    margin: 0 24px;
    min-width: 0;
    width: 100%;
`;

const Block = styled.div`
    display: block;
`;

const DownContent = styled(Block)`
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: center;
`;

const TextNotify = styled.p`
    line-height: 24px;
    font-size: 16px;
    color: rgba(41, 41, 41, 1);
    font-weight: 400;
`;

function AccountMain({
  text, nameFirstButton, nameSecondButton, firstUrl, secondUrl,
}:AccountMainProps) {
  return (
    <Body>
      <Flex
        justify="center"
      >
        <Container>
          <Block>
            <AccountMainUpContent
              text={text}
              nameFirstButton={nameFirstButton}
              nameSecondButton={nameSecondButton}
              firstUrl={firstUrl}
              secondUrl={secondUrl}
              marginBottom="28px"
            />
            <DownContent>
              <TextNotify>You haven’t published any public stories yet.</TextNotify>
            </DownContent>
          </Block>
        </Container>
      </Flex>
    </Body>
  );
}

export default AccountMain;
