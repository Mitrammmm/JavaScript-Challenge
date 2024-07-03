// This is  fun() js code to claer the filled name but due
//  to busy schedeule i could'nt use it but will try to
//  fix this ASAP!!

//Fixed by "https://github.com/RajatAgrawal24"

function clearProfile() {
    const usernameInput = document.getElementById('username-input');
    const avatar = document.getElementById('avatar');
    const usernameElement = document.getElementById('username');
    const bioElement = document.getElementById('bio');
    const reposElement = document.getElementById('repos');
    const profileLink = document.getElementById('profile-link');

    usernameInput.value = ''; //To Clear the input field
    avatar.src = '';
    usernameElement.textContent = '';
    bioElement.textContent = '';
    reposElement.textContent = '';
    profileLink.textContent = '';
}