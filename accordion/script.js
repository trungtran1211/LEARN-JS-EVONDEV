const accordionHeader = document.querySelectorAll('.accordion-header');

[...accordionHeader].forEach((item) => {
    item.addEventListener('click', (e) => {
        const content = e.target.nextElementSibling;
        // lấy chiều cao của phần tử
        content.style.height = `${content.scrollHeight}px`;
        content.classList.toggle("active");
        // kiểm tra có class active không
        if (!content.classList.contains('active')){
            content.style.height = '0';
        }
        // Lấy icon
        const icon = e.target.querySelector('.icon');
        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-angle-up");
    })
})