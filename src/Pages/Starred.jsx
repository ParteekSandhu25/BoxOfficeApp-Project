import ShowGrid from '../Components/shows/ShowGrid';
import { getShowsByIds } from '../api/tvmaze';
import { useStarredShows } from '../lib/useStarShow';
import { useQuery } from '@tanstack/react-query';

function Starred() {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => {
          return { show };
        })
      ),
    refetchOnWindowFocus: false,
  });

  console.log({ starredShows });

  if (starredShows?.length === 0) {
    return <p>No shows were starred...</p>;
  }
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>Error Occurred: {starredShowsError.message}</div>;
  }

  return <div>Loading...</div>;
}

export default Starred;
