import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import NewModal from '../NewModal';

interface NewProfileModalProps {
  modalOpen: boolean;
  closenModal: () => void;
  onImageChange?: (e?: any) => void,
}

const Button = styled.button`
  position: absolute;
  z-index: 1;
  top: 0.75rem;
  right: 0.75rem;
  min-width: auto;
  align-items: center;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  transition: background-color 0.3s ease;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  @media screen and (max-height: 600px) {
    height: 2rem;
    width: 2rem;
    top: 0.5rem;
    right: 0.5rem;
  }
  background-color: inherit;
  &:hover {
    background-color: #ebebeb;
   
  }
`;

const ModalContainer = styled.div`
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 12px 18px 1px rgba(0,0,0,.2);
    transition: box-shadow 83ms;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin: 0 auto;
    background-color: #fff;
    max-width: 100%;
    top: 192px;
    max-height: calc(100vh - 192px);
    border-radius: 1.25rem;
    width: 744px;
    @media screen and (max-height: 1440px) {
      top: 96px;
      max-height: calc(100vh - 480px);
    }
    @media screen and (max-height: 1024px) {
      top: 48px;
      max-height: calc(100vh - 240px);
    }
    @media screen and (max-height: 960px) {
      top: 32px;
      max-height: calc(100vh - 160px);
    }
    @media screen and (max-height: 600px) {
      border-radius: 0;
      top: 0;
      height: 100vh;
      max-height: none;
    }
    @media screen and (min-width: 1024px) and (min-height: 600px) {
      max-width: 744px;
    }
    @media screen and (min-height: 601px) and (max-height: 960px) {
      max-height: calc(100vh - 2rem);
    }
`;

const ModalHeaderContainer = styled.div`
  display: block;
  padding: 1rem 3rem 1rem 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,.15);
  overflow-wrap: break-word;
  @media screen and (max-height: 600px) {
      flex: 0 0 auto;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
  }
`;

const ModalHeaderText = styled.h2`
  font-size: 1.25rem;
  line-height: 1.4;
`;

const ModalMainContent = styled.div`
  display: block;
  overflow: auto;
  min-height: 3.5rem;
  padding: 1rem 1.5rem;
  @media screen and (max-height: 600px) {
      flex: 1 0 auto;
      padding: 0;
  }
`;

const ModalMainContentContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  animation: fade-in .8s;
  text-align: center;
`;

const ModalMainContentTextContainer = styled.div`
    margin-left: 164px;
    margin-right: 164px;
    margin-bottom: 2rem;
`;

const ModalMainContentText = styled.p`
  font-size: 1.5rem;
  line-height: 1.33333;
  font-weight: 400;
`;

const ModalMainContentImg = styled.img`
  max-width: 100%;
  margin-bottom: 2rem;
`;

const ModalMainContentUnderPhotoText = styled.p`
  margin-left: 112px;
  margin-right: 112px;
  color: rgba(0,0,0,0.6);
  font-size: 0.875rem;
  line-height: 1.42857;
  font-weight: 400;
`;

const ModalFooter = styled.footer`
  border-top: 1px solid rgba(0,0,0,.15);
  padding: 1rem 1.5rem;
`;

const ModalFooterContainer = styled.div`
  text-align: right;
`;

const ModalFooterButtonContent = styled.div`
  position: relative;
  display: inline-block;
`;

const ModalFooterInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
  border: none;
`;

const ModalFooterLabel = styled.label`
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  min-height: 2rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.25rem;
  align-items: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  min-width: 4rem;
  max-width: 480px;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  background-color: #60BDC2;
  color: #fff;
`;

function NewProfileModal({ modalOpen, closenModal, onImageChange }: NewProfileModalProps) {
  return (
    <NewModal isOpen={modalOpen} closenModal={closenModal}>
      <ModalContainer>
        <Button type="submit" onClick={closenModal}>
          <FontAwesomeIcon icon={faXmark} style={{ width: '1.25rem', height: '1.25rem' }} />
        </Button>
        <ModalHeaderContainer>
          <ModalHeaderText>Add Photo</ModalHeaderText>
        </ModalHeaderContainer>
        <ModalMainContent>
          <ModalMainContentContainer>
            <ModalMainContentTextContainer>
              <ModalMainContentText>
                A professional picture of the head is not needed!
              </ModalMainContentText>
              <ModalMainContentText>
                Just something that represents you.
              </ModalMainContentText>
            </ModalMainContentTextContainer>
            <ModalMainContentImg src="https://static.licdn.com/sc/h/c5ybm82ti04zuasz2a0ubx7bu" />
            <ModalMainContentUnderPhotoText>
              At Circle Ci, we ask members to use their real names
              and faces, so we recommend that you take a photo or
              upload your own portrait.
            </ModalMainContentUnderPhotoText>
          </ModalMainContentContainer>
        </ModalMainContent>
        <ModalFooter>
          <ModalFooterContainer>
            <ModalFooterButtonContent>
              <ModalFooterInput
                type="file"
                onChange={onImageChange}
              />
              <ModalFooterLabel>Upload photo</ModalFooterLabel>
            </ModalFooterButtonContent>
          </ModalFooterContainer>
        </ModalFooter>
      </ModalContainer>
    </NewModal>
  );
}

export default NewProfileModal;
