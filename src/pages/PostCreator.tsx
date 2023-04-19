import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  convertToRaw, EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const Page = styled.div`
    margin-top: 70px;
    min-height: 840px;
    height: calc(100vh - 70px);
`;

const BodyEditor = styled.div`
    width: 50%;
    margin: auto;
    padding: 20px;
`;

const TitleAreaWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 12px;
  margin-bottom: 30px;
`;

const TitleTextArea = styled.input`
  border: none;
  outline: none;
  font-size: 24px;
  font-family: 'Soehne web buch', sans-serif;
  resize: none;
  background: #F4F4F4;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  width: calc(100% - 12px);
  height: 100%;
  padding: 12px 6px;
`;

const Button = styled.button`
  display: block;
  font-weight: normal;
  background: #7DE2D1;
  border: none;
  padding: 7px 16px 9px;
  width: 100%;
  height: 100%;
  background: #60BDC2;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #FFFFFF;
  border-radius: 20px;
  cursor:pointer;
  transition: all .07s ease-in-out;
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
  margin-bottom: 30px;
`;

const PublishingCoverInput = styled.input`
    position: fixed;
    right: 100%;
    bottom: 100%;
`;

const PublishingCoverImagePlaceholder = styled.div`
background: #D2D2D2;
border-radius: 20px;
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
    background: #D2D2D2;
    border-radius: 20px;
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
`;

const RightSection = styled.div`
  position: absolute;
  top: 565px;
  left: 76%;
`;

const SubmitHandler = styled.div`
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 300px;
  height: 100px;
  padding: 12px;
`;

function PostCreator() {
  const user = useSelector((state: any) => state.user);

  const [postImageLoad, setPostImageLoad] = useState<any>();
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(true);
  const [imageFile, setImageFile] = useState<any>();
  const onDrop = (acceptedFiles: any) => {
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
    axios.put('https://localhost:7260/api/Category', {
      idCategory: 1,
      name: 'Puppet',
    }).then(() => {
      axios.post('https://localhost:7260/api/Post', {
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
        axios.post('https://localhost:7260/api/PostImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }).catch((err: any) => {
        console.log(err);
      });
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
      <div style={{ position: 'relative' }}>
        <div>
          <BodyEditor>
            <TitleAreaWrapper>
              <TitleTextArea
                onChange={handleTitleChange}
                onKeyDown={handleTitleKeyDown}
                value={title}
                placeholder="Title"
              />
            </TitleAreaWrapper>
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
              wrapperClassName="wrapper-class-name"
              onEditorStateChange={setEditorState}
              placeholder="Tell your story..."
              toolbar={toolbar}
              localization={{ locale: 'en', translations: editorLabels }}
            />
          </BodyEditor>
        </div>
        <RightSection>
          <SubmitHandler>
            <Button type="submit" onClick={onButtonClick}>Post</Button>
          </SubmitHandler>
        </RightSection>
      </div>
    </Page>
  );
}

export default PostCreator;
