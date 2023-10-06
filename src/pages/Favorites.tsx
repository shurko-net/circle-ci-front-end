import React, { useEffect, useState } from 'react';
import Profile, { ProfileProps } from '../components/Profile/Profile';
import Post from '../components/Post/Post';
import instance, { BASE_URL } from '../http';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

function Favorites({ setSelectedImage, setSelectedBackgroundImage }:ProfileProps) {
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const { loadMoreRef, page } = useInfiniteScroll();
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    if (totalCount === 0 || totalCount > posts.length) {
      instance.get(`${BASE_URL}/get-saved-posts/${page}`)
        .then((res: any) => {
          setPosts([...posts, ...res.data.sort((a: any, b: any) => b.idPost - a.idPost)]);
          setTotalCount(res.headers['x-total-count']);
        })
        .finally(() => setFetching(false));
    }
  }, []);
  return (
    <>
      <Profile
        setSelectedImage={setSelectedImage}
        setSelectedBackgroundImage={setSelectedBackgroundImage}
      />

      <section>
        {posts.map((post: any, index: number) => (
          <Post
            key={index}
            postData={post}
            setPosts={setPosts}
            fetching={fetching}
          />
        ))}
      </section>
      <div ref={loadMoreRef}>
        {
              fetching && <div>Loading...</div>
          }
      </div>
    </>

  );
}

export default Favorites;
