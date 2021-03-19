import { GET_ME } from '../gql/query';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  return (
    <React.Fragment>
      Favorites: {props.note.favorites} <br />
      {data.me.id === props.note.author.id && (
        <Link to={`edit/${props.note.id}`}>Edit</Link>
      )}
    </React.Fragment>
  );
};

export default NoteUser;
