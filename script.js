/* ------------- SCENE DATA ------------- */
const scenes = {
  title: {
    text: "Hello?",
    bgAudio: "assets/background.wav",
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "Hey who's this?", next: "start", timeout: null }
    ]
  },

  start: {
    text: "My name's Δ. What are you up to?",
    bgAudio: "assets/okay.wav",
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "i'm just shmoozing . i don't got nothing going on.", next: "shmoozing", timeout: null }
    ],
  },

  shmoozing: {
    text: "Well i don't have much going on either.<br>i'm feeling a lil down but who isn't? ",
    sfx: [{ name: "assets/what.wav", when: "onEnter" }], // ✅ use full path
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "exactly", next: "aboutIt", timeout: null },
    ]
  },
	
  aboutIt: {
    text: "yep, life could be sweeter <br> i got my hopes but id give to have something more",
    sfx: [{ name: "assets/yes.wav", when: "onEnter" }], // ✅ use full path
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "what do u got holding you back", next: "holdBack", timeout: null },
    ]
  },
	
	
  holdBack: {
    text: "gee shmo i don't know. <br> i guess one thing thats been on my mind is my tums.<br>i can't catch a single chip out here, i've had my eyes glued",
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "damn thats tough. what was the last time you ate?", next: "noHome", timeout: null },
    ]
  },
	
  noHome: {
    text: "oh hahah i don't think about that. im just a lil hungry, thats all",
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
    ]
  },



  kitchen: {
    text: "*this is the place to be*",
    image: "assets/Kitchen_Step_1.png",
    bgAudio: "assets/kitchen.wav",
    choices: [
      { text: "Go back", next: "goBack", timeout: null },
      { text: "Look in the fridge", next: "egg", timeout: null }
    ],
  },

  goBack: { text: "...<br>*You're not sure what to say, the tension grabs at your heart*", 
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
    ] },

    
  egg: { 
    text: "*On the top shelf, you find some eggs*",
    choices: [
      { text: "*Go back*", next: "goBack", timeout: null },
      { text: "*Make some eggs*", next: "bowl", timeout: null }
    ],
  },

  bowl: { 
    image: "assets/Egg_In_Bowl.png",
    text: "*You crack the eggs, spilling the yolk into a bowl*",
    choices: [
      { text: "*Go back*", next: "goBack", timeout: null },
      { text: "*Scramble the eggs*", next: "scramble", timeout: null }
    ],
  },

  scramble: { 
    image: "assets/Scrambled_Egg.png",
    text: "*You whisk the eggs with a fork until they become a homogeneous batter*",
    choices: [
      { text: "*Go back*", next: "goBack", timeout: null },
      { text: "*Grab a pan*", next: "pan", timeout: null }
    ],
  },

  pan: { 
    image: "assets/Apply_Oil.png",
    text: "*You place a pan on the stove, spraying it with oil*",
    choices: [
      { text: "*Go back*", next: "goBack", timeout: null },
      { text: "*Place Eggs in Pan*", next: "eggPan", timeout: null }
    ],
  },

  eggPan: { 
    image: "assets/Add_Eggs.png",
    text: "*The eggs hug the bottom of your pan*",
    choices: [
      { text: "*Go back*", next: "goBack", timeout: null },
      { text: "*Cook Eggs*", next: "cooking", timeout: null }
    ],
  },

  cooking: { 
    image: "assets/Done_Egg.gif",
    bgAudio: "assets/fire.wav",
    text: "*The eggs shine no more*",
    choices: [
      { text: "*Plate the eggs*", next: "obtainEgg", timeout: null }
    ],
  },

  obtainEgg: { 
    text: "*You now have eggs*",
    bgAudio: null,
    sfx: [{ name: "assets/egg.wav", when: "onEnter" }], // ✅ use full path
    choices: [
      { text: "*Go back*", next: "goEgg", timeout: null }
    ],
  },
  
  goEgg: { text: "...<br>*It seems the convo has ended, for now*", 
    bgAudio: "assets/background.wav",
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "*Eat eggs*", next: "eatEgg", timeout: null },
      { text: "*Offer food*", next: "offerEgg", timeout: null },
    ] },

  eatEgg: { 
    bgAudio: null,
    sfx: [{ name: "assets/wrong.wav", when: "onEnter" }], // ✅ use full path
    text: "...<br>*You no longer have eggs, you desire more*", 
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
    ] },

  offerEgg: { 
    bgAudio: null,
    sfx: [{ name: "assets/correct.wav", when: "onEnter" }], // ✅ use full path
    text: "Wait, did you make this?", 
    choices: [
      { text: "yeah like a minute ago", next: "convoEgg", timeout: null },
    ] },

  convoEgg: { 
    sfx: [{ name: "assets/yes.wav", when: "onEnter" }], // ✅ use full path
    text: "oh sick they look good", 
    choices: [
      { text: "thank you", next: "food", timeout: null },
    ] },

  food: { 
    text: "...<br>*something unpleasant engulfs your heart*", 
    bgAudio: "assets/gone.wav",
    choices: [
      { text: "Do you wanna try some?", next: "eatFood", timeout: null },
      { text: "Can i have them back?", next: "eggBack1", timeout: null },
    ] },
	
  eatFood: { 
    text: "wait really are you sure its ok ?", 
    sfx: [{ name: "assets/egg.wav", when: "onEnter" }], // ✅ use full path
    choices: [
      { text: "yea you can take the  plate", next: "wholePlate", timeout: null,  action: "forceResetTimer" },
      { text: "you can have a bite", next: "oneBite", timeout: null,  action: "forceResetTimer" },
      { text: "*Eat the food*", next: "eatEgg", timeout: null},
    ] },
	
  wholePlate: { 
    text: "your such a sweetheart thank you so much !<br>*The plate is cleared*", 
    bgAudio: "assets/VIDOV.wav",
    choices: [
      { text: "how is it ? be honest", next: "honesty", timeout: null,},
    ] },
	
  honesty: { 
    text: "they're good, i wish i had some ketchup", 
    sfx: [{ name: "assets/step.wav", when: "onEnter" }], // ✅ use full path
    choices: [
      { text: "*Look for ketchup*", next: "ketchup", timeout: null },
    ] },
	
  ketchup: { 
    text: "*Your eyes lock on to the fridge. <br>Inside, there is one jug of ketchup.<br>It is half full.*", 
    choices: [
      { text: "*Grab ketchup*", next: "eggKetchup", timeout: null },
    ] },
	
  eggKetchup: { 
    sfx: [{ name: "assets/egg.wav", when: "onEnter" }], // ✅ use full path
    text: "oh hey whats up", 
    choices: [
      { text: "*hand over the ketchup", next: "goat", timeout: null },
    ] },
	
  goat: { 
    sfx: [{ name: "assets/step.wav", when: "onEnter" }], // ✅ use full path
    text: "geez, i don't know how to thank you<br>well...  i don't think it would be all that interesting for you<br>*when you recieve the jug again, it stands at just a quarter full*", 
    choices: [
      { text: "what do you have in mind?", next: "mind", timeout: null },
    ] },
	
  mind: { 
    text: "i have some wisdom for you.", 
    choices: [
      { text: "i'd like to hear", next: "hear", timeout: null },
    ] },
	
  hear: {
    sfx: [{ name: "assets/yes.wav", when: "onEnter" }], // ✅ use full path
	bgAudio: null,
    text: "one egg will feed you for a meal, a chicken can feed you for life. unfortunately tho we got no chickens so uhhh<br>there you go !", 
    choices: [
      { text: "i got places to go", next: "places", timeout: null },
    ] },
	
  places: { 
    sfx: [{ name: "assets/egg.wav", when: "onEnter" }], // ✅ use full path
    text: "if you have the time, and don't burden yourself please,<br> throw me an egg.", 
    choices: [
      { text: "*Go to the kitchen*", next: "kitchenEnd", timeout: null },
    ] },
	
  kitchenEnd: {
    text: "*this is the place to be*",
    image: "assets/Kitchen_Step_1.png",
    bgAudio: "assets/kitchen.wav",
    choices: [
      { text: "Look in the fridge", next: "eggEnd", timeout: null }
    ],
  },
	
  eggEnd: { 
    text: "*On the top shelf, you find some eggs*",
    choices: [
      { text: "*Make some eggs*", next: "bowlEnd", timeout: null }
    ],
  },

  bowlEnd: { 
    image: "assets/Egg_In_Bowl.png",
    text: "*You crack the eggs, spilling the yolk into a bowl*",
    choices: [
      { text: "*Scramble the eggs*", next: "scrambleEnd", timeout: null }
    ],
  },

  scrambleEnd: { 
    image: "assets/Scrambled_Egg.png",
    text: "*You whisk the eggs with a fork until they become a homogeneous batter*",
    choices: [
      { text: "*Grab a pan*", next: "panEnd", timeout: null }
    ],
  },

  panEnd: { 
    image: "assets/Apply_Oil.png",
    text: "*You place a pan on the stove, spraying it with oil*",
    choices: [
      { text: "*Place Eggs in Pan*", next: "eggPanEnd", timeout: null }
    ],
  },

  eggPanEnd: { 
    image: "assets/Add_Eggs.png",
    text: "*The eggs hug the bottom of your pan*",
    choices: [
      { text: "*Cook Eggs*", next: "cookingEnd", timeout: null }
    ],
  },

  cookingEnd: { 
    image: "assets/Done_Egg.gif",
    bgAudio: "assets/fire.wav",
    text: "*The eggs shine no more*",
    choices: [
      { text: "*Plate the eggs*", next: "obtainEggEnd", timeout: null }
    ],
  },

  obtainEggEnd: { 
    text: "*You now have eggs*",
    bgAudio: null,
    sfx: [{ name: "assets/egg.wav", when: "onEnter" }], // ✅ use full path
    choices: [
      { text: "*Go back*", next: "goEggEnd", timeout: null }
    ],
  },
	
  goEggEnd: { text: "...<br>*It seems the convo has ended, for real*", 
    bgAudio: "assets/background.wav",
    choices: [
      { text: "*Eat eggs*", next: "eatEggEnd", timeout: null },
      { text: "*Offer food*", next: "offerEggEnd", timeout: null },
    ] },
	
  eatEggEnd: { 
    bgAudio: null,
    sfx: [{ name: "assets/wrong.wav", when: "onEnter" }], // ✅ use full path
    text: "...<br>*You no longer have eggs, they're not as good as the first time*", 
    choices: [
      { text: "*Go to kitchen*", next: "kitchenEnd", timeout: null },
    ] },
	
  offerEggEnd: { 
    bgAudio: null,
    sfx: [{ name: "assets/correct.wav", when: "onEnter" }], // ✅ use full path
    text: "bless your heart<br>*The plate is empty*", 
    choices: [
      { text: "*Go to kitchen", next: "kitchenEnd", timeout: null },
    ] },


	
  oneBite: { 
    text: ":^)<br>*You take back the food, there is a small dent*", 
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
    ] },

	
  eggBack1: { 
    text: null, 
    bgAudio: "assets/gone.wav",
    choices: [
      { text: "...", next: "eggBack2", timeout: null },
    ] },
	
  eggBack2: { 
    text: "*you got your eggs back", 
    choices: [
      { text: "...", next: "eggBack3", timeout: null },
      { text: "*eat the eggs*", next: "eatEgg", timeout: null },
    ] },
	
  eggBack3: { 
    text: "srry lol, they look great", 
    choices: [
      { text: "*Go to kitchen*", next: "kitchen", timeout: null },
      { text: "*Eat egg*", next: "eatEgg", timeout: null },
    ] },


  gone: { 
    bgAudio: "assets/gone.wav",
    text: "...",
    choices: [
      { text: "Hello?", next: "alone", timeout: null }
    ],
  },


  alone: { 
    text: "*No one is here*",
    choices: [null],
  },

};



