{
  const time = document.getElementById('time')
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  const reset = document.getElementById('reset')

  let intervalId:NodeJS.Timeout
  let elapsedTime = 0
  let startTime = 0
  console.log(new Date(Date.now() - Date.now() + 0))
  
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


  })

  stop?.addEventListener('click',()=>{
    clearInterval(intervalId)
    elapsedTime += Date.now() - startTime
  })
}