  //active Ticket purchasing button
  document.addEventListener("DOMContentLoaded", function() {
    const buyTicketButton = document.getElementById('Purchase-Ticket');
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
  
  // //movie menu display and user interactivity
  // document.addEventListener("DOMContentLoaded", function() {
  //   const filmsList = document.getElementById('films');
  
  //   // Make a GET request to retrieve film data
  //   fetch('http://localhost:3000/films')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Remove the placeholder li element
  //       filmsList.innerHTML = '';
  
  //       // Populate the films list
  //       data.forEach(film => {
  //         const filmItem = document.createElement('li');
  //         filmItem.classList.add('film-item');
  //         filmItem.textContent = film.title;
  //         filmsList.appendChild(filmItem);
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // });
  