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
