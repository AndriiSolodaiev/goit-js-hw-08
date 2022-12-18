import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe)

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));
function onPlayerTimeupdate(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
};

try {
    const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))
    player.setCurrentTime(currentTime.seconds)
} catch (error) {
  console.log(error.name)
}

