const apiUrl = 'http://localhost:5000/api';
let token = '';

function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const email = document.getElementById('registerEmail').value;

  fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => console.error('Error:', error));
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    token = data.token;
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('chatForm').classList.remove('hidden');
    // Additional logic to fetch chat messages, etc.
  })
  .catch(error => console.error('Error:', error));
}

function sendMessage() {
  const message = document.getElementById('messageInput').value;

  // Implement logic to send message to backend
}

function logout() {
  token = '';
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('chatForm').classList.add('hidden');
  // Additional logic to clear chat messages, etc.
}
