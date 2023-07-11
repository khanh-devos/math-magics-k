import PropTypes from 'prop-types';

export default function Item({ sign, index }) {
  return <div className={`item-${index} items-shared`}>{sign}</div>;
}

Item.propTypes = {
  sign: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
