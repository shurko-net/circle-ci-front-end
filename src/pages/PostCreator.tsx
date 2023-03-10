import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useSelector } from 'react-redux';
import axios from 'axios';

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

function PostCreator() {
  const user = useSelector((state: any) => state.user);

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

  return (
    <Page>
      <BodyEditor>
        <TitleTextArea
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          value={title}
          placeholder="Title"
        />
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class-name"
          editorClassName="editor-class-name"
          onEditorStateChange={setEditorState}
        />
        <Button type="submit" onClick={onButtonClick}>Post</Button>
      </BodyEditor>
    </Page>
  );
}

export default PostCreator;
