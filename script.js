

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

            `;
            break;
            default:
            htmlConteudo = `
                <h4>Nenhum Clã selecionado.</h4>
            `;
    }

    conteudoDiv.innerHTML = htmlConteudo;
}

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
                <h4>✶ O Sangue</h4>
                <p>✶ Marca inata dos Sangreal, pode ser usada 2x por batalha.</p>
                <p>Nível 1 ✶ Ao consumir sangue fora de batalha, regenera +1d10 adicional de vida.</p>
                <p>Nível 30 ✶ Ao consumir sangue fora de batalha, regenera +1d20 adicional de vida.</p>
                <p>Nível 50 ✶ Ao consumir sangue fora de batalha, regenera +1d30 + 1/2 de sua maestria adicional de vida.</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'moroi':
            htmlConteudo = `
                <h3>✶ Moroi</h3>
                <p>Estudiosos do sangue, descendem de uma linhagem arcaica dos vampyr, dos que foram filhos corrompidos dos guardiões da memória antiga, um povo que existia no início da criação.</p>
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
                <p>Híbridos de vampiros e humanos, os Dampyr possuem habilidades únicas, mas também enfrentam o desprezo de ambos os lados.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'purge':
            htmlConteudo = `
                <h3>✶ Purge</h3>
                <p>Seres humanos impossibilitados de utilizar a magia, aprenderam a manipular os metais e forjar armas e apetrechos que  os permitem sobreviver neste mundo sobrenatural.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'eclipse':
            htmlConteudo = `
                <h3>✶ Eclipse</h3>
                <p>Uma sub-raça de humanos que se especializa em caçar e eliminar criaturas sobrenaturais. Eles são conhecidos por sua determinação e habilidades de combate.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'abissal':
            htmlConteudo = `
                <h3>✶ Abissal</h3>
                <p>Seres mais voltados para seu lado demoníaco  do que o humano. Foram completamente corrompiados e são causadores das maiores discórdias da humanidade.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'dragonborn':
            htmlConteudo = `
                <h3>✶ Dragonborn</h3>
                <p>Descendentes de dragões, criaturas infernais extremamente poderosas, são conhecidos por sua força e resistência. Eles possuem uma conexão única com os elementos.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'fenrir':
            htmlConteudo = `
                <h3>✶ Fenrir</h3>
                <p>Lendas dizem que Fenrir é o lobo primordial, o primeiro de sua espécie. Aqueles que seguem esta linhagem são conhecidos por sua força bruta e ferocidade em batalha.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'wulvers':
            htmlConteudo = `
                <h3>✶ Wulver</h3>
                <p>Uma linhagem menos conhecida, os Wulver são conhecidos por sua habilidade em se mover silenciosamente e caçar em grupo. Eles são frequentemente vistos como os protetores dos humanos, embora sua verdadeira lealdade permaneça um mistério.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'dominarii':
            htmlConteudo = `
                <h3>✶ Dominarii</h3>
                <p>Guerreiros natos, os Dominarii são conhecidos por sua força e habilidade em combate. Eles são os protetores da luz e da justiça.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'caelari':
            htmlConteudo = `
                <h3>✶ Caelari</h3>
                <p>Místicos e sábios, os Caelari possuem uma conexão profunda com o divino. Eles são os guardiões do conhecimento e da sabedoria.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'naiadras':
            htmlConteudo = `
                <h3>✶ Naiadras</h3>
                <p>Um Clã de sereias que habita rios e lagos. Elas são conhecidas por sua natureza protetora e sua habilidade em curar.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'thalassi':
            htmlConteudo = `
                <h3>✶ Thalassi</h3>
                <p>Sereias do mar aberto, são mais ferozes e territorialistas. Suas canções são ditas serem capazes de acalmar até as tempestades mais violentas.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'ghoul':
            htmlConteudo = `
                <h3>✶ Ghoul</h3>
                <p>Criaturas que se alimentam de carne humana e são conhecidas por sua força e resistência. Eles são temidos por muitos e caçados por outros.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'necrophage':
            htmlConteudo = `
                <h3>✶ Necrophage</h3>
                <p>Criaturas que se alimentam de cadáveres e são conhecidas por sua resistência e habilidades de regeneração. Eles são temidos por muitos e caçados por outros.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'nymph':
            htmlConteudo = `
                <h3>✶ Nymph</h3>
                <p>Ligadas diretamente às árvores e à vida vegetal. São capazes de se comunicar com as plantas e manipular a vegetação ao seu redor para se proteger ou atacar.</p>
                <br>
                <h4>Marcas</h4>
                <h4>✶ Marca 1 ✶ </h4><p>Descrição da Marca 1</p>
                <h4>✶ Marca 2 ✶ </h4><p>Descrição da Marca 2</p>
                <h4>✶ Marca 3 ✶ </h4><p>Descrição da Marca 3</p>
                <br>
            `;
            break;
        case 'fauno':
            htmlConteudo = `
                <h3>✶ Faunos</h3>
                <p>Criaturas com características de animais, são conhecidos por sua natureza brincalhona e sua agilidade. Eles são os protetores das florestas e da vida selvagem.</p>
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