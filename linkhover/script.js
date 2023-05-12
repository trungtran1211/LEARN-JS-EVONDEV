const button = document.querySelector('.button');

const teamplate = `
<div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
    <span class="modal-close">
        <i class="fa-duotone fa-circle-xmark"></i>
    </span>
    <div class="modal-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        maiores eligendi deleniti ipsa quae nam sunt quasi nisi, dignissimos
        eaque aliquam minus. Eius perferendis, voluptates totam iure minus
        consequuntur est?
    </div>
    </div>
</div>
`

button.addEventListener('click', () => {
    document.body.insertAdjacentHTML("beforeend", teamplate);
});

document.body.addEventListener('click', (e) => {
    const xmark = e.target.matches(".fa-circle-xmark");
    if (xmark) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    }else if (e.target.parentNode.matches('.modal')) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
});