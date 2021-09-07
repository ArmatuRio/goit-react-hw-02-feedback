import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.Section}>
      <h1 className={styles.Title}>{title}</h1>
      {children}
    </section>
  );
};

Section.defaultPropes = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
