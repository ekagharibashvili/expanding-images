const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        deleteActiveClasses();
        panel.classList.add('active');
    });
});

function deleteActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}