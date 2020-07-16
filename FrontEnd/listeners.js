import * as elements from "./elements.js";

function addMemo() {
  const newMemoText = elements.noteInput.nodeValue;
  if (newMemoText === null || newMemoText.length == 0) {
    elements.emptyModal.classList.add("is-active");
  }
  console.log("Memo created: " + newMemoText);
}

export { addMemo };
