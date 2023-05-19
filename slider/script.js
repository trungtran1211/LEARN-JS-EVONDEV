window.addEventListener('load', function(){
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");

    let positionX = 0;
    let index = 0;
    const sliderLength = sliderItems.length;
    const sliderItemWidth = sliderItems[1].offsetWidth;
    nextBtn.addEventListener("click", function() {
        [...dotItems].forEach((item) => {item.classList.remove("active")});
        item.classList.add("active");
        handleChangeSlider(1);
    });

    prevBtn.addEventListener("click", function() {
        handleChangeSlider(-1);
    });

    [...dotItems].forEach((item) => {
        item.addEventListener("click", (e) => {
            [...dotItems].forEach((el) => {el.classList.remove("active")});
            item.classList.add("active");
            const sliderIndex = parseInt(e.target.dataset.index);
            index = sliderIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style.transform = `translateX(${positionX}px)`;
        });
    });

    handleChangeSlider = (direction) => {
        if (direction === 1){
            if (index < parseInt(sliderLength - 1)) {
                index++;
            }else {
                return;
            }
            positionX = positionX - sliderItemWidth; 
            sliderMain.style.transform = `translateX(${positionX}px)`;
        }else if (direction === -1) {
            if (index > 0) {
                index--;
            }else {
                return;
            }
            positionX = positionX + sliderItemWidth; 
            sliderMain.style.transform = `translateX(${positionX}px)`;
        }
    };

});