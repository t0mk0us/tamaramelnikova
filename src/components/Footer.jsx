function Footer() {

  const currentYear = new Date().getFullYear;
  const currentDate = new Date(); // Creates a new Date object with the current date and time
  const year = currentDate.getUTCFullYear;

  // Format the date as desired. toLocaleDateString() provides a user-friendly format.
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

    const formattedYear = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
  });

    return (
      <footer>
        &copy;
        Design4Logic
        &nbsp;
        {/* 2025 */}
        {formattedYear}
        <br/>
     {/* formattedDate */}
      </footer>
    );
  }

  export default Footer;