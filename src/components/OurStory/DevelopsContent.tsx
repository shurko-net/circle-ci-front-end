import React from 'react';
import styled from 'styled-components';
import MainDevelopsContent from './DevelopsContent/MainDevelopsContent';
import DevelopsInner from './DevelopsContent/DevelopsInner';

const Content = styled.div`
    display:flex;
    padding-top: 66px;
    padding-bottom: 66px;
    width: 100%;
    border-bottom: 1px solid #131515;
    background: #339989;
    flex-direction: column;
    align-items: center;

`;

const DevelopersInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`;

function DevelopsContent() {
  return (
    <Content>
      <MainDevelopsContent />
      <DevelopersInfo>
        <DevelopsInner name="Yaroslav Myronov" content="I am Yaroslav" post="Frontend" />
        <DevelopsInner name="Stas Shurko" content="I am Stas" post="Fullstack" />
        <DevelopsInner name="Dima Dacko" content="I am Dima" post="Backend" />
      </DevelopersInfo>

    </Content>
  );
}

export default DevelopsContent;
