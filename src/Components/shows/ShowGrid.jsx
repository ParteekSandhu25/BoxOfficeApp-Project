import { useEffect } from 'react';
import { useStarredShows } from '../../lib/useStarShow';
import ShowCard from './ShowCard';
import { FlexGrid } from '../Common/FlexGrid';

function ShowGrid({ shows }) {
  const [starredShows, dispatchStarred] = useStarredShows();

  console.log(starredShows);

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    isStarred
      ? dispatchStarred({ type: 'UNSTAR', showId })
      : dispatchStarred({ type: 'STAR', showId });
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
}

export default ShowGrid;
