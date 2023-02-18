import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

interface AccountHomeModalProps {
  open: boolean
  handleClose: () => void
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

const EmailFlex = styled.div`
    display: flex;
    border-color: rgb(204, 204, 204);
    border-width: 0px 0px 1px;
    border-style: solid;
    width: 100%;
`;

const EmailInput = styled.input`
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

const Button = styled.button`
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
    background: 0px center;
    color: rgb(26, 137, 23);
    box-sizing: border-box;
    display: inline-block;
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

export default function AccountHomeModal({ open, handleClose }:AccountHomeModalProps) {
  if (!open) return null;
  return (
    <div>
      <Background onClick={handleClose}>
        <DivBlock onClick={(e) => e.stopPropagation()}>
          <DivFrame>
            <HeaderH2>Email address</HeaderH2>
            <InfoContainer>
              <ContainerSpan>
                <ContainerFlex>
                  <EmailFlex>
                    <EmailInput
                      type="text"
                      name="email address"
                      value="ytube.noobtv@gmail.com"
                    />
                  </EmailFlex>
                  <TextFlex>
                    <TextP>You can sign into Circle CI with this email address.</TextP>
                  </TextFlex>
                </ContainerFlex>
              </ContainerSpan>
            </InfoContainer>
            <ButtonContainer>
              <ButtonFlex>
                <Button>Cancel</Button>
                <ButtonBlock />
                <Button>Save</Button>
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
