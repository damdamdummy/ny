const envWrap = document.getElementById('envWrap');
const letter = document.getElementById('letterSection');
const audio = document.getElementById('myAudio');
const vinyl = document.getElementById('vinyl');

function openEnvelope() {
    envWrap.classList.add('fade-out');
    setTimeout(() => {
        envWrap.style.display = 'none';
        letter.classList.add('fade-in');
        audio.play();
        vinyl.classList.add('spinning');
    }, 600);
}

function closeLetter() {
    letter.style.opacity = '0';
    audio.pause();
    vinyl.classList.remove('spinning');

    setTimeout(() => {
        letter.classList.remove('fade-in');
        letter.style.display = 'none';
        envWrap.style.display = 'block';
        setTimeout(() => {
            envWrap.classList.remove('fade-out');
            letter.style.opacity = '1';
        }, 50);
    }, 600);
}