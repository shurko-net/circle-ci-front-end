import React from 'react';
import styled from 'styled-components';

import AccountHomeModal from './AccountHomeModal';

interface HomeLineProps {
  info: string,
  name:string,
  downInfo: string,
  img: string,
  color: string,
  textHeader: string,
  inputValue: string,
  text: string,
  inputCounter: string,
  handle?: (e? : any) => void,
  onSubmit?: () => void,
  disabled?: boolean,
  maxlength?: number,
  userImageLoad: string
  handleUploadClick?: (e? : any) => void,
  onImageChange?: (e?: any) => void,
  inputRef?: any,
  nameText: string,
  bioText: string,
  descriptionBio: string
  length?: number,
  handleContentBio?: (e? : any) => void,
  inputValueBio: string,
  disabledSecond?: boolean,

}

const Button = styled.button`
    cursor: pointer;
    margin: 32px 0px;
    background: white;
    text-align: left;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    padding: 0;
    align-items: center;
    display: flex;
    fill: inherit;
    border: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    font-weight: inherit;
`;

const SpanItems = styled.span`
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  display: flex;
  text-align: left;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanFlex = styled.span`
  align-items: baseline;
  display: flex;
  box-sizing: inherit;
  text-align: left;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanBlack = styled.span`
  flex: 1 1 0px;
  margin: auto 0px;
  display: block;
  box-sizing: inherit;
  text-align: left;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanText = styled.span<{ color: string; }>`
  color: ${(props) => (props.color ? props.color : 'rgba(41, 41, 41, 1)')};
  line-height: 20px;
  font-size: 14px;
  text-align: left;
`;

const SpanEmail = styled.span`
  margin-left: 32px;
  display: inline-block;
  text-align: left;
  color: rgba(117, 117, 117, 1);
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanTextRight = styled.span`
  text-align: right;
  white-space: nowrap;
  vertical-align: bottom;
  text-overflow: ellipsis;
  width: 200px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const DownDiv = styled.div`
  display: block;
  margin-top: 4px;
`;

const SpanTextDown = styled.span`
  font-size: 13px;
  color: rgba(117, 117, 117, 1);
  line-height: 20px;
  text-align: left;
`;

const DivBlockImg = styled.div`
  margin-left: 12px;
  display: inline-block;
  text-align: left;
  font-size: 14px;
  color: rgba(117, 117, 117, 1);
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const DivWidthImg = styled.div`
  width: 24px;
  display: block;
  text-align: left;
  font-size: 14px;
  color: rgba(117, 117, 117, 1);
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const DivPositionImg = styled.div`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
`;

const DivFlexUserInfo = styled.div`
  display: inline-flex;
  padding-left: 8px;
  align-items: center;
`;

const UserImg = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  border-radius: 50%;
  background-size: 100%;
`;

function HomeLine({
  info, name, downInfo,
  img, color, textHeader,
  inputValue, text, inputCounter,
  handle, onSubmit, disabled,
  maxlength, handleUploadClick, userImageLoad,
  onImageChange, inputRef, nameText,
  bioText, descriptionBio, length,
  handleContentBio, inputValueBio, disabledSecond,

}:HomeLineProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <SpanItems>
          <SpanFlex>
            <SpanBlack>
              <SpanText color={color}>{name}</SpanText>
              {downInfo === ''
                ? null
                : (
                  <DownDiv>
                    <SpanTextDown>
                      {downInfo}
                    </SpanTextDown>
                  </DownDiv>
                )}

            </SpanBlack>
          </SpanFlex>
          <SpanEmail>
            <DivFlexUserInfo>
              <SpanTextRight>
                {info}
              </SpanTextRight>
              {img === ''
                ? null
                : (
                  <DivBlockImg>
                    <DivWidthImg>
                      <DivPositionImg>
                        <UserImg
                          style={{ backgroundImage: `url(${userImageLoad})` }}
                        />
                      </DivPositionImg>
                    </DivWidthImg>
                  </DivBlockImg>
                )}
            </DivFlexUserInfo>
          </SpanEmail>
        </SpanItems>
      </Button>
      <AccountHomeModal
        open={open}
        handleClose={handleClose}
        textHeader={textHeader}
        inputValue={inputValue}
        text={text}
        inputCounter={inputCounter}
        handle={handle}
        onSubmit={onSubmit}
        disabled={disabled}
        maxlength={maxlength}
        userImageLoad={userImageLoad}
        handleUploadClick={handleUploadClick}
        onImageChange={onImageChange}
        inputRef={inputRef}
        nameText={nameText}
        bioText={bioText}
        descriptionBio={descriptionBio}
        length={length}
        handleContentBio={handleContentBio}
        inputValueBio={inputValueBio}
        disabledSecond={disabledSecond}

      />
    </>
  );
}

export default HomeLine;
