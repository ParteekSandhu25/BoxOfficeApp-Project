export default function AppTitle(props) {
  const {
    title = 'BoxOffic App',
    subTitle = 'Are you looking for an actor or a movie...',
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h1>{subTitle}</h1>
    </div>
  );
}
