document.addEventListener('DOMContentLoaded', function () {
    function initializeMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        } else {
            console.error('Menu button or mobile menu not found! Retrying...');
            setTimeout(initializeMenu, 500);  // Retry after a short delay
        }
    }

    initializeMenu();
});
