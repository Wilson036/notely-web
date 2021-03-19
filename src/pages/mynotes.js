import { useQuery } from '@apollo/client';
import { GET_MY_NOTES } from '../gql/query';
import React, { useEffect } from 'react';
import NoteFeed from '../../solutions/03-GraphQL-Query/components/NoteFeed';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes- Notedly';
  });
  const { loading, error, data } = useQuery(GET_MY_NOTES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  const notes = data.me.notes;
  if (!notes.length) return <p>no notes yet</p>;
  return <NoteFeed notes={notes} />;
};

export default MyNotes;
