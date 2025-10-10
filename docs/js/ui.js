export function initDropdowns() {
  const dropdownElements = document.querySelectorAll('.nav_link-wrapper.dropdown');

  dropdownElements.forEach(dropdownEl => {
    const dropdownContainer = dropdownEl.querySelector('.dropdown-container');

    if (dropdownContainer) {
      // Replicating the style from the React component to hide/show.
      dropdownContainer.style.clipPath = 'inset(10% 50% 90% 50% round 10px)';
      dropdownContainer.style.pointerEvents = 'none';
      dropdownContainer.style.transition = 'clip-path 0.4s ease, -webkit-clip-path 0.4s ease'; // Added vendor prefix for broader compatibility

      dropdownEl.addEventListener('mouseenter', () => {
        dropdownContainer.style.clipPath = 'inset(0% 0% 0% 0% round 10px)';
        dropdownContainer.style.pointerEvents = 'auto';
      });

      dropdownEl.addEventListener('mouseleave', () => {
        dropdownContainer.style.clipPath = 'inset(10% 50% 90% 50% round 10px)';
        dropdownContainer.style.pointerEvents = 'none';
      });
    }
  });
}
