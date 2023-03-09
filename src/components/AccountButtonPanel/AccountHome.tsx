import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import AccountHomeModal from './AccountHomeModal';
// import axios from 'axios';
import {
  setUserEmail, setUserSubdomain, setUserName, setUserBio,
} from '../../store/slices/userSlice';

import Account from '../../pages/Account';
import HomeLine from './HomeLine';

interface AccountHomeModalProps {
  userImageLoad: string,
  onImageChange?: (e: any) => void,
}

const Line = styled.div`
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  height: 0px;
  width: 100%;
  display: block;
`;

function AccountHome({ userImageLoad, onImageChange }:AccountHomeModalProps) {
  const dispatch = useDispatch();

  const {
    userFullName, subdomain, userEmail, bioUser,
  } = useSelector((state: any) => ({
    userFullName: `${state.user.firstName} ${state.user.secondName}`,
    subdomain: `@${state.user.subdomain}`,
    userEmail: state.user.email,
    userId: state.user.id,
    userImage: state.user.image,
    bioUser: state.user.biography,
  }));

  const textSubdomain = `circleCi/${subdomain}`;

  const [textareaEmail, setTextareaEmail] = useState(userEmail);
  const [textareaSubdomain, setTextareaSubdomain] = useState(subdomain);
  const [textareaDelete, setTextareaDelete] = useState('');
  const [disabledEmail, setDisabledEmail] = useState(true);
  const [disabledName, setDisabledName] = useState(true);
  const [disabledBio, setDisabledBio] = useState(true);
  const [disabledDelete, setDisabledDelete] = useState(true);
  const [textareaName, setTextareaName] = useState(userFullName);
  const [textareaBio, setTextareaBio] = useState(bioUser);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };
  const handleContentEmail = (e: any) => {
    setTextareaEmail(e.target.value);
    if (e.target.value !== userEmail) {
      setDisabledEmail(false);
    } else {
      setDisabledEmail(true);
    }
  };
  const handleContentName = (e: any) => {
    setTextareaName(e.target.value);
    if (e.target.value !== userFullName) {
      setDisabledName(false);
    } else {
      setDisabledName(true);
    }
  };
  const handleContentSubdomain = (e: any) => {
    setTextareaSubdomain(e.target.value);
  };
  const handleContentBio = (e: any) => {
    setTextareaBio(e.target.value);
    if (e.target.value !== bioUser) {
      setDisabledBio(false);
    } else {
      setDisabledBio(true);
    }
  };
  const handleContentDelete = (e: any) => {
    setTextareaDelete(e.target.value);
    if (e.target.value !== '') {
      setDisabledDelete(false);
    } else {
      setDisabledDelete(true);
    }
  };

  const onSubmitEmail = () => {
    dispatch(setUserEmail(textareaEmail));
  };
  const onSubmitSubdomain = () => {
    dispatch(setUserSubdomain(textareaSubdomain));
  };
  const onSubmitName = () => {
    dispatch(setUserName(textareaName));
  };
  const onSubmitBio = () => {
    dispatch(setUserBio(textareaBio));
  };

  const onSubmit = () => {
    onSubmitName();
    onSubmitBio();
  };

  return (
    <Account
      userImageLoad={userImageLoad}
      user
    >
      {/* <AccountHomeModal> */}
      <HomeLine
        info={userEmail}
        name="Email adress"
        downInfo=""
        img=""
        color=""
        textHeader="Email address"
        inputValue={textareaEmail}
        text="You can sign into Circle CI with this email address."
        inputCounter=""
        onSubmit={onSubmitEmail}
        handle={handleContentEmail}
        disabled={disabledEmail}
        userImageLoad=""
        nameText=""
        bioText=""
        descriptionBio=""
        inputValueBio=""

      />
      {/* </AccountHomeModal> */}
      <HomeLine
        info={subdomain}
        name="Username and subdomain"
        downInfo=""
        img=""
        color=""
        textHeader="Username and subdomain"
        inputValue={textareaSubdomain}
        text={textSubdomain}
        inputCounter={textareaSubdomain}
        handle={handleContentSubdomain}
        onSubmit={onSubmitSubdomain}
        maxlength={31}
        userImageLoad=""
        nameText=""
        bioText=""
        descriptionBio=""
        length={30}
        inputValueBio=""

      />
      <HomeLine
        info={`${userFullName}`}
        name="Profile information"
        downInfo="Edit yout photo, name, bio, etc."
        img="Yaroslav.png"
        color=""
        textHeader="Profile information"
        inputValue={textareaName}
        inputValueBio={textareaBio}
        text="Appears on your Profile page, as your byline, and in your responses."
        inputCounter="51"
        userImageLoad={userImageLoad}
        handleUploadClick={handleUploadClick}
        onImageChange={onImageChange}
        inputRef={inputRef}
        nameText="Name*"
        bioText="Bio"
        descriptionBio="Appears on your Profile and next to your stories."
        maxlength={160}
        length={160}
        handle={handleContentName}
        onSubmit={onSubmit}
        handleContentBio={handleContentBio}
        disabled={disabledName}
        disabledSecond={disabledBio}

      />
      <Line />
      <HomeLine
        info=""
        name="Delete account"
        downInfo="Permanently delete your account and all of your content."
        img=""
        color="rgb(201, 74, 74)"
        textHeader="Delete account"
        inputValue={textareaDelete}
        text="To confirm deletion, type “delete” below:"
        inputCounter=""
        userImageLoad=""
        nameText=""
        bioText=""
        descriptionBio=""
        inputValueBio=""
        disabled={disabledDelete}
        handle={handleContentDelete}

      />
    </Account>
  );
}

export default AccountHome;
