import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { stateFromHTML } from 'draft-js-import-html';
import axios from 'axios';
import Account from '../../pages/Account';
import { setUserBio } from '../../store/slices/userSlice';

type SaveResponse = {
  idUser: number
  tNumber: number
  name: string
  surname: string
  email: string
  password: number
  biography: string
  subscribed: boolean
};

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

const EditorPlaceholder = styled.div`
  margin-top: 20px
`;

const ButtonsPlaceholder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutField = styled.div`
  margin-top: 20px;
`;

function AccountAbout() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(stateFromHTML(currentUser.biography)),
  );
  const [isEditorVisble, setIsEditorVisible] = useState(false);

  const [userBiog, setUserBiog] = useState(currentUser.biography);

  const onVisibleClick = () => {
    setIsEditorVisible(!isEditorVisble);
  };

  const onSaveClick = () => {
    setIsEditorVisible(false);
    axios.put<SaveResponse>('https://localhost:44353/api/User', {
      idUser: currentUser.id,
      tNumber: currentUser.phoneNumber,
      name: currentUser.firstName,
      surname: currentUser.secondName,
      email: currentUser.email,
      password: currentUser.password,
      biography: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      subscribed: currentUser.subscribed,
    }).then(() => {
      dispatch(setUserBio(draftToHtml(convertToRaw(editorState.getCurrentContent()))));
      setUserBiog(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    });
  };

  return (
    <Account
      user={false}
    >
      {isEditorVisble
        ? (
          <EditorPlaceholder>
            <Editor
              editorState={editorState}
              wrapperClassName="wrapper-class-name"
              editorClassName="editor-class-name"
              onEditorStateChange={setEditorState}
            />
            <ButtonsPlaceholder>
              <Button type="submit" onClick={onVisibleClick}>Hide Editor</Button>
              <Button type="submit" onClick={onSaveClick}>Save</Button>
            </ButtonsPlaceholder>
          </EditorPlaceholder>
        )
        : (
          <>
            <Button type="submit" onClick={onVisibleClick}>Show Editor</Button>
            <AboutField dangerouslySetInnerHTML={{ __html: userBiog }} />
          </>
        )}
    </Account>

  );
}

export default AccountAbout;
