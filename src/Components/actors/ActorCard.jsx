import React from 'react';
import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';

export default function ActorCard({
  name,
  image,
  gender,
  country,
  birthday,
  deathday,
}) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
}
