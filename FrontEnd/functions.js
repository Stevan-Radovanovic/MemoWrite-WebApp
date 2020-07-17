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
  const memo = new Memo(newMemoText, new Date().toDateString());
  try {
    createMemoHtml(memo);
    memoArray.push(memo);
    await Http.storeMemo("http://localhost:3000/memos", memo);
  } catch (error) {
    alert("Something went wrong!");
    console.log(error);
  }
}

function closeEmptyMemoModal() {
  elements.emptyModal.classList.remove("is-active");
}

function createMemoHtml(memo) {
  const elem = document.createElement("div");
  elem.classList.add("column", "is-4");
  elements.memoList.prepend(elem);
  const newMemo = document.createElement("div");
  newMemo.classList.add("notification", "is-danger", "modal-width");
  elem.appendChild(newMemo);
  const title = document.createElement("p");
  title.classList.add("subtitle");
  title.innerText = "Memo Created: " + memo.date;
  newMemo.appendChild(title);
  const hr = document.createElement("hr");
  newMemo.appendChild(hr);
  const text = document.createElement("p");
  text.innerText = memo.text;
  newMemo.appendChild(text);
}

let memoArray = [];

async function asyncFetch() {
  try {
    const response = await Http.fetchMemos("http://localhost:3000/memos");
    const json = JSON.parse(response);
    memoArray = json.memos;
    initializeMemoArrayHtml();
  } catch (error) {
    alert("Something went wrong!");
    console.log(error);
  }
}

function initializeMemoArrayHtml() {
  for (const memo of memoArray) {
    createMemoHtml(memo);
  }
}

export { addMemo, closeEmptyMemoModal, memoArray, asyncFetch };
