const track = document.getElementById("audioPlayer");
const songImg = document.getElementById("song-img");
const songTitle = document.getElementById("song-title");
const songAuthor = document.getElementById("song-author");

const progressBar = document.getElementById("song-bar");
const volumeBar = document.getElementById("volume-bar");
volumeBar.value = 50;

let currentSongIndex = 0;

let songPlaying = false;

track.src = "./file_example_MP3_1MG.mp3";
track.allow = "autoplay";

const songArray = [
  {
    src: "./songs/Monkey Warhol - Times of Your Life (Robot Mix).mp3",
    img: "./img/song4-img.jpg",
    title: "Monkey Warhol",
    author: "Candy Warhol",
  },
  {
    src: "./songs/Dom Dolla - Take It (Sonny Fodera Remix).mp3",
    img: "./img/song2-img.jpg",
    title: "Take It",
    author: "Dom Dolla",
  },
  {
    src: "./songs/Kalimba.mp3",
    img: "./img/song3-img.jpg",
    title: "Kalimba",
    author: "Kee Kun",
  },
  {
    src: "./songs/FISHER - Losing It.mp3",
    img: "./img/song1-img.jpg",
    title: "Losing It",
    author: "Fisher",
  },
  {
    src: "./songs/Babalos - Snow Crystal [HQ].mp3",
    img: "./img/song5-img.jpg",
    title: "Snow Crystal",
    author: "Babalos",
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
};

let initialSetup = () => {
  track.src = songArray[currentSongIndex].src;
  songImg.src = songArray[currentSongIndex].img;
  songTitle.innerHTML = songArray[currentSongIndex].title;
  songAuthor.innerHTML = songArray[currentSongIndex].author;
  progressBar.value = 0;
};

let playSong = () => {
  initialSetup();
  track.play();
  document.querySelector(".musicPlayer").style.animationName =
    "player-animation";
  document.getElementById("canvas").style.display = "block";
};

let nextSong = () => {
  if (currentSongIndex >= songArray.length - 1) {
    currentSongIndex = 0;
    console.log(currentSongIndex);
  } else if (currentSongIndex < songArray.length - 1) {
    currentSongIndex++;
    console.log(currentSongIndex);
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
}, 50);
