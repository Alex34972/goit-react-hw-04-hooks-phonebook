import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(
        ({ id, name, number }) =>
          name.length > 0 &&
          number.length > 0 && (
            <li className={s.contact} key={id}>
              {name}: {number}
              <button
                className={s.contactBtn}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          ),
      )}
    </ul>
  );
};

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
