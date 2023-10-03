import React, { useCallback, useEffect, useState } from 'react';
import instance, { BASE_URL } from '../../http';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Post from '../Post/Post';

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
          setFetching(false);
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
        {posts.map((post: any, index: number) => <Post key={index} postData={post} />)}
      </div>
      <div ref={loadMoreRef}>{fetching && <div>Loading</div>}</div>
    </>
  );
}

export default MainPosts;
