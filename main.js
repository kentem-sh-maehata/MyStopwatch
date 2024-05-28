"use strict";
{
    const time = document.getElementById('time');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    let intervalId;
    let elapsedTime = 0;
    let startTime = 0;
    console.log(new Date(Date.now() - Date.now() + 0));
    start === null || start === void 0 ? void 0 : start.addEventListener('click', () => {
        startTime = Date.now();
        intervalId = setInterval(() => {
            const elapsed = new Date(Date.now() - startTime + elapsedTime);
            // console.log(elapsed)
            const minute = elapsed.getMinutes().toString().padStart(2, "0");
            const second = elapsed.getSeconds().toString().padStart(2, "0");
            const millisecond = elapsed.getMilliseconds().toString().padStart(3, "0");
            if (time)
                time.innerHTML = `${minute}:${second}.${millisecond}`;
        }, 7);
    });
    stop === null || stop === void 0 ? void 0 : stop.addEventListener('click', () => {
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime;
    });
}
