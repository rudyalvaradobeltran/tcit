interface values {
  name?: string;
  description?: string;
}

const validateForm = (values: values) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Please enter a name';
  }
  if (!values.description) {
    errors.description = 'Please enter a description';
  }
  return errors;
};

export default validateForm;