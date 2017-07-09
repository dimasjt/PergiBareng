const required = (value) => {
  return (value === null || value === "") ? "required" : undefined;
};

const min = (length) => {
  return (value) => {
    return (value && value.length <= length) ? `length min ${length}` : undefined;
  };
};

const email = (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (value && !regex.test(value)) ? "invalid email" : undefined;
};

export {
  required,
  min,
  email,
};
