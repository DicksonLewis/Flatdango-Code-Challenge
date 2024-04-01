// Make a GET request to the endpoint
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    // Assume data is an array of films
    const firstMovie = data[0];
    const ticketsAvailable = firstMovie.theater.capacity - firstMovie.tickets_sold;

    // Display the movie details on the page
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
      <img src="${firstMovie.poster}" alt="${firstMovie.title} poster">
      <h2>${firstMovie.title}</h2>
      <p>Runtime: ${firstMovie.runtime}</p>
      <p>Showtime: ${firstMovie.showtime}</p>
      <p>Available Tickets: ${ticketsAvailable}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });
  document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/films')
      .then(response => response.json())
      .then(data => {
        const ticketsAvailable = data.capacity - data.tickets_sold;
        const movieDetails = document.getElementById('movie-details');
        movieDetails.innerHTML = `
          <img src="${data.poster}" alt="${data.title} poster">
          <h2>${data.title}</h2>
          <p>Runtime: ${data.runtime} minutes</p>
          <p>Showtime: ${data.showtime}</p>
          <p>Available Tickets: ${ticketsAvailable}</p>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  //
  document.addEventListener("DOMContentLoaded", function() {
    const buyTicketButton = document.getElementById('buy-ticket');
    const ticketsAvailableElement = document.getElementById('tickets-available');
    let ticketsAvailable = parseInt(ticketsAvailableElement.textContent);
  
    buyTicketButton.addEventListener('click', function() {
      if (ticketsAvailable > 0) {
        ticketsAvailable--;
        ticketsAvailableElement.textContent = ticketsAvailable;
        alert('Ticket purchased successfully!');
      } else {
        alert('Sorry, this showing is sold out.');
      }
    });
  });
  