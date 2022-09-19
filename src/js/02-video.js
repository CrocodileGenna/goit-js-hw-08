import Player  from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);



player.on('timeupdate', throttle(timeF, 1000));

function timeF(ev){
    const curentSecond = JSON.stringify(ev.seconds);
    // console.log(curentSecond);
    localStorage.setItem("videoplayer-current-time", curentSecond);
};

let parsTime =  JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(parsTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});