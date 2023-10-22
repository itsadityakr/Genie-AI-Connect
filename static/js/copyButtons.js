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