import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeBlock from './ThemeBlock';

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

const ThemesBlock = styled.div`
    /* display: none; */
    /* border-radius: 1.25rem; */
    background: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 576px) {
      border-radius: 1.25rem;
    }
    margin-bottom: 1.875rem;
`;

const ThemesContainer = styled.div`
  @media screen and (min-width: 576px) {
    padding: 1.25rem 1.4375rem 0 1.4375rem;
  }
  padding: 1.25rem 1rem 0 1rem;
    
`;

const HeaderTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
`;

const HeaderText = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875;
`;

// const Line = styled.div`
//   border: 1px solid #CCCCCC;
//   width: 100%;
//   margin-bottom: 1.1875rem;
// `;

const ThemeContainer = styled.ul`
    li:last-child {
      margin-bottom: 1.25rem;
      border-bottom: none;
      padding-bottom: 0;
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

function Themes() {
  return (
    <ThemesBlock>
      <ThemesContainer>
        <HeaderTextContainer>
          <HeaderText>Interesting themes</HeaderText>
        </HeaderTextContainer>
        {/* <Line /> */}
        <ThemeContainer>
          <ThemeBlock
            img="https://i.pinimg.com/564x/2d/4e/dc/2d4edc38e922e420ab881a8f55bdadac.jpg"
            header="Juice WRLD"
            description="I'd do anything in my power to see you just smile
            I want you to prosper and come proper
            Even if that means I ain't by your side "
          />
          <ThemeBlock
            img="https://i.pinimg.com/564x/d7/d2/d3/d7d2d3b647090a0fa3b927eec93b6e1b.jpg"
            header="Xxxtentacion stich"
            description="Who am I? Someone that's afraid to let go, uh
            You decide, if you're ever gonna let me know, yeah
            Suicide, if you ever try to let go, uh"
          />
          <ThemeBlock
            img="https://i.pinimg.com/564x/47/83/c4/4783c400aa4ae919a3b5b4ea03c4fbb2.jpg"
            header="LIL PEEP"
            description="I met her by chance
            I said, I really like your pants
            I know you got a man"
          />
          <ThemeBlock
            img="https://i.pinimg.com/564x/58/e4/6e/58e46e62509b5a3539d456bd567642c4.jpg"
            header="Mac Miller"
            description="I spent the whole day in my head
            Do a little spring cleaning, I'm always too busy dreaming
            Well, maybe I should wake up instead"
          />

        </ThemeContainer>
        <LinkMore to="/more">
          <LinkText>See more</LinkText>
        </LinkMore>
      </ThemesContainer>
    </ThemesBlock>
  );
}

export default Themes;
