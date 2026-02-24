// Wait for the page to load
document.getElementById('loveBtn').addEventListener('click', function() {
    const messageDiv = document.getElementById('loveMessage');
    
    // Change the text when clicked
    messageDiv.innerHTML = "I love you so much! ❤️";
    
    // Optional: Add a little alert pop-up
    alert("Heather, you are so perfect and im so lucky to be able to call you my gf, me and you forever!❤️💍");
    
    // Change button text after click
    this.innerText = "Sent! ✨";
    this.style.backgroundColor = "#d63384";
});



