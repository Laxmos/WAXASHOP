/*
let body = document.querySelector('body');
let burger = document.getElementById('burger');
let bottomRoster = document.getElementById('bottom__roster');


let check = 0;

burger.onclick = function(){
    if(body.offsetWidth<=990 && check == 0){
        //bottomRoster.style.display = 'block';
        bottomRoster.className = "bottom__roster-2";
        check = 1;
    } else if(body.offsetWidth<=990 && check == 1){
        //bottomRoster.style.display = 'none';
        bottomRoster.className = "bottom__roster";
        check = 0;
    }
} */
/*
let navigationLeft = document.getElementById('navigation__left');
let navigationRigth = document.getElementById('navigation__right');

function navigationWidth(){
    if(body.offsetWidth <= 990){
        navigationRigth.style.width = navigationLeft.offsetWidth + "px";
    }
    if(body.offsetWidth >= 990){
        navigationLeft.style.width = navigationRigth.offsetWidth + "px";
    }
}
setInterval(navigationWidth, 1000);
*/

let body = document.querySelector('body');
let html = document.querySelector('html');
let burger = document.getElementById('burger');
let nemuBurger = document.getElementById('nemu-burger');
let nemuBurgerBody = document.getElementById('nemu-burger-body');
let nemuBurgerClose = document.getElementById('nemu-burger-close');


let linkSearch = document.getElementById('link-search');
let search = document.getElementById('search');
let searchBody = document.getElementById('search-body');
let searchButtom = document.getElementById('search-buttom');

let catalog = document.getElementById('catalog');
let bmListMobile = document.getElementById('bm-list-mobile');


let widthHTML;
let paddingBody;


function closeToTime(){
    nemuBurger.style.opacity = 0;
    nemuBurger.style.visibility = 'hidden';
    body.style.paddingRight = "0";
    body.style.overflow = "scroll";
}
function widthHTMLnow(){
    widthHTML = html.offsetWidth;
}
burger.onclick = function(){
    widthHTMLnow();
    body.style.overflow = "hidden";
    nemuBurger.style.opacity = 1;
    nemuBurger.style.visibility = 'visible';
    nemuBurgerBody.style.transform = "translate(0px, 0px)";
    paddingBody = Math.abs(widthHTML - html.offsetWidth) + "px";
    body.style.paddingRight = paddingBody;
}
nemuBurgerClose.onclick = function(){ 
    setTimeout(closeToTime, 1000);
    nemuBurgerBody.style.transform = "translate(-100%, 0px)";
}
window.onclick = function(event){
    if (event.target == nemuBurger){
        setTimeout(closeToTime, 1000);
        nemuBurgerBody.style.transform = "translate(-100%, 0px)";
        
    }
}



linkSearch.onclick = function(){
    search.style.opacity = 1;
    search.style.visibility = 'visible';
    searchBody.style.height = "40px";
    linkSearch.style.color = "#DFA94A";
}
searchButtom.onclick = function(){
    search.style.opacity = 0;
    search.style.visibility = 'hidden';
    searchBody.style.height = "0px";
    linkSearch.style.color = "#262626";
}





let chechList = false;
catalog.onclick = function(){
    if (chechList == false){
        bmListMobile.style.opacity = 1;
        bmListMobile.style.visibility = 'visible';

        bmListMobile.style.height = "auto";
        let heigntlist = bmListMobile.offsetHeight;
        bmListMobile.style.height = "0";
        function z(){
            bmListMobile.style.height = heigntlist+"px";
        }
        setTimeout(z,1);
        catalog.style.color = "#DFA94A"
        chechList = true;
    }else if(chechList == true){
        bmListMobile.style.opacity = 0;
        bmListMobile.style.visibility = 'hidden';
        bmListMobile.style.height = "0";
        catalog.style.color = "#262626"
        chechList = false;
    }
}