/* ------------- Engine ------------- */
const imageEl = document.getElementById("scene-image");
const imageContainer = document.getElementById("image-container");
const textEl = document.getElementById("dialogue-text");
const choicesContainer = document.getElementById("choices");
const sceneTimerEl = document.getElementById("scene-timer");
const sceneTimerCount = document.getElementById("scene-timer-count");
const statusBar = document.getElementById("status-bar");
const audioHint = document.getElementById("audio-hint");
const enableAudioBtn = document.getElementById("enable-audio-btn");

// Keep track of audio elements and active timers
let playExceptionMusicNext = false; // tracks if the next click should play the special music
let exceptionAudioActive = false;


let currentBgAudio = null;
let currentSceneKey = null;
let activeChoiceCountdowns = []; 
let activeSceneTimer = null;

/* Track user interaction once (for autoplay-safe SFX) */
let userHasInteracted = false;
document.addEventListener("click", () => { userHasInteracted = true; }, { once: true });
document.addEventListener("keydown", () => { userHasInteracted = true; }, { once: true });

/* ----------- Global Timer System ----------- */
let globalTimer = 60;     // starts at 60s
let globalTimerActive = true; 
let canReset = false;     // you must press "Get time" first
let globalTimerInterval = null;

// Create a display for the global timer (optional UI)
const globalTimerEl = document.getElementById("global-timer");

