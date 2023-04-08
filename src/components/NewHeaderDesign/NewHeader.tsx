import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HttpsIcon from '@mui/icons-material/Https';
import { useSelector } from 'react-redux';
// import LoginIcon from '@mui/icons-material/Login';

const styleLink = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: 900,
  fontSize: '18px',
  lineHeight: `${18 / 22 * 100}%`,
  fontFamily: 'Inter',
};

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');

const StyledNotificationsNoneIcon = styled(NotificationsNoneIcon)`
  color: grey;
`;

const StyledMenuLink = styled(NavLink)`
  padding: 2.6px;
  font-weight: 600;
  font-size: 16px;
  color: inherit;
  text-decoration: none;
  line-height: ${16 / 19 * 100}%;
  position: relative;
  &.active::after {
    content: "";
    position: absolute;
    bottom: -41px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #60BDC2;
  }
  &.active {
    color:#60BDC2;
  }
`;

const Header = styled.header`
    position: absolute;
    width: 100%;
    top: 0;
`;
const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;
const HeaderContainerContainer = styled.div`
  margin: 0 auto;
  max-width: 1330px;
  padding: 0px 15px;
`;
const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    position: relative;
`;
const HeaderMain = styled.div`
  & button {
    border-color: rgba(41, 41, 41, 1);
    background: rgba(8, 8, 8, 1);
    cursor: pointer;
    text-decoration: none;
    padding: 7px 16px 9px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    border-width: 1px;
    border-radius: 99em;
  }
    display: flex;
    align-items: center;
    flex: 0 0 ${922 / 1300 * 100}%;
    white-space: nowrap;
    @media (max-width: 991.98px) {
      flex: 1 1 auto;
    }
    @media (min-width: 767.98px) {
      & div.start {
        display: none;
      }
    }
    & button.login {
      /* margin-left: 35px; */
      background: none;
      border: none;
    }  
    & button.register {
      margin-left: 20px;
      border-color: rgba(41, 41, 41, 1);
      background: none;
    }  
`;
const HeaderSearch = styled.div`
    @media (min-width: 991.98px) { //767px
        flex: 1 1 auto;
    } 
    @media (max-width: 991.98px) {
         display: none;
  }
`;
const HeaderNotice = styled.div`
  display: flex;
  flex: 0 1 88px;
  @media (max-width: 991.98px) {
      flex: 0;
  }
`;

const NotificationIconWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  cursor: pointer;
`;

const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48.32px;
  height: 48.32px;
`;

const NotificationCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 11px;
  right: 4px;
  height: 18px;
  width: 18px;
  min-width: 8px;
  max-width: 18px;
  font-size: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: ${12 / 15 * 100}%;
  color: #ffffff;
  background: #FF6161;
  border-radius: 10px;
`;

const HeaderMenuMenu = styled.div`
    /* flex: 0 1 ${794 / 1300 * 100}%; */
    flex: 1 1 auto;
    @media (max-width: 767.98px) {
      display: none;
  }
`;

const MenuList = styled.div`
    @media (min-width: 767.98px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-left: 71px;
    } 
    
`;
const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    box-sizing: border-box;
`;

const SearchFormIcon = styled(SearchIcon)`
    color: grey;
`;

const SearchContainer = styled.form`
  max-width: 376px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  @media (max-width: 991.98px) {
    position: absolute;
    width: 100%;
    left: 0;
    top: -100%;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease 0s;
  }
`;

const SearchInput = styled.input`
  width:100%;
  flex-grow: 1;
  border: none;
  outline: none;
  height: 38px;
  padding:  0px 0px 0px 20px;
  background-color: transparent;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  /* margin: 0 10px; */
  flex: 0 0 35px;
  display: flex;
`;

const SearchGroup = styled.div`
  position: relative;
  text-align: center;
  @media (min-width: 991.98px) {
      display: none;
  } 
`;

const SearchMobile = styled.div`
&.search {
  margin-left: 25px;
  position: relative;
  z-index: 1;
  display: inline-flex;
  border-radius: 50%;
  transition: 0.4s;
  /* margin: 0 0 0 25px; */

}
&.search:is(:hover, .open) {
  background: rgb(0 0 0 / 0.6%);
}
&.search.open input {
  max-width: 150px;
  /* padding-left: 15px; */
  /* display: block; */
}
&.search input {
  max-width: 0;
  transition: 0.4s;
  border: 0;
  outline: none;
  border-radius: 17px;
  font-size: 18px;
  background: transparent;
  /* display: none; */
}

&.search input::placeholder {
  
}
`;

const SearchButtonMobile = styled.button`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: 0.3s;
  border: none;
  outline: none;
  background: transparent;
