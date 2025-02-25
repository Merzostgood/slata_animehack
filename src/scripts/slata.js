var checkbox = document.getElementById('chb');
chrome.storage.sync.get(['Enabled'], function(items){
  checkbox.checked = items['Enabled']
})

function execute() {
  chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['src/scripts/main.js']
    })
  })
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    chrome.storage.sync.set({"Enabled": true})
    execute()
  } else {
    chrome.storage.sync.set({"Enabled": false})
    execute()
  }
})