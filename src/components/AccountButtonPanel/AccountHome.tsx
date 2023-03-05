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
  const [disabled, setDisabled] = useState(true);
  const [textareaName, setTextareaName] = useState(userFullName);
  const [textareaBio, setTextareaBio] = useState(bioUser);

  // const [userImageLoad, setUserImageLoad] = useState<any>(userImage);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   setUserImageLoad(userImage);
  // }, [userImage]);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };
  const handleContentEmail = (e: any) => {
    setTextareaEmail(e.target.value);
    if (e.target.value !== userEmail) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleContentName = (e: any) => {
    setTextareaName(e.target.value);
  };
  const handleContentSubdomain = (e: any) => {
    setTextareaSubdomain(e.target.value);
  };
  const handleContentBio = (e: any) => {
    setTextareaBio(e.target.value);
  };

  const onSubmitEmail = () => {
    dispatch(setUserEmail(textareaEmail));
  };
  const onSubmitSubdomain = () => {
    dispatch(setUserSubdomain(textareaSubdomain));
    debugger;
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

  // const onImageChange = (e: any) => {
  //   if (!e.target.files[0]) {
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     setUserImageLoad(fileReader.result);
  //     // dispatch(setUserImage(fileReader.result));
  //   };
  //   fileReader.readAsDataURL(e.target.files[0]);

  //   const formData = new FormData();
  //   formData.append('id', userId);
  //   formData.append('file', e.target.files[0]);
  //   axios
  //     .post('https://localhost:7297/api/Image', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //   axios.get(`https://localhost:7297/api/Image/${userId}`)
  //     .then((res) => {
  //       dispatch(setUserImage(res.data));
  //     });
  // };

  return (
    <Account userImageLoad={userImageLoad}>
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
        disabled={disabled}
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

      />
      <Line />
      <HomeLine
        info=""
        name="Delete account"
        downInfo="Permanently delete your account and all of your content."
        img=""
        color="rgb(201, 74, 74)"
        textHeader="Delete account"
        inputValue=""
        text=""
        inputCounter=""
        userImageLoad=""
        nameText=""
        bioText=""
        descriptionBio=""
        inputValueBio=""

      />
    </Account>
  );
}

export default AccountHome;
