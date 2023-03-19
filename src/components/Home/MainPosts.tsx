import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Post from './Post';

const MainPost = styled.div`
   position: relative;
   top: 70px;
   display: block;
   display: flex;
   justify-content: center;
   flex-direction: column;
   padding: 0 400px;
   @media (min-width: 1080px) {
    padding-top: 32px;
   }
   @media (max-width: 1079.98px) {
    padding-top: 32px;
   }
   @media (max-width: 903.98px) {
    padding-top: 10px;
   }
`;

function MainPosts() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    axios.get('https://localhost:7297/api/Post')
      .then((res: any) => {
        setPosts(res.data.sort((a: any, b: any) => b.idPost - a.idPost));
      });
  }, []);

  return (
    <MainPost>
      <div>
        {posts.map((post: any, index: number) => <Post key={index} postData={post} />)}
      </div>
    </MainPost>
  );
}

export default MainPosts;
