import React from 'react';

function CurrentDateDisplay() {
  const currentDate = new Date(); // Creates a new Date object with the current date and time

  // Format the date as desired. toLocaleDateString() provides a user-friendly format.
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
      <footer>
        &copy;
        Design4Logic 
        {/* 2025 */}
     {formattedDate}
      </footer>
  );
}

export default CurrentDateDisplay;