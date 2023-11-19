import { LoadMoreButton } from './button.styled';

export const Button = ({ loadMore }) => {
  return <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>;
};
