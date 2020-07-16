import * as elements from "./elements.js";
import Memo from "./memo.js";
import Http from "./http.js";

async function addMemo() {
  const newMemoText = elements.noteInput.value;
  if (newMemoText === null || newMemoText.length == 0) {
    elements.emptyModal.classList.add("is-active");
    return;
  }
  console.log("Memo created: " + newMemoText);
  const memo = new Memo(newMemoText);
  try {
    await Http.storeMemo("link" + newMemoText);
  } catch {
    alert("Shit");
  }
}

function closeEmptyMemoModal() {
  elements.emptyModal.classList.remove("is-active");
}

export { addMemo, closeEmptyMemoModal };
