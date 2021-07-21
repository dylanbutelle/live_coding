document.addEventListener('DOMContentLoaded',function(){
    let maxCharHTML=500;
    let maxCharCSS=100
    let nbCharHTML=0;
    let nbCharCSS=0;
    let textarea = document.querySelector("#saisieHTML");
    let textareaCSS = document.querySelector("#saisieCSS");
    let live = document.querySelector("#live_coding");
    let gif = document.querySelector("#loading");
    let bold = document.querySelector('#bold');
    let italic = document.querySelector('#italic');
    let boldCSS = document.querySelector('#boldCSS');
    let italicCSS = document.querySelector('#italicCSS');
    let progress = document.querySelector("#progressHTML");
    let progressCSS = document.querySelector("#progressCSS");
    let chars = document.querySelector('#nbCharHTML');
    let charsCSS = document.querySelector("#nbCharCSS");
    let color = document.querySelector("#colorHTML");
    let colorCSS = document.querySelector("#colorCSS");
    let style = document.querySelector("style");
    progress.setAttribute("max",maxCharHTML);
    progress.setAttribute("value",nbCharHTML);
    progressCSS.setAttribute("max",maxCharCSS);
    progressCSS.setAttribute("value",nbCharCSS);

    chars.innerHTML=nbCharHTML+`/${maxCharHTML}`;
    charsCSS.innerHTML=nbCharCSS+`/${maxCharCSS}`;
    textarea.onfocus=function (){
        gif.classList.remove('hidden');
        //textarea.style.border="2px blue solid";
    }
    textarea.onblur=function (){
        gif.classList.add('hidden');
        //textarea.style.border="1px solid grey";
    }
    textareaCSS.onfocus=function (){
        gif.classList.remove('hidden');
        //textarea.style.border="2px blue solid";
    }
    textareaCSS.onblur=function (){
        gif.classList.add('hidden');
        //textarea.style.border="1px solid grey";
    }
    boldCSS.addEventListener('click',function (){
        textareaCSS.value += "font-weight:bold;";

        keyPressedCSS();
    })
    italicCSS.addEventListener('click',function(){
        textareaCSS.value +="font-style:italic;";
        keyPressedCSS();

    })
    bold.addEventListener('click',function (){
        textarea.value += "<b></b>";

        keyPressedHTML();
    })
    italic.addEventListener('click',function(){
        textarea.value +="<i></i>";
        keyPressedHTML();

    })
    color.addEventListener('change',function (){
        textarea.value+=`<p style = "color:${color.value};"></p>`;
    })
    colorCSS.addEventListener('change',function(){
        textareaCSS.value+=`color:${colorCSS.value};`;
        keyPressedCSS();
    })
    textarea.addEventListener('keyup',function (){

        keyPressedHTML();
    })
    textareaCSS.addEventListener('keyup',function (){
        keyPressedCSS();
    })
    function keyPressedHTML(){
        live.innerHTML = textarea.value;
        textarea.value= textarea.value.substring(0,maxCharHTML);
        nbCharHTML=live.textContent.length;

        let pourcent = ((nbCharHTML/maxCharHTML)*100);
        if(pourcent>=50 && pourcent<80){
            progress.style.setProperty("--c","orange");
        }else if(pourcent>=80){
            progress.style.setProperty("--c","red");
        }else{
            progress.style.setProperty("--c","green");
        }
        chars.innerHTML=nbCharHTML+`/${maxCharHTML}`;
        progress.setAttribute("value",nbCharHTML)
        if(textarea.value===''){
            gif.classList.remove('hidden');
        }else{
            gif.classList.add('hidden');
        }
    }
    function keyPressedCSS(){
        style.innerHTML="#live_coding "+textareaCSS.value;
        textareaCSS.value= textareaCSS.value.substring(0,maxCharHTML);
        nbCharCSS=textareaCSS.value.length;

        let pourcentCSS = ((nbCharCSS/maxCharCSS)*100);
        if(pourcentCSS>=50 && pourcentCSS<80){
            progressCSS.style.setProperty("--c","orange");
        }else if(pourcentCSS>=80){
            progressCSS.style.setProperty("--c","red");
        }else{
            progressCSS.style.setProperty("--c","green");
        }
        charsCSS.innerHTML=nbCharCSS+`/${maxCharCSS}`;
        progressCSS.setAttribute("value",nbCharCSS)
        if(textareaCSS.value===''){
            gif.classList.remove('hidden');
        }else{
            gif.classList.add('hidden');
        }
    }

});
