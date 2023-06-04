import React from 'react';
import styled from 'styled-components';
// import { useDropzone } from 'react-dropzone';
// import { useSelector } from 'react-redux';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Editor } from 'react-draft-wysiwyg';
// import {
//   EditorState,
// } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface MainPostCreatorProps {
  getInputProps: any;
  getRootProps: any;
  isImageUploaded: boolean;
  postImageLoad: any;
  editorState: any;
  setEditorState: any;
  toolbar: any;
  editorLabels: any;
  handleTitleChange: any;
  handleTitleKeyDown: any;
  title: any;
}

const Main = styled.main`
    grid-area: main;
`;

const BlockContainer = styled.section`
    @media screen and (min-width: 576px) {
        border-radius: 20px;
    }
    padding: 0;
    margin: 0 0 30px;
    position: relative;
    padding: 0.875rem;
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
`;

const TitleTextArea = styled.textarea`
    overflow: auto;
    display: block;
    outline: 0;
    box-shadow: none;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.2;
    overflow-y: hidden;
    resize: none;
    background: #F4F4F4;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    width: 100%;
    position: relative;
    padding: 0.75rem;
    &::placeholder {
        color: #A2A2A2; 
    }
`;

const PublishingCoverImageLabel = styled.label`
    align-items: center;
    background: 0 0;
    background-size: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0;
    text-indent: 0;
    position: relative;
    cursor: pointer;
`;

const PublishingCoverImage = styled.section`
    position: relative;
    transition: 334ms height ease;
    width: 100%;
    margin-bottom: 1.5625rem;
`;

const PublishingCoverInput = styled.input`
    position: fixed;
    right: 100%;
    bottom: 100%;
`;

const PublishingCoverImagePlaceholder = styled.div`
      height: 270px;
      width: 100%;
`;

const Img = styled.img`
    background-color: rgba(242, 242, 242, 1);
    box-sizing: border-box;
    display: block;
    background-size: 100%;
    height: 100%;
    width: 100%;
    background: #D2D2D2;
    border-radius: 20px;
    background-size: cover;
  background-position: center;
`;

const PublishingCoverImageText = styled.p`
    position: absolute;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #9F9F9F;
    top: 182px;
`;

const EditorFooter = styled.div`
    border-radius: 0 0 1.25rem 1.25rem;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
    background: #FFFFFF;
`;

const EditorFooterContainer = styled.div`
  padding: 0.84375rem 1.75rem;
`;

const EditorFooterText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875;
  color: #A39E9E;
`;

function MainPostCreator({
  getInputProps, getRootProps, isImageUploaded, postImageLoad,
  editorState, setEditorState, toolbar, editorLabels, handleTitleChange,
  handleTitleKeyDown, title,
}:MainPostCreatorProps) {
  return (
    <Main>
      <BlockContainer>
        <TitleTextArea
          maxLength={150}
          rows={1}
          placeholder="Header"
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          value={title}
        />
      </BlockContainer>
      <PublishingCoverImage>
        <div {...getRootProps()}>
          <PublishingCoverInput {...getInputProps()} />
          <PublishingCoverImagePlaceholder>
            <PublishingCoverImageLabel>
              {isImageUploaded
                && (
                <FontAwesomeIcon
                  style={{
                    position: 'absolute',
                    color: '#a8a8a8',
                    width: '140px',
                    height: '108px',
                    top: '70px',
                  }}
                  icon={faImage}
                />
                )}
              {isImageUploaded
              && <PublishingCoverImageText>Put image (less than 1gb)</PublishingCoverImageText>}
              <Img style={{ backgroundImage: `url(${postImageLoad})` }} />
            </PublishingCoverImageLabel>
          </PublishingCoverImagePlaceholder>
        </div>
      </PublishingCoverImage>
      <Editor
        editorState={editorState}
        wrapperClassName=""
        onEditorStateChange={setEditorState}
        placeholder="Tell your story..."
        toolbar={toolbar}
        localization={{ locale: 'en', translations: editorLabels }}
        toolbarClassName="rdw-editor-toolbar"
        editorClassName="rdw-editor"
      />
      <EditorFooter>
        <EditorFooterContainer>
          <EditorFooterText>From 2 to 20 tags separated by commas</EditorFooterText>
        </EditorFooterContainer>
      </EditorFooter>
    </Main>
  );
}

export default MainPostCreator;
