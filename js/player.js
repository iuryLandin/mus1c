const audio = document.getElementById("audio");

const player = {

    add: function(url) {
        audio.src = url;
        audio.play();
    },

    play: function() {
        audio.play();
    },

    pause: function() {
        audio.pause();
    },

    stop: function() {
        audio.stop();
    },

    getDuration: function() {
        return (audio.duration);
    },

    getCurrentTime: function() {
        return (audio.currentTime);
    },

    setCurrentTime: function(t) {
        audio.currentTime = t;
    },

    juice: function() {
        let juice = $(".juice");
        let time = (player.getCurrentTime() / player.getDuration()) * 100;
        let timePercent = time.toFixed(2) + '%';
        juice.css("width", timePercent);
    }

}

audio.ontimeupdate = function() {
    player.juice();
    if(audio.ended){
        const nextMusicIndex = parseInt(localStorage.getItem('currentMusicIndex')) + 1
        changeTrack(nextMusicIndex)
    }
}


function playPause(whatToDo = null) {
    let Btnplay = `<i class="fa fa-play" onclick="playPause();"></i>`;
    let Btnpause = `<i class="fa fa-pause" onclick="playPause();"></i>`;
    let isPlayng = whatToDo || $(".btn-play-pause").attr('isPlaying');

    if (isPlayng == 1) {
        $(".btn-play-pause").attr('isPlaying', 0);
        $(".btn-play-pause").html(Btnplay);
        player.pause();
    } else {
        $(".btn-play-pause").attr('isPlaying', 1);
        $(".btn-play-pause").html(Btnpause);
        player.play();
    }

}