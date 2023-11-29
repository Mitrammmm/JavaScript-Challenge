function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}
// Used API to fetch profile from GitHub!!
function getUserProfile() {
    const username = document.getElementById('username-input').value;
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayUserProfile(data);
        })
        .catch(error => {
            console.error('Error fetching GitHub user data:', error);
            clearProfile();
        });
}

function displayUserProfile(user) {
    const avatar = document.getElementById('avatar');
    const usernameElement = document.getElementById('username');
    const bioElement = document.getElementById('bio');
    const reposElement = document.getElementById('repos');
    const profileLink = document.getElementById('profile-link');

    avatar.src = user.avatar_url;
    usernameElement.textContent = user.login;
    bioElement.textContent = user.bio || 'No bio available.';
    reposElement.textContent = `Public Repositories: ${user.public_repos}`;
    profileLink.innerHTML = `<a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
}

function openProfileLink() {
    const profileLink = document.getElementById('profile-link').querySelector('a');
    if (profileLink) {
        window.open(profileLink.href, '_blank');
    }
}