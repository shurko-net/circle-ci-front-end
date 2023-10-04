import instance, { BASE_URL } from '../http';

function subscribe({ userId, setPosts, postData }:any) {
  instance.put(`${BASE_URL}/follow/${userId}`)
    .then((resp: any) => {
      setPosts((prevData: any) => prevData.map((post: any) => {
        if (post.userId === postData.userId) {
          return {
            ...post,
            isFollow: resp.data.isFollowed,
          };
        }
        return post;
      }));
    });
}

export default subscribe;
