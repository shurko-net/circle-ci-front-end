import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SuggestionsBlock from './SuggestionsBlock';

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

const SuggestionsBody = styled.div`
    /* display: none; */
    
    background: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 576px) {
        display: block;
        border-radius: 1.25rem;
    }
    margin-bottom: 1.875rem;
`;

const Container = styled.div`
    padding: 1.25rem 1.4375rem 0 1.4375rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

// const Line = styled.div`
//   border: 1px solid #CCCCCC;
//   width: 100%;
//   margin-bottom: 1.1875rem;
// `;

const HeaderText = styled.h2`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875;
`;

const UserSuggestionContainer = styled.ul`
    li:last-child {
      margin-bottom: 1.25rem;
      padding-bottom: 0;
      border-bottom: none;
    }
`;

const LinkMore = styled(StyledLink)`
  justify-content: center;
  margin-bottom: 0.9375rem;
`;

const LinkText = styled.p`
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 1.23;
  color: #97D6DA;
`;

function Suggestions() {
  return (
    <SuggestionsBody>
      <Container>
        <Header>
          <HeaderText>Suggestions for you</HeaderText>
        </Header>
        {/* <Line /> */}
        <UserSuggestionContainer>
          <SuggestionsBlock
            img="https://i.pinimg.com/564x/a2/07/7d/a2077d4690a495b40769f4de5ebf4876.jpg"
            userName="Yaroslav Myronov"
          />
          <SuggestionsBlock
            img="https://i.pinimg.com/564x/cf/c7/4c/cfc74c4479e575340e767946296115c3.jpg"
            userName="Stas Shurko"
          />
          <SuggestionsBlock
            img="https://i.pinimg.com/564x/2d/9d/8b/2d9d8be66bd0f8441eb5cf8db66e5c1e.jpg"
            userName="Dima Datsko"
          />
          <SuggestionsBlock
            img="https://i.pinimg.com/564x/ce/fc/03/cefc032ab0948bb214d01525e7df0f87.jpg"
            userName="Dima Bondarenko"
          />
        </UserSuggestionContainer>
        <LinkMore to="/more">
          <LinkText>See more</LinkText>
        </LinkMore>
      </Container>
    </SuggestionsBody>
  );
}

export default Suggestions;
