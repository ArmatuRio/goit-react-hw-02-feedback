import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={styles.Button}
      type="button"
      data-feedback={feedback}
      key={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackButton({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
