// Get a reference to the modal element
var modal = document.getElementById("exampleModal");

// Get a reference to the button that opens the modal
var btn = document.querySelector(".btn.btn-primary");

// Add a click event listener to the button
btn.addEventListener("click", function () {
  // Show the modal by adding the 'show' class to it
  modal.classList.add("show");
  // Remove the 'hidden' attribute from the modal
  modal.removeAttribute("aria-hidden");
  // Remove the 'modal-hidden' class from the modal backdrop
  document.querySelector(".modal-backdrop").classList.remove("modal-hidden");
});

// Function to close the modal
function closeModal() {
  // Hide the modal by removing the 'show' class
  modal.classList.remove("show");
  // Add the 'hidden' attribute to the modal
  modal.setAttribute("aria-hidden", "true");
  // Add the 'modal-hidden' class to the modal backdrop
  document.querySelector(".modal-backdrop").classList.add("modal-hidden");
}

// Get a reference to the close button within the modal
var closeButton = document.querySelector(".btn-close");

// Add a click event listener to the close button
closeButton.addEventListener("click", function () {
  // Close the modal
  closeModal();
});

// Get a reference to the modal footer
var modalFooter = document.querySelector(".modal-footer");

// Add a click event listener to the "Close" button in the modal footer
modalFooter
  .querySelector(".btn-secondary")
  .addEventListener("click", function () {
    // Close the modal
    closeModal();
  });
