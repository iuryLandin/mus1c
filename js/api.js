const API = "https://qgeletronicos.com/musicapi/";

function search(q) {
    if (q.length < 4) {
        return;
    }


    $.ajax({
        url: API + 'search?q=' + q,
        type: "GET"
    }).done(function(resposta) {
        let r = mostrarResultadoBusca(resposta);

    }).fail(function(jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });
}