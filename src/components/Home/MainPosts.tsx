import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import NewPost from '../NewPost/NewPost';
import instance from '../../http';

function MainPosts() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    instance.get('https://localhost:44353/api/all-posts')
      .then((res: any) => {
        setPosts(res.data.sort((a: any, b: any) => b.idPost - a.idPost));
      });
  }, []);

  return (
    <div>
      {posts.map((post: any, index: number) => <NewPost key={index} postData={post} />)}
    </div>
  );
}

export default MainPosts;
