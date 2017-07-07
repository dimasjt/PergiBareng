exports.required = (value) => {
  return value == null ? "required" : undefined;
};

exports.min = (length) => {
  return (value) => {
    return value.length <= length ? `length min ${length}` : undefined;
  };
};
