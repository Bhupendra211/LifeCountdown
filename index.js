const dob = "02-11-2000";
const lifespan = 67.74;

function calculateRemainingTime(birthdate, lifespan) {
    const now = new Date();
    const birthDate = new Date(birthdate);
    const totalLifespanInSeconds = lifespan * 365.25 * 24 * 60 * 60; // Includes leap years
    const ageInSeconds = (now - birthDate) / 1000;
    const remainingTime = totalLifespanInSeconds - ageInSeconds;

    let years = document.getElementById('years');
    let months = document.getElementById('months');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('second');

    years.innerHTML = Math.floor(remainingTime / (365.25 * 24 * 60 * 60));
    months.innerHTML = Math.floor((remainingTime % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
    days.innerHTML = Math.floor((remainingTime % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
    hours.innerHTML = Math.floor((remainingTime % (24 * 60 * 60)) / 3600);
    minutes.innerHTML = Math.floor((remainingTime % 3600) / 60);
    seconds.innerHTML = Math.floor(remainingTime % 60)
}


setInterval(() => calculateRemainingTime(dob, lifespan), 1000);