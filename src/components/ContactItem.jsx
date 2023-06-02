
import React from 'react';
import PropTypes from 'prop-types';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

function ContactItem({name, tag, imageUrl, id, onDelete}) {
  return (
    <div className='contact-item'>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDelete: PropTypes.func,
}

export default ContactItem;