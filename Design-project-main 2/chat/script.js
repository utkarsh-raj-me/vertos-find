document.addEventListener("DOMContentLoaded", function() {
    const messagesDiv = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-btn");
    const shareLocationButton = document.getElementById("share-location-btn");

    const socket = io();

    // Function to add a message to the chat
    function addMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
    }

    // Event listener for send button click
    sendButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            addMessage("You: " + message);
            socket.emit("message", message); // Send message to server
            messageInput.value = "";
        }
    });

    // Event listener for share location button click
    shareLocationButton.addEventListener("click", function() {
        // Implement geolocation functionality
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
                addMessage(`You shared your location: ${locationUrl}`);
                socket.emit("location", { latitude, longitude }); // Send location to server
            }, () => {
                alert("Geolocation is not supported by your browser.");
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    });

    // Listen for incoming messages from the server
    socket.on("message", message => {
        addMessage("Other: " + message);
    });
});
