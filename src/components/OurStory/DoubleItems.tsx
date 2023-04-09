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
          Про нас
        </Text>
        <Text color="#131515" weight={500} fSize="24">
          Найкращі ідеї можуть змінити нас.
          CircleCI – це місце, де ці ідеї набувають форми,
          злетіти та розпочати сильні розмови.
          Ми є відкритою платформою, де понад 100 мільйонів
          читачі знаходять проникливе та динамічне мислення
          . Тут занурюються як експертні, так і незнайомі голоси
          суть будь-якої теми та виводити нові ідеї на поверхню. Наша мета
          поширювати ці ідеї та поглиблювати розуміння світу.
        </Text>
      </Item>
      <Item className="second">
        <Text color="#131515" weight={700} fSize="96">
          Не соромтеся приєднатися.
        </Text>
      </Item>
    </Items>
  );
}

export default DoubleItems;
