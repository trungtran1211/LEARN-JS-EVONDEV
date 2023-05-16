window.addEventListener('load', function () {
    const tabItem = document.querySelectorAll('.tab-item');
    const tabList = document.querySelector('.tab-list');
    const tab = document.querySelector('.tab');
    const tabPrev = document.querySelector('.tab-prev');
    const tabNext = document.querySelector('.tab-next');
    const deltaScroll = 40;
    const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
    console.log(tabScrollWidth);
    const tabOffsetLeft = tab.offsetLeft;
    [...tabItem].forEach((item) => {
        item.addEventListener('click', (e) => {
            [...tabItem].forEach((item) => item.classList.remove('active'));
            e.target.classList.add('active');
            let leftSpacing = e.target.offsetLeft;
            console.log(leftSpacing);
            if (e.target.offsetLeft > tabOffsetLeft) { 
                e.target.offsetLeft - tabOffsetLeft
            }
            tabList.scroll(leftSpacing / 2, 0);
            if (tabList.scrollLeft >= tabScrollWidth) {
                tabNext.classList.add('disabled');
            }
            if (tabList.scrollLeft > 0) {
                tabPrev.classList.remove('disabled');
            }
            if (tabList.scrollLeft < tabScrollWidth) {
                tabNext.classList.remove('disabled');
            }
            if (tabList.scrollLeft <= 0 ) {
                tabPrev.classList.add('disabled');
            }
        });
        tabList.addEventListener('wheel', (e) => {
            const delta = e.deltaY;
            tabList.scrollLeft += delta;
            if (tabList.scrollLeft >= tabScrollWidth) {
                tabNext.classList.add('disabled');
            }
            if (tabList.scrollLeft > 0) {
                tabPrev.classList.remove('disabled');
            }
            if (tabList.scrollLeft < tabScrollWidth) {
                tabNext.classList.remove('disabled');
            }
            if (tabList.scrollLeft <= 0 ) {
                tabPrev.classList.add('disabled');
            }
        },{passive: true});
        tabNext.addEventListener('click', () => {
            tabList.scrollLeft += deltaScroll;
            if (tabList.scrollLeft > 0) {
                tabPrev.classList.remove('disabled');
            }
            if (tabList.scrollLeft >= tabScrollWidth ) {
                tabNext.classList.add('disabled');
                
            }
        })
        tabPrev.addEventListener('click', () => {
            tabList.scrollLeft -= deltaScroll;
            if (tabList.scrollLeft < tabScrollWidth) {
                tabNext.classList.remove('disabled');
            }
            if (tabList.scrollLeft <= 0 ) {
                tabPrev.classList.add('disabled');
            }
        })
    })
});