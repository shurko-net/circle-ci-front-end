import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  convertToRaw, EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useSelector } from 'react-redux';
// import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { createPost, postImage, updateCategory } from '../api/api';

const Page = styled.div`
    margin-top: 70px;
`;

const BodyEditor = styled.div`
    width: 50%;
    margin: auto;
    padding: 20px;
`;

const TitleTextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-size: 24px;
  font-family: 'Soehne web buch', sans-serif;
  resize: none;
`;

const Button = styled.button`
    display: block;
  font-weight: normal;
  background: #7DE2D1;
  border: none;
  padding: 7px 16px 9px;
  border-radius: 18px;
  cursor:pointer;
  transition: all .07s ease-in-out;
  margin-top:12px;
  float: right;
  &:hover {
    box-shadow:0 4px 10px rgba(0, 0, 0, .1);
    background:#7DE2D1;
  }
  a {
    text-decoration: none;
    color: none;
  }
`;

const PublishingCoverImage = styled.section`
  @media screen and (min-width: 768px){
    width: 840px;
  }
  position: relative;
  transition: 334ms height ease;
  margin: auto;
  margin-bottom: 12px;
`;

const PublishingCoverInput = styled.input`
    position: fixed;
    right: 100%;
    bottom: 100%;
`;

const PublishingCoverImagePlaceholder = styled.div`
    @media screen and (min-width: 768px){
      height: 405px;
      width: 100%;
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

const Img = styled.img`
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display: block;
  background-size: 100%;
  height: 100%;
  width: 100%;
`;

function PostCreator() {
  const user = useSelector((state: any) => state.user);

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

  const onButtonClick = () => {
    axios.put('https://localhost:44353/api/Category', {
      idCategory: 1,
      name: 'Puppet',
    }).then(() => {
      axios.post('https://localhost:44353/api/Post', {
        idUser: user.id,
        idCategory: 1,
        date: new Date(),
        postContent: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        title,
        likes: 0,
      }).then((res: any) => {
        setTitle('');
        setEditorState(EditorState.createEmpty());
        const formData = new FormData();
        formData.append('id', res.data.idPost);
        formData.append('file', imageFile);
        axios.post('https://localhost:44353/api/PostImage', formData, {
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
      options: [],
    },
  };

  return (
    <Page>
      <BodyEditor>
        <TitleTextArea
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          value={title}
          placeholder="Title"
        />
        <PublishingCoverImage>
          <div {...getRootProps()}>
            <PublishingCoverInput {...getInputProps()} />
            <PublishingCoverImagePlaceholder>
              <PublishingCoverImageLabel>
                {isImageUploaded && <div style={{ position: 'absolute', fontSize: '32px' }}>Click to upload the image</div>}
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
        />
        <Button type="submit" onClick={onButtonClick}>Post</Button>
      </BodyEditor>
    </Page>
  );
}

export default PostCreator;
