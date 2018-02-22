// wedding countdown timer

const weddingDay = '2018-06-09';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
    };
}

function initializeClock(element, endtime) {
    let clock = document.querySelector(element);
    let daysRemaining = clock.querySelector('.js-countdown__days');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        if (t.total > 1) {
            daysRemaining.innerHTML = `${t.days} days`;
        } else if (t.total === 1) {
            daysRemaining.innerHTML = `${t.days} day`;
        }

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();

    let timeInterval = setInterval(updateClock, 1000);
}

initializeClock('.js-countdown', weddingDay);
