import React, {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Link, useNavigate } from 'react-router-dom';

import './UserOptionMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { userSignOut } from '../../store/slices/userSlice';

const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display: block;
  background-size: 100%;
`;

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document
      .addEventListener('mousedown', listener);

    document
      .addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

function UserPanel({ userImageLoad }:{ userImageLoad: string }) {
  const subdomain = useSelector((state: any) => state.user.subdomain);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const signOut = () => {
    dispatch(userSignOut());
    navigate('/');
    setIsOpen(false);
  };

  const onClose = () => setIsOpen(false);

  // const userImage = useSelector((state: any) => state.user.image);
  // const [userImageLoad, setUserImageLoad] = useState<any>(userImage);

  // useEffect(() => {
  //   setUserImageLoad(userImage);
  // }, [userImage]);

  // const fileReader = new FileReader();
  // fileReader.onload = () => {
  //   setUserImageLoad(fileReader.result);
  // };
  // fileReader.readAsDataURL(userImage);

  return (
    <div ref={ref} className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button type="submit" onClick={() => setIsOpen(!isOpen)}>
        <UserImg
          style={{ backgroundImage: `url(${userImageLoad})` }}
        />
        {/* <AccountCircleIcon /> */}
        <span>{userFullName}</span>
        {isOpen ? <CloseIcon /> : <KeyboardArrowDownIcon />}
      </button>
      <div className="menu">
        <Link to={`/${subdomain}/home`}>
          <button type="submit" onClick={onClose}>
            <PersonIcon />
            <span>Profile</span>
          </button>
        </Link>
        <Link to="/me/save">
          <button type="submit" onClick={onClose}>
            <BookmarksIcon />
            <span>Save</span>
          </button>
        </Link>
        <button type="submit" onClick={signOut}>
          <CloseIcon />
          <span>Sign Out</span>
        </button>

      </div>
    </div>
  );
}

export default UserPanel;
