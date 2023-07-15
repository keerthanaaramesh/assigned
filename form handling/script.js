document.getElementById('eventForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventLocation = document.getElementById('eventLocation').value;

  console.log('Event Name:', eventName);
  console.log('Event Date:', eventDate);
  console.log('Event Location:', eventLocation);


  document.getElementById('eventForm').reset();
});

  