import { gql, useQuery } from '@apollo/client';
import React from 'react';
import NoteFeed from '../components/NoteFeed';

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
  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;
