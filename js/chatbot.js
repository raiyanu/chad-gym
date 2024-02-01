function switch_chatbot() {
  document.getElementById("chatbot-modal").classList.toggle("visible");
}

document.addEventListener("DOMContentLoaded", function () {
  // Create a new list item
  var newMessage = document.createElement("li");
  newMessage.className = "message-recieved"; // You can change this to 'message-received' if needed

  // Create a new paragraph element and add text content
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "Hello there! how i can help you?";

  // Append the paragraph to the list item
  newMessage.appendChild(newParagraph);

  // Append the new list item to the existing list
  document.querySelector(".chat-message-container").appendChild(newMessage);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input and button elements
  var inputField = document.querySelector(".send-message input");
  var sendButton = document.querySelector(".send-message button");
  var chatContainer = document.querySelector(".chat-message-container");
  function message() {
    // Get the value of the input field
    var messageText = inputField.value;

    // Check if the input field is not empty
    if (messageText.trim() !== "") {
      // Create a new list item
      var newMessage = document.createElement("li");
      newMessage.className = "message-sent";

      // Create a new paragraph element and add the message text
      var newParagraph = document.createElement("p");
      newParagraph.textContent = messageText;

      // Append the paragraph to the list item
      newMessage.appendChild(newParagraph);

      let response = document.createElement("li");
      response.className = "message-recieved";
      let responseText = document.createElement("p");
      if (messageText.includes("hello")) {
        responseText.textContent = "Hello! How are you?";
      } else if (messageText === "clear") {
        chatContainer.innerHTML = "";
      } else if (messageText == "exit") {
        switch_chatbot();
      } else {
        responseText.textContent = "sorry i dont understand your!?";
      }
      if (messageText !== "clear" && messageText !== "exit") {
        // Append the new list item to the existing list
        document
          .querySelector(".chat-message-container")
          .appendChild(newMessage);
        // Clear the input field after sending the message
        response.appendChild(responseText);
        document.querySelector(".chat-message-container").appendChild(response);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
      inputField.value = "";
    }
  }
  // Add a click event listener to the button
  sendButton.addEventListener("click", message);
  var inputField = document.getElementById("message-input");
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      message();
    }
  });
});
