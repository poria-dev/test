import { validatePhone, validateAge } from '../utils/helpers.js';

const form = document.getElementById('user-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('fullname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validate
  if (name.length < 2) {
    showMessage('Name must be at least 2 characters.', 'red');
    return;
  }
  if (!validatePhone(phone)) {
    showMessage('Invalid phone number (must be 11 digits).', 'red');
    return;
  }
  if (!validateAge(age)) {
    showMessage('Age must be a positive number.', 'red');
    return;
  }

  // Success
  showMessage(`✅ Welcome, ${name}! You are ${age} years old.`, 'green');
  form.reset();
});

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = `text-sm text-center mt-2 ${type === 'red' ? 'text-red-500' : 'text-green-500'}`;
}