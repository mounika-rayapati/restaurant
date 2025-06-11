// script.js

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name && date && time && guests) {
        alert(`Reservation Confirmed!\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
