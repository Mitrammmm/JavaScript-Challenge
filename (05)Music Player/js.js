const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const stopButton = document.getElementById('stop');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const uploadInput = document.getElementById('upload');
const songNameDisplay = document.getElementById('songName');

// Songs path
const songs = [
    { title: 'Tere Bin', file: 'Tere Bin.mp3' },
    { title: 'Kabira', file: 'Kabira.mp3' },
    { title: 'KhudGarzi', file: 'KhudGarzi.mp3' },
    { title: 'Capital Letters', file: 'capital letters.mp3' }
];

let currentSongIndex = 0;

function loadSong(index = currentSongIndex) {
    audio.src = songs[index].file;
    audio.load();
    songNameDisplay.textContent = songs[index].title;
}

// Play & pause button
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Stop button
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'Play';
});

// Previous song button
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    playPauseButton.textContent = 'Pause';
});

// Next song button
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
    playPauseButton.textContent = 'Pause';
});

//Additional feature by "https://github.com/RajatAgrawal24"
// Handle file upload 
uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audio.src = url;
        audio.load();
        songNameDisplay.textContent = file.name;
        audio.play();
        playPauseButton.textContent = 'Pause';
    }
});

loadSong(); // Load the initial song
