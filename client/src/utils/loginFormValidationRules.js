export default function validate(values) {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username is required';    
  } else if (values.username.length < 7) {
    errors.username = "Username must be seven or more characters"
  }
  
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.name) {
    errors.name = 'Name is required';
  } 
  
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 7) {
    errors.password = 'Password must be seven or more characters';
  }
  return errors;
};