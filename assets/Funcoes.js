const btn = document.getElementById('btn');
const buttonContainer = document.getElementById('button-container');
const relojContainer = document.querySelector('.reloj-container');

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var control;

function inicio() {
    control = setInterval(cronometro, 10);
    btn.innerHTML = "Clique Aqui";
    btn.disabled = false;
}

function parar() {
    clearInterval(control);

    // Função para mudar a cor e o box-shadow dos elementos não zerados
    function highlightElement(id) {
        var element = document.getElementById(id);
        if (element.innerHTML !== "00" && element.innerHTML !== ":00") {
            element.style.color = "red";
            element.style.textShadow = "0 0 10px red";
        }
    }

    // Verificar e destacar os elementos não zerados
    highlightElement("Horas");
    highlightElement("Minutos");
    highlightElement("Segundos");
    highlightElement("Centesimas");
}

function cronometro() {    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0" + centesimas; }
        Centesimas.innerHTML = ":" + centesimas;
    } else {
        centesimas = 0;
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos; }
        Segundos.innerHTML = ":" + segundos;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
            if (minutos < 10) { minutos = "0" + minutos; }
            Minutos.innerHTML = ":" + minutos;
            if (minutos == 60) {
                minutos = 0;
                horas++;
                if (horas < 10) { horas = "0" + horas; }
                Horas.innerHTML = horas;
            }
        }
    }
}

function Nao_clique() {
    btn.innerHTML = "Tem Certeza ?";
    console.log("Alteracao no nome do botao para Tem Certeza?");
}

function Clique_Aqui() {
    btn.innerHTML = "Clique Aqui";
}

// Função para dividir o botão
function splitButton() {
    btn.classList.add('hidden');

    const yesButton = document.createElement('button');
    yesButton.id = 'btn-yes';
    yesButton.innerHTML = 'Sim';
    yesButton.onclick = () => {
        parar();
        window.open("https://www.youtube.com/watch?v=NOcKKF03lGw", "_blank");

        // Remove os botões "Sim" e "Não"
        yesButton.remove();
        noButton.remove();

        // Centraliza e aumenta o tamanho do relógio
        relojContainer.classList.add('enlarged');
        relojContainer.style.justifyContent = 'center';
        relojContainer.style.alignItems = 'center';
        relojContainer.style.flexDirection = 'row';
    };

    const noButton = document.createElement('button');
    noButton.id = 'btn-no';
    noButton.innerHTML = 'Não';
    noButton.onclick = () => {
        btn.classList.remove('hidden');
        btn.innerHTML = 'Clique Aqui';
        buttonContainer.classList.remove('split-buttons');
        buttonContainer.innerHTML = '';
        buttonContainer.appendChild(btn);
        function highlightElement(id) {
          var element = document.getElementById(id);
          if (element.innerHTML !== "00" && element.innerHTML !== ":00") {
              element.style.color = "black";
              element.style.textShadow = "0 0 10px black";
          }
      }
      highlightElement("Horas");
      highlightElement("Minutos");
      highlightElement("Segundos");
      highlightElement("Centesimas");
        inicio();
    };

    buttonContainer.classList.add('split-buttons');
    buttonContainer.innerHTML = '';
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(noButton);

    parar();
}



