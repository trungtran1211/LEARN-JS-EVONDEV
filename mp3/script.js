window.addEventListener('load', function() {
    const song = document.querySelector('#song');
    const playerImage = document.querySelector('.player-image');
    const musicName = document.querySelector('.music-name');
    const progressBar = document.querySelector('#progress-bar');
    const playerDuration = document.querySelector('.player-duration');
    const playerRemaining = document.querySelector('.player-remaining');
    const playerPlay = document.querySelector('.player-play');
    const playerPrev = document.querySelector('.player-prev');
    const playerNext = document.querySelector('.player-next');
    const playerRandom = document.querySelector('.player-random');

    songStatus = true;
    const list = ["holo", "home", "spark", "summer"];
    index = 0;

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

    playerRandom.addEventListener('click', () => {
        handleRandomPlay();
    })
    
    let handleRandomPlay = () => {
        const listNew = shuffleArray(list); 
        song.setAttribute('src', `./files/${listNew[index]}.mp3`);
        songStatus = true;
        musicName.textContent = listNew[index];
        handleMusicPlay();
        playerRandom.classList.toggle('player-active');
        playerRandom.removeEventListener('click', () => {
            handleRandomPlay();
        })
    };
    // end random
    musicName.textContent = list[index];
    
    playerNext.addEventListener('click', () => {handleClickPlayer(1)});
    playerPrev.addEventListener('click', () => {handleClickPlayer(-1)});

    song.addEventListener('ended', () => {handleClickPlayer(1)});

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
            musicName.textContent = list[index];
        }else if(num === -1) {
            if (index > 0) {
                console.log(index--);
            }else {
                index = list.length - 1;
            }
            song.setAttribute('src', `./files/${list[index]}.mp3`);
            songStatus = true;
            handleMusicPlay();
            musicName.textContent = list[index];
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
    
    progressBar.addEventListener('change', () => {
        song.currentTime = progressBar.value;
    });

    displayTimer = () => {
        const duration = song.duration;
        const currentTime = song.currentTime;
        playerDuration.textContent = formatNumber(duration);
        playerRemaining.textContent = formatNumber(currentTime);
        progressBar.max = Math.floor(duration);
        progressBar.value = Math.ceil(currentTime);
    };
    
    formatNumber = (number) => {
        const minutes = Math.floor(Math.ceil(number) / 60) ;
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes}:${seconds < 10 ? `0`+seconds : seconds}`;
    };
    
    setInterval(() => {
        displayTimer();
    }, 500);
});