/* Start the global timer */
function startGlobalTimer() {
  if (globalTimerInterval) clearInterval(globalTimerInterval);

  globalTimer = 300;
  globalTimerEl.textContent = `Hunger: ${globalTimer}s`;

  globalTimerInterval = setInterval(() => {
    if (!globalTimerActive) return;

    globalTimer -= 1;
    globalTimerEl.textContent = `Hunger: ${Math.max(globalTimer,0)}s`;

    //  Override music at 5 seconds
    if (globalTimer === 10) {
      playBackgroundAudio("assets/gone.wav").catch(()=>{});
    }

    if (globalTimer <= 0) {
      clearInterval(globalTimerInterval);
      globalTimerInterval = null;
      globalTimerActive = false; 
      globalTimerEl.textContent = `Global Timer: 0 (expired)`;

      // Override all button links on the current scene
      overrideChoicesOnTimerExpire();

      // Set flag so that next button click can trigger exception music
      playExceptionMusicNext = true;
    }
  }, 1000);
}


function forceResetGlobalTimer(seconds = 600) {
  if (!globalTimerActive) {
    console.log("Timer expired, cannot be restarted.");
    return false;
  }
  globalTimer = seconds;
  globalTimerEl.textContent = `Global Timer: ${globalTimer}s`;
  console.log(`Global Timer force-reset to ${globalTimer}s`);
  return true;
}



