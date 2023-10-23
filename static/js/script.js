// Example POST method implementation:
async function postData(url = "", data = {}) { 
    const response = await fetch(url, {
      method: "POST", headers: {
        "Content-Type": "application/json", 
      }, body: JSON.stringify(data),  
    });
    return response.json(); 
  }
  
  sendButton.addEventListener("click", async ()=>{ 
    questionInput = document.getElementById("questionInput").value;
    document.getElementById("questionInput").value = "";
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"

    question1.innerHTML = questionInput;
    question2.innerHTML = questionInput;

    // Get the answer and populate it! 
    let result = await postData("/api", {"question": questionInput})
    solution.innerHTML = result.answer

    function reloadPage() {
      location.reload();
  }
})
const inputElement = document.getElementById("questionInput");
const buttonElement = document.getElementById("sendButton");

inputElement.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Trigger a click on the button
        buttonElement.click();
    }
});

buttonElement.addEventListener("click", function() {
    // Add your code to handle the button click here
    // You can access the input value with inputElement.value
    const inputValue = inputElement.value;
    // Perform your desired action, e.g., sending a message
    console.log("Sending message: " + inputValue);
    // Clear the input field
    inputElement.value = "";
});
function reloadPage() {
  location.reload();
}
var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })