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
          img="https://qph.cf2.quoracdn.net/main-qimg-95f2dedd6d8b68a90a9f318b6f13b142.webp"
          linkGit="https://github.com/Yaroslavmyronov?tab=repositories"
          linkInstagram="https://instagram.com/jarik.mironov223?igshid=YmMyMTA2M2Y="
          linkLinkedIn="https://www.linkedin.com/in/yaroslav-myronov-807345254/"
        />
        <DevelopsInner
          name="Stas Shurko"
          content="Heeeeeellloooo, I am Stanislav. I'm Full-Stack developer in Munich. I like to play a guitar, playing chess, playing in my PS and, of course, CODDING!"
          post="Fullstack"
          img="https://uploads-ssl.webflow.com/60b9f6b57e8d7b3b3b1de1f2/632b263205d8cb1d2d80e710_Stanislav%20Shurko.png"
          linkGit=""
          linkInstagram=""
          linkLinkedIn=""
        />
        <DevelopsInner
          name="Dima Dasko"
          content="I am Dima"
          post="Backend"
          img="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120928/4054796-pigfly.JPG"
          linkGit=""
          linkInstagram=""
          linkLinkedIn=""
        />
      </DevelopersInfo>
    </Content>
  );
}

export default DevelopsContent;
