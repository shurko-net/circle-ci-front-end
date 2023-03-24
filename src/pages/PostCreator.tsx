import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  convertToRaw, EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { setPostImage } from '../store/slices/postSlice';

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
    width: 720px;
  }
  position: relative;
  transition: 334ms height ease;
  margin: auto;
`;

const PublishingCoverInput = styled.input`
    position: fixed;
    right: 100%;
    bottom: 100%;
`;

const PublishingCoverImagePlaceholder = styled.div`
    @media screen and (min-width: 768px){
      height: 405px;
      width: 720px;
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
    position: absolute;
    text-indent: 0;
    cursor: pointer;
`;

const TextLabelHeader = styled.p`
  font-size: 2.4rem;
  line-height: 1.3;
`;

const TextLabel = styled(TextLabelHeader)`
  margin-top: 8px;
  font-size: 1.4rem;
  line-height: 1.4;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display: block;
  background-size: 100%;
`;

function PostCreator() {
  const dispatch = useDispatch();
  const { idPost, postImage } = useSelector((state: any) => ({
    idPost: state.post.idPost,
    postImage: state.post.image,
  }));
  const user = useSelector((state: any) => state.user);

  const [postImageLoad, setPostImageLoad] = useState<any>(postImage);
  const onDrop = (acceptedFiles:any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostImageLoad(fileReader.result);

      // console.log(fileReader.result);
    };

    fileReader.readAsDataURL(acceptedFiles[0]);

    const formData = new FormData();
    formData.append('id', idPost);
    formData.append('file', acceptedFiles[0]);

    axios
      .post('https://localhost:7297/api/PostImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((image) => {
        dispatch(setPostImage(image.data));
      });
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onButtonClick = () => {
    axios.put('https://localhost:7297/api/Category', {
      idCategory: 1,
      name: 'Puppet',
    }).then(() => {
      axios.post('https://localhost:7297/api/Post', {
        idUser: user.id,
        idCategory: 1,
        date: new Date(),
        postContent: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        title,
        likes: 0,
      }).then(() => {
        setTitle('');
        setEditorState(EditorState.createEmpty());
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

  // useEffect(() => {
  //   axios.get(`https://localhost:7297/api/PostImage/${idPost}`).then((image) => {
  //     console.log(image);
  //     dispatch(setPostImage(image.data));
  //     debugger;
  //   });
  // }, []);
  // useEffect(() => {
  //   setPostImageLoad(postImageLoad);
  // }, [postImageLoad]);

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
                <TextLabelHeader>
                  Головне зображення не завантажено
                </TextLabelHeader>
                <TextLabel>
                  Спробуйте додати головне зображення до вашої статті, щоб залучити більше читачів.
                </TextLabel>
                <TextLabel>
                  Рекомендуємо завантажувати зображення розміром 1280 x 720 пікселів.
                </TextLabel>
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
