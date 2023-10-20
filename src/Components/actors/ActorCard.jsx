import React from 'react';
import { Link } from 'react-router-dom';

export default function ActorCard({
  name,
  image,
  gender,
  country,
  birthday,
  deathday,
}) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : 'Country Not known'}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
}
