// Function to display current date in the footer
function displayDate() {
    var today = new Date();
    var dateString = today.toDateString();
    var dateElement = document.getElementById("date-display");
    if (dateElement) {
        dateElement.innerHTML = "Current Date: " + dateString;
    }
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', displayDate);
