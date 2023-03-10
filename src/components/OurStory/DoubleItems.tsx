import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const Items = styled.div`
    width: 100%;
    display: flex;
    flex: 2;
    font-family: 'Gt super text book', Georgia, sans-serif;
`;

const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gt super text book', Georgia, sans-serif;
    padding: 10px;
    padding: 25px 50px;
    border-bottom: 1px solid #131515;

    &.first {
        border-right: 1px solid #131515;
    }

    &.second {
        font-family: 'Gt super text book', Georgia, sans-serif;
        text-align: center;
    }
`;

function DoubleItems() {
  return (
    <Items>
      <Item className="first">
        <Text color="#131515" weight={700} fSize="96">
          About
        </Text>
        <Text color="#131515" weight={500} fSize="24">
          The best ideas can change who we are.
          CircleCI is where those ideas take shape,
          take off, and spark powerful conversations.
          We’re an open platform where over 100 million
          readers come to find insightful and dynamic thinking
          . Here, expert and undiscovered voices alike dive into
          the heart of any topic and bring new ideas to the surface. Our purpose
          is to spread these ideas and deepen understanding of the world.
        </Text>
      </Item>
      <Item className="second">
        <Text color="#131515" weight={700} fSize="96">
          Feel free yourself to join.
        </Text>
      </Item>
    </Items>
  );
}

export default DoubleItems;
