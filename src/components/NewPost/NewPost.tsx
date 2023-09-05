import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faCommentDots, faEye, faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import instance, { BASE_URL } from '../../http';
import checkEvenOrOddTime from '../../lib/checkEvenOrOddTime';

interface IUser {
  idUser: number,
  name?: string,
  surname?: string,
  email?: string,
  password?: string,
  tNumber?: string,
  biography?: string,
  subscribed?: number,
}

const StyledLink = styled(Link)`
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
    display: flex;
    text-decoration: none;
`;

const Post = styled.div`
  padding: 0;
  margin: 0 0 30px;
  position: relative;
  height: 100%;
  background: #FFFFFF;
  @media screen and (min-width: 576px) {
    border-radius: 20px;
  }
`;

const PostHeader = styled.div`
  padding: 0.75rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 0.8rem; //err
  @media screen and (min-width: 576px) {
    padding: 1.375rem 1.6875rem 0;
  }
`;

const PostHeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PostHeaderImgBlock = styled.div`
  margin-right: 8px;
`;

const PostHeaderImgWrapper = styled.div`
  display: flex;
`;

const PostHeaderImg = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-size: cover;
`;

const PostHeaderText = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const PostHeaderNickname = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.2;
  @media screen and (min-width: 576px) {
    font-size: 1.125rem;
  }
`;

const PostHeaderSubscribe = styled.div`
  color: #97D6DA;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.2;
  @media screen and (min-width: 576px) {
    font-size: 1.125rem;
  }
`;

const PostHeaderDotContainer = styled.div`
  margin-left: 6px;
  margin-right: 6px;
  position: relative;
  border: 1px solid;
  border-radius: 50%;
`;

const PostHeaderDateContainer = styled.div`
  align-self: flex-start;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.2;
  color: #A9A9A9;
  @media screen and (min-width: 576px) {
    font-size: 0.875rem;
  }
`;

const PostMainThemeContainer = styled.div`
  margin: 0 1rem 0.5rem 1rem;
  @media screen and (min-width: 576px) {
    margin: 0 1.6875rem 0.8rem 1.6875rem;
  }
`;

const PostMainTheme = styled.span`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.2;
  color: #414141;
  @media screen and (min-width: 576px) {
    font-size: 1.75rem;
  }
`;

const PostMainImageContainer = styled(StyledLink)`
  margin-bottom: 0.8rem;
  position: relative;
  padding: 0px 0px 67.2% 0px;
`;

const PostMainImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
`;

const PostMainDescriptionContainer = styled.div`
  margin: 0 1rem;
  position: relative;
  @media screen and (min-width: 576px) {
    margin: 0 1.6875rem;
  }
`;

const PostMainDescription = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.2;
  color: #414141;
  margin-bottom: 1rem;
  @media screen and (min-width: 576px) {
    font-size: 1.125rem;
    margin-bottom: 2.3125rem;
  }
  padding-bottom: 1rem;
  border-bottom: 1px solid #DCD9D9;
`;

const PostMainDescriptionButton = styled(StyledLink)`
  position: absolute;
  margin-bottom: 0;
  right: 0;
  bottom: 1.2rem;
  padding-left: 1.4rem;
  cursor: pointer;
  color: #97D6DA;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.2;
  border: none;
  background: #FFFFFF;
`;

const PostMainTagsContainer = styled.div`
  margin: 0 1rem;
  @media screen and (min-width: 576px) {
    margin: 0 1.6875rem;
  }
`;

const PostMainTagstext = styled.div`
  display: inline-block;
  color: #9A9A9A;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.2;
  margin-right: 1rem;
  @media screen and (min-width: 576px) {
    margin-right: 2rem;
  }
`;

const PostMainTagsGroup = styled.div`
  display: inline-block;
  & > div:last-child {
    padding: 0;
  }
  margin-bottom:  1rem;
  @media screen and (min-width: 576px) {
    margin-bottom:  1.4375rem;
  }
`;

