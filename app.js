const music = new Audio("Chung Ta Cua Hien Tai.flac");
music.volume = 0.4;

const playlist = document.querySelector(".menu_song");
let songPlay = document.getElementById("songPlay");
let wave = document.getElementsByClassName("wave")[0];
let index = 0;
let poster_song_play = document.getElementById("poster_song_play");
let title = document.getElementById("title");
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
vol_bar.style.width = `40%`;
vol_dot.style.left = `40%`;
let back = document.getElementById("back");
let next = document.getElementById("next");
let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];
const pop_song3 = document.querySelector(".pop_song");
let left_scrolls = document.getElementById("left_scrolls");
let right_scrolls = document.getElementById("right_scrolls");
let item = document.getElementsByClassName("item")[0];
const songs = [
  {
    id: "1",
    songName: "Muộn rồi mà sao còn",
    singer: "Sơn Tùng MTP",
    poster: "img/1.jpg",
  },
  {
    id: "2",
    songName: "Nơi này có anh",
    singer: "Sơn Tùng MTP",
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName: "Phố cũ còn anh",
    singer: "Quinn",
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: "Chúng ta làm bạn được không",
    singer: "Thiều Bảo Trâm",
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: "Drag me down",
    singer: "One Direction",
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: "Em Mới Là Người Yêu Anh",
    singer: "Min",
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: "Stole My Heart",
    singer: "One Direction",
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: "Perfect",
    singer: "One Direction",
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: "Hôn Anh",
    singer: "Min",
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: "Đừng Yêu Nữa, Em Mệt Rồi ",
    singer: "Min",
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: "Có Em Chờ",
    singer: "Min",
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: "Anh Đánh Rơi Người Yêu Này",
    singer: "Andiez ft. AMEE",
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: "Wildest Dreams",
    singer: "Taylor Swift",
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: "…Ready For It?",
    singer: "Taylor Swift",
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: "Celebrity",
    singer: "IU",
    poster: "img/15.jpg",
  },
];
const popularSongs = [
  {
    id: "16",
    songName: "Lilac",
    singer: "IU",
    poster: "img/16.jpg",
  },
  {
    id: "2",
    songName: "Nơi này có anh",
    singer: "Sơn Tùng MTP",
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName: "Phố cũ còn anh",
    singer: "Quinn",
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: "Chúng ta làm bạn được không",
    singer: "Thiều Bảo Trâm",
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: "Drag me down",
    singer: "One Direction",
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: "Em Mới Là Người Yêu Anh",
    singer: "Min",
    poster: "img/6.jpg",
  }]

