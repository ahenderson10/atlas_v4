
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-box').forEach(box => {
        box.addEventListener('click', function() {
            const boxText = this.querySelector('.old-text');
            const hiddenText = this.querySelector('.new-text');
            
            if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
                hiddenText.style.display = 'block';
                boxText.style.display = 'none';
            } else {
                hiddenText.style.display = 'none';
                boxText.style.display = 'block';
            }
        });
    });
});

function toggleMenu(element) {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.display == 'block') {
        element.classList.remove('clicked');
        mobileMenu.style.display = 'none';
    } else {
        element.classList.add('clicked');
        mobileMenu.style.display = 'block';
    }
}