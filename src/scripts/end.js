var buttons = document.getElementsByClassName("card")
for (let i = 0; i < 16; i++) {
    for (let j=0; j<=1; j++) {
        var item = buttons[i].children[0].children[j];
        if (item.className == "card__back") item.style.backgroundColor = "#fff"
    }
}