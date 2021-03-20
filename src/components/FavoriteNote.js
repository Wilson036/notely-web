import { useMutation } from '@apollo/client';
import { TOGGLE_FAVORITE } from 'gql/mutation';
import { GET_MY_FAVOTES } from 'gql/query';
import React, { useState } from 'react';
import ButtonAsLink from './ButtonAsLink';

const FavoriteNote = props => {
  const [count, setCount] = useState(props.favoriteCount);
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter(note => note.id === props.noteId).length > 0
  );
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: { id: props.noteId },
    refetchQueries: [{ query: GET_MY_FAVOTES }]
  });
  return (
    <React.Fragment>
      {!favorited ? (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}
        >
          ADD TO FAVORITE NOTE
        </ButtonAsLink>
      ) : (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          }}
        >
          REMOVE FAVORITE
        </ButtonAsLink>
      )}
      :{count}
    </React.Fragment>
  );
};

export default FavoriteNote;
