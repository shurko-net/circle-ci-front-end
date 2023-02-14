import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { aboutText } from '../store/slices/aboutSlice';

const ButtonCross = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: auto;
  position: absolute;
  z-index: 1;
  top: 10.5px;
  right: 1.2rem;
  background-color: #1d2226;
  border: 0;
  cursor: pointer;
  &:hover {
    background:#464a4d;
    border-radius: 22px;
  }
`;

const Box = styled.div`
  @media screen and (min-width: 1024px) and (min-height: 600px)
  {
      max-width: 744px;
  }
  width: 744px;
  @media screen and (max-height: 960px)
  {
    max-height: calc(100vh - 96px);
  }
  
  top: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 12px 18px 1px rgb(0 0 0 / 20%);
  transition: box-shadow 83ms;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0 auto;
  background-color: #1d2226;
  max-width: 100%;
  top: 192px;
  border-radius: 10px;
  color: white;
`;

const UpContainer = styled.div`
  display: block;
  padding: 16px 24px;
  border-bottom: 1px solid #383d40;
`;

const UpText = styled.h2`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
`;

const MainContainer = styled.div`
  overflow: visible;
  position: relative;
  padding: 0;
  overflow: auto;
`;

const MainText = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MainPText = styled.p`
  color: #a4a6a7;
  font-size: 12px;
  line-height: 1.3;
`;

const MainTool = styled.div`
  padding-top: 24px;
`;

const MainToolContainer = styled.div`
 
`;

const MainToolFlex = styled.div`
  display: flex;
`;

const MainToolForm = styled.div`
  width: 100%;
  min-width: 0;
`;

const MainToolLabel = styled.label`
  margin: 0 0 0.2rem;
  color: #a4a6a7;
  font-size: 14px;
`;

const MainToolTextArea = styled.textarea`
  height: 245px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 669px;
  display: block;
  padding: 0.6rem 0.8rem;
  resize: vertical;
  border-radius: 5px;
  background-color: #1d2226;
  color: #fcfcfc;
`;

const MainToolP = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const DownContainer = styled.div`
  justify-content: space-between;
  flex-direction: row-reverse;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  padding: 16px 24px;
  border-top: 1px solid #383d40;
`;

const DownButton = styled.button`
  border: 0;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 1.6rem;
  /* padding-left: 1.6rem;
  padding-right: 1.6rem; */
  font-size: 16px;
  /* min-height: 3.2rem;
  padding: 0.6rem 1.2rem; */
  /* line-height: 2rem; */
  background-color: #339989;
  color: rgba(0,0,0,0.75);
`;

const DownSpan = styled.span`

`;
// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function BasicModal({ children }: any) {
  const dispatch = useDispatch();

  const [textareaText, setTextareaText] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleContent = () => {
    const Text = {
      aboutText: textareaText,
    };

    dispatch(aboutText(Text));
    handleClose();
    setTextareaText('');
  };

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ButtonCross onClick={handleClose}>
            <CloseIcon />
          </ButtonCross>
          <UpContainer>
            <UpText>Змініть «Загальну інформацію»</UpText>
          </UpContainer>
          <MainContainer>
            <MainText>
              <MainPText>* Позначає обов’язкові поля</MainPText>
              <MainTool>
                <MainToolContainer>
                  <MainToolFlex>
                    <MainToolForm>
                      <MainToolLabel>
                        Ви можете написати про роки досвіду,
                        галузь або навички. Люди також розповідають
                        про досягнення або попередній досвід роботи.
                      </MainToolLabel>
                      <MainToolTextArea
                        value={textareaText}
                        onChange={(text) => setTextareaText(text.target.value)}
                      />
                      <MainToolP>2000</MainToolP>
                    </MainToolForm>
                  </MainToolFlex>
                </MainToolContainer>
              </MainTool>
            </MainText>
          </MainContainer>
          <DownContainer>
            <DownButton onClick={handleContent}>
              <DownSpan>
                Зберегти
              </DownSpan>
            </DownButton>
          </DownContainer>
        </Box>

        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </div>
  );
}
