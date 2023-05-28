import React from 'react';
import styled from 'styled-components';

// const StyledLink = styled(Link)`
//     cursor: pointer;
//     margin: 0;
//     padding: 0;
//     font-weight: inherit;
//     letter-spacing: inherit;
//     font-family: inherit;
//     border: inherit;
//     font-size: inherit;
//     fill: inherit;
//     color: inherit;
//     display: flex;
//     text-decoration: none;
// `;

const MainContainer = styled.div`
    padding-top: 100px;
    flex: 1 1 auto;
    max-width: 100%;
    background-color: #e8e8e8;
`;

function AboutMain() {
  return (
    <MainContainer />
  );
}

export default AboutMain;
