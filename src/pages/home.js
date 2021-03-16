import { gql, useQuery } from '@apollo/client';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  if (loading) {
    return <p>Loading ....</p>;
  }

  if (error) {
    return <div>Error!;</div>;
  }
  return (
    <div>
      {data.noteFeed.notes.map(note => {
        return (
          <article key={note.id}>
            <img
              src={note.author.avatar}
              alt={`${note.author.username} avatar`}
              height="50"
            />{' '}
            {note.author.username} {note.createdAt} {note.favoriteCount}{' '}
            <ReactMarkdown source={note.content} />
          </article>
        );
      })}
    </div>
  );
};

export default Home;
