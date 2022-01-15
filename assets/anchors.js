// Adds anchor links to headings.

[
  ...document.querySelectorAll("h2"),
  ...document.querySelectorAll("h3"),
].forEach((el) => {
  el.outerHTML = `
    <a href="#${el.id}" class="no-underline block relative group">
      <div class="hidden md:block absolute top-2.5 -left-8 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
        </svg>
      </div>

      <${el.tagName} id="${el.id}" class="scroll-mt-4">${el.innerHTML}</${el.tagName}>
    </a>
  `;
});
