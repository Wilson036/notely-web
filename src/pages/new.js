import NoteForm from '../components/NoteForm';
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_NOTE } from '../gql/mutation';

const NewNote = props => {
  useEffect(() => {
    document.title = 'New Note - Notedly';
  });
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    onCompleted: data => {
      props.history.push(`note/${data.newNote.id}`);
    }
  });
  return <NoteForm action={data} />;
};

export default NewNote;
