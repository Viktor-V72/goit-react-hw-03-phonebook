import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    <span className={styles.text}>Find contacts by name</span>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
