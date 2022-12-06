import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const MainMotto = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #131515;
    font-family: 'Gt super text book', Georgia, sans-serif;
    padding-top: 70px;
`;

function Main() {
  return (
    <MainMotto>
      <Text color="#131515" weight={500} fSize="84">
        <div className="nowrap">
          Every idea must to be&nbsp;
        </div>
      </Text>
      <Text color="#131515" weight={700} fSize="96">
        Circled.
      </Text>
    </MainMotto>
  );
}

export default Main;
