import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const MainPost = styled.div`
   position: relative;
   top: 70px;
   padding-top: 56px;
   display: block;
`;

const Midle = styled.div`
   display: flex;
   justify-content: center;
`;

const ContentPost = styled.div`
   min-width:0;
   max-width: 1192px;
   width: 100%;
`;

const GridContent = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(8,1fr) repeat(4, minmax(48px, 1fr));
`;

const Start = styled.div`
    grid-row-start: 1;
    grid-column: 1 / span 7;
`;

const Block = styled.div`
    display: block;
`;

const PostsContent = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
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
                </PostsContent>
              </Block>
            </Start>
          </GridContent>
        </ContentPost>
      </Midle>
    </MainPost>
  );
}

export default MainPosts;
