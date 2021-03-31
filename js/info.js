let infoText = document.getElementById("info__text");
let infoShadow = document.getElementById("info__shadow");
let infoContinuation = document.getElementById('info__continuation');
let check = false;
let heightStart, heightEnd;
infoContinuation.onclick = function(){
    if(check == false){
        
        heightStart = infoText.offsetHeight;
        infoShadow.style.display = "inline";
        heightEnd = infoText.offsetHeight;
        infoText.style.height = heightStart + "px";
        function e(){
            infoText.style.height = heightEnd + "px";
            infoContinuation.innerHTML = "Закрыть";
        }
        setTimeout(e,1);
        check = true;
        console.log(heightStart, heightEnd);
    }else if(check == true){
        infoText.style.height = heightStart + "px";
        function e(){
            infoText.style.height = "auto";
            infoShadow.style.display = "none";
            infoContinuation.innerHTML = "Читать дальше";
        }
        setTimeout(e,800);
        check = false;
    }
}