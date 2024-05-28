{
  const time = document.getElementById('time')
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  const reset = document.getElementById('reset')

  start?.addEventListener('click',()=>{
    const startTime = new Date().getTime()
    console.log(new Date().getTime())
    
    const intervalId = setInterval(()=>{
      const elapsed:string[] = (new Date().getTime() - startTime).toString().split("")
      

    },1000)
    // clearInterval(intervalId)
  })
}