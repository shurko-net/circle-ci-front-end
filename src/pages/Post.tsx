import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import Flex from '../components/Flex';
import {
  setPost, setLikes, setLiked,
} from '../store/slices/postSlice';
import Button from '../components/Button';
// import { setFolowers } from '../store/slices/userSlice';
// interface PostProps {
//   fillIcon?: string;
// }
const Block = styled.div`
    display: block;
`;

const MarginBottom = styled(Block)`
    @media (min-width: 1080px) {
        margin-bottom: 68px;
    }   
`;

const Header = styled.header`
    @media (min-width: 1080px) {
        margin-top: 56px;
        margin-bottom: 32px;
     }
     display: block;
`;

const ImageBlock = styled(Block)`
    margin-right: 16px;
`;

const ImageBlockRelative = styled(Block)`
    position: relative;
`;

const Image = styled.image`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(242, 242, 242, 1);
    box-sizing: border-box;
    display: block;
    background-size: 100%;
`;

const UserTextContainer = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: rgba(41, 41, 41, 1);
    font-weight: 400;
`;

const UserTextBottom = styled.div`
    display: flex;
    margin-bottom: 4px;
    align-items: center;
`;

const InlineBlock = styled.div`
    display: inline-block;
`;

const DateText = styled.p`
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
`;

const Word = styled.div`
    word-wrap: break-word;
    word-break: break-word;
`;

const Title = styled.h1`
  @media (min-width: 1080px) {
    letter-spacing: -0.016em;
    line-height: 40px;
    margin-top: 0.6em;
    font-size: 32px;
  }
  margin-bottom: -0.27em;
  font-style: normal;
  color: rgba(41, 41, 41, 1);
  font-weight: 400;
`;

const SideBar = styled.div`
  @media (min-width: 1080px) {
    max-width: 368px;
    min-width: 368px;
    display: block; 
    padding-left: clamp(24px, 24px + 100vw - 1080px, 40px);
  }
  min-height: 100vh;
  border-left: 1px solid rgba(242, 242, 242, 1);
  box-sizing: border-box;
  padding-right: 24px;
  background-color: rgba(255, 255, 255, 1);
`;

const Footer = styled.footer`
  @media (min-width: 1080px) {
    margin-bottom: 26px;
  }
  position: static;
  box-sizing: content-box;
  max-height: 52px;
  height: 52px;
  border-top: none;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
`;

const BlockFlex = styled(Block)`
  flex: 1 0 auto;
`;

const Indent = styled.div`
  @media (min-width: 1080px) {
    max-width: 680px;
  }
  margin: 0 24px;
  min-width: 0;
  width: 100%;
`;

const LeftSide = styled(Flex)`
`;

const RightSide = styled(Flex)`
`;

const LikeBlock = styled(Block)`
  max-width: 155px;
`;

const SpanBlock = styled.span`
  display: inline-block;
`;

const IconDiv = styled.div`
  margin-right: 4px;
  position: relative;
`;

const LikeIcon = styled(ThumbUpIcon)<{ fillIcon?: string }>`
   &:hover {
    stroke: black;
    fill: black;
  }
  fill:  ${(props) => props.fillIcon || ''};
`;

const IconButton = styled.button`
    user-select: none;
    outline: 0;
    border: 0;
    cursor: pointer;
    fill: rgba(117, 117, 117, 1);
    padding: 0;
    background: transparent;
    
`;

const LikesCount = styled.p`
  font-size: 13px;
  color: rgba(117, 117, 117, 1);
  line-height: 20px;
  font-weight: 400;
`;

const SaveBlock = styled(Block)`
  flex: 0 0 auto;
`;

const SaveButton = styled.button`
  padding: 8px 2px;
  cursor: pointer;
  fill: rgba(117, 117, 117, 1);
  margin: 0;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  border: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  overflow: visible;
`;

const BookmarkAdd = styled(BookmarkAddIcon)`
  &:hover {
    stroke: black;
    fill: black;
  }
`;

const Bookmark = styled(BookmarkIcon)`
  &:hover {
    stroke: black;
    fill: black;
  }
`;

const SideBarPosition = styled.div`
    position: relative;
    height: 100%;
    display: inline-block;
    width: 100%;
`;

const SideBarUserBlock = styled(Block)`
    margin-top: 40px;
    border-bottom: none;
    padding-bottom: 0px;
`;

const SideBarUserImageBlock = styled(Block)`
  position: relative;
