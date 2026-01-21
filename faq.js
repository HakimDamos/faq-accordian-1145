const details = document.querySelectorAll('details');

details.forEach((eIcon) => {
    eIcon.addEventListener('toggle', () => {
        const icon = eIcon.querySelector('.toggle-icon');

        if (eIcon.open) {
            // 1. Swap the icon
            icon.src = "./assets/images/icon-minus.svg";

            // 2. Close all other details
            details.forEach((detail) => {
                if (detail !== eIcon) {
                    detail.removeAttribute('open');
                }
            });
        } else {
            // 3. 
            icon.src = "./assets/images/icon-plus.svg";
        }
    });
});