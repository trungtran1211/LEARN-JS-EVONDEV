const listTab = document.querySelectorAll('.tab-item');
const listContent = document.querySelectorAll('.tab-content');
[...listTab].forEach((item) => {
    item.addEventListener('click', (e) =>{
        [...listTab].forEach((item) => item.classList.remove('active'));
        item.classList.add('active');
        const tabNumber = parseInt(e.target.dataset.tab);
        [...listContent].forEach((item) => {
            const getDataTab = parseInt(item.getAttribute("data-tab"));
            if (getDataTab === tabNumber) {
                [...listContent].forEach((item) => item.classList.remove('active'));
                item.classList.add('active');
            }
        });
    })
});