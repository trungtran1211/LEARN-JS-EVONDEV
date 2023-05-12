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
    document.body.insertAdjacentHTML('beforebegin',teamplate);
    });
})