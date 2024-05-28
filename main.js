"use strict";
{
    const time = document.getElementById('time');
    const start = document.getElementById('start');
    if (start === null || !("disabled" in start))
        throw new Error();
    const stop = document.getElementById('stop');
    if (stop === null || !("disabled" in stop))
        throw new Error();
    const reset = document.getElementById('reset');
    if (reset === null || !("disabled" in reset))
        throw new Error();
    let intervalId;
    let elapsedTime = 0;
    let startTime = 0;
    //属性の付与
    stop.disabled = true;
    reset.disabled = true;
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
        start.disabled = true;
        stop.disabled = false;
        reset.disabled = true;
    });
    stop === null || stop === void 0 ? void 0 : stop.addEventListener('click', () => {
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime;
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = false;
    });
    reset.addEventListener('click', () => {
        elapsedTime = 0;
        if (time)
            time.innerHTML = "00:00.000";
    });
}
