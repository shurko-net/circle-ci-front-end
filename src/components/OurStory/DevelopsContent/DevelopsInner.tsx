import React from 'react';
import styled from 'styled-components';
import '../../../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface DevelopsInnerProps {
  name: string;
  content: string;
  post: string;
  img: any;
  linkGit:string;
  linkInstagram:string;
  linkLinkedIn:string;
}

const CardFooter = styled.div`
  height: 316px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderFlip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: 25px;
`;

const Name = styled.h3`
    margin-left: 10px;
    font-size: 20px;
    color: #131515;
`;

const LatName = styled.h4`

display: inline-block; 
  font-size: 14px;
  color: grey;
`;

const ImgContainer = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
`;

const HeaderFlipBack = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding-top: 15px;
    padding-left: 10px;
`;

const Info = styled.div`
    margin-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
`;

const BackImg = styled.div`
    border-radius: 50%;
    width: 70px;
    height: 70px;
`;

const Txt = styled.p`
    text-align-last: left;
    line-height: 2;
    font-size: .95rem;
    color: grey;
    text-align: left;
`;

const Line = styled.div`
  border-bottom: 1px solid grey;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const A = styled.a`
    padding-left: 10px;
    padding-right: 10px;
    color: grey;
    &:hover {
      color: #333333;
    }
    transition: color 0.2s;
`;

const MainContainer = styled.div`
  position: relative;
  width: 23%;
  height: 100%;
`;

const TheFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  border-radius: 15px;
  padding: 0 15px;
  transition: 1s;
`;

const TheBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  transform: rotateY(180deg);
  border-radius: 15px;
  padding: 0 15px;
  transition: 1s;
  backface-visibility: hidden;
`;

const TheCard = styled.div`
  position: absolute;
  width: 325px;
  height:400px;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  &:hover ${TheFront} {
    transform: rotateY(180deg);
  }
  &:hover ${TheBack} {
    transform: rotateY(360deg);
  }
  perspective: 1000px;
`;

function DevelopsInner({
  name, content, post, img, linkGit, linkInstagram, linkLinkedIn,
}:DevelopsInnerProps) {
  return (
    <MainContainer>
      <TheCard>
        <TheFront>
          <HeaderFlip>
            <Name>{name}</Name>
            <LatName>{post}</LatName>
          </HeaderFlip>
          <CardFooter>
            <ImgContainer>
              <Img src={img} alt="Yaroslav" />
            </ImgContainer>
          </CardFooter>
        </TheFront>
        <TheBack>
          <HeaderFlipBack>
            <BackImg>
              <Img src={img} alt="Yaroslav" />
            </BackImg>
            <Name>{name}</Name>
          </HeaderFlipBack>
          <Info>
            <Line />
            <Txt>{content}</Txt>
            <Line />
            <Icons>
              <A href={linkGit}>
                <GitHubIcon fontSize="large" />
              </A>
              <A href={linkInstagram}>
                <InstagramIcon fontSize="large" />
              </A>
              <A href={linkLinkedIn}>
                <LinkedInIcon fontSize="large" />
              </A>
            </Icons>
          </Info>
        </TheBack>
      </TheCard>
    </MainContainer>
  );
}

export default DevelopsInner;
