
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
        if (hint) { 
            hint.textContent = msg;
            hint.style.marginBottom = '10px';
        }
    }
    function clearError(el) {
        el.classList.remove('invalid');
        const hint = el.nextElementSibling;
        if (hint) { 
            hint.textContent = '';
            hint.style.marginBottom = '0px';
        }
    }

    // Remove digits as the user types and show a brief message
    [firstName, lastName].forEach(el => {
        el.addEventListener('input', () => {
            const cleaned = el.value.replace(/\d+/g, '');
            if (el.value !== cleaned) {
                el.value = cleaned;
                setError(el, 'You can not input numbers into this field');
                // clear the message after a short delay so user can continue typing
                setTimeout(() => clearError(el), 1400);
            } else {
                clearError(el);
            }
        });

        // also block pasting digits
        el.addEventListener('paste', (ev) => {
            ev.preventDefault();
            const text = (ev.clipboardData || window.clipboardData).getData('text');
            const cleaned = text.replace(/\d+/g, '');
            document.execCommand('insertText', false, cleaned);
            // show message if paste contained digits
            if (text !== cleaned) {
                setError(el, 'You can not input numbers into this field');
                setTimeout(() => clearError(el), 1400);
            }
        });
    });
    
    form.addEventListener('submit', (e) => {
        let valid = true;

        if (!firstName.value.trim()) {
            setError(firstName, 'Please enter your first name.');
            valid = false;
        } else if (/\d/.test(firstName.value)) {
            setError(firstName, 'You can not input numbers into this field');
            valid = false;
        } else {
            clearError(firstName);
        }

        if (!lastName.value.trim()) {
            setError(lastName, 'Please enter your last name.');
            valid = false;
        } else if (/\d/.test(lastName.value)) {
            setError(lastName, 'You can not input numbers into this field');
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

    // Clear errors while typing (exclude first/last name so the number-warning can show briefly)
    [reviewDate, reviewText].forEach(el => {
        el.addEventListener('input', () => clearError(el));
    });
});
