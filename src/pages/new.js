import NoteForm from '../components/NoteForm';
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_NOTE } from '../gql/mutation';
import { GET_NOTES } from '../gql/query';

const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note - Notedly';
  });
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
    onCompleted: data => {
      props.history.push(`note/${data.newNote.id}`);
    }
  });
  return <NoteForm action={data} />;
};

export default NewNote;
