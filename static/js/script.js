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

// Get a reference to the "sendButton" element
sendButton.addEventListener("click", async () => { 
  // Get the value of the input field with the ID "questionInput"
  questionInput = document.getElementById("questionInput").value;
  // Clear the input field
  document.getElementById("questionInput").value = "";
  // Show the "right2" div and hide the "right1" div
  document.querySelector(".right2").style.display = "block";
  document.querySelector(".right1").style.display = "none";

  // Set the content of "question1" and "question2" elements to the input value
  question1.innerHTML = questionInput;
  question2.innerHTML = questionInput;

  // Get the answer from the server and populate it
  let result = await postData("/api", { "question": questionInput });
  solution.innerHTML = result.answer;

  // Define a function to reload the page
  function reloadPage() {
    location.reload();
  }
});

// Get references to the "inputElement" and "buttonElement"
const inputElement = document.getElementById("questionInput");
const buttonElement = document.getElementById("sendButton");

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
var darkMode = document.getElementById('dark-change');
var isDarkMode = localStorage.getItem('darkMode');

// Check if the user's preference for dark mode is saved in localStorage
if (isDarkMode === 'true') {
  darkMode.classList.add('active');
  content.classList.add('night');
}

// Listen for a click on the "dark-change" element and toggle dark mode
darkMode.addEventListener('click', function() {
  darkMode.classList.toggle('active');
  content.classList.toggle('night');

  // Save the state in localStorage
  if (darkMode.classList.contains('active')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
});