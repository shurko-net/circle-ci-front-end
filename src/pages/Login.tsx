import React from 'react';
// import styled from 'styled-components';

import LockIcon from '@mui/icons-material/Lock';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import '../App.css';
import axios from 'axios';

// const H2 = styled.h2`
//   font-size: 2.2rem;
// `;

// const P = styled.p`
//   color: #404040;
//   margin-top: 4px;
//   font-size: 1.2rem;
// `;

// const Form = styled.div`
//   text-align: left;
//   margin-top: 30px;
// `;
const paragraph = { color: '#404040', marginTop: '4px', fontSize: '1.2rem' };
// const Forgot = styled.div`
//   cursor:pointer;
//   color: #339989;
//   font-size: 16px;
//   &:hover {
//     color: #7de2d1;
//   }
// `;

function Login() {
  const validationSchema = yup.object().shape({
    password: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
  });

  const onSubmit = (values: any) => {
    axios
      .get('https://localhost:7297/api/User')
      .then((response) => {
        response.data.forEach((i: any) => {
          if (values.email === i.email
            && values.password === i.password) {
            console.log('True');
          }
        });
        // debugger;
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values, errors, touched, handleChange, handleBlur, isValid, dirty,
      }) => (
        <Form>
          <div className="wrapper">
            <div className="register-box">
              <h2 style={{ fontSize: '2.2rem' }}>
                Welcome back
              </h2>
              <p style={paragraph}>Enter your details</p>
              <div className="form">
                <div className="form-group">
                  <div className="label">Email</div>
                  <div className="icon"><PersonOutlineOutlinedIcon fontSize="medium" /></div>
                  <input
                    className={errors.email ? 'invalid' : 'input'}
                    placeholder="Your email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                {touched.email && errors.email
                && <div className="error-style"><p className="error">{errors.email}</p></div>}

                <div className="form-group">
                  <div className="label">Your password</div>
                  <div className="icon"><LockIcon fontSize="medium" /></div>
                  <input
                    className={errors.password ? 'invalid' : 'input'}
                    placeholder="Your password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {touched.password && errors.password
                && <div className="error-style"><p className="error">{errors.password}</p></div>}

                <button
                  // onClick={handleSubmit}
                  disabled={!isValid && !dirty}
                  type="submit"
                  className="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>

  );
}

export default Login;
