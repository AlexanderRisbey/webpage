export const renderTransitionScreen = () => {
    return `<div class="privacy-screen"></div>`;
};

export const initTransition = () => {
    const screen = document.querySelector('.privacy-screen');
    if (screen) {
        screen.style.opacity = '1';
        screen.style.display = 'block';

        setTimeout(() => {
            screen.style.transition = 'opacity 0.2s ease-out';
            screen.style.opacity = '0';
            screen.addEventListener('transitionend', () => {
                screen.style.display = 'none';
            });
        }, 50);
    }
};
