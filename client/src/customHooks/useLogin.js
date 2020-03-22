import { useState, useEffect } from "react";

const useLogin = (callback, validate = null) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    if (validate) setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return [values, handleChange, handleSubmit, setValues, errors];
};

export default useLogin;
