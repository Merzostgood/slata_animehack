chrome.storage.sync.get(["Enabled"], function(items){
    var cards = document.querySelectorAll('.card__back')

    for (var i = 0; i < cards.length; i++) {
        if (items["Enabled"]) cards[i].style.backfaceVisibility = 'visible'
        else cards[i].style.backfaceVisibility = 'hidden'
    }
})

var buttons = document.getElementsByClassName("card")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        for (let j=0; j<=1; j++) {
            var item = buttons[i].children[0].children[j]
            if (item.className === "card__back") item.style.backgroundColor = "#d6f078"
        }
    })
}
