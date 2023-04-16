import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Post from '../components/Home/Post';

const Main = styled.div`
  margin-top: 70px;
`;

const Posts = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    axios.get('https://localhost:7260/api/Post')
      .then((res: any) => {
        setPosts(res.data.sort((a: any, b: any) => b.idPost - a.idPost));
      });
  }, []);

  return (
    <Main>
      <Posts>
        { posts.map((post: any, index: number) => <Post key={index} postData={post} />)}
      </Posts>
    </Main>
  );
}

export default Home;
