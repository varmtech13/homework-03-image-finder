import PropTypes from 'prop-types';
import { ButtonMore } from './Button.styled.js';

export const Button = ({ loadMore }) => {
  return (
    <ButtonMore type="button" onClick={loadMore}>
      Load more
    </ButtonMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
