import React from 'react';
import styled from 'styled-components';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const Container = styled.div`
    max-width: 368px;
    min-width: 368px;
    display: block;
    padding-left: 40px;
    min-height: 100vh;
    border-left: 1px solid rgba(242, 242, 242, 1);
    box-sizing: border-box;
    padding-right: 24px;
    background-color: rgba(255, 255, 255, 1);
`;

const Block = styled.div`
    position: relative;
    height: 100%;
    display: inline-block;
    width: 100%;
    margin-top: 52px;
`;

const Sticky = styled.div`
    position: sticky;
    top: 57px;
    margin-top: 0px;
    display: block;
`;

const TextH2 = styled.h2`
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 500;
    color: rgba(41, 41, 41, 1);
    line-height: 20px;
`;

const InfoText = styled.div`
    padding-top: 16px;
    display: block;
`;

const InfoTextP = styled.p`
    color: rgba(117, 117, 117, 1);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
`;

const ImgContainer = styled.div`
    margin-bottom: 2px;
    vertical-align: middle;
    display: inline;
`;

function AccountSideBar() {
  return (
    <Container>
      <Block>
        <Sticky>
          <TextH2>Reading list</TextH2>
          <InfoText>
            <InfoTextP>
              Click the
              <ImgContainer>
                <BookmarkAddIcon />
              </ImgContainer>

              on any story to easily add it to your reading
              list or a custom list that you can share.
            </InfoTextP>
          </InfoText>
        </Sticky>
      </Block>
    </Container>

  );
}

export default AccountSideBar;
