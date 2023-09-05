import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  convertToRaw, EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useDropzone } from 'react-dropzone';
import MainPostCreator from '../components/NewPostCreator/MainPostCreator';
import SideBarPostCreator from '../components/NewPostCreator/SideBarPostCreator';
import instance, { BASE_URL } from '../http';
import { useAppSelector } from '../hook';

interface NewPostCreatorProps {
  userId: string;
}

const Body = styled.div`
    padding-top: 100px;
    flex: 1 1 auto;
    max-width: 100%;
    background-color: #e8e8e8;
`;

const Container = styled.div`
    margin: -100px auto 0;
    padding: 100px 0 0;
    max-width: 100%;
    max-width: 576px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 576px) {
      overflow: unset;
    }
    @media screen and (min-width: 767.98px) {
      max-width: unset;
      width: 720px;
    }
    @media screen and (min-width: 991.98px) {
      width: 960px;
    }
    @media screen and (min-width: 1300px) {
      width: 1330px;
      padding: 100px 15px 0;
    }
`;

const GridContainer = styled.div`
    display: grid;
  
  row-gap: 26px;
  
  
  grid-template-columns: minmax(0,1fr);
  grid-template-areas:
    "main ."
    "sidebar .";
  ;
  @media screen and (min-width: 576px) {
    column-gap: 26px;
    margin: 54px 0;
  }
  @media screen and (min-width: 767.98px) {
    grid-template-areas:
        "sidebar ."
        "main .";
    grid-template-columns: minmax(0,786px) minmax(0,auto);
  }
  @media screen and (min-width: 991.98px) {
    grid-template-areas: "main sidebar";
    grid-template-columns: minmax(0,786px) minmax(0,378px);
  }
`;

function NewPostCreator({ userId }: NewPostCreatorProps) {
  const user = useAppSelector((state: any) => state.auth);
  const [postImageLoad, setPostImageLoad] = useState<any>();
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(true);
  const [imageFile, setImageFile] = useState<any>();
  const onDrop = (acceptedFiles:any) => {
    setIsImageUploaded(false);
    setImageFile(acceptedFiles[0]);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostImageLoad(fileReader.result);
    };

    fileReader.readAsDataURL(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  console.log(user.id);

  const onButtonClick = () => {
    instance.post(`${BASE_URL}/create-post`, {
      idUser: userId,
      idCategory: 1,
      Content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      title,
      likes: 0,
    }).then((res: any) => {
      setTitle('');
      setEditorState(EditorState.createEmpty());
      const formData = new FormData();
      formData.append('id', res.data.id);
      formData.append('file', imageFile);
      instance.put(`${BASE_URL}/upload-post-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }).catch((err: any) => {
      console.log(err);
    });
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleTitleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const editorLabels = {
    'components.controls.blocktype.h1': 'Header1',
    'components.controls.blocktype.h2': 'Header2',
    'components.controls.blocktype.h3': 'Header3',
    'components.controls.blocktype.normal': 'Normal',
  };

  const toolbar = {
    blockType: {
      options: ['Normal', 'H1', 'H2', 'H3'],
    },
    options: ['inline',
      'blockType', 'fontSize',
      'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'image'],
    link: {
      options: ['link'],
    },
    inline: {
      options: ['bold', 'italic', 'underline'],
      bold: { className: 'my-bold-style' },
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    textAlign: {
      options: ['left', 'center', 'right', 'justify'],
    },
  };

  //   console.log(postImageLoad);

  return (
    <Body>
      <Container>
        <GridContainer>
          <MainPostCreator
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isImageUploaded={isImageUploaded}
            postImageLoad={postImageLoad}
            editorState={editorState}
            setEditorState={setEditorState}
            toolbar={toolbar}
            editorLabels={editorLabels}
            handleTitleChange={handleTitleChange}
            handleTitleKeyDown={handleTitleKeyDown}
            title={title}
          />
          <SideBarPostCreator
            onButtonClick={onButtonClick}
          />
        </GridContainer>
      </Container>
    </Body>

  );
}

export default NewPostCreator;
