function spin() {
    const wheel = document.getElementById("wheel");
    let angle = 0;
    angle = Math.random() * 360; // random initial angle
    let speed = 10; // initial speed in degrees per frame
    const deceleration = 0.02; // how much the speed decreases per frame

    function rotate() {
        angle += speed;
        wheel.style.transform = `rotate(${angle}deg)`;
        speed -= deceleration;
        if (speed > 0) {
            requestAnimationFrame(rotate);
        }
    }

    rotate();
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    // Set random size and position
    const size = Math.random() * 10 + 5 + "px";
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * window.innerWidth + "px";

    // Set random animation duration
    const duration = Math.random() * 5 + 5 + "s";
    snowflake.style.animationDuration = duration;

    // Animate the snowflake
    snowflake.animate(
        [
            { transform: `translateY(${window.innerHeight}px)` }
        ],
        {
            duration: parseFloat(duration) * 1000,
            easing: "linear",
            iterations: 1,
            fill: "forwards"
        }
    );

    // Remove the snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);
}

function startSnowfall() {
    setInterval(createSnowflake, 200);
}

startSnowfall();
