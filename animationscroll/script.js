
window.addEventListener('load', function() {    
    const images = document.querySelectorAll('.container img');
    window.addEventListener('scroll', () => {
        const scrollWindowTop = window.pageYOffset;
        [...images].forEach((item) => {
            const offsetHeight = item.offsetHeight;
            const offsetTopImages = item.offsetTop - offsetHeight;
            if(scrollWindowTop > offsetTopImages) {
                item.classList.add('active');
            }else {
                item.classList.remove('active');
            }
        });
    });
});
