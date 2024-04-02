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
  