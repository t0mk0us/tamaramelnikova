import React from 'react';


const PhoneComponent = ({ phone, children }) => {
  return <a href={`tel:${phone}`} className='contact-link'>{children}</a>;
};

export default PhoneComponent;