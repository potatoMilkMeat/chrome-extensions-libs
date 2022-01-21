console.log('这是后台常驻脚本- background.js')

let color = '#3aa757'

// 获取当前选项卡ID
function getCurrentTabId(callback){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}
getCurrentTabId(function (tabId){ console.log("getCurrentTabId", tabId) })

chrome.runtime.onInstalled.addListener(()=>{
  // chrome.storage.sync.set({color})
  console.log('Default background color set to %cgreen', `color: ${color}`);
})