/* Reset logic */
function tryResetTimer() {
  if (!globalTimerActive) {
    console.log("Timer expired, cannot reset anymore.");
    return false;
  }
  if (canReset) {
    globalTimer = 10; // reset
    canReset = false; // consume the “charge”
    globalTimerEl.textContent = `Global Timer: ${globalTimer}s`;
    console.log("Timer reset to 10!");
    return true;
  } else {
    console.log("Must press Get time before resetting!");
    return false;
  }
}



/* Called when player presses Get time */
function grantReset() {
  if (!globalTimerActive) {
    console.log("Timer expired, can’t gain reset power.");
    return;
  }
  canReset = true;
  console.log("Reset power granted. Next reset will work.");
}


/* Background audio handling */
async function playBackgroundAudio(url) {
  if (currentBgAudio) {
    try { 
      currentBgAudio.pause();
      currentBgAudio.currentTime = 0;
    } catch(e) {}
    currentBgAudio = null;
  }
  if (!url) return;

  const audioEl = new Audio(url);
  audioEl.loop = true;
  audioEl.preload = "auto";
  audioEl.volume = 0.7;

  try {
    await audioEl.play();
  } catch (e) {
    showAudioHint(() => audioEl.play().catch(() => {}));
  }
  currentBgAudio = audioEl;
}

