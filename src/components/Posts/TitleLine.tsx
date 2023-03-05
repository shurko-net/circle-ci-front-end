import React, { useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
    display: block;
    margin-top: 70px;
`;

const SectionInner = styled.div`
    max-width: 740px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
`;

const Title = styled.textarea`
    padding-top: 16px;
    cursor: text;
    outline: 0;
    border: 0;
    resize: none;
    overflow: hidden;
    width: 100%;
`;

// const TitleSpan = styled.span`
//     color: #b3b3b1;
//     font-family: Georgia,"Times New Roman",Times,serif;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 1.25;
//     letter-spacing: 0;
//     font-size: 42px;
// `;

const ParagrafText = styled.p`
    margin-top: 10px;
`;

const Text = styled(Title)`
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -.003em;
`;

// const LineContainer = styled.div`
//     top: 23px;
//     right: 1621.5px;
//     height: 68.5px;
// `;

// const Line = styled.div`
//     height: 100%;
//     width: 1px;
//     left: 14px;
//     top: 0;
//     position: absolute;
//     overflow: hidden;
//     color: black;
//     top: -100%!important;
// `;

// const LineAnimation = styled.div`
//     transform: translate3d(0px, 68.5px, 0px);
//     `;

function TitleLine() {
  const [title, setTitle] = useState('');

  const [textareas, setTextareas] = useState([{ id: 1, text: '' }]);
  const [selectTextArea, setSelectTextArea] = useState(1);
  const handleContentChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: any) => {
    setTextareas(textareas.map((textarea) => {
      if (textarea.id === selectTextArea) {
        textarea.text = e.target.value;
        console.log(textarea.text);
      }
      return textarea;
    }));
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleKeyPress = (e: any) => {
    let selectedTextAreaText = '';
    textareas.map((textarea) => {
      if (textarea.id === selectTextArea) {
        selectedTextAreaText = textarea.text;
      }
    });
    if (e.key === 'Enter') {
      e.preventDefault();
      const newId = textareas[textareas.length - 1].id + 1;
      const newTextArea = { id: newId, text: '' };
      setTextareas([...textareas, newTextArea]);
      // debugger;
    } else if (e.key === 'Backspace' && selectedTextAreaText === '' && selectTextArea !== 1) {
      setTextareas(textareas.filter((textarea) => textarea.id !== selectTextArea));
      console.log('ok');
      console.log(textareas);
    }
  };

  return (
    <Block>
      <SectionInner>
        <Title
          onChange={handleContentChange}
          value={title}
          placeholder="Titel"
          // onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
        />
        <ParagrafText>
          {/* <Text
            placeholder="Tell your story"

          /> */}
          {textareas.map((textarea) => (
            <Text
              onChange={handleTextChange}
              placeholder={textarea.id === 1 && textareas.length === 1 ? 'Tell your story' : ''}
              key={textarea.id}
              onKeyDown={handleKeyPress}
              onFocus={() => {
                setSelectTextArea(textarea.id);
              }}
            />
          ))}
        </ParagrafText>
      </SectionInner>
    </Block>
  );
}

export default TitleLine;
