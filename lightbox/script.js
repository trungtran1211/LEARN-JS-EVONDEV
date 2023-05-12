const images = document.querySelectorAll('.content img');
images.forEach((item) => {
    item.addEventListener('click', (e) => {
        const img = e.target.getAttribute('src');
        const teamplate = `
        <div class="lightbox">
            <div class="lightbox-content">
            <i class="fa fa-angle-left lightbox-prev"></i>
            <img
                src=${img}
                alt=""
                class="lightbox-image"
            />
            <i class="fa fa-angle-right lightbox-next"></i>
            </div>
        </div>
        `;
    document.body.insertAdjacentHTML('beforeend',teamplate);
    });
})
let index = 0;
document.body.addEventListener('click', (e) => {
const lightbox = e.target;
const lightImage = document.querySelector(".lightbox-image");
let lightSrc = "";
if(e.target.matches('.lightbox')) {
    e.target.parentNode.removeChild(lightbox);
} else if(e.target.matches('.lightbox-prev')){
    lightSrc = lightImage.getAttribute('src');
    index = [...images].findIndex((item) => item.getAttribute('src') === lightSrc ) - 1;
    if (index < 0) {
        index = images.length - 1;
        }
    const newSrc = [...images][index].getAttribute('src');
    console.log(newSrc)
    lightImage.setAttribute('src',newSrc);
    
}else if(e.target.matches('.lightbox-next')){
    
    lightSrc = lightImage.getAttribute('src');
    index = [...images].findIndex((item) => item.getAttribute('src') === lightSrc ) + 1;
    if (index > images.length - 1) {
        index = 0;
    }
    const newSrc = [...images][index].getAttribute('src');
    lightImage.setAttribute('src',newSrc);
};

});