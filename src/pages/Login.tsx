import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../App.css';
import axios from 'axios';
import { userAuth, setUserImage } from '../store/slices/userSlice';

const paragraph = { color: '#404040', marginTop: '4px', fontSize: '1.2rem' };

function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    password: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
  });

  const onSubmit = (values: any) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    axios.post('https://localhost:7297/auth/Login', {
      email: userData.email,
      password: userData.password,
    })
      .then((response) => {
        const userObj = {
          id: response.data.idUser,
          firstName: response.data.name,
          secondName: response.data.surname,
          email: response.data.email,
          password: response.data.password,
          biography: response.data.biography,
          phoneNumber: response.data.tNumber,
          subscribed: response.data.subscribed,
        };

        dispatch(userAuth(userObj));
        axios.get(`https://localhost:7297/api/Image/${userObj.id}`).then((res: any) => {
          dispatch(setUserImage(res.data));
        });
        navigate('/');
      }).catch((err) => {
        if (err.response.status === 404) {
          setError(true);
        } else {
          setError(false);
        }
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
                {(touched.password && errors.password
                && <div className="error-style"><p className="error">{errors.password}</p></div>)
                || (error && (
                <div className="error-style">
                  <p className="error">
                    Password or username do not match
                  </p>
                </div>
                ))}

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
