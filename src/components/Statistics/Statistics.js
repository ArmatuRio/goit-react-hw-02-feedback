import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul className={styles.List}>
        <li className={styles.Item}>Good:{good}</li>
        <li className={styles.Item}>Neutral:{neutral}</li>
        <li className={styles.Item}>Bad:{bad}</li>
        <li className={styles.Item}>Total:{total}</li>
        <li className={styles.Item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
