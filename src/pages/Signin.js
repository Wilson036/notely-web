import { gql, useApolloClient, useMutation } from '@apollo/client';
import UserForm from '../components/UserForm';
import React, { useEffect } from 'react';

const SIGNIN_USER = gql`
  mutation singIn($email: String!, $password: String!) {
    singIn(password: $password, email: $email)
  }
`;

const SingIn = props => {
  const client = useApolloClient();

  const [singIn, { loading, error }] = useMutation(SIGNIN_USER, {
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
      <UserForm action={singIn} formType="signin" />
    </React.Fragment>
  );
};

export default SingIn;
