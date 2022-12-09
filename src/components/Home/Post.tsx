import React from 'react';
import styled from 'styled-components';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100%;
    width: 100%;
    margin-bottom: 48px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
`;

const Description = styled.div`
    margin-right: 20px;
    min-width: 0;
    width: 100%;
    display: block;
`;

const Img = styled.div`
    
`;

const User = styled.div`
    padding-bottom: 8px;
    display: block;
`;

const UserContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const UserImgBlock = styled.div`
    position: relative;
    display: block;
`;

const UserImg = styled.img`
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: rgba(242, 242, 242, 1);
    box-sizing: border-box;
`;

const UserNameContainer = styled.div`
    display: flex;
    margin-left: 8px;
    flex-wrap: wrap;
    align-items: center;
`;

const UserNameBlock = styled.div`
    height: 16px;
    display: block;
`;

const A = styled.a`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
    text-decoration: none;
`;

const UserNameText = styled.h4`
    padding-right: 2px;
    word-break: break-all;
    max-height: 16px;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    overflow: hidden;
    color: rgba(41, 41, 41, 1);
`;

const Title = styled.h4`
    max-height: 56px;
    line-height: 28px;
    font-size: 22px;
    color: rgba(41, 41, 41, 1);
    overflow: hidden;
    font-weight: 700;
    text-overflow: ellipsis;
    display: -webkit-box;
`;

const BlockContent = styled.div`
    padding-top: 4px;
    display: block;
`;

const PostContent = styled.h4`
    max-height: 40px;
    text-overflow: ellipsis;
    color: rgba(117, 117, 117, 1);
    font-size: 16px;
    overflow: hidden;
    line-height: 20px;
    font-weight: 400;
`;

const DataPost = styled.div`
    display: flex;
    padding-top: 8px;
    align-items: center;
    justify-content: space-between;
    width: 62%;
`;

const DataPostContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 0;
    line-height: 20px;
    font-weight: 400;
    white-space: nowrap;
`;

const Date = styled.span`
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-weight: 400;
`;

const Dot = styled.div`
    top: -7px;
    padding-right: 6px;
    padding-left: 6px;
    height: 100%;
    position: relative;
    display: block;
`;

const SpanDot = styled.span`
    display: block;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-size: 20px;
    font-weight: 400;
`;

const TimeRead = styled.span`
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-weight: 400;
    white-space: nowrap;
`;

const Categories = styled.div`
    border-radius: 100px;
    padding: 2px 8px;
    white-space: nowrap;
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    background-color: rgba(242, 242, 242, 1);
    position: relative;
    line-height: 20px;
    &:hover {
        transition: 300ms ease 0s;
        background-color: #868585; ;
    }
`;

// const BookmarksContainer = styled.div`
//     display: flex;
// `;

function Post() {
  return (
    <Container>
      <Content>
        <Description>
          <User>
            <UserContent>
              <a href="/https://mail.google.com/mail/u/0/">
                <UserImgBlock>
                  <UserImg src="data:image/jpeg;base64,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" />
                </UserImgBlock>
              </a>
              <UserNameContainer>
                <UserNameBlock>
                  <A href="https://www.google.com/">
                    <UserNameText>Yaroslav</UserNameText>
                  </A>
                </UserNameBlock>
              </UserNameContainer>
            </UserContent>
            <A href="/https://mail.google.com/mail/u/0/">
              <Title>Name Post</Title>
              <BlockContent>
                <PostContent>
                  Why breakthrough technologies need to be accessible
                </PostContent>
              </BlockContent>
            </A>
            <DataPost>
              <DataPostContainer>
                <Date>
                  Dec 8
                </Date>
                <Dot>
                  <SpanDot>.</SpanDot>
                </Dot>
                <TimeRead>4 min read</TimeRead>
                <Dot>
                  <SpanDot>.</SpanDot>
                </Dot>
                <A href="google">
                  <Categories>Name Categories</Categories>
                </A>
              </DataPostContainer>
              <Link to="/saved" className="decoration-off" style={{ height: '24px' }}>
                <BookmarkAddedIcon />
              </Link>
            </DataPost>
          </User>
        </Description>
        <Img />
      </Content>
    </Container>
  );
}

export default Post;