`;

const SearchItemsMobile = styled.div`
  &.items {
    position: absolute;
    z-index: 0;
    left: 7px;
    top: -7px;
    width: 100%;
    padding-top: 49px;
    display: grid;
    border-radius: 25px;
    visibility: hidden;
    opacity: 0;
    background: rgb(0 0 0 / 15%);
    -webkit-transition: 0.3s;
    transition: 0.3s;
    
  }
  &.items.open {
    visibility: visible;
    opacity: 1;
  }
  &.items button {
    padding: 18px;
    white-space: nowrap;
    outline: none;
    border: none;
    background: transparent;
    text-align: left;
    font-size: 18px;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: grey;
`;

const MenuIconButton = styled.button`
  --margin-left-small: 15px;
  --margin-left-medium: 25px;
  margin-left: var(--margin-left-small);
  @media (min-width: 767.98px) {
    margin-left: var(--margin-left-medium);
  }
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  /* padding: 0 0 0 25px; */
  transition: 0.3s;
`;

const Menu = styled.div`
  @media (min-width: 767.98px) {
    display: none;
  }
`;

const StyledCloseICon = styled(CloseIcon)`
  color: grey;
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  max-width: 260px;
  height: 100%;
  background: #fff;
  box-shadow: 
    -2px 0 24px
    rgb(0 0 0 / 6%);
  transition: 0.4s;
`;

const ModalMenuContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-left: 25px;
`;

const ModalMenuBlock = styled.div`
  display: flex;
  margin-bottom: 25px;
  color: grey;
`;

const SideBarMenuBtnContainer = styled.div`
  position: relative;
  width: 100%;
  /* display: flex; */
  margin: 35px 0 35px 0 ;
  justify-content: center;
  /* align-items: center; */
  
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  max-width: 260px;
  padding: 0px 15px;
`;

const MoadalFlexBtnContainer = styled.div`
 display: flex;
  width: 100%;
  justify-content: space-around; 
 `;

const ModalBtnInlineBlock = styled.div`

  &.active {
    ::after {
    content: '';
    bottom: -23px;
    border: none;
    border-bottom: 1px solid rgb(0 0 0 / 10%); 
    width: 64px;
    display: block;
    position: absolute;
    
  }
}
  & button {
    margin: 0px 20px 0px 20px;
    position: relative;
    z-index: 6;
    background-color: transparent;
    border: none;
    display: flex;
    opacity: 0.6;
  }
  & button.active {
    opacity: 1;
  }
`;

// const DivBlock = styled.div`
//   display: block;
//   flex: 1 0 auto;
// `;

const HeaderMenuRegistration = styled.div`
  position: absolute;
  /* top: 0; */
  right: 0;
 @media (min-width: 991.98px) {
        /* flex: 1 1 auto; */
    }
`;

const HeaderMenuRegistrationContainer = styled.div`
   /* margin-left: auto; */
   display: flex;
`;

const HeaderMenuRegistrationBtn = styled.div`

`;

const posts = [{ name: 'Yaroslav' }, { name: 'stas' }, { name: 'Dima' }, { name: 'Any' }, { name: 'Katy' }];

function NewHeader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchIsOpen, setSearchIsOpen] = useState('');
  const [search, setSearch] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  // const [classNames, setClassNames] = useState('');

  const isLogged = useSelector((state: any) => ({
    isLogged: state.user.isLogged,
  }));

  const [activeComponent, setActiveComponent] = useState(1);

  const handleActiveClick = (componentNumber:any) => {
    setActiveComponent(componentNumber);
  };

  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const secondComponentRef = useRef<HTMLDivElement>(null);

  const handleTransitionEnd = () => {
    if (secondComponentRef.current) {
      secondComponentRef.current.style.display = 'block';
    }
    setShowSecondComponent(!showSecondComponent);
    console.log(showSecondComponent);
  };

  const handleFirstComponentClick = () => {
    if (secondComponentRef.current) {
      secondComponentRef.current.style.display = 'none';
    }
  };

  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!searchIsOpen) {
      inputRef.current?.focus();
    }
    setSearchIsOpen(!searchIsOpen ? 'open' : '');
  };

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };
  const handleCloseMenu = () => {
    handleActiveClick(1);
    setMenuIsOpen(false);
  };

  const handleChange = (e:any) => {
    setSearch(e.target.value);
  };

  const filtrePosts = posts.filter(
    (post) => search.length
      && post.name.toLowerCase()
        .includes(search.toLowerCase()),
  );

  return (
    <Header>
      <HeaderWrapper>
        <HeaderContainerContainer>
          <HeaderBody>
            <HeaderMain>
              <Link to="/" style={styleLink}>Circle CI</Link>
              {/* <DivBlock /> */}
              <div className="start">
                <span>
                  <Link to="/register" style={styleLink}>
                    <button type="submit">Get stated</button>
                  </Link>
                </span>
              </div>
              <HeaderMenuMenu>
                <MenuList>
                  <MenuItem>
                    <StyledMenuLink to="/" className={setActive}>Home</StyledMenuLink>
                  </MenuItem>
                  <MenuItem>
                    <StyledMenuLink to="/actual" className={setActive}>Actual</StyledMenuLink>
                  </MenuItem>
                  <MenuItem>
                    <StyledMenuLink to="/subscriptions" className={setActive}>Subscriptions</StyledMenuLink>
                  </MenuItem>
                  <MenuItem>
                    <StyledMenuLink to="/community" className={setActive}>Community</StyledMenuLink>
                  </MenuItem>
                  <MenuItem>
                    <StyledMenuLink to="/blogs" className={setActive}>Blogs</StyledMenuLink>
                  </MenuItem>
                  <MenuItem>
                    <StyledMenuLink to="/courses" className={setActive}>Courses</StyledMenuLink>
                  </MenuItem>
                </MenuList>
              </HeaderMenuMenu>
              {/* <DivBlock /> */}
              <HeaderMenuRegistration>
                <HeaderMenuRegistrationContainer>
                  <HeaderMenuRegistrationBtn>
                    <button className="login" type="submit">
                      <Link to="/login" style={styleLink}>
                        Sing In
                      </Link>
                    </button>
                  </HeaderMenuRegistrationBtn>
                  <HeaderMenuRegistrationBtn>
                    <button className="register" type="submit">
                      <Link to="/register" style={styleLink}>
                        Get stated
                      </Link>
                    </button>
                  </HeaderMenuRegistrationBtn>

                </HeaderMenuRegistrationContainer>
              </HeaderMenuRegistration>
            </HeaderMain>
            {!isLogged && (showSecondComponent
              ? null
              : (
                <HeaderNotice ref={secondComponentRef}>
                  <NotificationIconWrapper>
                    <NoticeContainer>
                      <StyledNotificationsNoneIcon />
                      <NotificationCount>8</NotificationCount>
                    </NoticeContainer>
                  </NotificationIconWrapper>
                </HeaderNotice>
              ))}
            {!isLogged && (
            <SearchGroup ref={searchContainerRef}>
              <SearchMobile className={`search ${searchIsOpen}`}>
                <input
                  ref={inputRef}
                  onChange={handleChange}
                  placeholder="Search"
                  type="text"
                  onTransitionEnd={handleTransitionEnd}
                />
                <SearchButtonMobile
                  className={`uil uil-${searchIsOpen
                    ? 'multiply'
                    : 'search'
                  }`}
                  onClick={handleClick}
                >
                  {searchIsOpen === 'open'
                    ? <StyledCloseICon />
                    : <SearchFormIcon onClick={handleFirstComponentClick} />}

                </SearchButtonMobile>
              </SearchMobile>
              <SearchItemsMobile
                className={`items ${searchIsOpen}`}
              >
                {Boolean(filtrePosts.length)
              && filtrePosts?.map(
                (item, index) => index < 3
                && (
                <button type="submit" key={item.name}>
                  {item.name}
                </button>
                ),
              )}
              </SearchItemsMobile>
            </SearchGroup>
            )}
            {!isLogged && (
            <HeaderSearch>
              <SearchContainer>
                <SearchInput type="text" placeholder="Search" />
                <SearchButton>
                  <SearchFormIcon />
                </SearchButton>
              </SearchContainer>
            </HeaderSearch>
            )}

            {!isLogged
             && (
             <Menu>
               {menuIsOpen
                 ? (
                   <ModalWrapper>
                     <ModalContainer>
                       <SideBarMenuBtnContainer>
                         <MoadalFlexBtnContainer>
                           <ModalBtnInlineBlock className={`${activeComponent === 1 ? 'active' : ''}`}>
                             <button
                               className={`${activeComponent === 1 ? 'active' : ''}`}
                               type="submit"
                               onClick={() => handleActiveClick(1)}
                             >
                               <MenuIcon />
                             </button>
                           </ModalBtnInlineBlock>
                           <ModalBtnInlineBlock className={`${activeComponent === 2 ? 'active' : ''}`}>
                             <button
                               className={`${activeComponent === 2 ? 'active' : ''}`}
                               type="submit"
                               onClick={() => handleActiveClick(2)}
                             >
                               <HttpsIcon />
                             </button>
                           </ModalBtnInlineBlock>
                           <ModalBtnInlineBlock>
                             <button type="submit" onClick={handleCloseMenu}>
                               <CloseIcon />
                             </button>
                           </ModalBtnInlineBlock>
                           {/* <MenuExitBtn onClick={handleCloseMenu}>
                       <StyledCloseICon />
                     </MenuExitBtn> */}
                         </MoadalFlexBtnContainer>
                       </SideBarMenuBtnContainer>
                       {activeComponent === 1
                      && (
                      <ModalMenuContainer>
                        <ModalMenuBlock>Home</ModalMenuBlock>
                        <ModalMenuBlock>Actual</ModalMenuBlock>
                        <ModalMenuBlock>Subscriptions</ModalMenuBlock>
                        <ModalMenuBlock>Community</ModalMenuBlock>
                        <ModalMenuBlock>Blogs</ModalMenuBlock>
                        <ModalMenuBlock>Courses</ModalMenuBlock>
                      </ModalMenuContainer>
                      )}
                       {activeComponent === 2
                      && <div>Hello World</div>}

                     </ModalContainer>
                   </ModalWrapper>
                 )
                 : (
                   <MenuIconButton onClick={handleOpenMenu}>
                     <StyledMenuIcon />
                   </MenuIconButton>
                 )}
             </Menu>
             )}

          </HeaderBody>
        </HeaderContainerContainer>
      </HeaderWrapper>
    </Header>
  );
}

export default NewHeader;
