
window.addEventListener("load", function() {
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter", (e) => {
        const tootlText = e.target.dataset.tooltip;
        const tooltipDiv = document.createElement("div");
        tooltipDiv.className = "tooltip-text"
        tooltipDiv.textContent =  tootlText;
        document.body.appendChild(tooltipDiv);
        const cords = e.target.getBoundingClientRect();
        console.log(cords)
        const {left, top, width, height} = cords;
        tooltipDiv.style.left = `${left - width / 2}px`;
        tooltipDiv.style.top = `${top - height - 30}px`;
    });
    text.addEventListener("mouseleave", (e) => {
        const tooltip = document.querySelector(".tooltip-text")
        if (!tooltip) return;
        tooltip.parentNode.removeChild(tooltip);
    });
})
