// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');
const paper7 = document.querySelector('#p7');
const paper8 = document.querySelector('#p8');
const paper9 = document.querySelector('#p9');
const paper10 = document.querySelector('#p10');
const paper11 = document.querySelector('#p11');
const paper12 = document.querySelector('#p12');
const paper13 = document.querySelector('#p13');
const paper14 = document.querySelector('#p14');
const paper15 = document.querySelector('#p15');
const paper16 = document.querySelector('#p16');
const paper17 = document.querySelector('#p17');
const paper18 = document.querySelector('#p18');


const puzzleBtn = document.querySelector("#puzzle-btn");
const puzzleOverlay = document.querySelector("#puzzle-overlay");
const puzzleTitle = puzzleOverlay.querySelector("h2");
const puzzlePrompt = puzzleOverlay.querySelector("p");
const puzzleImg = puzzleOverlay.querySelector("img");

puzzleBtn.style.display = 'none';
const puzzles = {
    2: {
      type:    "hotspot",
      title:   "Find the Antennae!",
      prompt:  "Click the antennae in the picture below to continue:",
      imgSrc:  "assets/images/wheresWaldo.png",
      solveSelector: "#antenna-hotspot",
      solved:  false
    },
  
    8: {
      type:    "riddle",
      title:   "Left v. Right?",
      prompt:  "If you can tell left v. right, answer this question: If you're right but not correct, and you turn left to make it right, which way is it when you’ve finally set it right without turning it to the wrong?",
      answer:  "upright",
      solved:  false
    },
  
    9: {
      type:    "target",
      title:   "X Marks the Spot!",
      prompt:  "Follow these steps and click your final location:",
      imgSrc:  "assets/images/map.jpg",
      solveSelector: "#map-target",
      solved:  false
    },
  
    12: {
      type:    "ink",
      title:   "Plain Parchment?",
      prompt:  "Heat the parchment to reveal the hidden message.",
      imgSrc:  "assets/images/parchment-blank.jpg",
      hiddenText: "You found the Secret Message!",
      solved:  false
    },
  
    14: {
      type:    "cipher",
      title:   "Yucky Cipher!",
      prompt:  "Decode this text to answer the question:",
      cipherText: "S ryzo iye mkx cyvfo drsc. Dy wyfo yx, dro kxcgob sc lboku.",
      answer:     "break",
      solved:     false
    }
  };
  
  

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
puzzleBtn.addEventListener("click", () => {
    const config = puzzles[currentLocation - 1];
    if (!config) return;
  
    loadPuzzleUI(config);
    puzzleOverlay.classList.remove("hidden");
});

// Business Logic
let currentLocation = 1;
let numOfPapers = 18;
let maxLocation = numOfPapers + 1;
let puzzleLocked = false; 

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-250px)";
    nextBtn.style.transform = "translateX(250px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation && !puzzleLocked) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;

                puzzleLocked = true;
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
                puzzleBtn.style.display = "";
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;

                puzzleLocked = true;
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
                puzzleBtn.style.display = "";
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;

                puzzleLocked = true;
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
                puzzleBtn.style.display = "";
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                break;
            case 12:
                paper12.classList.add("flipped");
                paper12.style.zIndex = 12;

                puzzleLocked = true;
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
                puzzleBtn.style.display = "";
                break;
            case 13:
                paper13.classList.add("flipped");
                paper13.style.zIndex = 13;
                break;
            case 14:
                paper14.classList.add("flipped");
                paper14.style.zIndex = 14;

                puzzleLocked = true;
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
                puzzleBtn.style.display = "";
                break;
            case 15:
                paper15.classList.add("flipped");
                paper15.style.zIndex = 15;
                break;
            case 16:
                paper16.classList.add("flipped");
                paper16.style.zIndex = 16;
                break;
            case 17:
                paper17.classList.add("flipped");
                paper17.style.zIndex = 17;
                break;
            case 18:
                paper18.classList.add("flipped");
                paper18.style.zIndex = 18;
                closeBook(false);
                startCorruption();
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(puzzleLocked) return;
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 18;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 17;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 16;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 15;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 14;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 13;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 12;
                break;
            case 9:
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 11;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 10;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 9;
                break;
            case 12:
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 8;
                break;
            case 13:
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 7;
                break;
            case 14:
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 6;
                break;
            case 15:
                paper14.classList.remove("flipped");
                paper14.style.zIndex = 5;
                break;
            case 16:
                paper15.classList.remove("flipped");
                paper15.style.zIndex = 4;
                break;
            case 17:
                paper16.classList.remove("flipped");
                paper16.style.zIndex = 3;
                break;
            case 18:
                paper17.classList.remove("flipped");
                paper17.style.zIndex = 2;
                break;
            case 19:
                openBook();
                paper18.classList.remove("flipped");
                paper18.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation--;
    }
}

