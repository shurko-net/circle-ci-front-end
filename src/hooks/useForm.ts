import { useEffect, useState } from 'react';
import useValidation from './useValidation';

const useForm = (
  initialValues:any,
  validations:any,
) => {
  const [value, setValue] = useState(initialValues);
  const [isDirty, setDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const valid = useValidation(value, validations);
  const onChange = (e:any) => {
    setValue(e.target.value);
  };

  const onBlur = (e:any) => {
    setDirty(true);
  };
  console.log(validations.errRespons);
  useEffect(() => {
    if (valid.isEmpty && isDirty) {
      setErrorMessage('Field cannot be empty');
    } else if (isDirty && valid.minLengthError) {
      setErrorMessage(`The field must contain a minimum of ${validations.minLength} characters`);
    } else if (isDirty && valid.emailError) {
      setErrorMessage('Incorrect email');
    } else if (isDirty && valid.maxLengthError) {
      setErrorMessage(`The field must contain a maximum of ${validations.maxLength} characters`);
    } else if (valid.errRespons) {
      setErrorMessage(`${validations.errRespons}`);
    } else {
      setErrorMessage('');
    }
  }, [valid.isEmpty, valid.minLengthError, isDirty, valid.maxLengthError,
    valid.emailError, valid.errRespons]);

  return {
    ...valid,
    value,
    onChange,
    onBlur,
    errorMessage,
    isDirty,
  };
};
export default useForm;
