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

const Inner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const FlipContainer = styled.div`
    height: 400px;
    &:hover .flip {
        transform: rotateY(180deg);
    }
    
`;

const CardFooter = styled.div`
  height: 316px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Front = styled.div`
    width: 325px;
    height: 400px;
    background: white;
    border-radius: 15px;
    padding: 0 15px;
    flex-direction: column;
    justify-content: space-between;
    transform: rotateY(0);  
`;

const Back = styled.div`
    width: 325px;
    height: 400px;
    background: white;
    border-radius: 15px;
    padding: 0 15px;
    flex-direction: column;
    justify-content: space-between;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
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

/* display: inline-block; */
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
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding-top: 15px;
    padding-left: 10px;
    justify-content: flex-start;
`;

const Info = styled.div`
    /* text-align: justify; */
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
    padding-left: 15px;
    padding-right: 15px;
`;

const BackImg = styled.div`
    border-radius: 50%;
    width: 70px;
    height: 70px;
`;

const Txt = styled.p`
    line-height: 2;
    font-size: .95rem;
    color: grey;
    text-align: left;
`;

const Line = styled.div`
  border-bottom: 1px solid grey;
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

function DevelopsInner({
  name, content, post, img, linkGit, linkInstagram, linkLinkedIn,
}:DevelopsInnerProps) {
  return (
    <Inner>
      <FlipContainer>
        <div className="flip">
          <Front>
            <HeaderFlip>
              <Name>{name}</Name>
              <LatName>{post}</LatName>
            </HeaderFlip>
            <CardFooter>
              <ImgContainer>
                <Img src={img} alt="" />
              </ImgContainer>
            </CardFooter>
          </Front>
          <Back>
            <HeaderFlipBack>
              <BackImg>
                <Img src={img} alt="" />
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
          </Back>
        </div>
      </FlipContainer>
    </Inner>

  );
}

export default DevelopsInner;
