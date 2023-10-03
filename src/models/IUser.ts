export interface IUser {
  id: number,
  name: string,
  surname: string,
  profileImageUrl: string,
  backgroundImageUrl: string,
  biography: string,
  followersAmount: number,
  commentsAmount: number,
  postsAmount: number,
  isMyself: boolean,
  isFollowed: boolean
}
