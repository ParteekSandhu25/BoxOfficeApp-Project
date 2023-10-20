import ActorCard from './ActorCard';

function ActorGrid({ actors }) {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={
            data.person.country ? data.person.country.name : 'Country Not known'
          }
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
        >
          {data.person.name}
        </ActorCard>
      ))}
    </div>
  );
}

export default ActorGrid;
