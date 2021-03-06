import { gql, useQuery } from '@apollo/client';
import Note from '../components/Note';
import React from 'react';
import { GET_NOTE } from '../gql/query';

const NotePage = props => {
  const id = props.match.params.id;
  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });
  if (loading) return <p>Loading....</p>;
  if (error) {
    console.error('err', error);
    return;
  }
  return <Note note={data.note} />;
};

export default NotePage;
