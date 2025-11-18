// JavaScript for form validation Testimonials Review Form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reviewForm');
    const firstName = document.getElementById('firstName');
    const lastName  = document.getElementById('lastName');
    const reviewDate = document.getElementById('reviewDate');
    const reviewText = document.getElementById('reviewText');

    // Prevent choosing a future date
    const today = new Date().toISOString().split('T')[0];
    reviewDate.max = today;

    function setError(el, msg) {
        el.classList.add('invalid');
        const hint = el.nextElementSibling;
        if (hint) hint.textContent = msg;
    }
    function clearError(el) {
        el.classList.remove('invalid');
        const hint = el.nextElementSibling;
        if (hint) hint.textContent = '';
    }

    form.addEventListener('submit', (e) => {
        let valid = true;

        if (!firstName.value.trim()) {
            setError(firstName, 'Please enter your first name.');
            valid = false;
        } else {
            clearError(firstName);
        }

        if (!lastName.value.trim()) {
            setError(lastName, 'Please enter your last name.');
            valid = false;
        } else {
            clearError(lastName);
        }

        if (!reviewDate.value) {
            setError(reviewDate, 'Please select a date.');
            valid = false;
        } else if (reviewDate.value > today) {
            setError(reviewDate, 'Date cannot be in the future.');
            valid = false;
        } else {
            clearError(reviewDate);
        }

        const reviewLen = reviewText.value.trim().length;
        if (reviewLen < 20) {
            setError(reviewText, 'Please enter at least 20 characters.');
            valid = false;
        } else {
            clearError(reviewText);
        }

        if (!valid) {
            e.preventDefault();
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });

    // Clear errors while typing
    [firstName, lastName, reviewDate, reviewText].forEach(el => {
        el.addEventListener('input', () => clearError(el));
    });
});
// End of JavaScript for form validation Testimonials Review Form