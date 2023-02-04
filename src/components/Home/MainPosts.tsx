import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import CategoriesLink from './CategoriesLink';
import Navbarlink from './Navbarlink';

const MainPost = styled.div`
   position: relative;
   top: 70px;
   display: block;
   @media (min-width: 1080px) {
    padding-top: 56px;
   }
   @media (max-width: 1079.98px) {
    padding-top: 56px;
   }
   @media (max-width: 903.98px) {
    padding-top: 40px;
   }
`;

const Midle = styled.div`
   display: flex;
   justify-content: center;
`;

const ContentPost = styled.div`
   min-width:0;
   max-width: 1192px;
   width: 100%;
   @media (min-width: 1080px) {
    margin: 0 64px;
   }
   @media (min-width: 904px) and (max-width: 1079.98px) {
    margin: 0 64px;
   }
   @media (min-width: 728px) and (max-width: 903.98px) {
    margin: 0 48px;
   }
   @media (min-width: 552px) and (max-width: 727.98px) {
    margin: 0 24px;
   }
   @media (max-width: 551.98px) {
    margin: 0 24px;
   }
`;

const GridContent = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    @media (min-width: 1080px) {
      grid-template-columns: repeat(8,1fr) repeat(4, minmax(48px, 1fr));
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
    grid-column-gap: 32px;
    grid-template-columns: repeat(8,1fr) repeat(4, minmax(48px, 1fr));
    }
    @media (max-width: 903.98px) {
    grid-template-columns: 1fr;
    }
    @media (min-width: 552px) and (max-width: 727.98px) {
    margin: 0 24px;
    }
    @media (max-width: 551.98px) {
    margin: 0 24px;
    }
`;

const Start = styled.div`
    @media (min-width: 1080px) {
      grid-row-start: 1;
      grid-column: 1 / span 7;
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
      grid-row-start: 1;
      grid-column: 1 / span 8;
    }
`;

const Block = styled.div`
    display: block;
`;

const PostsContent = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: block;
`;

const Categories = styled.div`
    grid-column: 9 / span 4;
`;

const CategoriesContent = styled.div`
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  display: block;
  /* padding-bottom: 24px; */
`;

const CategoriesContainer = styled.div`
    display: block;
`;

const CategoriesHeader = styled.div`
    margin-bottom: 16px;
    display: block;
`;

const CategoriesP = styled.p`
    text-transform: uppercase;
    letter-spacing: 0.083em;
    line-height: 16px;
    font-size: 12px;
    font-weight: 700;
`;

const CategoriesLinks = styled.div`
    display: block;
    padding-bottom: 24px;
`;

const CategoriesNavBar = styled.div`
  display: flex;
  padding: 24px 0;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CategoriesContentUp = styled.div`
  top: 107px;
  position: sticky;
  display: block;
`;

function MainPosts() {
  return (
    <MainPost>
      <Midle>
        <ContentPost>
          <GridContent>
            <Start>
              <Block>
                <PostsContent>
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                </PostsContent>
              </Block>
            </Start>
            <Categories>
              <CategoriesContentUp>
                <CategoriesContent>
                  <CategoriesContainer>
                    <CategoriesHeader>
                      <CategoriesP>Discover more of what matters to you</CategoriesP>
                    </CategoriesHeader>
                  </CategoriesContainer>
                  <CategoriesLinks>
                    <CategoriesLink name="Programing" />
                    <CategoriesLink name="Data Science" />
                    <CategoriesLink name="Technology" />
                    <CategoriesLink name="Self Improvement" />
                    <CategoriesLink name="Writing" />
                    <CategoriesLink name="Relationships" />
                    <CategoriesLink name="Machine Learning" />
                    <CategoriesLink name="Productivy" />
                    <CategoriesLink name="Politics" />
                  </CategoriesLinks>
                </CategoriesContent>
                <CategoriesNavBar>
                  <Navbarlink name="Help" />
                  <Navbarlink name="Status" />
                  <Navbarlink name="Writes" />
                  <Navbarlink name="Blog" />
                  <Navbarlink name="Careers" />
                  <Navbarlink name="Privacy" />
                  <Navbarlink name="Terms" />
                  <Navbarlink name="About" />
                  <Navbarlink name="Text to speech" />
                </CategoriesNavBar>
              </CategoriesContentUp>
            </Categories>
          </GridContent>
        </ContentPost>
      </Midle>
    </MainPost>
  );
}

export default MainPosts;
