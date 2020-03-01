 $('.miniplayer-text').on('click', function() {
     escrever();
     $('#player').toggle();
     popup('player');

 });

 function escrever() {
     let currentMusic = getCurrentMusic();
     $(".musicTitle").html(currentMusic.title);
     $(".artistName").html(currentMusic.artist);
     $(".music-cover").attr('src', currentMusic.cover);
 }

 function showMiniPlayer() {
     $('#player').toggle();
 }


 $('.navbar a').on('click', function() {
     let page = $(this).attr('href');
     page = page.replace('#', '');
     navigate(page);
 });

 function setCurrentMusic(music) {
    localStorage.setItem('currentMusic', JSON.stringify(music));
    player.add(music.musicUrl);
    player.play();
    return player
 }

 function getCurrentMusic() {
     return JSON.parse(localStorage.getItem('currentMusic'));
 }


 const musicPlayer = document.getElementById('audio')

 function selectTrack(index) {
    localStorage.setItem('currentMusicIndex', index)

    musicPlayer.pause()

    let playListToReproduce = [];

    for(const music of JSON.parse(sessionStorage.getItem('PlaylistOnScreen'))) {
        playListToReproduce.push({
            id: music.track.id,
            musicUrl: music.track.progressive_download_url,
            title: music.track.title,
            artist: music.track.display_artist,
            cover: music.track.cover_artwork_uri
        })
    }

    const musicToReproduce = playListToReproduce[index];
    
    localStorage.setItem('currentPlaylist', JSON.stringify(playListToReproduce))

    playPause(2);

    setCurrentMusic(musicToReproduce);
    escrever();

    musicPlayer.play()
}

function changeTrack(index) {
    localStorage.setItem('currentMusicIndex', index);
    
    musicPlayer.pause();

    const playListToReproduce = JSON.parse(localStorage.getItem('currentPlaylist'));
    let musicToReproduce = playListToReproduce[index];

    if (!musicToReproduce) {
        musicToReproduce = playListToReproduce[0];
        localStorage.setItem('currentMusicIndex', 0);
        setCurrentMusic(musicToReproduce);

        musicPlayer.pause();
        playPause(1);
    }else{
        setCurrentMusic(musicToReproduce);
        musicPlayer.play()
        playPause(2);
    }
        
    escrever();
    
}