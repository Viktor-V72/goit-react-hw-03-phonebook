import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contact_list}>
    {contacts.map(({ name, number, id }) => (
      <ContactListItem
        onDeleteContact={onDeleteContact}
        name={name}
        number={number}
        key={id}
        id={id}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
