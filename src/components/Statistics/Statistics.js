import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total(good,neutral,bad)}</li>
        <li>Positive feedback: {percentage(good,neutral,bad)} %</li>
      </ul>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired,
};
export default Statistics;
