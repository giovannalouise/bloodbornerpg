

// Contador

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("text");
  const charactersSpan = document.getElementById("characters");
  const xpSpan = document.getElementById("xp");
  const prSpan = document.getElementById("pr");
  const tipoSelect = document.getElementById("tipo");
  const resultadoDiv = document.getElementById("resultado");

  function countText() {
    const text = textarea.value;
    const chars = text.length;
    const tipo = tipoSelect.value;

    charactersSpan.innerText = chars;

    resultadoDiv.innerHTML = "";

    if (tipo === "servicos") {
      const labelPR = document.createElement("label");
      labelPR.setAttribute("for", "pr");
      labelPR.innerText = "Prata Comum: ";

      const spanPR = document.createElement("span");
      spanPR.id = "pr";
      let pr = chars * 4;
      pr = Math.min(pr, 2000);
      spanPR.innerText = pr + "pr";

      resultadoDiv.appendChild(labelPR);
      resultadoDiv.appendChild(spanPR);
    } else {
      const labelXP = document.createElement("label");
      labelXP.setAttribute("for", "xp");
      labelXP.innerText = "Experiência: ";

      const spanXP = document.createElement("span");
      spanXP.id = "xp";
      let xp = chars;
      xp = Math.min(xp, 500);
      spanXP.innerText = xp + "xp";

      resultadoDiv.appendChild(labelXP);
      resultadoDiv.appendChild(spanXP);
    }
  }

  textarea.addEventListener("input", countText);
  tipoSelect.addEventListener("change", countText);

  countText();
});

function mudarConteudo(cla) {
    const conteudoDiv = document.getElementById('conteudo-clans');
    let htmlConteudo = '';

    switch (cla) {
        case 'sangreal':
            htmlConteudo = `
                <h3>✶ Sangreal</h3>
                <p>Descendentes de linhagens reais vampíricas, ou daqueles que foram os primeiros. Possuem maior influência no mundo vampírico, além de serem respeitados por Tenebris num geral. Dizem que seu sangue, ao invés de vermelho, é azul.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ O Sangue ✶ </h4><p>Ao consumir sangue, regenera 1d20 de vida.</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'moroi':
            htmlConteudo = `
                <h3>✶ Moroi</h3>
                <p>✶ Estudiosos do sangue, descendem de uma linhagem arcaica dos vampyr, dos que foram filhos corrompidos dos guardiões da memória antiga, um povo que existia no início da criação. ✶</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'dampyr':
            htmlConteudo = `
                <h3>✶ Dampyr</h3>
                <p>✶ Híbridos de vampiros e humanos, os Dampyr possuem habilidades únicas, mas também enfrentam o desprezo de ambos os lados. ✶</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        default:
            htmlConteudo = `
                <h4>Nenhum Clã selecionado.</h4>
            `;
    }

    conteudoDiv.innerHTML = htmlConteudo;
}