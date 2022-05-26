import React from 'react';

const SignUpComponent = ({ test }) => {
  // const { id, title } = test;

  return (
    <div className="row">
      <span className="inputTitle">{test.title} *</span>
      <input className="signUpInputBox" />
    </div>
  );
};

export default SignUpComponent;
