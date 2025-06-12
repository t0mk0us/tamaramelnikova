import React from 'react';


const PhoneComponent = ({ phone, children }) => {
  return <a href={`tel:${phone}`} className='linkedin-link'>{children}</a>;
};

export default PhoneComponent;