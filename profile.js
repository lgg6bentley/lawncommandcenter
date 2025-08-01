const form = document.getElementById('profileForm');
const previewName = document.getElementById('previewName');
const previewLocation = document.getElementById('previewLocation');
const previewBio = document.getElementById('previewBio');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const bio = document.getElementById('bio').value;

  // Save to localStorage
  localStorage.setItem('gh_name', name);
  localStorage.setItem('gh_location', location);
  localStorage.setItem('gh_bio', bio);

  // Update preview
  previewName.textContent = name;
  previewLocation.textContent = location;
  previewBio.textContent = bio;
});

// Load saved profile on page load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('name').value = localStorage.getItem('gh_name') || '';
  document.getElementById('location').value = localStorage.getItem('gh_location') || '';
  document.getElementById('bio').value = localStorage.getItem('gh_bio') || '';

  previewName.textContent = localStorage.getItem('gh_name') || '';
  previewLocation.textContent = localStorage.getItem('gh_location') || '';
  previewBio.textContent = localStorage.getItem('gh_bio') || '';
});