const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', cambio);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); 
}

function cambio(){
    if(desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive');
    }else{
        desktopMenu.classList.add('inactive');
    }
}