// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toogle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

// build functions
function tooglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updatebutton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toogle.textContent = icon;
};

function skip(){
    video.currentTime += parseInt(this.dataset.skip);
};

function handleRangeUpdate(){
    video[this.name] = this.value;
};

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

// hook up the event listners
video.addEventListener('click', tooglePlay);
video.addEventListener('play', updatebutton);
video.addEventListener('pause', updatebutton);
video.addEventListener('timeupdate', handleProgress);

toogle.addEventListener('click', tooglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousDown = false
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousDown && scrub(e));
progress.addEventListener('mousedown', () => mousDown = true);
progress.addEventListener('mouseup', () => mousDown = false);