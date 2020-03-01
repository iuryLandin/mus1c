function openNav() {
    document.getElementById("mySidebar").style.width = "250px"
    document.querySelector("main").style.marginLeft = "250px"
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"
    document.querySelector("main").style.marginLeft = "0"
}

function loading(status) {
    return (status) ? $("#loading").show() : $("#loading").hide()
}

// When the user scrolls the page, execute myFunction
// window.onscroll = function() { myFunction() };

// Get the header
// var header = document.getElementById("inputSearch");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }



$(document).ready(function() {
    loading(false)
    $("#playerPopup").load('./pages/player');
    escrever();
    const temp = getCurrentMusic();
    if(temp) {
        setCurrentMusic(temp);
        playPause(2);
    }
    sessionStorage.setItem('backPage', null);
});


function popup() {
    //$("#playerPopup").load('./pages/player');
    $("#playerPopup").fadeIn();
    $('#miniplayer-container').hide()
}

function closePopup() {
    $(".popup").fadeOut();
    $('#miniplayer-container').show()
}






function navigate(page) {
    // Edição do Júlio
    for (const item of document.querySelectorAll('.item')) {
        item.classList.remove('active')
    }
    document.querySelector(`.${page}`).classList.add('active')
    if (page == 'busca') document.getElementById('searchbar').focus()
    //Fim da Edição do Júlio
    
    loading(true);
    $('.app').hide();
    page = navigateSelections(page)
    sessionStorage.setItem('backPage', page);

    $(".app").load(page, function(response, status, xhr) {
        loading(false);
        if (status == 'error') {
            alert("Erro: " + xhr.status + "\n \n  A página solicitada não está disponível no momento!");
            navigate('home');
        }
        $('.app').fadeIn();
        return false;
    });

    function navigateSelections() {
        if (page === 'home') {
            location.reload()
            return 0
        } else if (page === 'return') {
            page = sessionStorage.getItem('backPage');
        } else {
            page = `pages/${page}`;
        }
    
        return page;
    }
}