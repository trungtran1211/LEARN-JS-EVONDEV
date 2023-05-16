window.addEventListener('load', function () {
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        const password = document.querySelector(`input[name="password"]`);
        const passwordType = password.getAttribute('type');
        if (passwordType === 'password') {
            password.setAttribute('type', "text");
        }else {
            password.setAttribute('type', "password");
        }
    });
});