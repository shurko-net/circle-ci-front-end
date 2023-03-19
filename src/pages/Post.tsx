import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import Flex from '../components/Flex';
// import Main from '../components/Main';

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

// const MarginBottoms = styled(Container)`
//     @media (min-width: 1080px) {
//         max-width: 680px;
//     }
// `;

function Post() {
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [user, setUser] = useState<any>({});
  const { postId } = useParams();
  const [post, setPost] = useState<any>({});

  useEffect(() => {
    axios.get(`https://localhost:7297/api/Post/${postId}`)
      .then((res:any) => {
        console.log(res.data);
        setPost(res.data);

        axios.get(`https://localhost:7297/api/Image/${post.idUser}`).then((img: any) => {
          console.log(img);
          setPostAuthorImage(img.data);
        });
        axios.get(`https://localhost:7297/api/User/${post.idUser}`).then((userRes: any) => {
          console.log(userRes);
          setUser(userRes.data);
        });
      });
  }, [postId]);
  //   console.log(post.postContent);
  console.log(user.name);
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
                                          {user.name}
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
                                  Feb6
                                </span>
                              </DateText>
                            </Flex>
                          </Block>
                        </Flex>
                      </Flex>
                    </Header>
                  </Block>
                  <h1>{post.postContent}</h1>
                  <h1>{post.title}</h1>
                </Container>
              </Flex>
            </MarginBottom>
          </Block>
        </Container>
      </Flex>
    </Container>
  );
}

export default Post;
