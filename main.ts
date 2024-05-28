{
  const time = document.getElementById('time')
  const start = document.getElementById('start')
  if(start === null || !("disabled" in start))
    throw new Error()
  const stop = document.getElementById('stop')
  if(stop === null || !("disabled" in stop))
    throw new Error()
  const reset = document.getElementById('reset')
  if(reset === null || !("disabled" in reset))
    throw new Error()

  let intervalId:NodeJS.Timeout
  let elapsedTime = 0
  let startTime = 0
  
  //属性の付与
  stop.disabled = true
  reset.disabled = true

  start?.addEventListener('click',()=>{
    startTime = Date.now()
    intervalId = setInterval(()=>{
      const elapsed:Date = new Date(Date.now() - startTime + elapsedTime)
      // console.log(elapsed)
      
      const minute:string = elapsed.getMinutes().toString().padStart(2,"0")
      const second:string = elapsed.getSeconds().toString().padStart(2,"0")
      const millisecond:string = elapsed.getMilliseconds().toString().padStart(3,"0")
      
      if(time)
        time.innerHTML = `${minute}:${second}.${millisecond}`
    },7)

    start.disabled = true
    stop.disabled = false
    reset.disabled = true
  })

  stop?.addEventListener('click',()=>{
    clearInterval(intervalId)
    elapsedTime += Date.now() - startTime

    start.disabled = false
    stop.disabled = true
    reset.disabled = false
  })

  reset.addEventListener('click',()=>{
    elapsedTime = 0
    if(time)
    time.innerHTML = "00:00.000"
  })
}