const init = () => {
    // disable right click
    document.addEventListener('contextmenu', event => {
        event.preventDefault();
    });

    // starts the progress bar and stops at 99%
    let progress = 0;
    const progressText = document.querySelector('.progress');

    setInterval(() => {
        progress += Math.random() * 25;
        let progressValue = Math.floor(progress);
        progressValue = progressValue >= 99 ? 99 : progressValue;
        progressText.innerText = `${progressValue}% complete`;
        if (progressValue === 100) {
            clearInterval();
        }
    }, 2000);
}

init();