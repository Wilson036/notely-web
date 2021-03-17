import Button from '../components/Button';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #a435f0;
  color: white;
  font-size: 16px;
`;

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const SignUp = props => {
  useEffect(() => {
    document.title = 'SignUp - Notedly';
  });

  const [values, setValues] = useState();

  const getValue = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(values);
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={getValue}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={getValue}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={getValue}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
