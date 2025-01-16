const keys = [
  { letter: "T",
    keycode: 84,
    sound: "sounds/boom.wav",
    class: "black-background",
  },
  { letter: "O",
    keycode: 79,
    sound: "sounds/clap.wav",
    class: "black-background",
  },
  { letter: "B",
    keycode: 66,
    sound: "sounds/hihat.wav",
    class: "black-background",
  },
  { letter: "I",
    keycode: 73,
    sound: "sounds/Cm_ScatCaa__387_SP_01.wav",
    class: "black-background",
  },
  { letter: "-",
    keycode: 189,
    sound: "sounds/kick.wav",
    class: "grey-background",
  },
  { letter: "S",
    keycode: 83,
    sound: "sounds/openhat.wav",
    class: "black-background",
  },
  { letter: "P",
    keycode: 80,
    sound: "sounds/101_Vocal_SP_473_10.wav",
    class: "black-background",
  },
  { letter: "U",
    keycode: 85,
    sound: "sounds/Fm_VocalFX_03_161_SP.wav",
    class: "black-background",
  },
  { letter: "N",
    keycode: 78,
    sound: "sounds/snare.wav",
    class: "black-background",
  },
  { letter: "K",
    keycode: 75,
    sound: "sounds/tink.wav",
    class: "black-background",
  },
  { letter: "E",
    keycode: 69,
    sound: "sounds/ride.wav",
    class: "black-background",
  },
  { letter: "D",
    keycode: 68,
    sound: "sounds/kick.wav",
    class: "black-background",
  }
];

const keyset = document.getElementsByClassName("key_container");
console.log(keyset);
let acc = "";

const impresionTeclas = keys.forEach(key => {
  acc += `<div data-key="${key.keycode}" class="key ${key.class}">
  <div class="letter">${key.letter}</div>
  <audio data-key="${key.keycode}" src="${key.sound}">
  </audio>
  </div>`  
});

keyset[0].innerHTML = acc;

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  
});

window.addEventListener("keypress", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  
});

function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}; 

const keyNotes = document.querySelectorAll(".key");
keyNotes.forEach(key => key.addEventListener("transitionend", removeTransition));


