import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();

    callback();
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

  return [values, handleChange, handleSubmit, setValues];
};

export default useForm;
