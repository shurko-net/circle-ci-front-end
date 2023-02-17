import axios from 'axios';
import React, { ChangeEvent, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import ButtonAccount from '../components/ButtonAccount';
import AccountButton from '../components/AccountButtonPanel/AccountButton';

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
  margin: 52px 0px 48px;
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
  display: block;
`;

const SideBarAvaBlock = styled.div`
  position: relative;
  display: block;
`;

const SideBarAva = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display: block;
`;

const SideBarAvaDiv = styled.div`
  width: 88px;
  height: 88px;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 5%);
  top: 0;
  display: block;
`;

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

// const SideBarUploadImg = styled.input`
//   display: hidden;
// `;

function Account({ children } : any) {
  const [file, setFile] = useState<File>();
  const [id, setId] = useState<number | Blob>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const id = useSelector((state: any) => state.user.idUser);

  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);
  const subdomain = useSelector((state: any) => state.user.subdomain);

  const handleUploadClick = () => {
    inputRef.current?.click();
    const formData = new FormData();
    formData.append('fileUrl', file!);
    formData.append('id', id as Blob);

    axios
      .post('https://localhost:7297/image/UserImage', formData);
    console.log(formData.getAll('id'));
    console.log(formData.getAll('fileUrl'));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
    setId(1);
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
                    <SideBarAvaBlock>

                      <SideBarAva />
                      <SideBarAvaDiv />
                    </SideBarAvaBlock>
                    <SideBarUserDiv>
                      <SideBarUserH2>
                        {userFullName}
                      </SideBarUserH2>
                      <div>

                        {/* 👇 Our custom button to select and upload a file */}
                        <button onClick={handleUploadClick} type="submit">
                          {file ? `${file.name}` : 'Click to select'}
                        </button>

                        {/* 👇 Notice the `display: hidden` on the input */}
                        <input
                          type="file"
                          ref={inputRef}
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                      </div>

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
