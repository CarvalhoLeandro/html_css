const botaoEl = document.querySelector(".botao");

botaoEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - botaoEl.offsetLeft);
    const y = (event.pageY - botaoEl.offsetTop);

    botaoEl.style.setProperty("--xPos" , x + "px");
    botaoEl.style.setProperty("--yPos" , y + "px");
})