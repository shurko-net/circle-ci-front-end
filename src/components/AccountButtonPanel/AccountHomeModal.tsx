import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

interface AccountHomeModalProps {
  open: boolean,
  handleClose: () => void,
  textHeader: string,
  inputValue: string,
  text: string,
  inputCounter: string,
  handle?: (e?: any) => void,
  onSubmit?: () => void,
  disabled?: boolean,
  maxlength?: number,
  userImageLoad: string
  handleUploadClick?: (e? : any) => void,
  onImageChange?: (e? : any) => void,
  inputRef: any,
  nameText: string,
  bioText: string,
  descriptionBio: string,
  length?: number,
  handleContentBio?: (e? : any) => void,
  inputValueBio: string,

}

const Background = styled.div`
    z-index: 800;
    right: 0px;
    left: 0px;
    bottom: 0px;
    position: fixed;
    /* animation: 150ms ease-in-out 0s 1 normal forwards running k7; */
    overflow-y: auto;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.25);
    justify-content: center;
    display: flex;
    align-items: center;
    top: 0;
`;

const DivBlock = styled.div`
    animation-duration: 0.1ms;
    transform-origin: center bottom;
    margin-bottom: auto;
    margin-top: auto;
    padding: 0px;
`;

const DivFrame = styled.div`
    width: 552px;
    padding: 32px 40px 40px;
    position: relative;
    border-radius: 4px;
    display: block;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 10px;
    background-color: rgba(255, 255, 255, 1);
`;

const HeaderH2 = styled.h2`
    line-height: 28px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0;
    color: rgba(41, 41, 41, 1);
`;

const InfoContainer = styled.div`
    margin-top: 40px;
    display: block;
`;

const ContainerSpan = styled.span`
    color: rgba(41, 41, 41, 1);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

`;

const ContainerFlex = styled.div`
    flex-direction: column;
    width: 100%;
    display: flex;
    
`;

const Flex = styled.div`
    display: flex;
    border-color: rgb(204, 204, 204);
    border-width: 0px 0px 1px;
    border-style: solid;
    width: 100%;
`;

const Input = styled.input`
    flex: 1 1 0%;
    outline: 0px;
    border-width: 0px;
    text-align: inherit;
    line-height: inherit;
    padding: 4px 0px;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
`;

const TextFlex = styled.div`
    display: flex;
    margin-top: 4px;
    justify-content: space-between;
`;

const TextP = styled.p`
    color: rgba(117, 117, 117, 1);
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
`;

const ButtonContainer = styled.div`
    margin-top: 40px;
    display: block;
`;

const ButtonFlex = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button<{ disabled?: boolean, backgroundcolor?: string }>`
    @media (min-width: 1080px) {
        padding: 8px 28px 10px;
        line-height: 20px;
        font-size: 14px;
    }
    text-decoration: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 99em;
    border-color: rgb(26, 137, 23);
    fill: rgb(26, 137, 23);
    background: ${(props) => (props.backgroundcolor)};
    /* background: 0px center; */
    color:  ${(props) => (props.color)};
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    opacity: ${(props) => (props.disabled === true ? 0.3 : null)};
`;

const ButtonBlock = styled.div`
    width: 16px;
    display: block;
`;

const CrossContainer = styled.div`
 @media (min-width: 1080px) {
    right: 24px;
    top: 24px;
    }
    position: absolute;
    display: block;
`;

const CrossBlock = styled.div`
    right: 0px;
    position: relative;
    top: 0;
    display: block;
`;

const CrossButton = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
    cursor: pointer;
`;

const PhotoBlock = styled.div`
  margin-bottom: 32px;
  display: block;
`;

const PhotoFlexBox = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

const PhotoText = styled.div`
  margin-bottom: 10px;
  display: block;
`;

const PhotoLabel = styled.label`
  color: rgba(117, 117, 117, 1);
  line-height: 20px;
  font-size: 14px;
`;

const ContainerFlexPhoto = styled.div`
  display: flex;
