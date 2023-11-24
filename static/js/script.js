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

async function typeWriter(element, text) {
  const speed = 10;
  for (let i = 0; i < text.length; i++) {
    element.innerHTML += text.charAt(i);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}

// Event listener for a button with the id "sendB"
sendB.addEventListener("click", async () => {
  // Get the value of an input field with the id "questionInput"
  const questionInput = document.getElementById("questionInput").value;

  // Clear the input field
  document.getElementById("questionInput").value = "";

  // Display or hide HTML elements with class "right2" and "right1"
  document.querySelector(".right2").style.display = "block";
  document.querySelector(".right1").style.display = "none";

  // Set the inner HTML of elements with IDs "user_question_ID" and "user_sol_w_question_ID"
  user_question_ID.innerHTML = questionInput;
  user_sol_w_question_ID.innerHTML = questionInput;

  // Perform a POST request using the postData function
  const result = await postData("/api", { "question": questionInput });

  // Clear existing content in the answer element
  answer_ID.innerHTML = "";

  // Call the typeWriter function to simulate typing the answer
  await typeWriter(answer_ID, result.answer);
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


runSpeechRecog = () => {
  const questionInput = document.getElementById("questionInput");
  const micB = document.getElementById("micB");
  
  if (micB.classList.contains("listening")) {
    micB.classList.remove("listening");
    recognition.stop();
    micB.textContent = "Speech";
  } else {
    questionInput.value = "Listening...";

    let recognition = new webkitSpeechRecognition();
    recognition.onstart = () => {
      micB.classList.add("listening");
    }
    recognition.onresult = (e) => {
      var transcript = e.results[0][0].transcript;
      questionInput.value = transcript;
      micB.classList.remove("listening");
    }
    recognition.start();
  }
}