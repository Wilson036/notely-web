import { gql, useApolloClient, useMutation } from '@apollo/client';
import UserForm from '../components/UserForm';
import React, { useEffect } from 'react';
import { SIGNIN_USER } from '../gql/mutation';

const SingIn = props => {
  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  useEffect(() => {
    document.title = 'Sing In Notedly';
  });

  return (
    <React.Fragment>
      <UserForm action={signIn} formType="signin" />
    </React.Fragment>
  );
};

export default SingIn;
