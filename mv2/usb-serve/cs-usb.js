// "run_at": "document_start" 时添加监听事件
// document.addEventListener('DOMContentLoaded',()=>{
//   // 执行监听
// })

// 工具类函数
let log = (...arg) =>{ console.log.apply(null, arg) }
let setAttr = (dom, name, value) => {dom.setAttribute(name, value)}
let getAttr = (dom, name) => dom.getAttribute(name)
// 获取div dom
let getDomById = id => document.getElementById(id)
let domAddEvent = (dom, fn) => dom.addEventListener('click', fn)
let domByIdAddEvent = (id, fn) => domAddEvent(getDomById(id), fn)
let domRemoveEvent = (dom, fn) => dom.removeEventListener('click', fn)
let domByIdRemoveEvent = (id, fn) => domRemoveEvent(getDomById(id), fn)
let domAddEventSafe = (dom, fn) => {
  domRemoveEvent(dom, fn)
  domAddEvent(dom, fn)
}
let domByIdAddEventSafe = (id, fn) => {
  let dom = getDomById(id)
  domAddEventSafe(dom, fn)
}
// 常量声明
let divId = 'usb-div',
    listId = 'usb-list',
    resId = 'usb-info-res',
    inputId = 'usb-info-send-input',
    buttonId = 'usb-info-send-button'
let getDiv = () => getDomById(divId)

// 添加div浮层
function creatDiv() {
  let div = document.createElement('div')
  let opts = { id: divId, class: 'usb-class' }
  Object.keys(opts).forEach(v => { setAttr(div, v, opts[v]) })

  div.innerHTML = `<div id="${listId}"></div>
  <div id="${resId}"></div>
  <div id="usb-info-send">
    <input type="text" id="${inputId}">
    <input type="button" id="${buttonId}" value="发送">
  </div>`

  document.body.appendChild(div)
}
// 添加usblist
function appendList(arr, text, id){
 if (!text) text='text'
 if (!id) id='id'
 let child = getDomById(listId)
 let dom = '<ul>'
 for (let i = 0; i < arr.length; i++) {
   const v = arr[i]
   dom += `<li data-value="${v[id]}">${v[text]}</li>`
 }
 dom += '</ul>'
 child.innerHTML = dom
 domAddEventSafe(child, listOnClick)
}

// 点击事件
function listOnClick(event){
  let dom = event.target
  if (dom.tagName !== 'LI') return
  const data = getAttr(dom, 'data-value')
  log(dom, data)
 
}

creatDiv()
let arr = [{ text: '信息1',  id: '125633' },
  { text: '信息2',  id: '222222' },
  { text: '信息3',  id: '333333' }]
appendList(arr, 'text', 'id')

// hid 设备
// dom.onClick = (event) =>{
//   navigator.hid.requestDevice({filters: []}).then(e=>{
//     console.log('Hid.requestDevice' ,e)
//   })
// }
// navigator.hid.addEventListener('disconnect', (event) => {
//   console.log(`HID disconnected: ${event.device.productName}`);
//   console.dir(event)
// });
// navigator.hid.addEventListener('connect', (event) => {
//   console.log(`HID connect: ${event.device.productName}`);
//   console.dir(event)
// });

// usb
var options = {
  vendorId: 0x8086,  //Apple, Inc.
  productId: 0x0808  //iPhone 4s
  // productName: 'USB PnP Sound Device'
  // interfaceId: null  //only for Chrome OS
};
// 列出指定的USB设备：
// navigator.usb.getDevices(options, function(deviceArray){
//   //do something with deviceArray;
//   console.log('deviceArray', deviceArray)
// });

// 请求访问操作系统占用的设备（仅限Chrome OS）： interfaceId为接口标识符。
// navigator.usb.requestAccess(device, interfaceId, function(sucess){
//   //sucess is boolean
// });

// 打开设备：
// navigator.usb.openDevice(device, function(ConnectionHandle){
//   //do something with handle
// });

// 寻找指定的USB设备（如果权限允许的话同时打开设备以便使用）：
// navigator.usb.findDevices(options, function(ConnectionHandleArray){
//   //do something with ConnectionHandleArray
// });

// 关闭连接句柄：
// navigator.usb.closeDevice(ConnectionHandle, function(){
//   //do something after close a device
// });