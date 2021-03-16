import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';

const StyledNote = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;
const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserAction = styled.div`
  margin-left: auto;
`;

const Note = ({ note }) => {
  return (
    <StyledNote>
      <MetaInfo>
        <img
          src={note.author.avatar}
          alt={`${note.author.username} avatar`}
          height="50"
        />
      </MetaInfo>
      <MetaInfo>
        <em>by</em> {note.author.username}
        <br /> {format(note.createdAt, 'MM/DD/YYYY')}
      </MetaInfo>
      <UserAction>
        <em>Favorites:</em>
        {note.favoriteCount}
      </UserAction>
      <ReactMarkdown source={note.content} />
    </StyledNote>
  );
};

export default Note;
