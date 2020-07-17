import * as elements from "./elements.js";
import * as functions from "./functions.js";

console.log("%c Welcome to MemoWrite", elements.consoleLogString);
elements.noteButton.addEventListener("click", functions.addMemo);
elements.emptyModalButton.addEventListener(
  "click",
  functions.closeEmptyMemoModal
);
functions.asyncFetch();
