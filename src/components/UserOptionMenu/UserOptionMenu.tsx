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
import LockIcon from '@mui/icons-material/Lock';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

import './UserOptionMenu.css';

const useOnClkickOutside = (
  ref:
  RefObject<HTMLDivElement>,
  handler:
  MouseEventHandler<HTMLButtonElement>,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current
                || ref.current.contains(event.target)) {
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClkickOutside(ref, () => setIsOpen(false));
  return (
    <div ref={ref} className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button type="submit" onClick={() => setIsOpen(!isOpen)}>
        <AccountCircleIcon />
        <span>User Name</span>
        {isOpen ? <CloseIcon /> : <KeyboardArrowDownIcon />}
      </button>
      <div className="menu">
        <Link to="/profile">
          <button type="submit">
            <PersonIcon />
            <span>Profile</span>
          </button>
        </Link>
        <button type="submit">
          <SettingsIcon />
          <span>Settings</span>
        </button>
        <button type="submit">
          <LockIcon />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
}

export default UserPanel;
