document.getElementById('acceptBtn').addEventListener('click', playScamSound);
document.getElementById('rejectBtn').addEventListener('click', playScamSound);


function playScamSound() {
    const audio = new Audio('scream.mp3');
    audio.volume = 1;
    audio.play();

    const img = document.createElement('img');
    img.src = 'scr.png';
    img.style.position = 'fixed';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.width = '50%';
    img.style.height = 'auto';
    document.body.appendChild(img);

    document.body.style.backgroundColor = 'black';
    document.body.style.overflow = 'hidden';
}
