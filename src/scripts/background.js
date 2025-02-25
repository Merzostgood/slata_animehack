const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function execute(file) {
    try {
        await sleepNow(100)
        chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['src/scripts/' + file + '.js']
            })
        })
    } catch (error){}
}

chrome.webRequest.onCompleted.addListener(
    function(details) {
        let url = details.url
        if (url.includes("game.slata.com/api/game/start") || url.includes("game.slata.com/api/game/buy")) {

            (async () => {
                await sleepNow(500)
                execute('main')
            })()
        }
        else if (url.includes('game.slata.com/api/game/end')) {
            (async () => {
                await sleepNow(500)
                execute('end')
            })()
        }
    },
    { urls: ['https://*.slata.com/*'] }
)