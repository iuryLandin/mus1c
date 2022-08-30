const API = "https://insta-music-api.herokuapp.com";

function search(q) {
    if (q.length < 4) {
        return;
    }


    $.ajax({
        url: API + '/search?q=' + q,
        type: "GET"
    }).done(function (resposta) {
        sessionStorage.setItem('PlaylistOnScreen', JSON.stringify(resposta))

        let r = mostrarResultadoBusca(resposta);

    }).fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });
}