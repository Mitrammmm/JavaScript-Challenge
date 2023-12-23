//Generating captcha from Letters & Words
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
  }

  return captcha;
}

//For Updaing Captcha 
function refreshCaptcha() {
  const captchaElement = document.getElementById('captcha');
  captchaElement.textContent = generateCaptcha();
}

//Checking user input
function validateCaptcha() {
  const userInput = document.getElementById('userInput').value;
  const captchaText = document.getElementById('captcha').textContent;

  if (userInput === captchaText) {
    alert('Captcha is correct!');  //Output for Correct Captcha
    refreshCaptcha(); 
  } else {
    alert('Incorrect captcha.Try again.'); //Output for Incorrectt captcha
  }
}

document.addEventListener('DOMContentLoaded', function () {
  refreshCaptcha();

  const refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.addEventListener('click', refreshCaptcha);
});
