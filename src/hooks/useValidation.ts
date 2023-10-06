import { useEffect, useState } from 'react';

const useValidation = (value:any, validations:any) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [errRespons, setErrRespons] = useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case 'isEmail':
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case 'errRespons':
          if (validations.errRespons) {
            setErrRespons(true);
          } else {
            setErrRespons(false);
          }
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
    errRespons,
  };
};

export default useValidation;
