 $('.miniplayer-text').on('click', function() {
     escrever();
     $(this).parent().toggle();
     popup('player');

 });

 function escrever() {
     let currentMusic = getCurrentMusic();
     $(".musicTitle").html(currentMusic.title);
     $(".artistName").html(currentMusic.artist);
     $(".music-cover").attr('src', currentMusic.cover);
 }

 function showMiniPlayer() {
     $('.miniplayer').toggle();
 }


 $('.navbar a').on('click', function() {
     let page = $(this).attr('href');
     page = page.replace('#', '');
     navigate(page);
 });

 function setCurrentMusic(music) {
     localStorage.setItem('currentMusic', JSON.stringify(music));
     player.add(music.musicUrl);
     player.pause();
 }

 function getCurrentMusic() {
     return JSON.parse(localStorage.getItem('currentMusic'));
 }



 function selectTrack(el) {
     $(".btn-play-pause").attr('isPlaying', '1');
     let musicUrl = $(el).attr('data-music-url');
     let musicId = $(el).attr('data-music-id');
     let img = $(el).attr('data-music-cover');
     let musicTitle = $(el).children('.info').children('.title').text();
     let musicArtist = $(el).children('.info').children('.legend').text();

     let music = { id: musicId, musicUrl: musicUrl, title: musicTitle, artist: musicArtist, cover: img };
     setCurrentMusic(music);
     escrever();
 }