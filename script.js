function showMessage() {
  const message = document.getElementById('hidden-message');
  message.style.display = 'block';
  message.style.animation = 'fadeInText 1s ease-in-out';
}

function showMessage() {
  document.getElementById("hidden-message").style.display = "block";
}

document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});