const PostMainTags = styled.div`
  display: inline-block;
  padding-right: 0.625rem;
  color: #40B0B7;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 1.2;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    padding-right: 0.9375rem;
  }
`;

const PostMainPanelBackground = styled.div`
  background: #F1F1F1;
  @media screen and (min-width: 576px) {
    border-radius: 0px 0px 20px 20px;
  }
`;

const PostMainPanelContainer = styled.div`
  margin: 0 1rem ;
  display: flex;
  @media screen and (min-width: 576px) {
    margin: 0 1.6875rem ;
  }
`;

const PostMainPanelBody = styled.span`
  flex:0 1 auto;
  display: flex;
  align-items: center;
`;

const PostMainPanelButton = styled.button`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  width: 100%;
  min-height: 1.875rem;
  line-height: 3.375rem;
  /* cursor: pointer; */
  border: none;
  overflow: hidden;
  max-width: 480px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  vertical-align: middle;
  color: #858585;
`;

const PostMainPanelButtonContent = styled.span`
  display: flex;
  font-size: 0.875rem;
`;

const PostMainPanelButtonFlexBlock = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  
`;

const PostMainPanelLeft = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const PostMainPanelRight = styled.div`
  display: flex;
`;

const PostMainPanelButtonText = styled.span`

`;

function NewPost(postData: any) {
  const [post, setPost] = useState({
    id: 0,
    idUser: 0,
    idCategory: 0,
    date: 0,
    content: '',
    title: '',
    likes: 0,
    views: 0,
  });

  const [comments, setComments] = useState<any>({});

  useEffect(() => {
    instance.get(`${BASE_URL}/get-post/${postData.postData.id}`)
      .then((res:any) => {
        setPost({
          id: res.data.id,
          idUser: res.data.idUser,
          idCategory: res.data.idCategory,
          date: res.data.date,
          content: res.data.content,
          title: res.data.title,
          likes: res.data.likes,
          views: res.data.views,
        });
      });
  }, [postData.postData.id]);

  useEffect(() => {
    instance.get(`${BASE_URL}/all-comments/${postData.postData.id}`)
      .then((res:any) => {
        setComments(res.data);
      });
  }, [postData.postData.id]);

  const [postAuthor, setPostAuthor] = useState<IUser>({
    biography: '',
    email: '',
    idUser: 0,
    name: '',
    password: '',
    subscribed: 0,
    surname: '',
    tNumber: '',
  });
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [postDataImage, setPostDataImage] = useState<any>();

  useEffect(() => {
    instance.get(`${BASE_URL}/get-user/${postData.postData.idUser}`)
      .then((res: any) => {
        setPostAuthor(res.data.user);

        instance.get(`${BASE_URL}/get-user-image`).then((res1: any) => {
          setPostAuthorImage(res1.data);
        }).then(() => {
          instance.get(`${BASE_URL}/get-post-image/${postData.postData.id}`).then((res2: any) => {
            if (res2.data) {
              setPostDataImage(res2.data);
            } else {
              setPostDataImage(null);
            }
          });
        });
      });
  }, []);

  return (
    <Post>
      <PostHeader>
        <PostHeaderTextWrapper>
          <StyledLink to={`post/${postData.postData.idPost}`}>
            <PostHeaderImgBlock>
              <PostHeaderImgWrapper>
                <PostHeaderImg style={{ backgroundImage: `url(${postAuthorImage})` }} />
              </PostHeaderImgWrapper>
            </PostHeaderImgBlock>
            <PostHeaderText>
              <PostHeaderNickname>{`${postAuthor.name ?? 'Yarik'} ${postAuthor.surname}`}</PostHeaderNickname>
              <PostHeaderDotContainer />
              <PostHeaderSubscribe>Subscribe</PostHeaderSubscribe>
            </PostHeaderText>
          </StyledLink>
        </PostHeaderTextWrapper>
        <PostHeaderDateContainer>
          {
            checkEvenOrOddTime(new Date(), new Date(post.date))
          }
        </PostHeaderDateContainer>
      </PostHeader>
      <PostMainThemeContainer>
        <PostMainTheme>{postData.postData.title}</PostMainTheme>
      </PostMainThemeContainer>
      <PostMainImageContainer to={`post/${postData.postData.id}`}>
        {postDataImage && <PostMainImage style={{ backgroundImage: `url(${postDataImage})` }} />}

      </PostMainImageContainer>
      <PostMainDescriptionContainer>
        <PostMainDescription>
          {(() => {
            const wordLimit = 28;
            const html = postData.postData.content;
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const text = doc.body.textContent || '';
            const words = text.split(' ');
            const limitedWords = words.slice(0, wordLimit).join(' ');
            return <div>{limitedWords}</div>;
          })()}
        </PostMainDescription>
        <PostMainDescriptionButton to={`post/${postData.postData.id}`}>
          <span>...Learn more</span>
        </PostMainDescriptionButton>
      </PostMainDescriptionContainer>
      {/* <Line /> */}
      <PostMainTagsContainer>
        <PostMainTagstext>
          <span>Tags:</span>
        </PostMainTagstext>
        <PostMainTagsGroup>
          <PostMainTags>#descriptions</PostMainTags>
          <PostMainTags>#descriptions</PostMainTags>
          <PostMainTags>#descriptions</PostMainTags>
        </PostMainTagsGroup>
      </PostMainTagsContainer>
      <PostMainPanelBackground>
        <PostMainPanelContainer>
          <PostMainPanelLeft>
            <PostMainPanelBody>
              <PostMainPanelButton>
                <PostMainPanelButtonContent>
                  <PostMainPanelButtonFlexBlock>
                    <FontAwesomeIcon icon={faThumbsUp} style={{ width: '1.5rem', height: '1.5rem', margin: '0 4px 0 -2px' }} />
                    <PostMainPanelButtonText>{post.likes}</PostMainPanelButtonText>
                  </PostMainPanelButtonFlexBlock>
                </PostMainPanelButtonContent>
              </PostMainPanelButton>
            </PostMainPanelBody>
            <PostMainPanelBody>
              <PostMainPanelButton>
                <PostMainPanelButtonContent>
                  <PostMainPanelButtonFlexBlock>
                    <FontAwesomeIcon icon={faCommentDots} style={{ width: '1.5rem', height: '1.5rem', margin: '0 4px 0 -2px' }} />
                    <PostMainPanelButtonText>{comments.length}</PostMainPanelButtonText>
                  </PostMainPanelButtonFlexBlock>
                </PostMainPanelButtonContent>
              </PostMainPanelButton>
            </PostMainPanelBody>
          </PostMainPanelLeft>
          <PostMainPanelRight>
            <PostMainPanelBody>
              <PostMainPanelButton>
                <PostMainPanelButtonContent>
                  <PostMainPanelButtonFlexBlock>
                    <FontAwesomeIcon icon={faEye} style={{ width: '1.5rem', height: '1.5rem', margin: '0 4px 0 -2px' }} />
                    <PostMainPanelButtonText>0</PostMainPanelButtonText>
                  </PostMainPanelButtonFlexBlock>
                </PostMainPanelButtonContent>
              </PostMainPanelButton>
            </PostMainPanelBody>
            <PostMainPanelBody>
              <PostMainPanelButton>
                <PostMainPanelButtonContent>
                  <PostMainPanelButtonFlexBlock>
                    <FontAwesomeIcon icon={faStar} style={{ width: '1.5rem', height: '1.5rem' }} />
                  </PostMainPanelButtonFlexBlock>
                </PostMainPanelButtonContent>
              </PostMainPanelButton>
            </PostMainPanelBody>
          </PostMainPanelRight>
        </PostMainPanelContainer>
      </PostMainPanelBackground>
    </Post>
  );
}

export default NewPost;