const app = {
  render() {
    // render ra thông tin từng bài hát
    const html = songs.map((song, index) => {
      return `<li class="songItem" data-index = ${index}>
                <span>${song.id}</span>
                <img src="${song.poster}" alt="${song.singer}">
                <div class="songItem_music">
                    <div class="songItem_title">
                <h5>
                ${song.songName}
                    <div class="subtitle">${song.singer}</div>
                </h5>
            </div>
            <div class="songItem_icon">
                    <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
                </div>
                </div>

            </li>`;
    });
    playlist.innerHTML = html.join("");
  },
  render3() {
    // render ra thông tin từng bài hát
    const html3 = songs.map((song1, index) => {
      return `<li class="songItem" data-index = ${index}>
      <div class="img_play">
          <img src="${song1.poster}" alt="${song1.singer}">
          <i class="bi playListPlay bi-play-circle-fill" id="${song1.id}"></i>
      </div>
      <h5> 
      ${song1.songName}
          <br>
          <div class="subtitle">${song1.singer}</div>
      </h5>
  </li>`;
    });
    pop_song3.innerHTML = html3.join("");
  },
  handleEvent() {
    songPlay.addEventListener("click", () => {
      // phát nhạc
      if (music.paused || music.currentTime <= 0) {
        music.play();
        songPlay.classList.remove("bi-play-fill");
        songPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");
      } else {
        music.pause();
        songPlay.classList.add("bi-play-fill");
        songPlay.classList.remove("bi-pause-fill");
        wave.classList.remove("active2");
      }
    });

    music.addEventListener("timeupdate", () => {
      //update time
      let music_curr = music.currentTime;
      let music_dur = music.duration;

      let min = Math.floor(music_dur / 60);
      let sec = Math.floor(music_dur % 60);
      if (sec < 10) {
        sec = `0${sec}`;
      }
      currentEnd.innerText = `${min}:${sec}`;

      let min1 = Math.floor(music_curr / 60);
      let sec1 = Math.floor(music_curr % 60);
      if (sec1 < 10) {
        sec1 = `0${sec1}`;
      }
      currentStart.innerText = `${min1}:${sec1}`;

      let progressbar = parseInt((music.currentTime / music.duration) * 100);
      seek.value = progressbar;
      let seekbar = seek.value;
      bar2.style.width = `${seekbar}%`;
      dot.style.left = `${seekbar}%`;
    });

    seek.addEventListener("change", () => {
      music.currentTime = (seek.value * music.duration) / 100;
    });

    music.addEventListener("ended", () => {
      songPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");
      index++;
      music.src = `audio/${index}.flac`;
      poster_song_play.src = `img/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });

      song_title.forEach((ele) => {
        title.innerHTML = `${ele.songName} <br>
        <div class="subtitle">${ele.singer}</div>`;
      });

      this.makeAllBackgrounds();
      Array.from(document.getElementsByClassName("songItem"))[
        `${index - 1}`
      ].style.background = "rgb(105, 105, 170, .1)";
      this.makeAllPlays();
      document.getElementsByClassName("playListPlay")[index-1].classList.remove("bi-play-circle-fill");
      document.getElementsByClassName("playListPlay")[index-1].classList.add('bi-pause-circle-fill');
    });

    vol.addEventListener("change", () => {
      if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
      }
      if (vol.value > 0) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
      }
      if (vol.value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
      }

      let vol_a = vol.value;
      vol_bar.style.width = `${vol_a}%`;
      vol_dot.style.left = `${vol_a}%`;
      music.volume = vol_a / 100;
    });

    back.addEventListener("click", () => {
      index -= 1;
      if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;
      }
      music.src = `audio/${index}.flac`;
      poster_song_play.src = `img/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });

      song_title.forEach((ele) => {
        title.innerHTML = `${ele.songName} <br>
        <div class="subtitle">${ele.singer}</div>`;
      });

      this.makeAllPlays();

      document.getElementById(`${index}`).classList.remove("bi-play-fill");
      document.getElementById(`${index}`).classList.add("bi-pause-fill");
      this.makeAllBackgrounds();
      Array.from(document.getElementsByClassName("songItem"))[
        `${index - 1}`
      ].style.background = "rgb(105, 105, 170, .1)";
    });
    next.addEventListener("click", () => {
      index -= 0;
      index += 1;
      if (
        index > Array.from(document.getElementsByClassName("songItem")).length
      ) {
        index = 1;
      }
      music.src = `audio/${index}.flac`;
      poster_song_play.src = `img/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });

          song_title.forEach((ele) => {
            title.innerHTML = `${ele.songName} <br>
            <div class="subtitle">${ele.singer}</div>`;
          });
          
      this.makeAllPlays();

      document.getElementById(`${index}`).classList.remove("bi-play-fill");
      document.getElementById(`${index}`).classList.add("bi-pause-fill");
      this.makeAllBackgrounds();
      Array.from(document.getElementsByClassName("songItem"))[
        `${index - 1}`
      ].style.background = "rgb(105, 105, 170, .1)";
    });

    left_scroll.addEventListener("click", () => {
      pop_song.scrollLeft -= 330;
    });
    right_scroll.addEventListener("click", () => {
      pop_song.scrollLeft += 330;
    });

    left_scrolls.addEventListener("click", () => {
      item.scrollLeft -= 330;
    });
    right_scrolls.addEventListener("click", () => {
      item.scrollLeft += 330;
    });
  },

  makeAllPlays() {
    Array.from(document.getElementsByClassName("playListPlay")).forEach(
      (element) => {
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
      }
    );
  },

  makeAllBackgrounds() {
    Array.from(document.getElementsByClassName("songItem")).forEach(
      (element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
      }
    );
  },

  render2() {
    Array.from(document.getElementsByClassName("playListPlay")).forEach(
      (element) => {
        element.addEventListener("click", (e) => {
          console.log("hihi");
          index = e.target.id;
          this.makeAllPlays();
          e.target.classList.remove("bi-play-circle-fill");
          e.target.classList.add("bi-pause-circle-fill");
          music.src = `audio/${index}.flac`;
          poster_song_play.src = `img/${index}.jpg`;
          music.play();
          let song_title = songs.filter((ele) => {
            return ele.id == index;
          });

          song_title.forEach((ele) => {
            title.innerHTML = `${ele.songName} <br>
            <div class="subtitle">${ele.singer}</div>`;
          });
          songPlay.classList.remove("bi-play-fill");
          songPlay.classList.add("bi-pause-fill");
          wave.classList.add("active2");
          // music.addEventListener("ended", () => {
          //   songPlay.classList.add("bi-play-fill");
          //   songPlay.classList.remove("bi-pause-fill");
          //   wave.classList.remove("active2");
          // });
          this.makeAllBackgrounds();
          Array.from(document.getElementsByClassName("songItem"))[
            `${index - 1}`
          ].style.background = "rgb(105, 105, 170, .1)";
        });
      }
    );
  },

  
  start: function () {
    //render
    this.render();
    this.render3();
    this.render2();
    this.handleEvent();

  },
};
app.start();

// Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{

//     element.getElementsByTagName('img')[0].src = songs[i].poster;
//     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// })

// let songPlay = document.getElementById('songPlay');
// let wave = document.getElementsByClassName('wave')[0];

// songPlay.addEventListener('click',()=>{
//     if (music.paused || music.currentTime <=0) {
//         music.play();
//         songPlay.classList.remove('bi-play-fill');
//         songPlay.classList.add('bi-pause-fill');
//         wave.classList.add('active2');
//     } else {
//         music.pause();
//         songPlay.classList.add('bi-play-fill');
//         songPlay.classList.remove('bi-pause-fill');
//         wave.classList.remove('active2');
//     }
// } )

// const makeAllPlays = () =>{
//     Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
//             element.classList.add('bi-play-circle-fill');
//             element.classList.remove('bi-pause-circle-fill');
//     })
// }
// const makeAllBackgrounds = () =>{
//     Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
//             element.style.background = "rgb(105, 105, 170, 0)";
//     })
// }

// let index = 0;
// let poster_song_play = document.getElementById('poster_song_play');
// let title = document.getElementById('title');
// Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         index = e.target.id;
//         makeAllPlays();
//         e.target.classList.remove('bi-play-circle-fill');
//         e.target.classList.add('bi-pause-circle-fill');
//         music.src = `audio/${index}.flac`;
//         poster_song_play.src =`img/${index}.jpg`;
//         music.play();
//         let song_title = songs.filter((ele)=>{
//             return ele.id == index;
//         })

//         song_title.forEach(ele =>{
//             let {songName} = ele;
//             title.innerHTML = songName;
//         })
//         songPlay.classList.remove('bi-play-fill');
//         songPlay.classList.add('bi-pause-fill');
//         wave.classList.add('active2');
//         music.addEventListener('ended',()=>{
//             songPlay.classList.add('bi-play-fill');
//             songPlay.classList.remove('bi-pause-fill');
//             wave.classList.remove('active2');
//         })
//         makeAllBackgrounds();
//         Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
//     })
// })

// let currentStart = document.getElementById('currentStart');
// let currentEnd = document.getElementById('currentEnd');
// let seek = document.getElementById('seek');
// let bar2 = document.getElementById('bar2');
// let dot = document.getElementsByClassName('dot')[0];

// music.addEventListener('timeupdate',()=>{
//     let music_curr = music.currentTime;
//     let music_dur = music.duration;

//     let min = Math.floor(music_dur/60);
//     let sec = Math.floor(music_dur%60);
//     if (sec<10) {
//         sec = `0${sec}`
//     }
//     currentEnd.innerText = `${min}:${sec}`;

//     let min1 = Math.floor(music_curr/60);
//     let sec1 = Math.floor(music_curr%60);
//     if (sec1<10) {
//         sec1 = `0${sec1}`
//     }
//     currentStart.innerText = `${min1}:${sec1}`;

//     let progressbar = parseInt((music.currentTime/music.duration)*100);
//     seek.value = progressbar;
//     let seekbar = seek.value;
//     bar2.style.width = `${seekbar}%`;
//     dot.style.left = `${seekbar}%`;
// })

// seek.addEventListener('change', ()=>{
//     music.currentTime = seek.value * music.duration/100;
// })

// music.addEventListener('ended', ()=>{
//     songPlay.classList.add('bi-play-fill');
//     songPlay.classList.remove('bi-pause-fill');
//     wave.classList.remove('active2');
// })

// let vol_icon = document.getElementById('vol_icon');
// let vol = document.getElementById('vol');
// let vol_dot = document.getElementById('vol_dot');
// let vol_bar = document.getElementsByClassName('vol_bar')[0];

// vol_bar.style.width = `40%`;
// vol_dot.style.left = `40%`;

// vol.addEventListener('change', ()=>{
//     if (vol.value == 0) {
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.add('bi-volume-mute-fill');
//         vol_icon.classList.remove('bi-volume-up-fill');
//     }
//     if (vol.value > 0) {
//         vol_icon.classList.add('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-mute-fill');
//         vol_icon.classList.remove('bi-volume-up-fill');
//     }
//     if (vol.value > 50) {
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-mute-fill');
//         vol_icon.classList.add('bi-volume-up-fill');
//     }

//     let vol_a = vol.value;
//     vol_bar.style.width = `${vol_a}%`;
//     vol_dot.style.left = `${vol_a}%`;
//     music.volume = vol_a/100;
// })

// let back = document.getElementById('back');
// let next = document.getElementById('next');

// back.addEventListener('click', ()=>{
//     index -= 1;
//     if (index < 1) {
//         index = Array.from(document.getElementsByClassName('songItem')).length;
//     }
//     music.src = `audio/${index}.flac`;
//     poster_song_play.src =`img/${index}.jpg`;
//     music.play();
//     let song_title = songs.filter((ele)=>{
//         return ele.id == index;
//     })

//     song_title.forEach(ele =>{
//         let {songName} = ele;
//         title.innerHTML = songName;
//     })
//     makeAllPlays()

//     document.getElementById(`${index}`).classList.remove('bi-play-fill');
//     document.getElementById(`${index}`).classList.add('bi-pause-fill');
//     makeAllBackgrounds();
//     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

// })
// next.addEventListener('click', ()=>{
//     index -= 0;
//     index += 1;
//     if (index > Array.from(document.getElementsByClassName('songItem')).length) {
//         index = 1;
//         }
//     music.src = `audio/${index}.flac`;
//     poster_song_play.src =`img/${index}.jpg`;
//     music.play();
//     let song_title = songs.filter((ele)=>{
//         return ele.id == index;
//     })

//     song_title.forEach(ele =>{
//         let {songName} = ele;
//         title.innerHTML = songName;
//     })
//     makeAllPlays()

//     document.getElementById(`${index}`).classList.remove('bi-play-fill');
//     document.getElementById(`${index}`).classList.add('bi-pause-fill');
//     makeAllBackgrounds();
//     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

// })

// let left_scroll = document.getElementById('left_scroll');
// let right_scroll = document.getElementById('right_scroll');
// let pop_song = document.getElementsByClassName('pop_song')[0];

// left_scroll.addEventListener('click', ()=>{
//     pop_song.scrollLeft -= 330;
// })
// right_scroll.addEventListener('click', ()=>{
//     pop_song.scrollLeft += 330;
// })

// let left_scrolls = document.getElementById('left_scrolls');
// let right_scrolls = document.getElementById('right_scrolls');
// let item = document.getElementsByClassName('item')[0];

// left_scrolls.addEventListener('click', ()=>{
//     item.scrollLeft -= 330;
// })
// right_scrolls.addEventListener('click', ()=>{
//     item.scrollLeft += 330;
// })
