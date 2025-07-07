const toggle = document.getElementById('toggleDark');
const html = document.documentElement;
toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
});
