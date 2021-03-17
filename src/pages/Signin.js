import { gql, useApolloClient, useMutation } from '@apollo/client';
import UserForm from '../components/UserForm';
import React, { useEffect } from 'react';

const SIGNIN_USER = gql`
  mutation signIn($email: String!, $username: String!, $password: String!) {
    singUp(username: $username, email: $email, password: $password)
  }
`;

const SingIn = props => {
  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.singIn);
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
