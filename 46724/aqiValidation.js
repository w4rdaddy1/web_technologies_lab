document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Form should be selected, not div!
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pass');
    const confirmPasswordInput = document.getElementById('cPassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting first

        let valid = true;
        let messages = [];

        const nameValue = nameInput.value.trim();
        if (/\d/.test(nameValue)) {
            valid = false;
            messages.push('Name cannot contain digits.');
        }

        const emailValue = emailInput.value.trim();
        const emailPattern = /^\d{2}-\d{5}-\d@student\.aiub\.edu$/;
        if (!emailPattern.test(emailValue)) {
            valid = false;
            messages.push('Email must be in the format: xx-xxxxx-x@student.aiub.edu');
        }

        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        if (passwordValue !== confirmPasswordValue) {
            valid = false;
            messages.push('Passwords do not match.');
        }

        if (messages.length > 0) {
            alert(messages.join('\n'));
        }

        if (valid) {
            // If everything is valid, submit the form
            form.submit();
        }
    });
});
