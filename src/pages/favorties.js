import { GET_MY_FAVOTES } from '../gql/query';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites- Notedly';
  });
  const { loading, error, data } = useQuery(GET_MY_FAVOTES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const favorites = data.me.favorites;
  if (!favorites.length) return <p>no favorites</p>;
  return <NoteFeed notes={favorites}></NoteFeed>;
};

export default Favorites;