function checkPuzzleLock() {
    const config = puzzles[currentLocation - 1];  
    // we key puzzles by the page-number *you just flipped away from*;
    // e.g. flipping paper2 increments currentLocation from 2→3, so
    // you look at puzzles[2]
    if (config && !config.solved) {
      puzzleBtn.classList.remove("hidden");
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      puzzleLocked = true;
    } else {
      puzzleBtn.classList.add("hidden");
      puzzleBtn.style.display = 'none';
      nextBtn.style.display = "";
      prevBtn.style.display = "";
      puzzleLocked = false;
    }
  }

  function loadPuzzleUI(config) {
    const container = puzzleOverlay.querySelector(".puzzle-content");
    container.innerHTML = `
      <h2>${config.title}</h2>
      <p>${config.prompt}</p>
      ${config.imgSrc ? `<img id="puzzle-img" src="${config.imgSrc}" />` : ""}
      <div id="puzzle-controls"></div>
    `;
  
    const controls = container.querySelector("#puzzle-controls");
  
    switch (config.type) {
        case "hotspot":
          container.innerHTML = `
            <h2>${config.title}</h2>
            <p>${config.prompt}</p>
            <div class="hotspot-container">
              <img id="puzzle-img" src="${config.imgSrc}" alt="puzzle image"/>
              <div id="antenna-hotspot" class="hotspot"></div>
            </div>
          `;
          document
            .querySelector(config.solveSelector)
            .addEventListener("click", () => markSolved(config));
          break;
  
      case "riddle":
        controls.innerHTML = `
          <input type="text" id="riddle-answer" placeholder="Type here"/>
          <button id="riddle-submit">Submit</button>
        `;
        controls.querySelector("#riddle-submit")
          .addEventListener("click", () => {
            const val = controls.querySelector("#riddle-answer").value.trim().toLowerCase();
            if (val === config.answer) markSolved(config);
            else alert("Nope, try again!");
          });
        break;
  
      case "target":
        container.innerHTML = `
            <h2>${config.title}</h2>
            <p>${config.prompt}</p>
            <div class="target-container">
              <img id="puzzle-img" src="${config.imgSrc}" alt="puzzle image"/>
              <div id="map-target" class="target"></div>
            </div>
          `;
          document
            .querySelector(config.solveSelector)
            .addEventListener("click", () => markSolved(config));
          break;

          case "ink": {
            // build spans for each letter
            const text = config.hiddenText || "";
            const letters = text
              .split("")
              .map(ch => `<span class="hidden-letter">${ch === " " ? "&nbsp;" : ch}</span>`)
              .join("");
          
            // inject the HTML
            container.innerHTML = `
              <h2>${config.title}</h2>
              <p>${config.prompt}</p>
              <div id="ink-container">
                <img src="${config.imgSrc}" alt="Blank parchment" />
                <div id="hidden-text">${letters}</div>
              </div>
            `;
          
            // grab nodes & init state
            const ink         = container.querySelector("#ink-container");
            const letterSpans = Array.from(container.querySelectorAll(".hidden-letter"));
            let lastX = null, lastY = null, lastT = null;
            let heatStart = null;
            const speedThreshold = 0.4;  // px/ms
            const requiredHeat = 300;  // ms
            let revealedCount = 0;
            let solvedTimeout;
          
            // mouse‐move → heat tracking → letter‐by‐letter reveal
            ink.addEventListener("mousemove", e => {
              const now = e.timeStamp;
          
              // 1) prime on first move
              if (lastT === null) {
                lastX = e.clientX; lastY = e.clientY; lastT = now;
                return;
              }
          
              // 2) compute instantaneous speed
              const dx = e.clientX - lastX;
              const dy = e.clientY - lastY;
              const dt = now - lastT;
              const speed = Math.sqrt(dx*dx + dy*dy) / dt;
          
              // 3) glow & heat timer
              if (speed > speedThreshold) {
                ink.classList.add("heat-hot");
                if (!heatStart) heatStart = now;
              } else {
                ink.classList.remove("heat-hot");
                heatStart = null;
              }

              function createFlame(x, y) {
                if(speed > .3){
                const flame = document.createElement("div");
                flame.className = "flame";
              
                // position relative to the ink-container
                const rect = ink.getBoundingClientRect();
                flame.style.left = (x - rect.left) + "px";
                flame.style.top  = (y - rect.top)  + "px";
              
                // random flicker direction
                const angle = Math.random() * Math.PI * 2;
                const dist  = Math.random() * 40 + 20; // travel 20–60px
                flame.style.setProperty("--dx", (Math.cos(angle)*dist) + "px");
                flame.style.setProperty("--dy", (Math.sin(angle)*dist) + "px");
              
                ink.appendChild(flame);
                flame.addEventListener("animationend", () => flame.remove());
                }
              }
              

            if (speed > speedThreshold) {
                createFlame(e.clientX, e.clientY);
              }
              
  
          
              // 4) once hot long enough, reveal *next* letter
              if (heatStart && now - heatStart >= requiredHeat && revealedCount < letterSpans.length) {
                letterSpans[revealedCount].style.opacity = 1;
                revealedCount++;
                heatStart = now;  // require re-heat for next char
              }
          
              // 5) when all letters are out, schedule solve (with 2s delay)
              if (revealedCount === letterSpans.length && !solvedTimeout) {
                solvedTimeout = setTimeout(() => markSolved(config), 2000);
              }
          
              // 6) save for next event
              lastX = e.clientX; lastY = e.clientY; lastT = now;
            });
          
            break;
          }
        
      case "cipher":
        controls.innerHTML = `
          <pre>${config.cipherText}</pre>
          <input type="text" id="cipher-answer" placeholder="Decoded text"/>
          <button id="cipher-submit">Submit</button>
        `;
        controls.querySelector("#cipher-submit")
          .addEventListener("click", () => {
            const val = controls.querySelector("#cipher-answer").value.trim().toLowerCase();
            if (val === config.answer) markSolved(config);
            else alert("That doesn’t look right.");
          });
        break;
    }
  }

  function markSolved(config) {
    config.solved = true;
    puzzleOverlay.classList.add("hidden");
    checkPuzzleLock();
  }

