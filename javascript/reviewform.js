// JavaScript for form validation - Testimonials review form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reviewForm');
    const firstName = document.getElementById('firstName');
    const lastName  = document.getElementById('lastName');
    const reviewDate = document.getElementById('reviewDate');
    const reviewText = document.getElementById('reviewText');

    // Compute today's date in YYYY-MM-DD format and set as max for date input
    const today = new Date().toISOString().split('T')[0];
    reviewDate.max = today;

    // setError: mark an element invalid and show a nearby <small> hint element
    function setError(el, msg) {
        el.classList.add('invalid');                 
        const hint = el.nextElementSibling;          
        if (hint) { 
            hint.textContent = msg;                  
            hint.style.marginBottom = '10px';        
        }
    }

    // clearError: remove invalid styling and clear the hint text
    function clearError(el) {
        el.classList.remove('invalid');             
        const hint = el.nextElementSibling;
        if (hint) { 
            hint.textContent = '';                   
            hint.style.marginBottom = '0px';
        }
    }

    // Real-time name sanitisation:
    // - Remove any digits the user types
    // - Prevent pasting digits
    // - Show a brief error message when digits are removed
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

        // Block paste operations that include digits and insert cleaned text instead
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
    
    // Form submit validation: check all fields and prevent submission if invalid
    form.addEventListener('submit', (e) => {
        let valid = true;

        // First name: required and must not contain digits
        if (!firstName.value.trim()) {
            setError(firstName, 'Please enter your first name.');
            valid = false;
        } else if (/\d/.test(firstName.value)) {
            setError(firstName, 'You can not input numbers into this field');
            valid = false;
        } else {
            clearError(firstName);
        }

        // Last name: required and must not contain digits
        if (!lastName.value.trim()) {
            setError(lastName, 'Please enter your last name.');
            valid = false;
        } else if (/\d/.test(lastName.value)) {
            setError(lastName, 'You can not input numbers into this field');
            valid = false;
        } else {
            clearError(lastName);
        }

        // Review date: required and must not be in the future (value <= today)
        if (!reviewDate.value) {
            setError(reviewDate, 'Please select a date.');
            valid = false;
        } else if (reviewDate.value > today) {
            setError(reviewDate, 'Date cannot be in the future.');
            valid = false;
        } else {
            clearError(reviewDate);
        }

        // Review text: required and must be at least 20 characters (trimmed)
        const reviewLen = reviewText.value.trim().length;
        if (reviewLen < 20) {
            setError(reviewText, 'Please enter at least 20 characters.');
            valid = false;
        } else {
            clearError(reviewText);
        }

        // If any validation failed, prevent form submission and focus the first invalid field
        if (!valid) {
            e.preventDefault();
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });

    // Clear errors as the user types into date and review fields (instant feedback)
    [reviewDate, reviewText].forEach(el => {
        el.addEventListener('input', () => clearError(el));
    });
});
