import React from 'react';
import styled from 'styled-components';

interface ProfileInfoContentSectionProps {
  upValue?: number,
  downValue?: string,
}

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentUp = styled.div`
  color: #000;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
`;

const ContentDown = styled.div`
    margin-top: 1.25rem;
    color: #656565;
    font-size: 1rem;
    font-weight: 400;
`;

function ProfileInfoContentSection({ upValue, downValue }:ProfileInfoContentSectionProps) {
  return (
    <ContentSection>
      <ContentUp>{upValue}</ContentUp>
      <ContentDown>{downValue}</ContentDown>
    </ContentSection>
  );
}

export default ProfileInfoContentSection;
