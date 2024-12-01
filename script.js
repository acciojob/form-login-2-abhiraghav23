document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
const firstName = document.getElementById('firstname').value;
const lastName = document.getElementById('lastname').value;
const Phone = document.getElementById('phone').value;
const Email = document.getElementById('email').value;

alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${Phone} Email ID: ${Email}` );
});
	