`;

const SideBarUserImage = styled(Image)`
  width: 88px;
  height: 88px;
`;

const SideBarUserNameBlock = styled(Block)`
    margin-top: 16px;
`;

const SideBarUserNameH2 = styled.h2`
    font-weight: 500;
    letter-spacing: 0;
    font-size: 16px;
    color: rgba(41, 41, 41, 1);
    line-height: 20px;
`;

const SideBarUserFollowersTop = styled(Block)`
  margin-top: 4px;
`;

const SideBarUserFollowersSpan = styled.span`
  line-height: 24px;
  font-size: 16px;
  color: rgba(117, 117, 117, 1);
  font-weight: 400;
`;

const SideBarBiographyBlock = styled(Block)`
  margin-top: 12px;
`;

const SideBarBiographyP = styled.div`
  color: rgba(117, 117, 117, 1);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const SideBarUserButtonBlock = styled.div`
  margin-bottom: 40px;
  margin-top: 24px;
  display: flex;
`;

const SideBarBiographySpan = styled(Word)`

`;

const FollowButton = styled(Button)`

`;

const Img = styled.img`
  margin-top: 12px;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display: block;
  background-size: 100%;
  height: 300px;
  width: 680px;
`;

function Post() {
  const {
    idUser, date, postContent, title, likes, isLiked,
  } = useSelector((state:any) => ({
    idUser: state.post.idUser,
    date: state.post.date,
    postContent: state.post.postContent,
    title: state.post.title,
    likes: state.post.likes,
    isLiked: state.post.isLiked,
  }));

  const { id } = useSelector((state:any) => ({
    id: state.user.id,
  }));
  const dispatch = useDispatch();
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [postMainImage, setPostMainImage] = useState<any>();
  const [user, setUser] = useState<any>({});
  const { postId } = useParams();
  const [save, setSave] = useState(false);
  const [followed, setFollowed] = useState();

  const handleLike = () => {
    axios.put('https://localhost:7297/api/Like', {
      idPost: Number(postId),
      idUser: id,
    }).then((resp) => {
      dispatch(setLikes(resp.data.likes));
      dispatch(setLiked(resp.data.liked));
    });
  };
  const handleFollow = () => {
    axios.put('https://localhost:7297/api/Follow', {
      idUser,
      idFollower: id,
    }).then((resp) => {
      console.log(resp);
      setUser(resp.data.user);
      setFollowed(resp.data.followed);
    }).catch((err) => console.log(err));
  };

  const handleSave = () => {
    setSave(true);
  };

  useEffect(() => {
    axios.get(`https://localhost:7297/api/Post/${postId}`)
      .then((res:any) => {
        dispatch(setPost(res.data));

        axios.get(`https://localhost:7297/api/UserImage/${idUser}`).then((img: any) => {
          setPostAuthorImage(img.data);
        });
        axios.get(`https://localhost:7297/api/User/${idUser}`).then((userRes: any) => {
          setUser(userRes.data);
        });
        axios.get(`https://localhost:7297/api/Like/${postId}/${id}`).then((resLike: any) => {
          dispatch(setLikes(resLike.data.likes));
          dispatch(setLiked(resLike.data.liked));
        });
        axios.get(`https://localhost:7297/api/Follow/${idUser}/${id}`).then((resFollow: any) => {
          setUser(resFollow.data.user);
          setFollowed(resFollow.data.followed);
        });
        axios.get(`https://localhost:7297/api/PostImage/${postId}`).then((res2: any) => {
          if (res2.data) {
            setPostMainImage(`data:image/jpeg;base64,${res2.data}`);
          } else {
            setPostMainImage(null);
          }
        });
      });
  }, [postId, idUser, id]);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateNew = new Date(date);
  const month = months[dateNew.getMonth()];
  const day = dateNew.getDate();
  return (
    <Container
      maxWidth="1336px"
      margin="auto"
      display="block"
      marginTop="70px"
    >
      <Flex
        justify="space-evenly"
        direction="row"
      >
        <Container
          minWidth="728px"
          maxWidth="728px"
          flex="1 1 auto"
          display="block"
        >
          <Block>
            <MarginBottom>
              <Flex
                justify="center"
              >
                <Container
                  maxWidth="680px"
                  margin="0 24px"
                  display="block"
                  minWidth="0"
                  width="100%"
                >
                  <Block>
                    <Header>
                      <Flex
                        justify="space-between"
                        align="flex-start"
                      >
                        <Flex>
                          <ImageBlock>
                            <Link to="/user">
                              <ImageBlockRelative>
                                <Image style={{ backgroundImage: `url(data:image/jpeg;base64,${postAuthorImage})` }} />
                              </ImageBlockRelative>
                            </Link>
                          </ImageBlock>
                          <Block>
                            <UserTextContainer>
                              <UserTextBottom>
                                <Block>
                                  <InlineBlock>
                                    <Flex
                                      align="center"
                                    >
                                      <Link
                                        style={{ textDecoration: 'none', color: 'black' }}
                                        to="/user"
                                      >
                                        <p>
                                          {`${user.name} ${user.surname}`}
                                        </p>
                                      </Link>
                                    </Flex>
                                  </InlineBlock>
                                </Block>
                              </UserTextBottom>
                            </UserTextContainer>
                            <Flex
                              flexWrap="wrap"
                              align="center"
                            >
                              <DateText>
                                <span>
                                  {`${month} ${day}`}
                                </span>
                              </DateText>
                            </Flex>
                          </Block>
                        </Flex>
                      </Flex>
                    </Header>
                    <Block>
                      <Word>
                        <Block>
                          <Title>
                            {title}
                          </Title>
                        </Block>
                        {postMainImage && (
                        <Block>
                          <Img style={{ backgroundImage: `url(${postMainImage})` }} />
                        </Block>
                        )}
                        <Block
                          style={{ marginTop: '2em' }}
                          dangerouslySetInnerHTML={{ __html: postContent }}
                        />
                      </Word>
                    </Block>
                  </Block>
                </Container>
              </Flex>
            </MarginBottom>
          </Block>
          <Footer>
            <BlockFlex>
              <Flex justify="center">
                <Indent>
                  <Flex justify="space-between">
                    <LeftSide
                      direction="row"
                      align="center"
                    >
                      <LikeBlock>
                        <SpanBlock>
                          <Flex
                            direction="row"
                            align="center"
                          >
                            <IconDiv>
                              <IconButton onClick={handleLike}>
                                {!isLiked ? <LikeIcon color="action" /> : <LikeIcon /> }
                              </IconButton>
                            </IconDiv>
                            <LikesCount>
                              {likes}
                            </LikesCount>

                          </Flex>
                        </SpanBlock>
                      </LikeBlock>
                    </LeftSide>
                    <RightSide align="center">
                      <SaveBlock>
                        <Block>
                          <SaveButton onClick={handleSave}>
                            {save ? <Bookmark color="action" /> : <BookmarkAdd color="action" />}
                          </SaveButton>
                        </Block>
                      </SaveBlock>
                    </RightSide>
                  </Flex>
                </Indent>
              </Flex>
            </BlockFlex>
          </Footer>
        </Container>
        <SideBar>
          <SideBarPosition>
            <SideBarUserBlock>
              <Link to="/user/profile">
                <SideBarUserImageBlock>
                  <SideBarUserImage style={{ backgroundImage: `url(data:image/jpeg;base64,${postAuthorImage})` }} />
                </SideBarUserImageBlock>
              </Link>
              <SideBarUserNameBlock>
                <Link
                  to="/user/profile"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <SideBarUserNameH2>
                    <Word>
                      {`${user.name} ${user.surname}`}
                    </Word>
                  </SideBarUserNameH2>
                </Link>

              </SideBarUserNameBlock>
              <SideBarUserFollowersTop>
                <SideBarUserFollowersSpan>
                  <Link
                    to="profile/followers"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {`${user.followers} Followers`}
                  </Link>
                </SideBarUserFollowersSpan>
              </SideBarUserFollowersTop>
              <SideBarBiographyBlock>
                <SideBarBiographyP>
                  <SideBarBiographySpan dangerouslySetInnerHTML={{ __html: user.biography }} />
                </SideBarBiographyP>
              </SideBarBiographyBlock>
              <SideBarUserButtonBlock>
                {followed ? (
                  <FollowButton
                    click={handleFollow}
                    marginLeft="0px"
                    // primary
                    border="1px solid #7DE2D1"
                    color="#7DE2D1"
                    background="none"
                  >
                    UnFollow
                  </FollowButton>
                )
                  : (
                    <FollowButton
                      click={handleFollow}
                      marginLeft="0px"
                      primary
                    >
                      Follow
                    </FollowButton>
                  )}

              </SideBarUserButtonBlock>
            </SideBarUserBlock>
          </SideBarPosition>
        </SideBar>
      </Flex>
    </Container>
  );
}

export default Post;
