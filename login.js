document.querySelector('form.login').addEventListener('submit', function(event) {
  event.preventDefault();
  resetForm('form.login');
  setTimeout(function() {
      window.location.reload();
  }, 1000); 
});

document.querySelector('form.signup').addEventListener('submit', function(event) {
  event.preventDefault();
  resetForm('form.signup');
  setTimeout(function() {
      window.location.reload();
  }, 1000);
});

function resetForm(formSelector) {
  const inputs = document.querySelectorAll(formSelector + ' input');
  inputs.forEach(function(input) {
      input.value = '';
  });
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

// Validate email input on login form
const loginEmail = document.querySelector("form.login .field input[type='text']");
loginEmail.oninput = (() => {
  if (loginEmail.validity.typeMismatch) {
      loginEmail.setCustomValidity("Please enter a valid email address");
  } else {
      loginEmail.setCustomValidity("");
  }
});

// Validate password input on login form
const loginPassword = document.querySelector("form.login .field input[type='password']");
loginPassword.oninput = (() => {
  if (loginPassword.validity.valueMissing) {
      loginPassword.setCustomValidity("Please enter a password");
  } else {
      loginPassword.setCustomValidity("");
  }
});

// Validate email input on signup form
const signupEmail = document.querySelector("form.signup .field input[type='text']");
signupEmail.oninput = (() => {
  if (signupEmail.validity.typeMismatch) {
      signupEmail.setCustomValidity("Please enter a valid email address");
  } else {
      signupEmail.setCustomValidity("");
  }
});

// Validate password input on signup form
const signupPassword = document.querySelector("form.signup .field input[type='password']");
signupPassword.oninput = (() => {
  if (signupPassword.validity.valueMissing) {
      signupPassword.setCustomValidity("Please enter a password");
  } else {
      signupPassword.setCustomValidity("");
  }
});

// Validate confirm password input on signup form
const signupConfirmPassword = document.querySelector("form.signup .field input[type='password'][name='confirm-password']");
signupConfirmPassword.oninput = (() => {
  if (signupConfirmPassword.validity.valueMissing) {
      signupConfirmPassword.setCustomValidity("Please confirm your password");
  } else if (signupConfirmPassword.value !== signupPassword.value) {
      signupConfirmPassword.setCustomValidity("Passwords do not match");
  } else {
      signupConfirmPassword.setCustomValidity("");
  }
});




// if ('WebSocket' in window) {
//   (function () {
//     function refreshCSS() {
//       var sheets = [].slice.call(document.getElementsByTagName("link"));
//       var head = document.getElementsByTagName("head")[0];
//       for (var i = 0; i < sheets.length; ++i) {
//         var elem = sheets[i];
//         var parent = elem.parentElement || head;
//         parent.removeChild(elem);
//         var rel = elem.rel;
//         if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
//           var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
//           elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
//         }
//         parent.appendChild(elem);
//       }
//     }
//     var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
//     var address = protocol + window.location.host + window.location.pathname + '/ws';
//     var socket = new WebSocket(address);
//     socket.onmessage = function (msg) {
//       if (msg.data == 'reload') window.location.reload();
//       else if (msg.data == 'refreshcss') refreshCSS();
//     };
//     if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
//       console.log('Live reload enabled.');
//       sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
//     }
//   })();
// }
// else {
//   console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// }