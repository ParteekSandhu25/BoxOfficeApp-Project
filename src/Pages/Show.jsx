import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/shows/ShowMainData';
import Details from '../Components/shows/Details';
import Seasons from '../Components/shows/Seasons';
import Cast from '../Components/shows/Cast';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (error) {
//         setShowError(error);
//       }
//     }

//     fetchData();
//   }, [showId]);

//   return { showData, showError };
// };

function Show() {
  const { showId } = useParams();

  // CUSTOM HOOK
  // const { showData, showError } = useShowById(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showData) {
    return (
      <div>
        <Link to={'/'}>GO back to Home</Link>

        <ShowMainData
          image={showData.image}
          rating={showData.rating}
          name={showData.name}
          summary={showData.summary}
          genres={showData.genres}
        />

        <h2>Details</h2>

        <Details
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />

        <h1>Seasons:</h1>
        <Seasons seasons={showData._embedded.seasons} />

        <h1>Cast</h1>
        <Cast cast={showData._embedded.cast} />
      </div>
    );
  }

  if (showError) {
    return <p>We have an error: {showError.message}</p>;
  }

  return <div>Loading...</div>;
}

export default Show;
