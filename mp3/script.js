window.addEventListener('load', function() {
    const song = document.querySelector('#song');
    const playerImage = document.querySelector('.player-image');
    const progressBar = document.querySelector('.progress-bar');
    const duration = document.querySelector('.player-duration');
    const remaining = document.querySelector('.player-remaining');
    const playerPlay = document.querySelector('.player-play');
    const playerPrev = document.querySelector('.player-prev');
    const playerNext = document.querySelector('.player-next');
    const playerRandom = document.querySelector('.player-random');

    songStatus = true;
    const list = ["holo", "home", "spark", "summer"];
    index = 0;
    const durationTime = song.duration;

   // random list music 
    function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // Trong khi vẫn còn phần tử chưa xáo trộn
    while (0 !== currentIndex) {
        // Chọn một phần tử ngẫu nhiên còn lại
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // Swap phần tử hiện tại với phần tử được chọn ngẫu nhiên
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
    }
    // Random mảng gốc
    const listNew = shuffleArray(list); 

    playerRandom.addEventListener('click', () => {
        handleRandomPlay();
    })
    
    handleRandomPlay = () => {
        song.setAttribute('src', `./files/${listNew[index]}.mp3`);
        songStatus = true;
        handleMusicPlay();
        playerRandom.classList.add('player-active');
        playerRandom.removeEventListener('click', () => {
            handleRandomPlay();
        })
    };
    // end random

    playerNext.addEventListener('click', () => {handleClickPlayer(1)});
    playerPrev.addEventListener('click', () => {handleClickPlayer(-1)});
    handleClickPlayer = (num) => {
        if(num === 1) {
            if (index < list.length - 1) {
                index++;
            }else {
                index = 0;
            }
            song.setAttribute('src', `./files/${list[index]}.mp3`);
            songStatus = true;
            handleMusicPlay();
        }else if(num === -1) {
            if (index > 0) {
                console.log(index--);
            }else {
                index = list.length - 1;
            }
            song.setAttribute('src', `./files/${list[index]}.mp3`);
            songStatus = true;
            handleMusicPlay();
        }
    };
    playerPlay.addEventListener('click', () => {
        handleMusicPlay();
    });
    handleMusicPlay = () => {
        if(songStatus) {
            song.play();
            playerPlay.classList.add('fa-pause');
            playerImage.classList.add('is-playing');
            songStatus = false;
        }else {
            song.pause();
            playerPlay.classList.remove('fa-pause');
            playerImage.classList.remove('is-playing');
            songStatus = true;
        }
    };
});