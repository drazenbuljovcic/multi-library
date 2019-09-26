import TestLib from 'test-lib';

TestLib().init();

const Button = () => {
  let internalClicked = false;

  const click = () => {
    internalClicked = true;

    console.log('Button click!');
  };

  return {
    click,
  };
};

export default Button;

