// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faCommentDots, faEye, faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import { useAppDispatch, useAppSelector } from '../hook';
import instance from '../http';
import {
  setComment, setLiked, setLikes, setPost,
} from '../store/slices/postSlice';
import checkEvenOrOddTime from '../lib/checkEvenOrOddTime';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import { useDispatch, useSelector } from 'react-redux';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import Container from '../components/Container';
// import Flex from '../components/Flex';
// import {
//   setPost, setLikes, setLiked,
// } from '../store/slices/postSlice';
// import Button from '../components/Button';
// import UserImg from '../components/UserImg';
// import { setFolowers } from '../store/slices/userSlice';
// import instance from '../http';

// interface PostProps {
//   fillIcon?: string;
// }

const Container = styled.div`

`;

const PostBody = styled.div`
  background-color: #fff;
  position: relative;
  margin-bottom: 0.75rem;
  border-radius: 1.25rem;
`;

const PostContent = styled.div`
  
`;

const PostPanel = styled.div`
  /* position: sticky; */
  /* bottom: env(safe-area-inset-bottom,0); */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* z-index: 5; */
  background-color: #fff;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
`;

const PostContentContainer = styled.article`
  box-sizing: border-box;
  padding: 1rem 1rem 0;
  @media (min-width: 1024px) {
    padding: 1rem 1.25rem;
  }
`;

const PostContentHeader = styled.div`
  position: relative;
`;

const PostContentHeaderBody = styled.div`
    margin-bottom: 0.5rem;
`;

const PostContentHeaderHeaderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const PostContentHeaderHeaderBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0.5rem;
  align-items: center;
`;

const PostContentHeaderHeaderUser = styled.span`
  margin: 0 0.3125rem 0 0 ;
  display: flex;
`;

const PostContentHeaderHeaderUserImgLink = styled(Link)`
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  margin: 0 0.5rem 0 0; 
  max-width: 100%;
  overflow: hidden;
  vertical-align: middle;
`;

const PostContentHeaderHeaderUserImgDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const PostContentHeaderHeaderUserImg = styled.img`
    border-radius: 3px;
    display: block;
    overflow: hidden;
    width: 24px;
    height: 24px;
`;

const PostContentHeaderHeaderUserInfo = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const PostContentHeaderHeaderUserInfoUsername = styled(Link)`
    font-size: .8125rem;
    font-weight: 700;
    line-height: .9375rem;
    text-decoration: none;
    color: #333;
    display: inline-block;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
`;

const PostContentHeaderHeaderUserInfoDateTimePublished = styled.span`
      color: #777;
    display: inline-block;
    font-size: .8125rem;
    font-weight: 500;
    line-height: .9375rem;
    margin: 0;
    vertical-align: middle;
`;

const PostContentHeaderHeaderUserInfoDateTime = styled.time`
`;

const PostTitleH1 = styled.h1`
  overflow-x: auto;
  word-break: break-word;
  margin: 0 0 8px;
  font-family: Fira Sans,sans-serif;
  color: #333;
  font-size: 1.5rem;
  line-height: 1.3;
`;

const ArticleBody = styled.div`
  box-sizing: border-box;
  padding-top: 1rem;
`;

const ArticleFormattedBody = styled.div`
  color: #111;
  font-size: 1rem;
  line-height: 1.56;
  overflow-wrap: break-word;
  & img {
    height: 100%!important;
    width: 100%!important;
  }
`;

const ArticlePresenterMeta = styled.div`
  box-sizing: border-box;
  color: #548eaa;
  font-size: 1rem;
  line-height: 180%;
  margin: 24px 0;
  max-width: 780px;
`;

const ArticlePresenterMetaList = styled.div`

`;

const ArticlePresenterMetaTitle = styled.span`
  color: #444;
  font-weight: 700;
  margin-right: 4px;
`;

const SeparatedListList = styled.ul`
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SeparatedListItem = styled.div`
    display: inline-block;
    padding: 0;
`;

const PostPanelIcons = styled.div`
  @media (min-width: 1024px) {
    padding: 0 20px;
  }
  background-color: #fff;
  border-top: 1px solid #d5dddf;
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;
  min-width: 320px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  
  button:not(:first-child) {
    margin-left: 32px;
  }
`;

const PostPanelButton = styled.button`
    /* margin-left: 32px; */
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    transition: none;
    @media (min-width: 1024px) {
      cursor: pointer;
    }
    position: relative;
    background: none;
    border: 0;
    box-shadow: none;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

const ImgIconWrapper = styled.span`
  color: #bdcdd6;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  svg:hover {
    color: #000000;
  }
`;

const ButtonCounter = styled.span`
    color: #798e98;
    font-size: .8125rem;
    font-weight: 700;
    line-height: 1;
