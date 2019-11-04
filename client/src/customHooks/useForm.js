import { useState, useEffect } from "react";



const useForm = (callback, validate) => {
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
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]:
        event.target.name === "feel_one" || event.target.name === "feel_two"
          ? parseInt(event.target.value)
          : event.target.value
    });
  };

  return [values, handleChange, handleSubmit, setValues, errors];
};

export default useForm;
