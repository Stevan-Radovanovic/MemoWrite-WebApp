import * as elements from "./elements.js";
import * as listeners from "./listeners.js";

console.log("Note App JS Script");
elements.noteButton.addEventListener("click", listeners.addMemo);
elements.emptyModalButton.addEventListener(
  "click",
  listeners.closeEmptyMemoModal
);
listeners.asyncFetch();
