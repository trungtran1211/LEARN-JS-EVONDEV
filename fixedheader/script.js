function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

window.addEventListener('scroll', debounceFn(function() {
    // fixed header
    const header = document.querySelector('.header');
    const headerHeight = header && header.offsetHeight;
    const pageHeight = window.pageYOffset;
    if (pageHeight >= headerHeight) {
        header && header.classList.add('active-menu');
        document.body.style.paddingTop = `${headerHeight}px`;
    }else {
        header && header.classList.remove('active-menu');
        document.body.style.paddingTop = 0;
    }
    
   
},50));
window.addEventListener('scroll', function() {
    // process bar
    const process = document.querySelector('.process');
    const scrollTop = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const width = (scrollTop / height) * 100;
    process.style.width = `${width}%`;
});