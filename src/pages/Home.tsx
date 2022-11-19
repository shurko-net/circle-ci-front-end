import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../components/Text';

const MainMotto = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #131515;
    font-family: 'Gt super text book', Georgia, sans-serif;
    padding-top: 60px;
`;

const DoubleItems = styled.div`
    width: 100%;
    display: flex;
    flex: 2;
    font-family: 'Gt super text book', Georgia, sans-serif;
`;

const FooterForButton = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gt super text book', Georgia, sans-serif;
    padding: 10px;
    padding: 10px 50px;
    border-bottom: 1px solid #131515;

    &.first {
        border-right: 1px solid #131515;
    }

    &.secondText {
        font-family: 'Gt super text book', Georgia, sans-serif;
        text-align: center;
    }
`;

const ButtonJoin = styled.button`
    font-size: 96px;
    border-radius: 100px;
    padding: 25px 50px;
    background-color: #339989;
    color: #FCFCFC;
    border: none;
    transition: box-shadow 0.4s;
    margin-top: 100px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    a {
        text-decoration: none;
        color: #FCFCFC;
    }
`;

function Home() {
  return (
    <>
      <MainMotto>
        <Text color="#131515" weight={500} fSize="84">
          Every idea must to be&nbsp;
        </Text>
        <Text color="#131515" weight={700} fSize="96">
          Circled.
        </Text>
      </MainMotto>
      <DoubleItems>
        <Item className="first">
          <Text color="#131515" weight={700} fSize="96">
            About
          </Text>
          <Text color="#131515" weight={500} fSize="24">
            The best ideas can change who we are.
            Medium is where those ideas take shape,
            take off, and spark powerful conversations.
            We’re an open platform where over 100 million
            readers come to find insightful and dynamic thinking
            . Here, expert and undiscovered voices alike dive into
            the heart of any topic and bring new ideas to the surface. Our purpose
            is to spread these ideas and deepen understanding of the world.
          </Text>
        </Item>
        <Item className="secondText">
          <Text color="#131515" weight={700} fSize="96">
            Fill free yourself to join.
          </Text>
        </Item>
      </DoubleItems>
      <FooterForButton>
        <ButtonJoin><Link to="/register">Join us! </Link></ButtonJoin>
      </FooterForButton>
    </>
  );
}

export default Home;
