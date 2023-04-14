import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
`;

const Main = styled.main`
    /* margin: 0 auto; */
    top: 100px;
    /* padding-bottom: 100px; */
    flex: 1 1 auto;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    left: 0;
`;

const Body = styled.div`
    margin: 0 auto;
    max-width: 1330px;
    padding: 0px 15px;
`;

const PostContainer = styled.div`
    max-width: 897px;
`;

const SidebarBody = styled.div`
    max-width: 404px;
`;

const PostBody = styled.div`
    max-width: 786px;
    max-height: 968px;
    border-radius: 15px;
    display: flex;
`;

const PostHeader = styled.div`
    display: flex;
`;

const PostHeaderAvatar = styled.div`
    flex: 0 0 48px;
    height: 48px;
    border-radius: 50%;
    background: red;
`;

const PostHeaderimg = styled.img`
    
`;

const NicknameBody = styled.div`
    margin-left: 8px;
    flex-wrap: wrap;
    align-items: center;
    display: flex;
`;

const NicknameItems = styled.div`
    display: flex;
    align-items: center;
`;

const Nickname = styled.h4`
  
`;

const PostImage = styled.div`
    flex: 0 0 768px;
    min-height: 528px;
    background: blue;    
`;

function NewMain() {
  return (
    <Main>
      <Container>
        <Body>
          <PostContainer>
            <PostBody>
              <PostHeader>
                <PostHeaderAvatar>
                  <PostHeaderimg />
                </PostHeaderAvatar>
                <NicknameBody>
                  <NicknameItems>
                    <StyledLink to="/user">
                      <Nickname>nickname</Nickname>
                    </StyledLink>
                  </NicknameItems>
                </NicknameBody>
              </PostHeader>
              <PostImage>
                <PostHeaderimg />
              </PostImage>
            </PostBody>
          </PostContainer>
          <SidebarBody />
        </Body>
      </Container>
    </Main>
  );
}

export default NewMain;
