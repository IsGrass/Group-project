document.addEventListener('DOMContentLoaded', () => {
    
    // Get references to form elements
    const form = document.getElementById('bookingForm');
    const firstName = document.getElementById('firstName');
    const lastName  = document.getElementById('lastName');
    const bookingDate = document.getElementById('bookingDate');
    const bookingText = document.getElementById('bookingText');

    // Set minimum date constraint: only allow future dates (tomorrow onwards)
    const tomorrow = new Date(); 
    tomorrow.setDate(tomorrow.getDate() + 1); 
    const tomorrowStr = tomorrow.toISOString().split('T')[0]; 
    bookingDate.min = tomorrowStr; 

    // Helper function: Display error message for a form field
    function setError(el, msg) {
        el.classList.add('invalid'); 
        const hint = el.nextElementSibling; 
        if (hint) {
            hint.textContent = msg; 
            hint.style.marginBottom = '10px'; 
        }
    }

    // Helper function: Clear error message from a form field
    function clearError(el) {
        el.classList.remove('invalid');t
        if (hint) {
            hint.textContent = '';
            hint.style.marginBottom = '0px'; 
        }
    }

    // Real-time validation for firstName and lastName fields
    [firstName, lastName].forEach(el => {
        el.addEventListener('input', () => {
            const cleaned = el.value.replace(/\d+/g, '');
            if (el.value !== cleaned) {
                el.value = cleaned;
                setError(el, 'You can not input numbers into this field'); 
                setTimeout(() => clearError(el), 1400);
            } else {
                clearError(el);
            }
        });

        // Block pasting text that contains numbers
        el.addEventListener('paste', (ev) => {
            ev.preventDefault(); 
            const text = (ev.clipboardData || window.clipboardData).getData('text');
            const cleaned = text.replace(/\d+/g, '');
            document.execCommand('insertText', false, cleaned);
            if (text !== cleaned) {
                setError(el, 'You can not input numbers into this field');
                setTimeout(() => clearError(el), 1400);
            }
        });
    });
    
    // Form submission validation: check all fields when user clicks Submit
    form.addEventListener('submit', (e) => {
        let valid = true; 

        // Validate First Name field
        if (!firstName.value.trim()) {
            setError(firstName, 'Please enter your first name.');
            valid = false;
        } else if (/\d/.test(firstName.value)) {
            setError(firstName, 'You can not input numbers into this field');
            valid = false;
        } else {
            clearError(firstName);
        }

        // Validate Last Name field (same rules as first name)
        if (!lastName.value.trim()) {
            setError(lastName, 'Please enter your last name.');
            valid = false;
        } else if (/\d/.test(lastName.value)) {
            setError(lastName, 'You can not input numbers into this field');
            valid = false;
        } else {
            clearError(lastName);
        }

        // Validate Bokking Date field
        if (!bookingDate.value) {
            setError(bookingDate, 'Please select a date.');
            valid = false;
        } else if (bookingDate.value < tomorrowStr) {
            setError(bookingDate, 'Please select a future date.');
            valid = false;
        } else {
            clearError(bookingDate);
        }

        // Validate booking Text field
        const bookingLen = bookingText.value.trim().length;
        if (bookingLen < 20) {
            setError(bookingText, 'Please enter at least 20 characters.');
            valid = false;
        } else {
            clearError(bookingText);
        }

        // If any field failed validation, stop form submission
        if (!valid) {
            e.preventDefault(); 
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus(); 
        }
    });

    // Clear error messages as user types in date and booking fields
    [bookingDate, bookingText].forEach(el => {
        el.addEventListener('input', () => clearError(el));
    });
});