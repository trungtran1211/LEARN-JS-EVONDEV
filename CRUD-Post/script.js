fetchApi = async ({image, title, author, rating, price, bestSeller, buyAmount}) => {
    const imageLoader = document.querySelector('.image-loader');
    imageLoader.style.display = 'block';
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify({
            image,
            title,
            author,
            rating,
            price,
            bestSeller,
            buyAmount
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    imageLoader.style.display = 'none';
}

getApi = async () => {
    const response =  await fetch('http://localhost:3000/posts', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await response.json();
    return data;
};
function ListApi(author,title,id,bestSeller) {
    const template = `<div class="box-tem">
    <p class="text1">${title}</p>
    <p class="text2">${author}</p>
    <p class="text3">${id}</p>
    <p class="text4">${bestSeller}</p>
    <p class="text5"></p>
    <p class="text6"></p>
    <p class="text7"></p>
    <button class="remove-item">xoá</button>
  </div>`;
  const boxList = document.querySelector('.box-list');
  boxList.insertAdjacentHTML("beforeend", template);
}

showApi = async () => {
    const data = await getApi();
    data.map((item)=> {
        ListApi(item.title,item.author,item.id,item.bestSeller);
    })
}
showApi();
// deleteApi = async () => {
//     const test = await fetch('http://localhost:3000/posts', {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
// }


const formPost = document.querySelector('.form-post');
formPost.addEventListener('submit', function (e) {
    e.preventDefault();
    const image = this.elements['image'].value;
    const title = this.elements['title'].value;
    const author = this.elements['author'].value;
    const rating = this.elements['rating'].value;
    const price = this.elements['price'].value;
    const bestSeller = this.elements['bestSeller'].checked;
    const buyAmount = this.elements['buyAmount'].value;
    fetchApi({image, title, author, rating, price, bestSeller, buyAmount});
});

window.addEventListener('load', function() {
    const btnRemove = document.querySelectorAll('.remove-item');
    console.log([...btnRemove]);
    [...btnRemove].forEach((item) => {
        item.addEventListener('click', function () {
            const getId = document.querySelector('.text3').textContent;
            console.log(getId);
            deleteApi(getId);
            
        });
    });
    
    deleteApi = async (res) => {
        await fetch(`http://localhost:3000/posts/${res}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    };
});