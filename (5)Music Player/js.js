const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const stopButton = document.getElementById('stop');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songNameDisplay = document.getElementById('songName');

//Songs path
const songs = [
    { title: 'Tere Bin', file: 'Tere Bin.mp3' },
    { title: 'Kabira', file: 'Kabira.mp3' },
    { title: 'KhudGarzi', file: 'KhudGarzi.mp3' },
    { title: 'Capital Letters', file: 'capital letters.mp3' }
]; 

let currentSongIndex = 0;

function loadSong() {
    audio.src = songs[currentSongIndex].file;
    audio.load();
    songNameDisplay.textContent = songs[currentSongIndex].title;
}

//play & pause button
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// stop button
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'Play';
});


//previous song button
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    playPauseButton.textContent = 'Pause';
});

//next song button
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
    playPauseButton.textContent = 'Pause';
});

loadSong(); // Load the initial song
