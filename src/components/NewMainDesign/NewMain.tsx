import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import NewSidebar from '../NewSidebar/NewSidebar';

interface NewMainProps {
  selectedImage: string;
}

// const StyledLink = styled(Link)`
//     cursor: pointer;
//     margin: 0;
//     padding: 0;
//     font-weight: inherit;
//     letter-spacing: inherit;
//     font-family: inherit;
//     border: inherit;
//     font-size: inherit;
//     fill: inherit;
//     color: inherit;
//     display: flex;
//     text-decoration: none;
// `;

const MainContainer = styled.div`
    padding-top: 100px;
    flex: 1 1 auto;
    max-width: 100%;
    background-color: #e8e8e8;
`;

const Container = styled.div`
    margin: -100px auto 0;
    padding: 100px 0 0;
    max-width: 100%;
    max-width: 576px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 576px) {
      overflow: unset;
    }
    @media screen and (min-width: 767.98px) {
      max-width: unset;
      width: 720px;
    }
    @media screen and (min-width: 991.98px) {
      width: 960px;
    }
    @media screen and (min-width: 1300px) {
      width: 1330px;
      padding: 100px 15px 0;
    }
`;

const Body = styled.div`
  display: grid;
  
  row-gap: 26px;
  
  
  grid-template-columns: minmax(0,1fr);
  grid-template-areas:
    "sidebar ."
    "main .";
  ;
  @media screen and (min-width: 576px) {
    column-gap: 26px;
    margin: 54px 0;
  }
  @media screen and (min-width: 767.98px) {
    grid-template-areas:
        "sidebar ."
        "main .";
    grid-template-columns: minmax(0,786px) minmax(0,auto);
  }
  @media screen and (min-width: 991.98px) {
    grid-template-areas: "main sidebar";
    grid-template-columns: minmax(0,786px) minmax(0,378px);
  }
 
`;

const Main = styled.main`
  grid-area: main;
`;

const MainRelative = styled.div`
  position: relative;
`;

function NewMain({ selectedImage }:NewMainProps) {
  return (
    <MainContainer>
      <Container>
        <Body>
          <Main>
            <MainRelative>
              <Outlet />
            </MainRelative>
          </Main>
          <NewSidebar selectedImage={selectedImage} />
        </Body>
      </Container>
    </MainContainer>
  );
}

export default NewMain;
