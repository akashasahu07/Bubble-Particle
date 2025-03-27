setInterval(createBubble, 200); // Creates a bubble every 200ms

// Function to create bubbles
function createBubble(x = Math.random() * innerWidth, y = innerHeight) {
    const container = document.querySelector('.container');
    const bubble = document.createElement('span');

    let size = Math.random() * 50 + 20; // Bubble size between 20px to 70px

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Set bubble position
    bubble.style.left = `${x}px`;
    bubble.style.bottom = `${innerHeight - y}px`; // Reverse y-coordinates for correct placement

    // Random animation duration for a natural effect
    let animationDuration = Math.random() * 3 + 2; // Between 2s and 5s
    bubble.style.animationDuration = `${animationDuration}s`;

    // Random colors for different bubbles
    let colors = ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a18cd1", "#ffdde1"];
    bubble.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, white)`;

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, animationDuration * 1000);
}

// Create bubbles on mouse click
document.addEventListener("click", (event) => {
    createBubble(event.clientX, event.clientY);
});
