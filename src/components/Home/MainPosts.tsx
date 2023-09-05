import React, { useEffect, useState } from 'react';
import NewPost from '../NewPost/NewPost';
import instance, { BASE_URL } from '../../http';

interface MainPostsProps {
  setIsLoading: (e: boolean) => void
}

function MainPosts({ setIsLoading }:MainPostsProps) {
  const [posts, setPosts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (e:any) => {
    if (e.target.documentElement.scrollHeight
        - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
    // console.log('scroolHeight', e.target.documentElement.scrollHeight);
    // console.log('scroolTop', e.target.documentElement.scrollTop);
    // console.log('innerHeight', window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      instance.get(`${BASE_URL}/posts-filter/10/true`)
        .then((res: any) => {
          console.log(res.data.posts);
          setPosts(res.data.posts.sort((a: any, b: any) => b.idPost - a.idPost));
          setIsLoading(false);
        });
    }
  }, [fetching]);

  return (
    <div>
      {posts.map((post: any, index: number) => <NewPost key={index} postData={post} />)}
    </div>
  );
}

export default MainPosts;
