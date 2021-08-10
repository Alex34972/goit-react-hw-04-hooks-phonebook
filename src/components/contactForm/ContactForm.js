import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
const ContactForm = ({
  name,
  number,
  onChange,
  onHandleAppend,
  nameId,
  numberId,
}) => {
  return (
    <form className={s.forma}>
      <p className={s.title}>Name</p>
      <input
        className={s.inputForm}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        id={nameId}
        onChange={onChange}
      />
      <p className={s.title}>Number</p>
      <input
        className={s.inputForm}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        id={numberId}
        onChange={onChange}
      />
      <button className={s.formBtn} type="button" onClick={onHandleAppend}>
        Add contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onHandleAppend: PropTypes.func.isRequired,
  nameId: PropTypes.string.isRequired,
  numberId: PropTypes.string.isRequired,
};
export default ContactForm;
