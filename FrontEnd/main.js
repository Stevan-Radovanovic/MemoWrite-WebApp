import * as elements from "./elements.js";
import * as functions from "./functions.js";

console.log("MemoWrite JS Script");
elements.noteButton.addEventListener("click", functions.addMemo);
elements.emptyModalButton.addEventListener(
  "click",
  functions.closeEmptyMemoModal
);
functions.asyncFetch();
