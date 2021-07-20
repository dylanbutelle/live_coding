document.addEventListener('DOMContentLoaded',function(){
    let maxChar=100;
    let nbChar=0;
    let textarea = document.querySelector("#saisie");
    let live = document.querySelector("#live_coding");
    let gif = document.querySelector("#loading");
    let bold = document.querySelector('#bold');
    let italic = document.querySelector('#italic');
    let progress = document.querySelector("#progress");
    let chars = document.querySelector('#nbChar');

    progress.setAttribute("max",maxChar);
    progress.setAttribute("value",nbChar)
    chars.innerHTML=nbChar+`/${maxChar}`;
    textarea.onfocus=function (){
        gif.classList.remove('hidden');
    }
    textarea.onblur=function (){
        gif.classList.add('hidden');
    }
    bold.addEventListener('click',function (){
        textarea.value += "<b></b>";
        keyPressed();
    })
    italic.addEventListener('click',function(){
        textarea.value +="<i></i>";
        keyPressed();
    })
    textarea.addEventListener('keyup',function (e){
        keyPressed();
    })
    function keyPressed(){
        live.innerHTML = textarea.value;
        textarea.value= textarea.value.substring(0,maxChar);
        nbChar=textarea.value.length;
        let pourcent = ((nbChar/maxChar)*100);
        console.log(pourcent)
        if(pourcent>=50 && pourcent<100){
            progress.style.setProperty("--c","orange");
        }else if(pourcent===100){
            progress.style.setProperty("--c","red");
        }else{
            progress.style.setProperty("--c","green");
        }
        chars.innerHTML=nbChar+`/${maxChar}`;
        progress.setAttribute("value",nbChar)
        if(textarea.value===''){
            gif.classList.remove('hidden');
        }else{
            gif.classList.add('hidden');
        }

    }
});
