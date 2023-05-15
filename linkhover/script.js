window.addEventListener("load", function() {
    const menu = [...document.querySelectorAll(".menu-link")];
    menu.forEach((item) => item.addEventListener("mouseenter", (e) => {
        const linkhoverDiv = document.createElement("div");
        linkhoverDiv.className = "line-effect";
        document.body.appendChild(linkhoverDiv);
        const cords = e.target.getBoundingClientRect();
        console.log(cords)
        const {left, top, height, width} = cords;
        const heightItemMenu = 5;
        linkhoverDiv.style.left = `${left}px`;
        linkhoverDiv.style.width = `${width}px`;
        linkhoverDiv.style.top = `${top + height + heightItemMenu}px`;
    }));
    menu.forEach((item) => item.addEventListener("mouseleave", (e) => {
        const lineEffect = document.querySelector(".line-effect");
        console.log(lineEffect);
        if (!lineEffect) return;
        lineEffect.parentNode.removeChild(lineEffect);
    }));
});