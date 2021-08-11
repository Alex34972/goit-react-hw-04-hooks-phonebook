import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './components/contactForm';
import Filter from './components/filter';
import ContactList from './components/contactList';
export default function Phonebook() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const id = shortid.generate();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.error();
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleAppend = () => {
    const contactNew = { id, name, number };
    const find = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    find === undefined
      ? setContacts(state => (state = [contactNew, ...contacts]))
      : alert(`${name} is alredy in contact`);
    reset();
  };
  const getСontactSearch = event => {
    setFilter(event.target.value);
  };
  const getFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };
  const deletContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm
        name={name}
        number={number}
        onChange={handleChange}
        onHandleAppend={handleAppend}
        nameId={nameInputId}
        numberId={numberInputId}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={getСontactSearch} />
      <ContactList contacts={getFilterContacts()} onDelete={deletContact} />
    </div>
  );
}
