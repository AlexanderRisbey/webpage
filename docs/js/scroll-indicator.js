export const renderScrollIndicator = () => {
    return `<div id="scroll-indicator"></div>`;
}

export const initScrollIndicator = () => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        // Add styles and animation for the scroll indicator
        scrollIndicator.style.width = '2px';
        scrollIndicator.style.height = '50px';
        scrollIndicator.style.backgroundColor = 'var(--primary-blue)';
        scrollIndicator.style.position = 'relative';
        scrollIndicator.style.overflow = 'hidden';

        const movingBar = document.createElement('div');
        movingBar.style.width = '100%';
        movingBar.style.height = '100%';
        movingBar.style.backgroundColor = '#fff';
        movingBar.style.position = 'absolute';
        movingBar.style.top = '-100%';
        movingBar.style.animation = 'scroll-indicator-animation 2s infinite';
        scrollIndicator.appendChild(movingBar);

        const keyframes = `
        @keyframes scroll-indicator-animation {
            0% { top: -100%; }
            50% { top: 0; }
            100% { top: 100%; }
        }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
    }
}