/* Revised SFX handling */
function playSFX(url) {
  if (!url) return;
  const s = new Audio(url);
  s.preload = "auto";
  s.volume = 1.0;

  if (userHasInteracted) {
    s.play().catch(err => console.warn("SFX play blocked:", err));
  } else {
    const onFirstInteraction = () => {
      s.play().catch(err => console.warn("SFX play blocked:", err));
      document.removeEventListener("click", onFirstInteraction);
      document.removeEventListener("keydown", onFirstInteraction);
    };
    document.addEventListener("click", onFirstInteraction);
    document.addEventListener("keydown", onFirstInteraction);
  }
}

function showAudioHint(onEnable) {
  audioHint.classList.remove("hidden");
  enableAudioBtn.focus();
  enableAudioBtn.onclick = () => {
    audioHint.classList.add("hidden");
    if (typeof onEnable === "function") onEnable();
  };
}

/* Clear timers */
function clearActiveTimers() {
  activeChoiceCountdowns.forEach(t => {
    clearInterval(t.interval);
    if (t.btn && t.countEl) t.btn.removeChild(t.countEl);
  });
  activeChoiceCountdowns = [];

  if (activeSceneTimer) {
    clearInterval(activeSceneTimer.interval);
    activeSceneTimer = null;
  }
  sceneTimerEl.classList.add("hidden");
}

function overrideChoicesOnTimerExpire() {
  // Only override if we have a current scene loaded
  if (!currentSceneKey) return;

  const scene = scenes[currentSceneKey];
  if (!scene || !scene.choices) return;

  scene.choices.forEach(choice => {
    // Example: redirect all buttons to "title" when timer hits 0
    choice.next = "gone";

    // Optional: change text to indicate timer is expired
    choice.text = "(Timer expired) " + choice.text;
  });

  // Re-render buttons so the changes take effect immediately
  renderChoices(scene.choices);
}




