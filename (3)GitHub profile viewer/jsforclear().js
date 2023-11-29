// This is  fun() js code to claer the filled name but due
//  to busy schedeule i could'nt use it but will try to
//  fix this ASAP!!

function clearProfile() {
    const avatar = document.getElementById('avatar');
    const usernameElement = document.getElementById('username');
    const bioElement = document.getElementById('bio');
    const reposElement = document.getElementById('repos');
    const profileLink = document.getElementById('profile-link');

    avatar.src = '';
    usernameElement.textContent = '';
    bioElement.textContent = '';
    reposElement.textContent = '';
    profileLink.textContent = '';
}