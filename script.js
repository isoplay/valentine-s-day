// Variáveis
let consulta_media_mobile = window.matchMedia("(max-width: 400px)");
let consulta_media_tablet = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);
const notas = document.querySelectorAll(".js-nota");

// Função que redefine o tamanho das notas.
function redimensionar_notas() {
  for (let i = 0; i < notas.length; i++) {
    if (notas[i].classList.contains("ativa")) {
      notas[i].classList.remove("ativa");
      gsap.set(notas[i], {
        height: "30%",
        clearProps: "all"
      });
    }
  }
}

// Função principal que habilita todas as notas.
function notas_prontas() {
  gsap.to(".js-conteudo-envelope", {
    height: "110%",
    duration: 0.5
  });

  for (let i = 0; i < notas.length; i++) {
    notas[i].addEventListener("click", function () {
      if (consulta_media_mobile.matches) {
        if (this.classList.contains("ativa")) {
          this.classList.remove("ativa");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notas.length; i++) {
            if (notas[i].classList.contains("ativa")) {
              notas[i].classList.remove("ativa");
              gsap.set(notas[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("ativa");
          gsap.set(this, {
            height: 125 + 40 * i + "%"
          });
        }
      } else if (consulta_media_tablet.matches) {
        if (this.classList.contains("ativa")) {
          this.classList.remove("ativa");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notas.length; i++) {
            if (notas[i].classList.contains("ativa")) {
              notas[i].classList.remove("ativa");
              gsap.set(notas[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("ativa");
          gsap.set(this, {
            height: 80 + 21 * i + "%"
          });
        }
      } else {
        if (this.classList.contains("ativa")) {
          this.classList.remove("ativa");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notas.length; i++) {
            if (notas[i].classList.contains("ativa")) {
              notas[i].classList.remove("ativa");
              gsap.set(notas[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("ativa");
          gsap.set(this, {
            height: 70 + 20 * i + "%"
          });
        }
      }
    });
  }
}

// Função que configura o papel superior do envelope.
function configurar_papel_superior() {
  var arr = [0, 0, 100, 0, 50, 61];
  gsap.set(".js-papel-superior", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath:
      "polygon(" +
      arr[0] +
      "%" +
      arr[1] +
      "%," +
      arr[2] +
      "%" +
      arr[3] +
      "%," +
      arr[4] +
      "%" +
      arr[5] +
      "%)",
    onComplete: notas_prontas
  });
}

// Função que inicia a transição do papel superior.
function transicao_envelope() {
  gsap.to(".js-papel-superior", {
    bottom: "1%",
    duration: 0.25,
    onComplete: configurar_papel_superior
  });
  document
    .querySelector(".js-papel-superior")
    .removeEventListener("click", transicao_envelope);
  document.querySelector(".js-papel-superior").classList.remove("cursor");
}

// Função que permite cortar o adesivo.
function adesivo() {
  gsap.set(".js-adesivo", { width: "20%", left: "-80%" });
  document.body.classList.remove("tesoura");
  document.querySelector(".js-adesivo").removeEventListener("click", adesivo);
  document
    .querySelector(".js-papel-superior")
    .addEventListener("click", transicao_envelope);
  document.querySelector(".js-papel-superior").classList.add("cursor");
}

document.querySelector(".js-adesivo").addEventListener("click", adesivo);

window.onresize = function (event) {
  redimensionar_notas();
};
