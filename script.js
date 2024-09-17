function handleClick(event) {
    const button = event.target;
    button.style.backgroundColor = getRandomColor();
}

function handleMouseOver(event) {
    const buttonId = event.target.id;
    const messageId = "message" + buttonId.charAt(buttonId.length - 1);
    document.getElementById(messageId).style.display = "block";
}

function handleMouseOut(event) {
    const buttonId = event.target.id;
    const messageId = "message" + buttonId.charAt(buttonId.length - 1);
    document.getElementById(messageId).style.display = "none";
}

function handleDblClick(event) {
    const button = event.target;
    button.style.display = "none";
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("button1").addEventListener("click", handleClick);
document.getElementById("button1").addEventListener("mouseover", handleMouseOver);
document.getElementById("button1").addEventListener("mouseout", handleMouseOut);
document.getElementById("button1").addEventListener("dblclick", handleDblClick);

document.getElementById("button2").addEventListener("click", handleClick);
document.getElementById("button2").addEventListener("mouseover", handleMouseOver);
document.getElementById("button2").addEventListener("mouseout", handleMouseOut);
document.getElementById("button2").addEventListener("dblclick", handleDblClick);

document.getElementById("button3").addEventListener("click", handleClick);
document.getElementById("button3").addEventListener("mouseover", handleMouseOver);
document.getElementById("button3").addEventListener("mouseout", handleMouseOut);
document.getElementById("button3").addEventListener("dblclick", handleDblClick);
