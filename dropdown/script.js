const select = document.querySelector(".dropdown__select");
const dropDownList = document.querySelector(".dropdown__list");
const dropDownItem = document.querySelectorAll(".dropdown__item");
const dropDown = document.querySelector(".dropdown");
const dropDownCaret = document.querySelector(".dropdown__caret");

select.addEventListener("click", (e) => {
    dropDownList.classList.toggle('show');
    dropDownCaret.classList.toggle('fa-caret-up');
    const dropDownSelect = document.querySelector(".dropdown__selected");
    [...dropDownItem].forEach((item) => {
        item.addEventListener("click", (e) => {
            const text = e.target.querySelector(".dropdown__text").textContent;
            dropDownSelect.textContent = text;
            dropDownList.classList.remove('show');
            dropDownCaret.classList.remove('fa-caret-up');
        });
    });
});
document.addEventListener("click", (e) => {
    if (!dropDown.contains(e.target)) {
        dropDownList.classList.remove('show');
        dropDownCaret.classList.remove('fa-caret-up');
    }
});