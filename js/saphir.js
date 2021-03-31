let saphirText = document.getElementById("saphir__text");
let saphirShadow = document.getElementById("saphir__shadow");
let saphirContinuation = document.getElementById('saphir__continuation');

let saphirCheck = false;
let saphirHeightStart, saphirHeightEnd;
saphirContinuation.onclick = function(){
    if(saphirCheck == false){
        saphirHeightStart = saphirText.offsetHeight;
        saphirShadow.style.display = "inline";
        saphirHeightEnd = saphirText.offsetHeight;
        saphirText.style.height = saphirHeightStart + "px";
        function e(){
            saphirText.style.height = saphirHeightEnd + "px";
            saphirContinuation.innerHTML = "Закрыть";
        }
        setTimeout(e,1);
        saphirCheck = true;
        console.log(saphirHeightStart, saphirHeightEnd);
    }else if(saphirCheck == true){
        saphirText.style.height = saphirHeightStart + "px";
        function e(){
            saphirText.style.height = "auto";
            saphirShadow.style.display = "none";
            saphirContinuation.innerHTML = "Читать дальше";
        }
        setTimeout(e,800);
        saphirCheck = false;
    }
}