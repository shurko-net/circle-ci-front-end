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

function Home({ filterText }: { filterText?: any }) {
  const [posts, setPosts] = useState<any>([]);
  const [filteredPosts, setFilteredPosts] = useState<any>([]);

  useEffect(() => {
    axios.get('https://localhost:7260/api/Post')
      .then((res: any) => {
        const tempPosts = res.data.sort((a: any, b: any) => b.idPost - a.idPost);
        setPosts(tempPosts);
        setFilteredPosts(tempPosts);
      });
  }, []);

  useEffect(() => {
    setFilteredPosts(filterText
      ? filteredPosts.filter((post: any) => post.title.toLowerCase()
        .includes(filterText.toLowerCase()))
      : posts);
  }, [filterText]);

  return (
    <Main>
      <Posts>
        {filteredPosts.map(
          (post: any, index: number) => <Post filter={filterText} key={index} postData={post} />,
        )}
      </Posts>
    </Main>
  );
}

export default Home;
