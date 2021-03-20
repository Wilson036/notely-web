import { useMutation, useQuery } from '@apollo/client';
import { GET_ME, GET_NOTE } from '../gql/query';
import { UPDATE_NOTE } from '../gql/mutation';
import NoteForm from '../components/NoteForm';
import React from 'react';

const EditNote = props => {
  // 在url中找到id
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  const { data: userData } = useQuery(GET_ME);
  const [editNote] = useMutation(UPDATE_NOTE, {
    variables: { id },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  if (userData.me.id !== data.note.author.id) {
    return <p>You have no permission to edit this note</p>;
  }
  return <NoteForm content={data.note.content} action={editNote}></NoteForm>;
};

export default EditNote;
