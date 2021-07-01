const PENDDING='pending'
const FULLFILLED='fullfilled'
const REJECTED='rejected'

class MyPromise{
  status=PENDING
  value=null
  reason=null
  constructor(executor){
    executor(this.resolve,this.reject)
  }

  resolve(value){
    if(this.status===PENDDING){
      this.value=value
      this.status=FULLFILLED
    }
  }

  reject(reason){
    if(this.status===PENDDING){
      this.reason=reason
      this.status=REJECTED
    }
  }
  then(onFullfilled,onRejected){
    if(this.status===FULLFILLED){
      onFullfilled(this.value)
    } else if(this.status===REJECTED){
      onRejected(this.reason)
    }

  }
}

