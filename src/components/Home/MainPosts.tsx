import React, { useCallback, useEffect, useState } from 'react';
import NewPost from '../NewPost/NewPost';
import instance, { BASE_URL } from '../../http';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

interface MainPostsProps {
  userId: number
}

// interface MainPostsProps {
//   setIsLoadingPage: (e: boolean) => void
// }

function MainPosts({ userId }:MainPostsProps) {
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const { loadMoreRef, page } = useInfiniteScroll();
  const [posts, setPosts] = useState<any>([]);

  const getPosts = useCallback(() => {
    if (totalCount === 0 || totalCount > posts.length) {
      // setFetching(true);
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

  return (
    <>
      <div>
        {posts.map((post: any, index: number) => (
          <NewPost
            key={index}
            postData={post}
            setPosts={setPosts}
            userId={userId}
            fetching={fetching}
          />
        ))}
      </div>
      <div ref={loadMoreRef} />
    </>
  );
}

export default MainPosts;
