import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import AccountButton from '../components/AccountButtonPanel/AccountButton';
import { setUserImage } from '../store/slices/userSlice';

const Container = styled.div`
  /* top: 70px; */
  position: relative;
  max-width: 1336px;
  margin-top: 94px;
  margin-left:auto;
  margin-right:auto;
  display: block;
`;

const FlexContainer = styled.div`
  justify-content: space-evenly;
  flex-direction: row;
  display: flex;

`;

const Main = styled.div`
  min-width: 728px;
  max-width: 728px;
  flex: 1 1 auto;
  display: block;
  /* background-color: #2b2c28; */
  border-radius: 12px;
`;

const SideBar = styled.div`
  max-width: 368px;
  min-width: 368px;
  display: block;
  min-height: 100vh;
  padding-right: 24px;
  /* background-color: #2b2c28; */
  border-radius: 12px;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
`;

const MainBlock = styled.div`
  display: block;
`;

const MainUpFlex = styled.div`
  justify-content: center;
  display: flex;
`;

const MainUpMargin = styled.div`
  max-width: 680px;
  margin: 0 24px;
  min-width: 0;
  width: 100%;
`;

const MainUpInfoMargin = styled.div`
  margin-bottom: 0px;
  margin-top: 52px;
  display: block;
`;

const MainUpUser = styled.div`
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
  display: flex;
`;

const MainUpNameFlex = styled.div`
  margin-right: 0px;
  justify-content: flex-start;
  flex: 1 1 auto;
  align-items: center;
  display: flex;
`;

const MainUpNameLeft = styled.div`
  align-items: center;
  display: flex;
`;

const MainUpLink = styled.a`
  margin: 0;
  padding: 0;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  border: inherit;
  font-size: inherit;
  color: inherit;
  fill: inherit;
`;

const MainUpUserName = styled.span`
  max-height: 52px;
  line-height: 52px;
  font-size: 42px;
  letter-spacing: 0px;
  color: rgb(25, 25, 25);
  font-weight: 500;
  overflow: hidden;
`;

const MainUpButtons = styled.div`
  height: 39px;
  position: relative;
  overflow: hidden;
  display: block;
  box-shadow: inset 0 -1px 0 rgb(230 230 230);
`;

const MainUpFlexButtons = styled.div`
  padding: 2px 0px;
  overflow-y: hidden;
  overflow-x: scroll;
  align-items: center;
  display: flex;
`;

const UpContainer = styled.div`
  flex: 1 0 auto;
  display: block;
  margin: 0 24px;
`;

const SideBarContainer = styled.div`
  height: 100%;
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SideBarSticky = styled.div`
  top: 57px;
  position: sticky;
  display: block;
`;

const SideBarFlex = styled.div`
  display: flex;
  min-height: calc(100vh - 0px);
  flex-direction: column;
`;

const SideBarBlock = styled.div`
  flex: 1 0 auto;
  display: block;
`;

const SideBarUserBlock = styled.div`
  margin-top: 40px;
  border-bottom: none;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
`;

// const SideBarAvaBlock = styled.div`
//   position: relative;
//   display: block;
// `;

// const SideBarAva = styled.img`
//   width: 88px;
//   height: 88px;
//   border-radius: 50%;
//   background-color: rgba(242, 242, 242, 1);
//   box-sizing: border-box;
//   display: block;
// `;

// const SideBarAvaDiv = styled.div`
//   width: 88px;
//   height: 88px;
//   position: absolute;
//   border-radius: 50%;
//   box-shadow: inset 0 0 0 1px rgb(0 0 0 / 5%);
//   top: 0;
//   display: block;
// `;

const SideBarUserDiv = styled.div`
  margin-top: 16px;
  display: block;
`;

const SideBarUserH2 = styled.h2`
  letter-spacing: 0;
  font-weight: 500;
  font-size: 16px;
  color: rgba(41, 41, 41, 1);
  line-height: 20px;
`;

// const ImageUploadParent = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px 0 10px 0;
// `;

const ButtonImg = styled.button`
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display:block;
  width: 88px; 
  height: 88px; 
  background-size: 100%;
  border: none;
  cursor: pointer;
`;

function Account({ children } : any) {
  const dispatch = useDispatch();
  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);
  const userId = useSelector((state: any) => state.user.id);
  const subdomain = useSelector((state: any) => state.user.subdomain);
  const userI = useSelector((state:any) => state.user.image);
  const [userImageLoad, setuserImageLoad] = useState<any>(userI);
  useEffect(() => {
    setuserImageLoad(userI);
  }, [userI]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const onImageChange = (e: any) => {
    if (!e.target.files[0]) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setuserImageLoad(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('file', e.target.files[0]);
    axios
      .post('https://localhost:7297/api/Image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    axios.get(`https://localhost:7297/api/Image/${userId}`)
      .then((res) => {
        dispatch(setUserImage(res.data));
      });
  };

  return (
    <Container>
      <FlexContainer>
        <Main>
          <MainContainer>
            <MainBlock>
              <MainUpFlex>
                <MainUpMargin>
                  <MainUpInfoMargin>
                    <MainUpUser>
                      <MainUpNameFlex>
                        <MainBlock>
                          <MainUpNameLeft>
                            <MainBlock>
                              <MainUpLink>
                                <MainUpUserName>{userFullName}</MainUpUserName>
                              </MainUpLink>
                            </MainBlock>
                          </MainUpNameLeft>
                        </MainBlock>
                      </MainUpNameFlex>
                    </MainUpUser>
                    <MainUpButtons>
                      <MainUpFlexButtons>
                        {/* <NavLink
                          to={`/${subdomain}/home`}
                          style={setActive}
                        > */}
                        <AccountButton name="Home" url={`/${subdomain}/home`} />
                        {/* </NavLink> */}
                        {/* <NavLink to={`/${subdomain}/about`} style={setActive}> */}
                        <AccountButton name="About" url={`/${subdomain}/about`} />
                        {/* </NavLink> */}
                      </MainUpFlexButtons>
                    </MainUpButtons>
                  </MainUpInfoMargin>
                </MainUpMargin>
              </MainUpFlex>
            </MainBlock>
            <UpContainer>
              {children}
            </UpContainer>
          </MainContainer>
        </Main>
        <SideBar>
          <SideBarContainer>
            <SideBarSticky>
              <SideBarFlex>
                <SideBarBlock>
                  <SideBarUserBlock>
                    <ButtonImg
                      style={{ backgroundImage: `url(${userImageLoad})` }}
                      onClick={handleUploadClick}
                    />

                    <input
                      type="file"
                      onChange={onImageChange}
                      className="filetype"
                      id="group_image"
                      ref={inputRef}
                      style={{ display: 'none' }}
                    />
                    <SideBarUserDiv>
                      <SideBarUserH2>
                        {userFullName}
                      </SideBarUserH2>
                    </SideBarUserDiv>
                  </SideBarUserBlock>
                </SideBarBlock>
              </SideBarFlex>
            </SideBarSticky>
          </SideBarContainer>
        </SideBar>
      </FlexContainer>
    </Container>
  );
}

export default Account;
