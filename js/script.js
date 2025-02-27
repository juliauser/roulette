document.getElementById('girar-roleta').addEventListener('click', function() {
    const roleta = document.getElementById('roleta');
    const graus = Math.floor(Math.random() * 360) + 3600; // Gira pelo menos 10 vezes
    roleta.style.transition = 'transform 5s ease-out';
    roleta.style.transform = `rotate(${graus}deg)`;

    roleta.addEventListener('transitionend', function() {
        roleta.style.transition = 'none';
        roleta.style.transform = `rotate(${graus % 360}deg)`;
        alert('Filme sorteado: ' + getFilmeSorteado(graus % 360));
    }, { once: true });
});

function getFilmeSorteado(graus) {
    if (graus >= 0 && graus < 120) {
        return 'Filme 1';
    } else if (graus >= 120 && graus < 240) {
        return 'Filme 2';
    } else {
        return 'Filme 3';
    }
}