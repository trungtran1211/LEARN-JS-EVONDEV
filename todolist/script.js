window.addEventListener('load', function () {
    const form = document.querySelector('.todo-form');
    form.addEventListener('submit', (e) => {
        const inputVal = document.querySelector('[name="todo"]').value;
        
        
        if (inputVal !== '') {
            // Lấy dữ liệu từ localStorage
            const storedData = localStorage.getItem('todoNew');
            var dataArray = [];
            
            // Kiểm tra xem dữ liệu đã tồn tại hay chưa
            if (storedData) {
              // Chuyển đổi dữ liệu từ chuỗi JSON thành mảng
              dataArray = JSON.parse(storedData);
            }
        }else {
            console.log("rỗng");
        }

        dataArray.push(inputVal);
        localStorage.setItem('todoNew', JSON.stringify(dataArray));
        document.querySelector('[name="todo"]').value = "";
    });
    const getArr = JSON.parse(localStorage.getItem("todoNew"));
    if (getArr) {
        const iterators = getArr.values();
        for (const value of iterators) {
            const template = `
                <div class="todo-item">
                    <span class="todo-text">${value}</span>
                    <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
                </div>`
            document.querySelector('.todo-list').insertAdjacentHTML('beforeend', template);
        }
    }

    const todoRemove = document.querySelectorAll('.todo-remove');
    [...todoRemove].forEach((item, index) => {
        item.addEventListener('click', () => {
            if(getArr.findIndex(item2 => item2 === index)) {
                getArr.splice(index, 1);
                localStorage.setItem('todoNew', JSON.stringify(getArr));
                location.reload();
            };
        });
    });
});