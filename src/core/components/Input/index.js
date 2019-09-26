const Input = () => {
  let internalDirty = false;

  const onType = () => {
    internalDirty = true;

    console.log('Input dirty!');
  };

  const isDirty = () => internalDirty;

  return {
    onType,
    isDirty,
  };
};

export default Input;

