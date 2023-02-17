import React from 'react';
import styled from 'styled-components';

interface HomeLineProps {
  email: string,
  name:string
}

const Button = styled.button`
    background: #fcfcfc;
    text-align: left;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    padding: 0;
    align-items: center;
    display: flex;
    fill: inherit;
    border: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    font-weight: inherit;
`;

const SpanItems = styled.span`
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  display: flex;
  text-align: left;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanFlex = styled.span`
  align-items: baseline;
  display: flex;
  box-sizing: inherit;
  text-align: left;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;

`;

const SpanBlack = styled.span`
  flex: 1 1 0px;
  margin: auto 0px;
  display: block;
  box-sizing: inherit;
  text-align: left;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanText = styled.span`
  color: rgba(41, 41, 41, 1);
  line-height: 20px;
  font-size: 14px;
  text-align: left;
`;

const SpanEmail = styled.span`
  margin-left: 32px;
  display: inline-block;
  text-align: left;
  color: rgba(117, 117, 117, 1);
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

const SpanTextRight = styled.span`
  text-align: right;
  white-space: nowrap;
  vertical-align: bottom;
  text-overflow: ellipsis;
  width: 200px;
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-weight: inherit;
  letter-spacing: inherit;
  font-family: inherit;
  fill: inherit;
`;

function HomeLine({ email, name }:HomeLineProps) {
  return (

    <Button>
      <SpanItems>
        <SpanFlex>
          <SpanBlack>
            <SpanText>{name}</SpanText>
          </SpanBlack>
        </SpanFlex>
        <SpanEmail>
          <SpanTextRight>{email}</SpanTextRight>
        </SpanEmail>
      </SpanItems>
    </Button>

  );
}

export default HomeLine;
