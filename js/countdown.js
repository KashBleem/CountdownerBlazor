function startCountdown(dotNetHelper, targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference <= 0) {
            dotNetHelper.invokeMethodAsync('UpdateTimeLeft', '');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const timeLeft = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        dotNetHelper.invokeMethodAsync('UpdateTimeLeft', timeLeft);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}