import { useRef } from 'react';
import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';
import { StarIcon } from '../Common/StarIcon';
import { Link } from 'react-router-dom';

function ShowCard({ name, image, id, summary, onStarClick, isStarred }) {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ') + '...'
    : 'No Description';

  const starBtnRef = useRef();

  const handlerStarClick = () => {
    onStarClick(id);

    const starBtnEl = starBtnRef.current;

    if (!starBtnEl) return;

    if (isStarred) {
      starBtnEl.classList.remove('animate');
    } else {
      starBtnEl.classList.add('animate');
    }
  };

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>

      <p>{summaryStripped}</p>

      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </Link>
        <StarBtn ref={starBtnRef} type="button" onClick={handlerStarClick}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
}

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
