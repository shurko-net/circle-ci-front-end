import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Post from '../components/Home/Post';

const Container = styled.div`
    max-width: 1336px;
    margin: auto;
    display: block;
    margin-top: 70px;
    padding: 40px 0 40px 0;
    text-align: center;
`;

const YourPosts = styled.div`
  text-align: left;
  padding: 40px 80px;
`;

function Saved() {
  const userId = useSelector((state: any) => state.user.id);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    axios.get('https://localhost:7260/api/Post')
      .then((res: any) => {
        setPosts(res.data.sort((a: any, b: any) => b.idPost - a.idPost));
      });
    setPosts(posts.filter((post: any) => post.postData.id.toString() === userId.toString()));
  }, []);

  return (
    <Container>
      <h1>Ваші пости</h1>
      <YourPosts>
        {posts.map((post: any, index: number) => <Post key={index} postData={post} />)}
      </YourPosts>
    </Container>
  );
}

export default Saved;
