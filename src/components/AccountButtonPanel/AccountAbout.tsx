import React from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import Account from '../../pages/Account';
import BasicModal from '../Modal';

const Container = styled.div`
    background: #2b2c28;
    border-radius: 20px;
    padding-bottom: 12px;
    /* position: relative; */
`;

const UpContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.2rem;
    padding-bottom: 0;
`;

const UpContainerFlex = styled.div`
    display: flex;
    flex-direction: row;
`;

const UpContainerTextFlex = styled.div`
    @media screen and (min-width: 768px) {
    flex-direction: row;
    }
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        align-items: flex-start;
`;

const UpContainerLText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.9rem;
`;

const UpContainerH2Text = styled.h2`
    color: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
`;

const UpContainerIconFlex = styled.div`
    display: flex;
`;

const UpContainerIconDiv = styled.div`
    cursor: pointer;
    &:hover {
    background:#464a4d;
    border-radius: 22px;
  }
`;

const UpContainerIconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    width: 2.8rem;
    min-width: auto;
`;

const UpContainerIconCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DownContent = styled.div`
    display: flex;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 12px;
    padding-top: 12px;
`;

const DownContainerFlex = styled.div`
    display: flex;
    width: 100%;
`;

const DownFlex = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

`;

const DownDiv = styled.div`
    line-height: 1.9rem;
    max-height: 7.6rem;
    width: 100%;
`;

const DownSpan = styled.span`
    color: white;
`;

// const Button = styled.button`
// `;

function AccountAbout() {
  const textAreaText = useSelector((state: any) => state.about.aboutText);

  return (
    <Account>
      <Container>
        <UpContent>
          <UpContainerFlex>
            <UpContainerTextFlex>
              <UpContainerLText>
                <UpContainerH2Text>
                  Загальна iнформацiя
                </UpContainerH2Text>
              </UpContainerLText>
              <UpContainerIconFlex>
                <UpContainerIconDiv>
                  <UpContainerIconLink>
                    <UpContainerIconCenter>
                      <BasicModal>
                        <EditIcon style={{ color: 'white' }} />
                      </BasicModal>
                    </UpContainerIconCenter>
                  </UpContainerIconLink>
                </UpContainerIconDiv>
              </UpContainerIconFlex>
            </UpContainerTextFlex>
          </UpContainerFlex>
        </UpContent>
        <DownContent>
          <DownContainerFlex>
            <DownFlex>
              <DownDiv>
                <DownSpan>
                  {textAreaText}
                </DownSpan>
              </DownDiv>
            </DownFlex>
          </DownContainerFlex>
        </DownContent>
      </Container>
    </Account>

  );
}

export default AccountAbout;
