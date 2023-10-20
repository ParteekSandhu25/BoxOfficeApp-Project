import React from 'react';

function Cast({ cast }) {
  return (
    <div>
      {cast.map(({ person, character, voice }) => {
        return (
          <div key={person.id}>
            <div>
              <img
                src={
                  person.image ? person.image.medium : '/not-found-image.png'
                }
                alt={person.name}
              />
            </div>

            <div>
              {person.name} ({character.name}) {voice && 'Voiceover'}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cast;
