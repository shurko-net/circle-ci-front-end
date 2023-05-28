import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewPost from '../NewPost/NewPost';

function MainPosts() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    axios.get('https://localhost:44353/api/Post')
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
