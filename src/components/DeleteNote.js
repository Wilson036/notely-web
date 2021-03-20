import { useMutation } from '@apollo/client';
import { DELETE_NOTE } from '../gql/mutation';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ButtonAsLink from './ButtonAsLink';
import { GET_NOTES, GET_MY_NOTES } from '../gql/query';

const DeleteNote = props => {
  const id = props.noteId;
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id },
    refetchQueries: [{ query: GET_NOTES, GET_MY_NOTES }],
    onCompleted: () => {
      props.history.push('/mynotes');
    }
  });
  return <ButtonAsLink onClick={deleteNote}>Delete</ButtonAsLink>;
};

export default withRouter(DeleteNote);