`;

const ImgIcon = styled(FontAwesomeIcon)`
    width: 1.5rem;
    height: 1.5rem;
`;

const ArticleBlocksComments = styled.div`
  
`;

const CommentsWrapper = styled.div`

`;

const CommentsWrapperWrapper = styled.div`
    background-color: #fff;
    border-radius: 1.25rem;
    margin-bottom: 24px;
`;

const CommentsWrapperHeader = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  min-height: 55px;
  padding: 15px 16px;
`;

const CommentsWrapperInner = styled.div`
    
`;

const CommentsWrapperTitle = styled.h2`
    color: #333;
    font-size: .875rem;
    font-weight: 700;
    margin: 0 auto 0 0;
`;

const CommentsWrapperCommentsCount = styled.span`
  color: #4b8eab;
  margin: 0 0 0 6px;
`;

const CommentsTree = styled.div`
    box-sizing: border-box;
    padding: 16px 0 0;
`;

const CommentThread = styled.section`
    position: relative;
`;

const CommentThreadComment = styled.article`
    position: relative;
    padding: 0 16px 12px;
`;

const CommentThreadIndent = styled.div`
  @media (min-width: 1024px) {
    margin-left: 12px;
  }
  margin-left: 2px;
`;

const Comment = styled.div`
    position: relative;
    transition: opacity .3s ease;
`;

const CommentHeader = styled.header`
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    height: 24px;
    margin: -4px;
    padding: 4px;
    position: relative;
    content-visibility: auto;
    contain-intrinsic-size: 1px 24px;
`;

const CommentHeaderinner = styled.div`
    display: flex;
    margin: 0 4px 0 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CommentUserInfo = styled.span`
    align-items: center;
    display: flex;
    max-width: 100%;
`;

const UserInfoUserpic = styled(Link)`
    border-radius: 3px;
    display: inline-block;
    flex-shrink: 0;
    margin: 0 8px 0 0;
    max-width: 100%;
    overflow: hidden;
    vertical-align: middle;
`;

const EntityImage = styled.div`
    height: 100%;
    width: 100%;
`;

const EntityImagePic = styled.img`
    border-radius: 3px;
    display: block;
    overflow: hidden;
    height: 24px;
    width: 24px;
`;

const UserInfoUser = styled.span`
  @media (min-width: 768px) {
    align-items: baseline;
    flex-direction: row;
  }
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const UserInfoUserName = styled(Link)`
  @media (min-width: 768px) {
    margin: 0 5px 0 0;
  }
  line-height: .9375rem;
  text-decoration: none;
  font-size: .8125rem;
  font-weight: 700;
  color: #333;
  display: inline-block;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
`;

const ComentThreadCommentTime = styled.time`
    color: #777;
    line-height: .6875rem;
    white-space: nowrap;
    font-size: .75rem;
`;

const CommentBodyContent = styled.div`
    color: #111;
    font-size: .9375rem;
    line-height: 1.375rem;
    margin-top: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    word-break: break-word;
`;

const CommentForm = styled.div`
    background-color: #f7f7f7;
    padding: 18px 16px 12px;
    position: relative;
    /* border-top: 1px solid rgba(146,156,165,.4); */
    border-radius: 1.25rem;
    
`;

const CommentFormField = styled.div`
    position: relative;
    margin-bottom: 12px;
`;

const CommentFormControls = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const CommentFormLabel = styled.label`
    color: #333;
    display: block;
    font-size: .8125rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 18px;
    padding: 0;
`;

const CommentFormEditor = styled.div`
    background: #fff;
`;

const Editor = styled.textarea`
    overflow: auto;
    display: block;
    outline: 0;
    box-shadow: none;
    box-sizing: border-box;
    font-weight: 600;
    overflow-y: hidden;
    resize: none;
    background: #F4F4F4;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    width: 100%;
    position: relative;
    padding: 0.75rem;
`;

const CommentFormControlsButton = styled.div`
    display: flex;
    align-items: center;
`;

const CommentFormButtonSend = styled.button`
      background-color: transparent;
    border-color: #d2d2d2;
    color: #737d81;
    cursor: not-allowed;
    border: 1px solid;
    font-size: .75rem;
    height: 32px;
    padding: 0 12px;
    border-radius: 1rem;
    padding: 0.375rem 1rem 0.375rem 1rem;
    min-width: 6.4rem;
    max-width: 480px;
`;

const CommentsEmpty = styled.div`
    padding: 16px 16px 18px;
    color: #777;
    font-weight: 400;
    font-size: .9375rem;
    line-height: 1.4375rem;
    letter-spacing: .01313rem;
    text-align: center;
`;

