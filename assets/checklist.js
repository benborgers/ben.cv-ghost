// Adds nice SVG icons to checklists.
// Activate by doing a checklist that starts with "[ ] Unchecked item" or "[x] Checked item".

document.querySelectorAll("li").forEach((el) => {
  if (el.innerHTML.startsWith("[ ] ")) {
    el.innerHTML = el.innerHTML.replace(
      "[ ] ",
      `<span class="h-4 w-4 border-2 border-current bg-neutral-200 rounded-full inline-block ml-0.5 mr-2 translate-y-0.5"></span>`
    );
  }

  if (el.innerHTML.startsWith("[x] ")) {
    el.innerHTML = el.innerHTML.replace(
      "[x] ",
      `<svg xmlns="http://www.w3.org/2000/svg" class="sm:h-5 w-5 inline-block mr-2 -translate-y-0.5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>`
    );
  }
});
