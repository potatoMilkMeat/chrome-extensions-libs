function log(...arg){
  console.log.apply(null, arg)
}

document.addEventListener('DOMContentLoaded',()=>{
  log('我被执行了！')
})
