import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import '../App.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios
  .get('https://localhost:7297/api/User')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

const paragraph = { color: '#404040', marginTop: '4px', fontSize: '1.2rem' };

function RegisterCopy() {
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    secondName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
  });

  return (

    <Formik
      initialValues={{
        name: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        email: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        axios.post('https://localhost:7297/api/User', {
          name: values.name,
          surname: values.secondName,
          email: values.email,
          password: values.password,
        });
        navigate('/');
      }}
      validationSchema={validationSchema}
    >
      {({
        values, errors, touched, handleChange, handleBlur, isValid, dirty,
      }) => (
        <Form>
          <div className="wrapper">
            <div className="register-box">
              <h2 style={{ fontSize: '2.2rem' }}>
                Registration
              </h2>
              <p style={paragraph}>Enter your details</p>
              <div className="form">
                <div className="form-group">
                  <div className="label">Email</div>
                  <div className="icon"><PersonOutlineOutlinedIcon fontSize="medium" /></div>
                  <input
                    className="input"
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
                  <div className="label">Your first name</div>
                  <div className="icon"><PersonIcon fontSize="medium" /></div>
                  <input
                    className="input"
                    placeholder="Your first name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                {touched.name && errors.name
                 && <div className="error-style"><p className="error">{errors.name}</p></div>}

                <div className="form-group">
                  <div className="label">Your second name</div>
                  <div className="icon"><PersonOutlineOutlinedIcon fontSize="medium" /></div>
                  <input
                    className="input"
                    placeholder="Your second name"
                    type="text"
                    name="secondName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName}
                  />
                </div>
                {touched.secondName && errors.secondName
                 && <div className="error-style"><p className="error">{errors.secondName}</p></div>}

                <div className="form-group">
                  <div className="label">Your password</div>
                  <div className="icon"><LockIcon fontSize="medium" /></div>
                  <input
                    className="input"
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

                <div className="form-group">
                  <div className="label">Your password</div>
                  <div className="icon"><LockOutlinedIcon fontSize="medium" /></div>
                  <input
                    className="input"
                    placeholder="Confirm password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                </div>
                {touched.confirmPassword
                && errors.confirmPassword
                && <div className="error-style"><p className="error">{errors.confirmPassword}</p></div>}

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

export default RegisterCopy;
