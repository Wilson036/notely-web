import Button from '../components/Button';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation, useApolloClient } from '@apollo/client';
import UserForm from '../components/UserForm';

const SignUp = props => {
  useEffect(() => {
    document.title = 'SignUp - Notedly';
  });

  const SIGNIN_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
      singUp(username: $username, email: $email, password: $password)
    }
  `;

  const client = useApolloClient();

  const [signUp, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.singUp);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
    </React.Fragment>
  );
};

export default SignUp;
