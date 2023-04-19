import React from 'react';
import styled from 'styled-components';
import DevelopsInner from '../components/OurStory/DevelopsContent/DevelopsInner';
// import DoubleItems from '../components/OurStory/DoubleItems';
// import Main from '../components/OurStory/MainMotto';
// import DevelopsContent from '../components/OurStory/DevelopsContent';

const OurStoryWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Soehne web buch', sans-serif;
  flex-direction: column;
`;

const OurStoryDiv = styled.div`
  padding: 36px 0 36px 0;
`;

const MainText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`;

const MainCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 786px;
`;

const LogoWrapper = styled.div`
  background: #60BDC2;
  border-radius: 19px 19px 0px 0px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBlock = styled.div`
  padding: 6px 12px 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:first-child {
    padding: 24px 12px 12px 12px;
  }

  &:last-child {
    padding: 12px 12px 24px 12px;
  }
`;

const TextHeader = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const TextMain = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 12px 24px 12px 24px;
`;

const DevelopersInfo = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 780px;
    flex-wrap: wrap;
    width: 789px;
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

function OurStory() {
  return (
    // <>
    //   <Main />
    //   <DoubleItems />
    //   <DevelopsContent />
    // </>
    <OurStoryWrapper>
      <OurStoryDiv>
        <MainText>
          Про нас
        </MainText>
        <MainCard>
          <LogoWrapper>
            shurko.net
          </LogoWrapper>
          <MainContent>
            <TextBlock>
              <TextHeader>
                Кожна ідея має бути Почута
              </TextHeader>
              <TextMain>
                Найкращі ідеї можуть змінити нас.
                CircleCI – це місце, де ці ідеї набувають форми,
                злетіти та розпочати сильні розмови.
                Ми є відкритою платформою, де понад 100 мільйонів
                читачі знаходять проникливе та динамічне мислення
                . Тут занурюються як експертні, так і незнайомі голоси
                суть будь-якої теми та виводити нові ідеї на поверхню. Наша мета
                поширювати ці ідеї та поглиблювати розуміння світу.
              </TextMain>
            </TextBlock>
            <TextBlock>
              <TextHeader>
                Не соромтеся приєднатися.
              </TextHeader>
              <TextMain>
                Кожен може писати на CircleCI.
                Лідери думок, журналісти, експерти,
                і люди з унікальними перспективами діляться тут своїми думками.
                Ви знайдете твори незалежних письменників з усього світу,
                історій, які ми представляємо, і провідних авторів, і розумний розглядає наші
                власний пакет блогів і публікацій.
              </TextMain>
            </TextBlock>
          </MainContent>
        </MainCard>
      </OurStoryDiv>
      <MainText>
        Розробники
      </MainText>
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
    </OurStoryWrapper>
  );
}

export default OurStory;
