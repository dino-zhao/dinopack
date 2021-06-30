function throttle(fn, time) {
    let timer = null
    let isFirst = true
    return function (...args) {
        if(isFirst){
            fn.apply(this,args)
            isFirst=false
        }
      if(timer===null){
        timer= setTimeout(()=>{
            timer=null
            fn.apply(this,args)
        },time)
      }
    }
  }
  
  const trigger = throttle((number) => {
    console.log(number)
    console.timeLog()
  }, 2000)
  setInterval(() => {
    trigger(1)
  }, 1000)
  console.time()
  