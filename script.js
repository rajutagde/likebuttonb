const likeBtn = document.getElementById("like-btn");
const countDiv = document.getElementById("count-div");

// Set an initial count value
let count = localStorage.getItem("count") || 0;

// Update the text of the count div with the initial count value
countDiv.textContent = count;

// Add a click event listener to the button
likeBtn.addEventListener("click", function() {
  // Check if the button has the "clicked" class
  if (likeBtn.classList.contains("clicked")) {
    // If it has, remove the class and decrease the count
    likeBtn.classList.remove("clicked");
    count--;
  } else {
    // If it doesn't have, add the class and increase the count
    likeBtn.classList.add("clicked");
    count++;
  }

  // Save the count to localStorage
  localStorage.setItem("count", count);

  // Update the text of the count div
  countDiv.textContent = count;
});
