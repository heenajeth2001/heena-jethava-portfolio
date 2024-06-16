    document.addEventListener('DOMContentLoaded', function () {
        const modalToggleButtons = document.querySelectorAll('[data-modal-toggle]');
        const modalHideButtons = document.querySelectorAll('[data-modal-hide]');
        const backdrop = document.getElementById('modal-backdrop');
        const body = document.body;

        modalToggleButtons.forEach(button => {
            button.addEventListener('click', function () {
                const modalId = button.getAttribute('data-modal-target');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    backdrop.classList.remove('hidden');
                    body.style.overflow = 'hidden';
                }
            });
        });

        modalHideButtons.forEach(button => {
            button.addEventListener('click', function () {
                const modal = button.closest('.fixed');
                if (modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    backdrop.classList.add('hidden');
                    body.style.overflow = 'auto';
                }
            });
        });
    });
