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
window.onscroll = function() { myFunction() };

// Get the header
var header = document.getElementById("inputSearch");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



$(document).ready(function() {
    $("#loading").hide();
    $("#playerPopup").load('./pages/player');
    escrever();
    let temp = getCurrentMusic();
    setCurrentMusic(temp);
    sessionStorage.setItem('backPage', null);
});


function popup() {
    //$("#playerPopup").load('./pages/player');
    $("#playerPopup").fadeIn();
}

function closePopup() {
    $(".popup").fadeOut();
}




function navigateSelections(page) {
    if (page === 'home') {
        location = '/   ';
        return false;
    } else if (page === 'return') {
        page = sessionStorage.getItem('backPage');
    } else {
        page = `pages/${page}`;
    }

    return page;
}

function navigate(page) {
    $('.app').hide();
    loading(true);
    page = navigateSelections(page)
    sessionStorage.setItem('backPage', page);

    $(".app").load(page, function(response, status, xhr) {
        loading(false);
        // if (status == 'error') {
        //     alert("Erro: " + xhr.status + "\n \n  A página solicitada não está disponível no momento!");
        //     navigate('home');
        // }
        $('.app').fadeIn();
        return false;
    });
}