import React from 'react';
import styled from 'styled-components';
import '../../../App.css';

interface DevelopsInnerProps {
  name: string;
  content: string;
  post: string;
}

const Inner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    /* padding: 20px; */
`;

const FlipContainer = styled.div`

    width: 325px;
    height: 400px;
    &:hover .flip {
        transform: rotateY(180deg);
        
    }
    /* display: inline-block; */
    perspective: 1000px;
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
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    
    
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
   /* display: inline-block; */
`;

const HeaderFlip = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px 0;
`;

const Name = styled.h3`

    font-size: 20px;
    color: #131515;
`;

const LatName = styled.h4`

/* display: inline-block; */
    font-size: 14px;
    color: grey;
`;

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 250px;
    height: 250px;
    
    
`;

const HeaderFlipBack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 10px 0;
    justify-content: flex-start;
`;

const Info = styled.div`
    /* text-align: justify; */
    
`;

const BackImg = styled.div`
    position: relative;
    border-radius: 50%;
    width: 70px;
    height: 70px;
`;

function DevelopsInner({ name, content, post }:DevelopsInnerProps) {
  return (
    <Inner>
      <FlipContainer>
        <div className="flip">
          <Front>
            <HeaderFlip>
              <Name>{name}</Name>
              <LatName>{post}</LatName>
            </HeaderFlip>
            <ImgContainer>
              <Img src="data:image/jpeg;base64,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" alt="Yaroslav" />
            </ImgContainer>
          </Front>
          <Back>
            <HeaderFlipBack>
              <BackImg>
                <Img src="data:image/jpeg;base64,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" alt="Yaroslav" />
              </BackImg>
              <Name>{name}</Name>
            </HeaderFlipBack>
            <Info>
              {content}
            </Info>
          </Back>
        </div>
      </FlipContainer>
    </Inner>

  );
}

export default DevelopsInner;
