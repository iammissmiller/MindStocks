// reset.js

function resetProgress() {
  // Clear localStorage (all progress)
  localStorage.clear();

  // If you use sessionStorage too
  sessionStorage.clear();

  alert("Your progress has been reset!");
  // Redirect back to home (optional)
  window.location.href = "index.html";
}
