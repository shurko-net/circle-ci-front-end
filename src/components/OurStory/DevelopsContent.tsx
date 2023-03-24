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
    height: 400px;
    text-align-last: justify;
    @media screen and (max-width: 767px) {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }
    @media screen and (max-width: 767px) {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
`;

function DevelopsContent() {
  return (
    <Content>
      <MainDevelopsContent />
      <DevelopersInfo>
        <DevelopsInner
          name="Yaroslav Myronov"
          content="Hi, i'm a React developer. I love Java Script, travel, sports and have fun with my friends.I use React, Js, Typescript, Redux, Css, Html.You can evaluate my work, subscribe to my social networks and write to me personally."
          post="Frontend"
          img="https://avatars.githubusercontent.com/u/112170129?v=4"
          linkGit="https://github.com/Yaroslavmyronov?tab=repositories"
          linkInstagram="https://instagram.com/jarik.mironov223?igshid=YmMyMTA2M2Y="
          linkLinkedIn="https://www.linkedin.com/in/yaroslav-myronov-807345254/"
        />
        <DevelopsInner
          name="Stas Shurko"
          content="Hello everyone, I am a web application developer from Ukraine. At the moment I work in the city of Munich as a Full-Stack Developer. I am fond of sports and play chess."
          post="Fullstack"
          img="https://uploads-ssl.webflow.com/60b9f6b57e8d7b3b3b1de1f2/632b263205d8cb1d2d80e710_Stanislav%20Shurko.png"
          linkGit="https://github.com/StanislavShurko"
          linkInstagram="https://instagram.com/_stas_shurko_?igshid=YmMyMTA2M2Y="
          linkLinkedIn="https://www.linkedin.com/in/stanislav-shurko-7a202b243/"
        />
        <DevelopsInner
          name="Dima Dasko"
          content="I am Dima"
          post="Backend"
          img="https://i.pinimg.com/564x/4d/8d/89/4d8d89ea2e6d8e2630be4293d9682535.jpg"
          linkGit="https://github.com/DmitryDatsko"
          linkInstagram="https://instagram.com/d.dazko?igshid=YmMyMTA2M2Y="
          linkLinkedIn=""
        />
      </DevelopersInfo>
    </Content>
  );
}

export default DevelopsContent;
