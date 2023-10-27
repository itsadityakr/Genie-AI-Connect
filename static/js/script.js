// Example POST method implementation:
// Define an asynchronous function for making a POST request with optional data
async function postData(url = "", data = {}) { 
  // Use the fetch API to send a POST request to the specified URL
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(data), // Convert the data object to JSON and send it in the request body
  });
  return response.json(); // Parse and return the JSON response
}

// Get a reference to the "send-button" element
sendB.addEventListener("click", async () => { 
  // Get the value of the input field with the ID "questionInput"
  questionInput = document.getElementById("questionInput").value;
  // Clear the input field
  document.getElementById("questionInput").value = "";
  // Show the "right2" div and hide the "right1" div
  document.querySelector(".right2").style.display = "block";
  document.querySelector(".right1").style.display = "none";

  // Set the content of "user_question_ID" and "user_sol_w_question_ID" elements to the input value
  user_question_ID.innerHTML = questionInput;
  user_sol_w_question_ID.innerHTML = questionInput;

  // Get the answer from the server and populate it
  let result = await postData("/api", { "question": questionInput });
  answer_ID.innerHTML = result.answer;

  // Define a function to reload the page
  function reloadPage() {
    location.reload();
  }
});

// Get references to the "inputElement" and "buttonElement"
const inputElement = document.getElementById("questionInput");
const buttonElement = document.getElementById("sendB");

// Listen for the "keyup" event on the input element
inputElement.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Trigger a click on the button to submit the message
    buttonElement.click();
  }
});

// Listen for a click on the button
buttonElement.addEventListener("click", function() {
  // Handle the button click event here
  // You can access the input value using "inputElement.value"
  const inputValue = inputElement.value;
  // Perform your desired action, e.g., sending a message
  console.log("Sending message: " + inputValue);
  // Clear the input field
  inputElement.value = "";
});

// Define a function to reload the page
function reloadPage() {
  location.reload();
}

// Get references to the "content" and "darkMode" elements
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('theme-change');
var isDarkMode = localStorage.getItem('darkMode');

// Check if the user's preference for dark mode is saved in localStorage
if (isDarkMode === 'true') {
  darkMode.classList.add('dark-theme');
  content.classList.add('light-theme');
}

// Listen for a click on the "dark-change" element and toggle dark mode
darkMode.addEventListener('click', function() {
  darkMode.classList.toggle('dark-theme');
  content.classList.toggle('light-theme');

  // Save the state in localStorage
  if (darkMode.classList.contains('active')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
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