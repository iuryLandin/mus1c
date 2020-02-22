async function mostrarResultadoBusca(data) {
    let obj = data;

    let max = obj.items.length;
    var html = '';

    for (let i = 0; i < 10; i++) {
        html += `
                <div onclick='selectTrack(this)' class="card music" data-music-id='${obj.items[i].track.id}' data-music-cover='${obj.items[i].track.cover_artwork_uri}' data-music-url="${obj.items[i].track.progressive_download_url}">
                    <div class="thumb">
                        <img class='search-thumb' src="${obj.items[i].track.cover_artwork_thumbnail_uri}" />
                    </div>

                    <div class="info">
                        <p class="title"> ${obj.items[i].track.title} </p>
                        <p class='legend'> ${obj.items[i].track.display_artist} </p>
                    </div>
                </div>
        `;
    }

    $('.search-results').html(html);


}