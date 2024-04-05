document.getElementById('clientForm').addEventListener('submit', (event) => {
    const form = document.querySelector("#clientForm");

    var phone = document.getElementById('phone').value;
    var phoneError = document.getElementById('phoneError');
    if (!/^7\d{10}$/.test(phone)) {
        phoneError.textContent = 'Invalid phone number. It should start with 7 and be 11 digits long.';
        event.preventDefault();
        return;
    } else {
        phoneError.textContent = '';
    }
    alert('New client was successfully created.');
});