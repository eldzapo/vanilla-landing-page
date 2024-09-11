document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    clearErrors();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        displayError(nameInput, 'nameError', 'Name is required');
    } else {
        nameInput.classList.add('success');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        displayError(emailInput, 'emailError', 'Valid email is required');
    } else {
        emailInput.classList.add('success');
    }

    if (isValid) {
        console.log("Name:", nameInput.value);
        console.log("Email:", emailInput.value);
    }
});

function displayError(inputElement, errorElementId, message) {
    inputElement.classList.add('error');
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMessage) {
        errorMessage.style.display = 'none';
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.classList.remove('error', 'success');
    });
}