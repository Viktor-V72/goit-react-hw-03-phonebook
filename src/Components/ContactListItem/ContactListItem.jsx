import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  // const id = shortid.generate();
  return (
    <li className={styles.item}>
      <p className={styles.contact}>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
