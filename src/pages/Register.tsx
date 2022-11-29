import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Registration = styled.div`
  width: 400px;
  overflow: hidden;
  height: 600px;
  text-align: center;
  border-radius: 25px;
  /* padding: 10px 20px; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fafafa;
  font-size: 32px;
`;

function Register() {
  return (
    <Wrapper>
      <Registration>
        <Header>Registration</Header>
        <div>
          <h5>Name</h5>
          <input type="text" />
          <h5>Surname</h5>
          <input type="text" />
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <h5>Confirm Password</h5>
          <input type="text" />
        </div>
        <div>
          <Button primary>Submit</Button>
        </div>
      </Registration>
    </Wrapper>
  );
}

export default Register;
