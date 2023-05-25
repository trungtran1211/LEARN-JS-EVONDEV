
const joke = document.querySelector('.joke');
const jokeHeading = document.querySelector('.joke-heading');
const jokeButton = document.querySelector('.joke-button');

const api = "https://icanhazdadjoke.com/";

async function getJoke() {
    const reponse = await fetch(api, {
        headers: {
            accept: 'application/json'
        },
    });
    const data = await reponse.json();
    return data;
}
jokeButton.addEventListener('click', async () => {
    joke.classList.add('is-loading');
    const data = await getJoke();
    jokeHeading.textContent = data.joke;
    joke.classList.remove('is-loading');
});