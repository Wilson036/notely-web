import { GET_ME } from '../gql/query';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import DeleteNote from './DeleteNote';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  return (
    <React.Fragment>
      Favorites: {props.note.favorites} <br />
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <Link to={`/edit/${props.note.id}`}>Edit</Link>
          <br />
          <DeleteNote noteId={props.note.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NoteUser;
