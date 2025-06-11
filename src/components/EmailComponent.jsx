import React from 'react';

const EmailComponent = ({ email, subject = "Message from your WEB site", body = "", children }) => {
  const params =
    subject || body
      ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          body
        )}`
      : "";

  return <a href={`mailto:${email}${params}`}  className="contact-link">{children}</a>;
};

export default EmailComponent;