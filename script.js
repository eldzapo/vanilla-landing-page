document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    nameInput.classList.remove('error-border');
    emailInput.classList.remove('error-border');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block'; 
        nameInput.classList.add('error-border');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.classList.add('error-border'); 
        isValid = false;
    }


    if (isValid) {
        const userInfo = {
            name: nameInput.value,
            email: emailInput.value
        };

        console.log(userInfo); 
        alert("Form submitted successfully!");
    }
});
