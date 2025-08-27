

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