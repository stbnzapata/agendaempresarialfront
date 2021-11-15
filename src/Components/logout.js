import { app } from '../fb';

export default function logout() {

    let warningTimeout = 5000;
    let warningTimerID =0;
    let counterDisplay = document.getElementById('numCount');
    logoutUrl = "http://localhost:3000";

    const cerrarSesion = () => {
        app.auth().signOut();
    }

    function startTimer() {
        warningTimerID = window.setTimeout(idleLogout, warningTimeout);
        animate(counterDisplay, 5, 0, warningTimeout);
    }

    function resetTimer() {
        window.clearTimeout(warningTimerID);
        startTimer();
        startCountdown();
    }

    function idleLogout() {
        window.location = logoutUrl;
        cerrarSesion();
    }

    function startCountdown() {
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("mousedown", resetTimer);
        document.addEventListener("keypress", resetTimer);
        document.addEventListener("touchmove", resetTimer);
        document.addEventListener("onscroll", resetTimer);
        document.addEventListener("wheel", resetTimer);
        startTimer();
    }

    function animate(obj, initVal, lastVal, duration) {

        let startTime = null;

        let currentTime = Date.now();

        const step = (currentTime) => {

            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min((currentTime - startTime) / duration, 1);

            displayValue = Math.floor(progress * (lastVal - initVal) + initVal);
            obj.innerHTML = displayValue;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                window.cancelAnimationFrame(window.requestAnimationFrame(step));
            }
        };

        window.requestAnimationFrame(step);
    }
}