function Post() {
  const dispatch = useAppDispatch();
  const {
    idUser, date, postContent, title, likes, isLiked, comments,
  } = useAppSelector((state:any) => ({
    idUser: state.post.idUser,
    date: state.post.date,
    postContent: state.post.postContent,
    title: state.post.title,
    likes: state.post.likes,
    isLiked: state.post.isLiked,
    comments: state.post.comments,
  }));

  const { id } = useAppSelector((state:any) => ({
    id: state.user.id,
  }));
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [postMainImage, setPostMainImage] = useState<any>();
  const [user, setUser] = useState<any>({});
  const { postId } = useParams();
  const [save, setSave] = useState(false);
  const [followed, setFollowed] = useState();
  const [activeModal, setActiveModal] = useState(false);
  const [commentsTitel, setCommentsTitel] = useState('');
  const [postComments, setPostComments] = useState(comments);

  const handleLike = () => {
    instance.put('https://localhost:44353/api/like', {
      idPost: Number(postId),
      idUser: id,
    }).then((resp) => {
      dispatch(setLikes(resp.data.likes));
      dispatch(setLiked(resp.data.liked));
    });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentsTitel(e.target.value);
  };

  const handleSendComment = () => {
    instance.post('https://localhost:44353/api/save-comment', {
      content: commentsTitel,
      idUser,
      idPost: postId,
    }).then((res: any) => {
      setPostComments([res.data, ...postComments]);
      dispatch(setComment([res.data, ...postComments]));
      setCommentsTitel('');
    });
  };

  useEffect(() => {
    instance.get(`https://localhost:44353/api/all-comments/${postId}`)
      .then((res:any) => {
        dispatch(setComment(res.data.map((item:any) => ({
          ...item,
          created: new Date(item.created),
        })).sort((a:any, b:any) => b.created - a.created)));
        setPostComments((res.data.map((item:any) => ({
          ...item,
          created: new Date(item.created),
        })).sort((a:any, b:any) => b.created - a.created)));
      });
  }, [postId]);

  useEffect(() => {
    instance.get(`https://localhost:44353/api/get-post/${postId}`)
      .then((res:any) => {
        dispatch(setPost(res.data));

        instance.get(`https://localhost:44353/api/get-user-image/${idUser}`).then((img: any) => {
          setPostAuthorImage(img.data);
        });
        instance.get(`https://localhost:44353/api/get-user/${idUser}`).then((userRes: any) => {
          setUser(userRes.data);
        });
        instance.get(`https://localhost:44353/api/is-liked/${postId}/${id}`).then((resLike: any) => {
          dispatch(setLikes(resLike.data.likes));
          dispatch(setLiked(resLike.data.liked));
        });
        instance.get(`https://localhost:44353/api/is-sub/${idUser}/${id}`).then((resFollow: any) => {
          setUser(resFollow.data.user);
          setFollowed(resFollow.data.followed);
        });
        instance.get(`https://localhost:44353/api/get-post-image/${postId}`).then((res2: any) => {
          if (res2.data) {
            setPostMainImage(`data:image/jpeg;base64,${res2.data}`);
          } else {
            setPostMainImage(null);
          }
        });
      });
  }, [postId, idUser, id]);

  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  const dateNew = new Date(date);
  const month = months[dateNew.getMonth()];

  const day = dateNew.getDate();
  const hours = dateNew.getHours();
  const minutes = dateNew.getMinutes();

  return (
    <Container>
      <PostBody>
        <PostContent>
          <PostContentContainer>
            <PostContentHeader>
              <PostContentHeaderBody>
                <PostContentHeaderHeaderContainer>
                  <PostContentHeaderHeaderBody>
                    <PostContentHeaderHeaderUser>
                      <PostContentHeaderHeaderUserImgLink to="/user">
                        <PostContentHeaderHeaderUserImgDiv>
                          <PostContentHeaderHeaderUserImg src={postAuthorImage} />
                        </PostContentHeaderHeaderUserImgDiv>
                      </PostContentHeaderHeaderUserImgLink>
                      <PostContentHeaderHeaderUserInfo>
                        <PostContentHeaderHeaderUserInfoUsername to="/user">
                          {`${user.name} ${user.surname}`}
                        </PostContentHeaderHeaderUserInfoUsername>
                        <PostContentHeaderHeaderUserInfoDateTimePublished>
                          <PostContentHeaderHeaderUserInfoDateTime>
                            {`${day} ${month} in ${hours}:${minutes}`}
                          </PostContentHeaderHeaderUserInfoDateTime>
                        </PostContentHeaderHeaderUserInfoDateTimePublished>
                      </PostContentHeaderHeaderUserInfo>
                    </PostContentHeaderHeaderUser>
                  </PostContentHeaderHeaderBody>
                </PostContentHeaderHeaderContainer>
                <PostTitleH1>
                  <span>
                    {title}
                  </span>
                </PostTitleH1>
              </PostContentHeaderBody>
              <ArticleBody>
                <ArticleFormattedBody dangerouslySetInnerHTML={{ __html: postContent }} />
              </ArticleBody>
            </PostContentHeader>
            <ArticlePresenterMeta>
              <ArticlePresenterMetaList>
                <ArticlePresenterMetaTitle>Tegs:</ArticlePresenterMetaTitle>
                <SeparatedListList>
                  <SeparatedListItem>jwt</SeparatedListItem>
                </SeparatedListList>
              </ArticlePresenterMetaList>
              <ArticlePresenterMetaList />
            </ArticlePresenterMeta>
          </PostContentContainer>
        </PostContent>
        <PostPanel>
          <PostPanelIcons>
            <PostPanelButton onClick={handleLike}>
              <ImgIconWrapper>
                {isLiked ? <ImgIcon icon={faThumbsUp} style={{ color: ' #000000' }} /> : <ImgIcon icon={faThumbsUp} /> }
                {/* <ImgIcon icon={faThumbsUp} /> */}
              </ImgIconWrapper>
              <ButtonCounter>
                {likes}
              </ButtonCounter>
            </PostPanelButton>
            <PostPanelButton>
              <ImgIconWrapper>
                <ImgIcon icon={faCommentDots} />
              </ImgIconWrapper>
              <ButtonCounter>0</ButtonCounter>
            </PostPanelButton>
            <PostPanelButton>
              <ImgIconWrapper>
                <ImgIcon icon={faStar} />
              </ImgIconWrapper>
            </PostPanelButton>
            <PostPanelButton>
              <ImgIconWrapper>
                <ImgIcon icon={faEye} />
              </ImgIconWrapper>
              <ButtonCounter>0</ButtonCounter>
            </PostPanelButton>
          </PostPanelIcons>
        </PostPanel>
      </PostBody>
      <ArticleBlocksComments>
        <CommentsWrapper>
          <CommentsWrapperWrapper>
            <CommentsWrapperHeader>
              <CommentsWrapperTitle>
                Comments
                <CommentsWrapperCommentsCount>{postComments.length}</CommentsWrapperCommentsCount>
              </CommentsWrapperTitle>
            </CommentsWrapperHeader>
            <CommentsWrapperInner>
              {postComments.length
                ? (
                  postComments.map((comment:any) => (
                    <CommentsTree>
                      <CommentThread>
                        <CommentThreadComment>
                          <CommentThreadIndent>
                            <Comment>
                              <CommentHeader>
                                <CommentHeaderinner>
                                  <CommentUserInfo>
                                    <UserInfoUserpic to="">
                                      <EntityImage>
                                        <EntityImagePic src={comment.imageUrl} />
                                      </EntityImage>
                                    </UserInfoUserpic>
                                    <UserInfoUser>
                                      <UserInfoUserName to="">{comment.user.name}</UserInfoUserName>
                                      <ComentThreadCommentTime>
                                        {
                                          checkEvenOrOddTime(new Date(), new Date(comment.created))
                                        }
                                      </ComentThreadCommentTime>
                                    </UserInfoUser>
                                  </CommentUserInfo>
                                </CommentHeaderinner>
                              </CommentHeader>
                              <CommentBodyContent>
                                {comment.content}
                              </CommentBodyContent>
                            </Comment>
                          </CommentThreadIndent>
                        </CommentThreadComment>
                      </CommentThread>
                    </CommentsTree>
                  ))

                ) : (
                  <CommentsEmpty>
                    <span>There are no comments yet, you can be the first!</span>
                  </CommentsEmpty>
                )}

            </CommentsWrapperInner>
          </CommentsWrapperWrapper>
          <CommentForm>
            <CommentFormField>
              <CommentFormLabel>
                Your comment
              </CommentFormLabel>
              <CommentFormEditor>
                <Editor value={commentsTitel} onChange={handleCommentChange} placeholder="Leave your comment" />
              </CommentFormEditor>

            </CommentFormField>
            <CommentFormControls>
              <CommentFormControlsButton>
                <CommentFormButtonSend
                  disabled={commentsTitel === ''}
                  style={commentsTitel ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
                  onClick={handleSendComment}
                >
                  Send
                </CommentFormButtonSend>
              </CommentFormControlsButton>
            </CommentFormControls>
          </CommentForm>
        </CommentsWrapper>
      </ArticleBlocksComments>
    </Container>
  );
}

export default Post;
