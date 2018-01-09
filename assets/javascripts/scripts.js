// wedding countdown timer

const weddingDay = '2018-06-09';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes
    };
}

function initializeClock(element, endtime) {
    let clock = document.querySelector(element);
    let days = clock.querySelector('.js-countdown__days');
    let hours = clock.querySelector('.js-countdown__hours');
    let minutes = clock.querySelector('.js-countdown__minutes');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();

    let timeInterval = setInterval(updateClock, 1000);
}

initializeClock('.js-countdown', weddingDay);
