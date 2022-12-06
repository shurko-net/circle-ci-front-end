import React from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    width: 68ch;
    margin-top: 10px;
    margin-bottom: 50px;
`;

const ParagrafDevelopsContent = styled.p`
    margin-top: 50px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-family: 'Soehne web buch', sans-serif;
    font-size: 18px;
    line-height: 127%;
    font-weight: 400;
`;

function MainDevelopsContent() {
  return (
    <MainContent>
      <MiddleHeading>
        Site Developers
      </MiddleHeading>
      <ParagrafWrap>
        <ParagrafDevelopsContent>
          Anyone can write on Medium.
          Thought-leaders, journalists, experts,
          and individuals with unique perspectives share their thinking here.
          You’ll find pieces by independent writers from around the globe,
          stories we feature and leading authors, and smart takes on our
          own suite of blogs and publications.
        </ParagrafDevelopsContent>
      </ParagrafWrap>
    </MainContent>
  );
}

export default MainDevelopsContent;