function startCorruption() {
    const container = document.getElementById("b18");
    let corruptionInterval = 2000;
    const allTextNodes = [];
  
    // Recursively collect all text nodes under b18
    function collectTextNodes(node) {
      node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          if (child.nodeValue.trim().length > 0) {
            allTextNodes.push(child);
          }
        } else {
          collectTextNodes(child);
        }
      });
    }
    collectTextNodes(container);
  
    // The actual swap-letters function
    function corruptRandomLetter() {
      if (allTextNodes.length === 0) return;
  
      // pick a random text node
      const node = allTextNodes[Math.floor(Math.random() * allTextNodes.length)];
      const text = node.nodeValue;
      if (text.length < 2) return setTimeout(corruptRandomLetter, corruptionInterval);
  
      // swap two random chars
      let i = Math.floor(Math.random() * text.length);
      let j;
      do { j = Math.floor(Math.random() * text.length); } while (j === i);
      const arr = text.split("");
      [arr[i], arr[j]] = [arr[j], arr[i]];
      node.nodeValue = arr.join("");
  
      corruptionInterval = Math.max(1, corruptionInterval * .9);
  
      setTimeout(corruptRandomLetter, corruptionInterval);
    }
  
    // kick it off
    setTimeout(corruptRandomLetter, corruptionInterval);

  }
  
  
  
