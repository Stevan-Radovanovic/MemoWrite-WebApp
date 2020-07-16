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
    const elem = document.createElement("div");
    elem.classList.add("column", "is-4");
    elements.memoList.appendChild(elem);

    const newMemo = document.createElement("div");
    newMemo.classList.add("notification", "is-danger", "modal-width");
    elem.appendChild(newMemo);
    const title = document.createElement("p");
    title.classList.add("subtitle");
    title.innerText = "Memo";
    newMemo.appendChild(title);
    const hr = document.createElement("hr");
    newMemo.appendChild(hr);
    const text = document.createElement("p");
    text.innerText = newMemoText;
    newMemo.appendChild(text);

    await Http.storeMemo("link" + newMemoText);
  } catch {
    alert("Shit");
  }
}

function closeEmptyMemoModal() {
  elements.emptyModal.classList.remove("is-active");
}

export { addMemo, closeEmptyMemoModal };
