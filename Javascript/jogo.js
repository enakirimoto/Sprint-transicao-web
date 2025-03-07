/** quantidade de acertos*/
var acertos;
acertos = 0;
/** quantidade de toupeiras perdidas*/
var perdidos = 0;
/** quantidade de marteladas erradas*/
var errados = 0;

/**tempo entre cada toupeira sair do buraco */
var intervalo = 5000;

/**tempo que a toupeira fica fora do buraco */

var janela = 2000;

/**tempo que a toupeira fica fora no buraco */

var timer = null;


document.getElementById("idyButton").addEventListener("click", minhaFuncao);

var botao = document.getElementById("idyButton");

botao.addEventListener("click", trataClick);

document.getElementById("idButton").addEventListener("click", trataClick);


onload = function () {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("idGramado").addEventListener("mousedown", marteloBaixo);
    document.getElementById("idGramado").addEventListener("mousedown", marteloCima);
    document.getElementById("buraco0").addEventListener("click", martelada);
    document.getElementById("buraco1").addEventListener("click", martelada);
    document.getElementById("buraco2").addEventListener("click", martelada);
    document.getElementById("buraco3").addEventListener("click", martelada);
    document.getElementById("buraco4").addEventListener("click", martelada);
}

window.onload = function () {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("idGramado").addEventListener("mousedown", marteloBaixo);
    document.getElementById("idGramado").addEventListener("mousedown", marteloCima);
    document.getElementById("buraco0").addEventListener("click", martelada);
    document.getElementById("buraco1").addEventListener("click", martelada);
    document.getElementById("buraco2").addEventListener("click", martelada);
    document.getElementById("buraco3").addEventListener("click", martelada);
    document.getElementById("buraco4").addEventListener("click", martelada);
}

function start() {
    var botao = document.getElementById("start");
    botao.disabled = true;
    botao.removeEventListener("click", start);
    sobeToupeira();

}

function sobeToupeira() {
    var buraco = Math.floor(Math.random() * 5);
    var objBuraco = document.getElementById("buraco" + buraco);
    objBuraco.src = "images/hole_open.png";
    timer = setTimeout(tiraToupeira, janela, buraco);
    setTimeout(sobeToupeira, intervalo);

}

function tiraToupeira(buraco) {
    var objBuraco = document.getElementById("buraco" + buraco);
    objBuraco.src = "images/hole.png";
    perdidos++;
    mostraPontuacao();
}

function mostraPontuacao() {
    mostraPontuacaoDe('acertos',acertos);
    mostraPontuacaoDe('perdidos',perdidos);
    mostraPontuacaoDe('errados',errados);
    mostraPontuacaoDe('saldo', Math.max(acertos -perdidos - errados, 0));
}

function mostraPontuacaoDe(display, valor){
    let objCentena = document.getElementById(display).firstChild;
    let objDezena = centena.nextSibling;
    let objUnidade = dezena.nextSibling;

    //calcula o valor de cada algarismo

    let centena = parseInt(valor/100);
    let dezena = parseInt((valor/10)%10);
    let unidade = parseInt(valor%10);

    ///muda a imagem e o valor do atributo para o ledor a tela

    objCentena.src = 'images/caractere_' + centena + '.gif';
    objCentena.alt = centena;
    objDezena.src = 'images/caractere_' + dezena + '.gif';
    objDezena.alt = dezena;
    objUnidade.src = 'images/caractere_' + unidade + '.gif';
    objUnidade.alt = unidade;
}


