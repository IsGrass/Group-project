//Contact form Javascript
document.addEventListener('DOMContentLoaded', () => {
  // Wait for the DOM to fully load before running this script

  // Get reference to the form element with id "contactForm"
  const form = document.getElementById('contactForm');
  
  // Get all input and textarea elements inside the form and convert to array
  // This creates an array of all form fields that need validation
  const fields = Array.from(form.querySelectorAll('input, textarea'));

  // Helper function: Display an error message for a form field
  function setError(el, msg) {
    el.classList.add('invalid'); // Add CSS class 'invalid' which applies red outline styling
    const hint = el.nextElementSibling; // Get the <small> error message element that comes after the input
    if (hint) hint.textContent = msg; // Set the error message text in that element
  }

  // Helper function: Clear error message from a form field
  function clearError(el) {
    el.classList.remove('invalid'); 
    const hint = el.nextElementSibling; 
    if (hint) hint.textContent = ''; 
  }

  // Real-time validation: Clear errors as user types in any field

  fields.forEach(el => {

    el.addEventListener('input', () => clearError(el)); 
  });

  // Form submission validation: Validate all fields when user clicks Submit
  form.addEventListener('submit', (e) => {
    let valid = true; 

    fields.forEach(el => {
      // Use HTML5 checkValidity() method to check if field meets its validation requirements
      if (!el.checkValidity()) {
        valid = false; 
        
        // Check what type of validation error occurred and show specific message
        
        if (el.validity.valueMissing) {
          setError(el, 'This field is required.');
        } 
        else if (el.type === 'email' && el.validity.typeMismatch) {
          setError(el, 'Must be a valid email');
        } 
        else if (el.validity.tooShort) {
          setError(el, `Enter at least ${el.minLength} characters.`);
        } 
        else {
          setError(el, 'Invalid value.');
        }
      } else {
        clearError(el);
      }
    });

    // If any field failed validation, stop form submission
    if (!valid) {
      e.preventDefault(); 
      
      // Find the first field with an error and focus on it
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus(); 
      
      return; 
    }
    
    // If we reach here, all fields are valid and form will submit normally
  });
});