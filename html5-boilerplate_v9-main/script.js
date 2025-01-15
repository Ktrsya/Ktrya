document.addEventListener('DOMContentLoaded', () => {
  const firstVideo = document.getElementById('BankomatLoop');
  const secondVideo = document.getElementById('MovingAnim');
  const interactiveButtons = document.getElementById('interactiveButtons');
  const screenDiv = document.getElementById('screenDiv');
  const overlayImage = document.getElementById('overlayImage');
  const animationText = document.getElementById('animationText');
  const animationText2 = document.getElementById('animationText2');
  const animationText3 = document.getElementById('animationText3');
  const animationText4 = document.getElementById('animationText4');
  const randomSentenceContainer = document.getElementById('randomSentenceContainer');
  const buttons = document.querySelectorAll('.button');
  const popUpImage = document.getElementById('popUpImage');


  const sentences = [
    "Your dreams aren’t snowmen—they won’t melt.",
    "Your odd actions will bring unexpected rewards.",
    "The stars will smile to you this week.",
    "Don’t be afraid to let go of what you don’t need.",
    "Begin on Monday; the timing is right.",
    "You can’t do everything—take a moment to relax.",
    "Even the darkest basement leads to Radost (Happiness).",
    "Know this: the Receipt Printer is proud of you.",
    "Go make some Art History today.",
    "Speak your truth; no one will hear a silent voice.",
    "If you have an opportunity, try it.",
    "Be the sunshine Prague often lacks.",
    "Life is short—find time to learn Blender.",
    "Sometimes you need some rest in order to be yourself.",
    "A bad ending is better then an endless nightmare.",
    "Be happy you don't live in Chodov.",
    "Home is wherever you decide to make it.",
    "Remember to document your process.",
    "Today is the perfect day to learn some Czech.",
    "Your art might confuse others, but that’s how movements start.",
    "Today is a perfect day to visit an exhibition."
  ];

  let currentInput = ""; // Store the current input

  function positionButtons() {
    const videoRect = secondVideo.getBoundingClientRect();
    interactiveButtons.style.width = `${videoRect.width}px`;
    interactiveButtons.style.height = `${videoRect.height}px`;
  }

  function getCurrentDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return now.toLocaleDateString('en-US', options);
  }

  firstVideo.addEventListener('click', () => {
    firstVideo.loop = false;
    firstVideo.addEventListener('ended', () => {
      firstVideo.style.display = 'none';
      secondVideo.style.display = 'block';
      secondVideo.play();
    });
  });

  secondVideo.addEventListener('ended', () => {
    secondVideo.pause();
    interactiveButtons.style.display = 'block';
    screenDiv.style.display = 'flex';
    positionButtons();
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');

      if (value) {
        if (currentInput.length < 10) {
          currentInput += value;
          screenDiv.textContent = currentInput; 
        }
      } else {
        overlayImage.style.display = 'block';
        overlayImage.style.zIndex = 10000;
        overlayImage.style.animation = 'rapidUpDown 0.2s ease-in-out infinite';

        setTimeout(() => {
          overlayImage.style.animation = '';

          animationText.innerHTML = `
            <p>WebReceipt</p>
            <p>Receipt# ${currentInput}</p>
            <p>Current Date and Time: ${getCurrentDateTime()}</p>
            <p>------------------------------------------------------------</p>
          `;

          const items1 = [
            "1 Cauliflower",
            "1 White Onion",
            "Olive Oil 750ml",
            "Potatoes Loose 374 g",
            "Butter 82% 250g",
            "Thyme, rubbed 14g",
            "1 Garlic",
            "Whipping Cream 31% 200g",
            "1 Chives",
            "Total"
          ];

          const items2 = [
            "Kč",
            "59,90",
            "1,74",
            "389,90",
            "9.33",
            "64,90",
            "18,90",
            "9",
            "29,90",
            "39,90",
            "623.47"
          ];

          animationText2.innerHTML = "";
          items1.forEach(item => {
            const line = document.createElement('p');
            line.textContent = item;
            animationText2.appendChild(line);
          });

          animationText3.innerHTML = "";
          items2.forEach(item => {
            const line = document.createElement('p');
            line.textContent = item;
            animationText3.appendChild(line);
          });


          animationText4.innerHTML = `
            <p>------------------------------------------------------------</p>
            <p>What the stars(and the printer) predicts to you:</p>
          `;


          const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
          randomSentenceContainer.textContent = randomSentence; 
          randomSentenceContainer.style.display = 'block'; 


          animationText.style.display = 'block';
          animationText2.style.display = 'block';
          animationText3.style.display = 'block';
          animationText4.style.display = 'block';
          popUpImage.style.display = 'block';
        }, 5000);
      }
    });
  });

  window.addEventListener('resize', positionButtons);
});
