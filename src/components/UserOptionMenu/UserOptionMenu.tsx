import React, {
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';

import './UserOptionMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../../store/slices/userSlice';

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

function UserPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFullName = useSelector((state: any) => `${state.user.firstName} ${state.user.secondName}`);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const signOut = () => {
    dispatch(userSignOut());
    navigate('/');
  };

  return (
    <div ref={ref} className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button type="submit" onClick={() => setIsOpen(!isOpen)}>
        <AccountCircleIcon />
        <span>{userFullName}</span>
        {isOpen ? <CloseIcon /> : <KeyboardArrowDownIcon />}
      </button>
      <div className="menu">
        <Link to="/profile/home">
          <button type="submit">
            <PersonIcon />
            <span>Profile</span>
          </button>
        </Link>
        <button type="submit">
          <SettingsIcon />
          <span>Settings</span>
        </button>
        <button type="submit" onClick={signOut}>
          <CloseIcon />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default UserPanel;
