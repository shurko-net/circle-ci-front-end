import React from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 5vw;
    max-width: 25ch;
    @media screen and (max-width: 991px) {
      max-width: 16ch;
      font-size: 80px;
    }
    @media screen and (max-width: 767px) {
      width: 90%;
    }
    @media screen and (max-width: 479px) {
      -webkit-box-align: start;
      text-align: left;
      max-width: 20ch;
      font-size: 40px;
    }
`;

const MiddleHeading = styled.h2`
    color: #131515;
    font-size: 7.3vw;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.35vw;
`;

const ParagrafWrap = styled.div`
    width: 603px;
    margin-top: 10px;
    margin-bottom: 50px;
    @media screen and (max-width: 991px) {
      width: 90%;
      max-width: 60ch;
    }
    @media screen and (max-width: 767px) {
      width: 80%;
    }
    @media screen and (max-width: 767px) {
      width: 80%;
    }
`;

const ParagrafDevelopsContent = styled.p`
    margin-top: 30px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-family: 'Soehne web buch', sans-serif;
    font-size: 18px;
    line-height: 127%;
    font-weight: 400;
    @media screen and (max-width: 991px) {
      margin-bottom: 0px;
    }
    @media screen and (max-width: 767px) {
      letter-spacing: -0.06px;
    }
    @media screen and (max-width: 479px) {
      margin-bottom: 0px;
      font-size: 15px;
      letter-spacing: -0.06px;
    }
`;

function MainDevelopsContent() {
  return (
    <MainContent>
      <MiddleHeading>
        Розробники сайту
      </MiddleHeading>
      <ParagrafWrap>
        <ParagrafDevelopsContent>
          Кожен може писати на CircleCI.
          Лідери думок, журналісти, експерти,
          і люди з унікальними перспективами діляться тут своїми думками.
          Ви знайдете твори незалежних письменників з усього світу,
          історій, які ми представляємо, і провідних авторів, і розумний розглядає наші
          власний пакет блогів і публікацій.
        </ParagrafDevelopsContent>
      </ParagrafWrap>
    </MainContent>
  );
}

export default MainDevelopsContent;
