import * as elements from "./elements.js";

function addMemo() {
  const newMemoText = elements.noteInput.nodeValue;
  if (newMemoText === null || newMemoText.length == 0) {
    elements.emptyModal.classList.add("is-active");
    return;
  }
  console.log("Memo created: " + newMemoText);
}

function closeEmptyMemoModal() {
  elements.emptyModal.classList.remove("is-active");
}

export { addMemo, closeEmptyMemoModal };
