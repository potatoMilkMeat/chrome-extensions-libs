console.log('这是后台常驻脚本- background.js')

let color = '#3aa757'

chrome.runtime.onInstalled.addListener(()=>{
  // chrome.storage.sync.set({color})
  console.log('Default background color set to %cgreen', `color: ${color}`);
})

chrome.contextMenus.create({
  title: "使用度娘搜索：%s",
  contexts: ['selection'],
  onclick: function(info){
    console.log('info', info)
    chrome.tabs.create({
      url: 'https://www.baidu.com/s?ie=utf-8&wd='+ encodeURI(info.selectionText)
    })
  }
})