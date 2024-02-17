const text = document.querySelector('.text');
const prog = "Совкомплот";
let j = 1;

setInterval(writeText, 50);

function writeText(){
    text.innerText = prog.slice(0, j)

    j++;

    if(j > prog.length){
        j = 1;
    }
}

const BgCh = document.querySelector('body');
const BtnCh = document.querySelector('.btn-change');

BtnCh.onclick = function(){
    BgCh.classList.toggle('body-change');
}