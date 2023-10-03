import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ThemeBlockProps {
  img?: string;
  header?: string;
  description?: string;
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
    border-bottom: 1px solid  #DCD9D9;
`;

const ImgLink = styled(StyledLink)`
    margin-right: 0.6875rem;
`;

const ThemeImg = styled.img`
    border-radius: 5px;
    width: 71px;
    height: 71px;
    background: #D9D9D9;
`;

const ThemeContent = styled.div`
    display: block;
    line-height: 1.3;
    max-height: 3.3125rem;
    flex-grow: 1;
    overflow: hidden;
`;

const ThemeLink = styled(StyledLink)`
    line-height: inherit;
    font-weight: 600;
    display: block;
`;

const ThemeHeader = styled.p`
    line-height: 1.1875;
    max-height: 3.375rem;
    overflow: hidden;
    display: flex;
    word-wrap: break-word;
    word-break: break-word;
`;

const ThemeHeaderText = styled.span`
    line-height: inherit;
    color: #000000;
`;

const ThemeMain = styled.div`
    line-height: inherit;
    word-wrap: break-word;
    word-break: break-word;
    
`;

const ThemeMainText = styled.p`
    line-height: inherit;
    overflow: hidden;
    font-size: 0.875rem;
    color: #414141;
`;

function ThemeBlock({ img, header, description }:ThemeBlockProps) {
  return (
    <Container>
      <ImgLink to="/theme">
        <ThemeImg src={img} />
      </ImgLink>
      <ThemeContent>
        <ThemeLink to="/theme">
          <ThemeHeader>
            <ThemeHeaderText>{header}</ThemeHeaderText>
          </ThemeHeader>
          <ThemeMain>
            <ThemeMainText>
              {description}
            </ThemeMainText>
          </ThemeMain>
        </ThemeLink>
      </ThemeContent>
    </Container>
  );
}

export default ThemeBlock;
