import React, { useEffect, useState } from 'react';
import Profile, { ProfileProps } from '../components/Profile/Profile';
import Post from '../components/Post/Post';
import instance, { BASE_URL } from '../http';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { useAppSelector } from '../hook';
import { RootState } from '../store';

function ProfilePosts({ setSelectedImage, setSelectedBackgroundImage }:ProfileProps) {
  const userData = useAppSelector((state: RootState) => state.auth.user);
  const [fetching, setFetching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const { loadMoreRef, page } = useInfiniteScroll();
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    setFetching(true);
    if (totalCount === 0 || totalCount > posts.length) {
      instance.get(`${BASE_URL}/get-user-posts/${userData.id}/${page}`)
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
                fetching && <div />
            }
      </div>
    </>

  );
}

export default ProfilePosts;
