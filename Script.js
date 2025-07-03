    document.addEventListener('DOMContentLoaded', () => {
        // Example: Toggle profile details
        const toggleBtn = document.getElementById('toggle-details');
        const details = document.getElementById('profile-details');

        if (toggleBtn && details) {
            toggleBtn.addEventListener('click', () => {
                details.classList.toggle('hidden');
            });
        }

       
    });