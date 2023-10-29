async function postData(url = "", data = {}) { 
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
sendB.addEventListener("click", async () => { 
  questionInput = document.getElementById("questionInput").value;
  document.getElementById("questionInput").value = "";
  document.querySelector(".right2").style.display = "block";
  document.querySelector(".right1").style.display = "none";
  user_question_ID.innerHTML = questionInput;
  user_sol_w_question_ID.innerHTML = questionInput;
  let result = await postData("/api", { "question": questionInput });
  answer_ID.innerHTML = result.answer;
});



const inputElement = document.getElementById("questionInput");
const buttonElement = document.getElementById("sendB");
inputElement.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonElement.click();
  }
});

buttonElement.addEventListener("click", function() {
  const inputValue = inputElement.value;
  console.log("Sending message: " + inputValue);
  inputElement.value = "";
});





function reloadPage() {
  location.reload();
}





var content = document.body;
var darkMode = document.getElementById('theme-change');
var isDarkMode = localStorage.getItem('darkMode');
function setTheme() {
  if (isDarkMode === 'true') {
    darkMode.classList.add('dark-theme');
    content.classList.remove('light-theme');
  } else {
    darkMode.classList.remove('dark-theme');
    content.classList.add('light-theme');
  }
}
setTheme();
darkMode.addEventListener('click', function() {
  if (darkMode.classList.contains('dark-theme')) {
    darkMode.classList.remove('dark-theme');
    content.classList.add('light-theme');
    localStorage.setItem('darkMode', 'false');
  } else {
    darkMode.classList.add('dark-theme');
    content.classList.remove('light-theme');
    localStorage.setItem('darkMode', 'true');
  }
});





function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Copied: " + text);
}
document.addEventListener("DOMContentLoaded", function () {
  const questionInput = document.getElementById("questionInput");

  for (let i = 1; i <= 10; i++) {
      const copyButton = document.getElementById("copy-button" + i);
      copyButton.addEventListener("click", function () {
          const buttonText = copyButton.textContent.trim();
          questionInput.value = buttonText;
      });
  }
});




function copyToInput(content) {
  var questionInput = document.getElementById("questionInput");

  if (questionInput) {
      questionInput.value = content;
  }
}
