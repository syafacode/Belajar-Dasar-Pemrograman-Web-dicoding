console.log('Dark Mode');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(ganti) {
    if (ganti.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const temaSekarang = sessionStorage.getItem('theme') ? sessionStorage.getItem('theme') : null;
if (temaSekarang) {
    document.documentElement.setAttribute('data-theme', temaSekarang);

    if (temaSekarang === 'light') {
        toggleSwitch.checked = false;
    }
}