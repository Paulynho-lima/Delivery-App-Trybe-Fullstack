const schemaValidate = (object, schema) => {
  const { error } = schema.validate(object);
  if (error) {
    return true;
  }
  return false;
};

export default schemaValidate;
