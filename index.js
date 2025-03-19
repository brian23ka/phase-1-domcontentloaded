// Your code goes here
// Wait for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Get the paragraph element with id="text"
    const paragraph = document.getElementById("text");
  
    // Change the text content of the paragraph
    paragraph.textContent = "This is really cool!";
  });
  
  // This log will appear immediately when index.js is loaded, before DOMContentLoaded fires
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  