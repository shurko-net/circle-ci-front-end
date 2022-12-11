import React from 'react';
import styled from 'styled-components';

interface CategoriesLinkProps {
  name: string;
  link?: string;
}

const A = styled.a`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
    text-decoration: none;
`;

const ContainerLink = styled.div`
    border-radius: 3px;
    border: 1px solid rgba(230, 230, 230, 1);
    padding: 6px 16px;
    margin-bottom: 8px;
    margin-right: 8px;
    display: inline-block;
`;

const InnerLink = styled.div`
    
`;

const TextLink = styled.p`
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-weight: 400;
`;

function CategoriesLink({ name, link }:CategoriesLinkProps) {
  return (
    <A href={link}>
      <ContainerLink>
        <InnerLink>
          <TextLink>{name}</TextLink>
        </InnerLink>
      </ContainerLink>
    </A>
  );
}

export default CategoriesLink;
