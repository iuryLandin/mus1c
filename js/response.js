async function mostrarResultadoBusca(data) {
    let obj = data;

    let max = obj?.length;
    var html = '';
    let index = 0;
    if (obj) {
        for (const item of obj) {
            html += createMusicTag(item.track, index++)
        }
    }

    $('.search-results').html(html);

    function createMusicTag(item, i) {
        return (
            `<div class="card music" onclick="selectTrack(${i})">
                <div class="thumb">
                    <img class='music-thumb' src="${item.cover_artwork_uri}" />
                </div>

                <div class="info">
                    <p class="title">${item.title}</p>
                    <p class='legend'>${item.display_artist}</p>
                </div>
            </div>`
        )
    }
}