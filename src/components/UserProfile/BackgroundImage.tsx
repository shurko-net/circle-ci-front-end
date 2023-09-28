import React from 'react';
import styled from 'styled-components';

const BackgroundImageContainer = styled.div`
  min-height: 203px;
  max-height: 203px;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  position: relative;
  overflow-y: hidden;
`;

const ProfileBackgroundImageEdit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-property: opacity;
  transition-delay: 1s;
  opacity: 1;
`;

function BackgroundImage({ children }:any) {
  return (
    <BackgroundImageContainer>
      <ProfileBackgroundImageEdit>
        {children}
      </ProfileBackgroundImageEdit>
    </BackgroundImageContainer>
  );
}

export default BackgroundImage;
