window.addEventListener("load", function() {
    const daysText = document.querySelector('.days');
    const hoursText = document.querySelector('.hours');
    const minutesText = document.querySelector('.minutes');
    const secondsText = document.querySelector('.seconds');
    //Thu May 30 2023 11:41:09 GMT+0700 (Indochina Time)
    countdown = (date) => {
        const dateEnd = new Date(date).getTime();
        if(isNaN(dateEnd)) return;
        setInterval(function () {
            calculate();
        },1000)
        calculate = () => {
            let days, hours, minutes, seconds;
            const now = new Date();
            const dateStart = now.getTime();
            let timeRemaining = parseInt((dateEnd - dateStart) / 1000);
            if (timeRemaining > 0) {
                days = parseInt(timeRemaining / 86400);
                daysText.textContent =  `0${days}`.slice(-2);;
                timeRemaining= timeRemaining % 86400;
                hours = parseInt(timeRemaining / 3600);
                hoursText.textContent =  `0${hours}`.slice(-2);
                timeRemaining= timeRemaining % 3600;
                minutes = parseInt(timeRemaining / 60);
                minutesText.textContent = `0${minutes}`.slice(-2);
                seconds = timeRemaining % 60;
                secondsText.textContent = `0${seconds}`.slice(-2);
            }else {
                secondsText.textContent = 0;
            }
        }
    }
    countdown("Thu May 31 2023 14:27:20 GMT+0700 (Indochina Time)");
});