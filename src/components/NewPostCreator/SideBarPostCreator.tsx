import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import draftToHtml from 'draftjs-to-html';
// import { useSelector } from 'react-redux';
// import {
//   convertToRaw, EditorState,
// } from 'draft-js';
import SideBarCheckbox from './SideBarCheckbox';

interface SideBarPostCreatorProps {
  onButtonClick: any;
}

const SideBar = styled.div`
    grid-area: sidebar;
`;

const SideBarSettingsContainer = styled.div`
    border-radius: 1.25rem;
    background: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0,0,0,0.1);
    margin-bottom: 1.75rem;
    padding: 1.875rem 2.25rem;
`;

const SaveDraftContainer = styled.div`
  margin-bottom: 1.5625rem;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0.8125rem 1.375rem;
`;

const SaveDraftButton = styled.button`
  position: relative;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #F4F4F4;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  cursor: pointer;
`;

const SaveDraftButtonText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875;
  color: #A39E9E;
`;

const TrashCanIcon = styled(FontAwesomeIcon)`
  position: absolute;
  width: 24px;
  height: 24px;
  color: #A39E9E;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
`;

const PublishContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 1.6875rem 1.25rem 1.4375rem;
`;

const PublishContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PublishButton = styled.button`
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background: #60BDC2;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 0.625rem;
`;

const PublishButtonText = styled.p`
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 1.2;
  color: #FFFFFF;
`;

const PreviewLink = styled(Link)`
  color: #97D6DA;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.2;
`;

function SideBarPostCreator({ onButtonClick }:SideBarPostCreatorProps) {
  return (
    <SideBar>
      <SideBarSettingsContainer>
        <SideBarCheckbox
          text="Mine"
        />
        <SideBarCheckbox
          text="Publish anonymously"
        />
        <SideBarCheckbox
          text="Delayed publication"
        />
        <SideBarCheckbox
          text="Publish in a series"
        />
      </SideBarSettingsContainer>
      <SaveDraftContainer>
        <SaveDraftButton>
          <SaveDraftButtonText>Save draft</SaveDraftButtonText>
          <TrashCanIcon icon={faTrashCan} />
        </SaveDraftButton>
      </SaveDraftContainer>
      <PublishContainer>
        <PublishContent>
          <PublishButton type="submit" onClick={onButtonClick}>
            <PublishButtonText>
              Publish
            </PublishButtonText>
          </PublishButton>
          <PreviewLink to="preview">
            preview
          </PreviewLink>
        </PublishContent>
      </PublishContainer>
    </SideBar>
  );
}

export default SideBarPostCreator;
