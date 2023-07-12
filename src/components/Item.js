import PropTypes from 'prop-types';
import calculate from './logic/calculate';

export default function Item({
  sign, index, total, next, operation, setExpression,
}) {
  const setExpressionAtItem = (e) => {
    const res = calculate({ total, next, operation }, e.currentTarget.textContent);
    setExpression(res);
  };

  if (index) {
    return (
      <button
        type="button"
        className={`item-${index} items-shared`}
        onClick={setExpressionAtItem}
      >
        {sign}
      </button>
    );
  }
  return (
    <div className={`item-${index} items-shared`}>
      {next || total}
    </div>
  );
}

Item.propTypes = {
  sign: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  setExpression: PropTypes.func.isRequired,
};
