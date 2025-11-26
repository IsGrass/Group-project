// JavaScript for form validation Email Form (contacts)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('emailForm');
  const fields = Array.from(form.querySelectorAll('input, textarea'));

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

  fields.forEach(el => el.addEventListener('input', () => clearError(el)));

  form.addEventListener('submit', (e) => {
    let valid = true;

    fields.forEach(el => {
      if (!el.checkValidity()) {
        valid = false;
        if (el.validity.valueMissing) {
          setError(el, 'This field is required.');
        } else if (el.type === 'email' && el.validity.typeMismatch) {
          // specific message for the email field
          setError(el, 'Must be a valid email');
        } else if (el.validity.tooShort) {
          setError(el, `Enter at least ${el.minLength} characters.`);
        } else {
          setError(el, 'Invalid value.');
        }
      } else {
        clearError(el);
      }
    });

    if (!valid) {
      e.preventDefault();
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
  });
});