/* Load scene */
function loadScene(key) {
  if (!scenes[key]) {
    console.warn("Scene not found:", key);
    return;
  }

  clearActiveTimers();
  currentSceneKey = key;
  const scene = scenes[key];

  // ---------------- Text ----------------
  textEl.innerHTML = scene.text || "";

  // ---------------- Image ----------------
  if (scene.image) {
    imageEl.src = scene.image;
    imageEl.alt = scene.image.split("/").pop();
    imageEl.classList.remove("hidden");
    imageContainer.style.display = "flex";
  } else {
    imageEl.src = "";
    imageEl.classList.add("hidden");
    imageContainer.style.display = "none";
  }

  // ---------------- Background Audio ----------------
  if (playExceptionMusicNext) {
    // Only start exception music if not already playing
    if (!currentBgAudio || !currentBgAudio.src.includes("exception.wav")) {
      if (currentBgAudio) {
        currentBgAudio.pause();
        currentBgAudio.currentTime = 0;
      }
      const exceptionAudio = new Audio("assets/exception.wav");
      exceptionAudio.loop = true;
      exceptionAudio.volume = 0.7;
      exceptionAudio.play().catch(err => console.warn("Exception music blocked:", err));
      currentBgAudio = exceptionAudio;
    }
    playExceptionMusicNext = false; // consume flag
  } else if ("bgAudio" in scene) {
    // Normal scene music, only if timer > 5
    if (globalTimer > 5 && globalTimerActive) {
      if (!currentBgAudio || !currentBgAudio.src.includes(scene.bgAudio)) {
        playBackgroundAudio(scene.bgAudio).catch(() => {});
      }
    }
  }

  // ---------------- Scene SFX ----------------
  if (Array.isArray(scene.sfx)) {
    scene.sfx.forEach(s => {
      if (s.when === "onEnter") playSFX(s.name); // SFX plays even if exception music is active
    });
  }

  // ---------------- Choices ----------------
  renderChoices(scene.choices || []);

  // ---------------- Scene Timer ----------------
  if (scene.sceneTimer && scene.sceneTimer.seconds && scene.sceneTimer.onTimeout) {
    startSceneTimer(scene.sceneTimer.seconds, scene.sceneTimer.onTimeout);
  } else {
    sceneTimerEl.classList.add("hidden");
  }

  // ---------------- Status ----------------
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  //statusBar.textContent = `Scene: ${key}`;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

// ---------------- Choice Click Handler ----------------
function renderChoices(choicesArray) {
  choicesContainer.innerHTML = "";

  if (!choicesArray || choicesArray.length === 0) {
    const endBtn = document.createElement("button");
    endBtn.className = "choice";
    endBtn.textContent = "End / Restart";
    endBtn.onclick = () => loadScene("title");
    choicesContainer.appendChild(endBtn);
    return;
  }

  choicesArray.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.setAttribute("role", "menuitem");
    btn.textContent = choice.text;

    btn.addEventListener("click", () => {
      disableAllChoiceButtons();

      // ---------------- Exception Music ----------------
      if (playExceptionMusicNext) {
        if (!currentBgAudio || !currentBgAudio.src.includes("exception.wav")) {
          if (currentBgAudio) {
            currentBgAudio.pause();
            currentBgAudio.currentTime = 0;
          }
          const exceptionAudio = new Audio("assets/exception.wav");
          exceptionAudio.loop = true;
          exceptionAudio.volume = 0.7;
          exceptionAudio.play().catch(err => console.warn("Exception music play blocked:", err));
          currentBgAudio = exceptionAudio;
        }
        playExceptionMusicNext = false; // only once
      }

      // ---------------- Handle Special Actions ----------------
		if (choice.action === "getTime") {
		  grantReset();
		  loadScene(choice.next);
		} else if (choice.action === "resetTimer") {
		  tryResetTimer();
		  loadScene(choice.next);
		} else if (choice.action === "forceResetTimer") {
		  forceResetGlobalTimer(); // Resets to 60s
		  loadScene(choice.next);
		} else {
		  loadScene(choice.next);
		}

    });

    // ---------------- Optional Countdown ----------------
    if (choice.timeout && choice.timeout > 0) {
      const countEl = document.createElement("span");
      countEl.className = "countdown";
      countEl.textContent = `${choice.timeout}s`;
      btn.appendChild(countEl);

      let remaining = choice.timeout;
      const interval = setInterval(() => {
        remaining -= 1;
        if (remaining <= 0) clearInterval(interval);
        countEl.textContent = `${Math.max(0, remaining)}s`;
      }, 1000);

      const timeoutId = setTimeout(() => {
        disableAllChoiceButtons();
        loadScene(choice.next);
      }, choice.timeout * 1000);

      activeChoiceCountdowns.push({ interval, timeoutId, btn, countEl });
    }

    choicesContainer.appendChild(btn);
  });
}


/* Scene timer */
function startSceneTimer(seconds, onTimeoutSceneKey) {
  sceneTimerEl.classList.remove("hidden");
  let remaining = seconds;
  sceneTimerCount.textContent = remaining;
  activeSceneTimer = {};
  activeSceneTimer.interval = setInterval(() => {
    remaining -= 1;
    sceneTimerCount.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(activeSceneTimer.interval);
      activeSceneTimer = null;
      disableAllChoiceButtons();
      loadScene(onTimeoutSceneKey);
    }
  }, 1000);
}

/* Disable choices */
function disableAllChoiceButtons() {
  const btns = choicesContainer.querySelectorAll(".choice");
  btns.forEach(b => {
    b.classList.add("disabled");
    b.disabled = true;
  });
  activeChoiceCountdowns.forEach(t => {
    if (t.interval) clearInterval(t.interval);
    if (t.timeoutId) clearTimeout(t.timeoutId);
  });
  activeChoiceCountdowns = [];
  if (activeSceneTimer) {
    clearInterval(activeSceneTimer.interval);
    activeSceneTimer = null;
  }
}

/* Init */
window.addEventListener("load", () => {
  loadScene("title");
  startGlobalTimer();  // start the persistent timer
});

