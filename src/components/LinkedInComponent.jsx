import React from 'react';

const LinkedInComponent = ({ linkedin, subject = "Message from your WEB site", body = "", children }) => {
  const params =
    subject || body
      ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          body
        )}`
      : "";

  return <a href={`${linkedin}`}  className="linkedin-link">{children}</a>;
};

export default LinkedInComponent;