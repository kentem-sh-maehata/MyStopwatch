"use strict";
{
    const time = document.getElementById('time');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    let intervalId;
    let elapsed;
    start === null || start === void 0 ? void 0 : start.addEventListener('click', () => {
        const startTime = new Date().getTime();
        console.log(new Date().getTime());
        intervalId = setInterval(() => {
            elapsed = new Date(new Date().getTime() - startTime);
            const minute = elapsed.getMinutes().toString();
            const second = elapsed.getSeconds().toString();
            const millisecond = elapsed.getMilliseconds().toString();
            if (time)
                time.innerHTML = `${minute.padStart(2, "0")}:${second.padStart(2, "0")}.${millisecond.padStart(3, "0")}`;
        }, 5);
    });
    stop === null || stop === void 0 ? void 0 : stop.addEventListener('click', () => {
        clearInterval(intervalId);
    });
}
