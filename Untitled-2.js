// Get elements from the DOM
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Add event listener to the button
button.addEventListener("click", function() {
    // Show the message
    message.style.display = "block";

    // Change button color by adding the 'changed' class
    button.classList.add("changed");

    // Optionally, change the button text
    button.textContent = "Clicked!";
});
