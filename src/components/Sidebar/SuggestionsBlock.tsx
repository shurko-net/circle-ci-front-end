import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../NewButton';

interface ThemeBlockProps {
  img?: string;
  userName?: string;
}

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
    display: flex;
    text-decoration: none;
`;

const Container = styled.li`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #DCD9D9;
    justify-content: space-between;
`;

const ImgLink = styled(StyledLink)`
    margin-right: 0.6875rem;
    border: none;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 59px;
    height: 59px;
    background: #D9D9D9;
    box-sizing: border-box;
    background-clip: content-box;
    border: none;
    box-shadow: none;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.3;
    max-height: 3.3125rem;
    flex-grow: 1;
    overflow: hidden;
`;

const UserLink = styled(StyledLink)`
    line-height: inherit;
    font-weight: 600;
    display: block;
`;

const Header = styled.p`
    line-height: 1.1875;
    max-height: 3.375rem;
    overflow: hidden;
    display: flex;
    word-wrap: break-word;
    word-break: break-word;
`;

const HeaderText = styled.span`
    line-height: inherit;
    color: #414141;
`;

const LeftContent = styled.div`
    display: flex;
    /* margin-right: 0.5rem; */
`;

const LeftContentTextContainer = styled.div`
    margin-right: 0.5rem;
`;

const RightContentButton = styled(Button)`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    min-width: 6.4rem;
    max-width: 480px;
    overflow: hidden;
    text-align: center;
    transition-property: background-color,box-shadow,color;
    vertical-align: middle;
    background-color: #fff;
    border-color: rgb(117, 117, 117);
    border-width: 1px;
    border-style: solid;
`;

const RightContentButtonText = styled.span``;

const LeftContentTextBiographyContainer = styled.div`
    word-break: break-word;
    display: block;
`;

const LeftContentTextBiography = styled.p`
    font-weight: 400;
    line-height: 1.539;
    color: rgba(117, 117, 117, 1);
    font-size: 0.8125rem;
    overflow: hidden;
    text-overflow: ellipsis;
`;

function SuggestionsBlock({ img, userName }:ThemeBlockProps) {
  return (
    <Container>
      <LeftContent>
        <ImgLink to="/theme">
          <Img src={img} />
        </ImgLink>
        <LeftContentTextContainer>
          <Content>
            <UserLink to="/theme">
              <Header>
                <HeaderText>{userName}</HeaderText>
              </Header>
            </UserLink>
          </Content>
          <StyledLink to="/user">
            <LeftContentTextBiographyContainer>
              <LeftContentTextBiography>
                Hi friends, I am a front-end engineer from Alibaba, let’s
              </LeftContentTextBiography>
            </LeftContentTextBiographyContainer>
          </StyledLink>
        </LeftContentTextContainer>
      </LeftContent>
      <RightContentButton
        borderRadius="1rem"
        padding="0.375rem 1rem 0.375rem 1rem"
      >
        <RightContentButtonText>Follow</RightContentButtonText>
      </RightContentButton>
    </Container>
  );
}

export default SuggestionsBlock;
