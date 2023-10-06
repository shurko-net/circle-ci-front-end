import React, { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import instance, { BASE_URL } from '../../http';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Post from '../Post/Post';

const PreloaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// interface MainPostsProps {
//   setIsLoadingPage: (e: boolean) => void
// }

function MainPosts() {
  const [fetching, setFetching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const { loadMoreRef, page } = useInfiniteScroll();
  const [posts, setPosts] = useState<any>([]);

  const getPosts = useCallback(() => {
    if (totalCount === 0 || totalCount > posts.length) {
      setFetching(true);
      instance.get(`${BASE_URL}/get-posts/${page}`)
        .then((res: any) => {
          setPosts([...posts, ...res.data.sort((a: any, b: any) => b.idPost - a.idPost)]);
          setTotalCount(res.headers['x-total-count']);
        })
        .finally(() => setFetching(false));
    }
  }, [page]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (fetching) {
    return (
      <PreloaderContainer>
        <CircularProgress />
      </PreloaderContainer>
    );
  }

  return (
    <>
      <div>
        {posts.map((post: any, index: number) => (
          <Post
            key={index}
            postData={post}
            setPosts={setPosts}
          />
        ))}
      </div>
      <div ref={loadMoreRef}>{fetching && <CircularProgress />}</div>
    </>
  );
}

export default MainPosts;
