import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

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

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #a435f0;
  color: white;
  font-size: 16px;
`;

const UserForm = props => {
  const [values, setValues] = useState();

  const isSingUp = props.formType === 'signup';
  const text = isSingUp ? 'up' : 'in';

  const getValue = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <Wrapper>
      {<h2>Sign {text}</h2>}
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
              ...values
            }
          });
        }}
      >
        {isSingUp && (
          <React.Fragment>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={getValue}
              required
            />
          </React.Fragment>
        )}
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

export default UserForm;
