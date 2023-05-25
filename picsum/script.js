const images = document.querySelector('.images');
const imageLoader = document.querySelector('.image-loader');
const loadMore = document.querySelector('.load-more');

let limit = 8;
let page = 1;
const api = `https://picsum.photos/v2/list?limit=${limit}`
/* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
function imagesList(url) {
    const templates = `<div class="image-item">
    <img src="${url}" alt="" />
    </div>`
    images.insertAdjacentHTML('beforeend', templates);
}
async function picsum (page = 1) {
    imageLoader.style.display = 'block';
    const reponse = await fetch(`${api}&page=${page}`);
    imagesArr = await reponse.json();
    if(imagesArr.length > 0 && Array.isArray(imagesArr))  {
        imageLoader.style.display = 'none';
        imagesArr.map((item) => {
            imagesList(item.download_url)
        })
    }
}
loadMore.addEventListener('click', async () => {
    page++;
    console.log(page)
    picsum(page);
});
picsum();