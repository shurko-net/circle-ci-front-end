import React from 'react';
import styled from 'styled-components';

interface UserImgProps {
  width?: string;
  height?: string;
  boxSizing?: string;
  backgroundClip?: string;
  border?: string;
  borderRadius?: string;
  backgroundImage?: string;
  display?: string;
  children?: any;
}

const StyledUserImg = styled.image<{ width?: string; height?: string; boxSizing?: string;
  backgroundClip?: string; border?: string; borderRadius?: string; backgroundImage?: string;
  display?: string }>`
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};
    box-sizing: ${(props) => props.boxSizing || ''};
    background-clip: ${(props) => props.backgroundClip || ''};
    border: ${(props) => props.border || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    background-image: url(data:image/jpeg;base64,${(props) => props.backgroundImage});
    background-size: 100%;
    display: ${(props) => props.display || ''};
`;

function UserImg({
  width, height, boxSizing, backgroundClip,
  border, borderRadius, backgroundImage,
  display, children,
} : UserImgProps) {
  return (
    <StyledUserImg
      width={width}
      height={height}
      boxSizing={boxSizing}
      backgroundClip={backgroundClip}
      border={border}
      borderRadius={borderRadius}
      backgroundImage={backgroundImage}
      display={display}
    >
      {children}
    </StyledUserImg>
  );
}

export default UserImg;
