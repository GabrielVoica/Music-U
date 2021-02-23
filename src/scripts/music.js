const track = document.getElementById("audioPlayer");
const songImg = document.getElementById("song-img");
const songTitle = document.getElementById("song-title");
const songAuthor = document.getElementById("song-author");

const progressBar = document.getElementById("song-bar");
const volumeBar = document.getElementById("volume-bar");
volumeBar.value = 50;

let currentSongIndex = 0;

let songPlaying = false;

track.allow = "autoplay";

const notesArray = document.querySelectorAll(".music-note");

const songArray = [
  {
    src: "./songs/Babalos - Snow Crystal [HQ].mp3",
    img: "./img/song5-img.jpg",
    title: "Snow Crystal",
    author: "Babalos",
  },
  {
    src: "./songs/SanFrancisco.mp3",
    img: "./img/song4-img.jpg",
    title: "San Francisco",
    author: "Dom Dolla",
  },
  {
    src: "./songs/Dom Dolla - Take It (Sonny Fodera Remix).mp3",
    img: "./img/song2-img.jpg",
    title: "Take It",
    author: "Dom Dolla",
  },
  {
    src: "./songs/Animals.mp3",
    img: "./img/song3-img.jpg",
    title: "Animals",
    author: "God",
  },
  {
    src: "./songs/FISHER - Losing It.mp3",
    img: "./img/song1-img.jpg",
    title: "Losing It",
    author: "Fisher",
  },
  {
    src: "./songs/StopIt.mp3",
    img: "./img/stopit.jpg",
    title: "Stop It",
    author: "Fisher",
  },
];

let play = () => {
  track.play();
  songPlaying = true;
};

let pauseSong = () => {
  document.querySelector(".musicPlayer").style.animationName = "none";
  document.getElementById("canvas").style.display = "none";
  track.pause();
  notesArray.forEach((note) => {
    note.style.opacity = 0;
  });
};

let initialSetup = () => {
  songImg.src = songArray[currentSongIndex].img;
  songTitle.innerHTML = songArray[currentSongIndex].title;
  songAuthor.innerHTML = songArray[currentSongIndex].author;
  progressBar.value = 0;
  track.src = songArray[currentSongIndex].src;
};

let playSong = () => {
  initialSetup();
  track.play();
  document.querySelector(".musicPlayer").style.animationName =
    "player-animation";
  document.getElementById("canvas").style.display = "block";

  notesArray.forEach((note) => {
    note.style.opacity = 1;
  });
};

let nextSong = () => {
  if (currentSongIndex >= songArray.length - 1) {
    currentSongIndex = 0;
  } else if (currentSongIndex < songArray.length - 1) {
    currentSongIndex++;
  }

  playSong();
};

let previousSong = () => {
  if (currentSongIndex == 0) {
    currentSongIndex = songArray.length - 1;
    console.log(currentSongIndex);
  } else if (currentSongIndex > 0) {
    currentSongIndex--;
    console.log(currentSongIndex);
  }
  playSong();
};

let changeVolume = () => {
  track.volume = volumeBar.value / 10;
  console.log(track.volume);
};

initialSetup();

setInterval(() => {
  progressBar.value = track.currentTime * 0.5;
  track.volume = volumeBar.value / 100;
}, 200);