`;

const ButtonImg = styled.button`
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display:block;
  width: 88px; 
  height: 88px; 
  background-size: 100%;
  border: none;
  cursor: pointer;
`;

const LabelName = styled.label`
  margin-bottom: 10px;
  color: rgba(117, 117, 117, 1);
`;

export default function AccountHomeModal({
  open, handleClose, textHeader,
  inputValue, text, inputCounter,
  handle, onSubmit, disabled, maxlength, userImageLoad,
  handleUploadClick, onImageChange, inputRef, nameText,
  bioText, descriptionBio, length,
  handleContentBio, inputValueBio,
}:AccountHomeModalProps) {
  const onSave = () => {
    onSubmit?.();
    handleClose();
  };
  if (!open) return null;
  return (
    <div>
      <Background onClick={handleClose}>
        <DivBlock onClick={(e) => e.stopPropagation()}>
          <DivFrame>
            <HeaderH2>
              {textHeader}
            </HeaderH2>

            <InfoContainer>
              {userImageLoad === ''
                ? null
                : (
                  <PhotoBlock>
                    <PhotoFlexBox>
                      <PhotoText>
                        <PhotoLabel>
                          Photo
                        </PhotoLabel>
                      </PhotoText>
                      <ContainerFlexPhoto>
                        <ButtonImg
                          style={{ backgroundImage: `url(${userImageLoad})` }}
                          onClick={handleUploadClick}
                        />

                        <input
                          type="file"
                          onChange={onImageChange}
                          className="filetype"
                          id="group_image"
                          ref={inputRef}
                          style={{ display: 'none' }}
                        />
                      </ContainerFlexPhoto>
                    </PhotoFlexBox>
                  </PhotoBlock>
                )}
              <PhotoBlock>
                {nameText === ''
                  ? null
                  : <LabelName>{nameText}</LabelName>}
                <ContainerSpan>
                  <ContainerFlex>
                    <Flex>
                      <Input
                        type="text"
                        name="email address"
                        value={inputValue}
                        onChange={handle}
                        maxLength={maxlength}
                      />
                    </Flex>
                    <TextFlex>
                      <TextP>{text}</TextP>
                      {inputCounter === ''
                        ? null
                        : (
                          <TextP>
                            {inputValue.length - 1 }
                            /
                            {length}
                          </TextP>
                        )}

                    </TextFlex>
                  </ContainerFlex>

                </ContainerSpan>
              </PhotoBlock>
            </InfoContainer>
            {bioText === ''
              ? null
              : (
                <PhotoBlock>
                  <LabelName>{bioText}</LabelName>
                  <ContainerSpan>
                    <Flex>
                      <Input
                        type="text"
                        name="email address"
                        value={inputValueBio}
                        onChange={handleContentBio}
                        maxLength={maxlength}
                      />
                    </Flex>
                    <TextFlex>
                      <TextP>{descriptionBio}</TextP>
                      <TextP>
                        {inputValueBio.length }
                        /
                        {length}
                      </TextP>
                    </TextFlex>
                  </ContainerSpan>
                </PhotoBlock>

              )}

            <ButtonContainer>

              <ButtonFlex>
                <Button
                  color="rgb(26, 137, 23)"
                  backgroundcolor="rgb(255, 255, 255)"
                  onClick={handleClose}
                >
                  Cancel

                </Button>
                <ButtonBlock />
                <Button
                  color="rgb(255, 255, 255)"
                  backgroundcolor="rgb(26, 137, 23)"
                  onClick={onSave}
                  disabled={disabled}
                >
                  Save
                </Button>
              </ButtonFlex>
            </ButtonContainer>
            <CrossContainer>
              <CrossBlock>
                <CrossButton>
                  <CloseIcon onClick={handleClose} />
                </CrossButton>
              </CrossBlock>
            </CrossContainer>
          </DivFrame>
        </DivBlock>
      </Background>
    </div>
  );
}
