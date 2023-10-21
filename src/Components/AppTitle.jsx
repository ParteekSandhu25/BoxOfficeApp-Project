import styled from 'styled-components';
import { TextCenter } from './Common/TextCenter';

export default function AppTitle(props) {
  const {
    title = 'BoxOffice App',
    subTitle = 'Are you looking for an actor or a movie...',
  } = props;

  return (
    <div>
      <TitleWrapper>
        <h1>{title}</h1>
        <>{subTitle}</>
      </TitleWrapper>
    </div>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
