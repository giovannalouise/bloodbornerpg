

// Contador

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("text");
  const charactersSpan = document.getElementById("characters");
  const wordsSpan = document.getElementById("words");
  const rowsSpan = document.getElementById("rows");

  function countText() {
    const text = textarea.value;

    // caracteres
    charactersSpan.innerText = text.length;

    // palavras (remove espaços extras)
    const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
    wordsSpan.innerText = words;

    // linhas
    const rows = text.length === 0 ? 0 : text.split(/\n/).length;
    rowsSpan.innerText = rows;
  }

  // Atualiza sempre que digitar ou colar algo
  textarea.addEventListener("input", countText);

  // Atualiza logo ao carregar (pra não ficar vazio)
  countText();
});