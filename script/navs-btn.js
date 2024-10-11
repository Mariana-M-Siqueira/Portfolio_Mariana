const btnTemas = document.querySelector(".btn-temas");
const temaSalvo = localStorage.getItem('theme');

console.log(temaSalvo);

if(temaSalvo === 'light-theme'){
    document.body.classList.add('light-theme');
    btnTemas.firstChild.src = '../img/telas-claras.svg';
}

btnTemas.addEventListener('click', () => {
    document.body.classList.toggle('light-theme')

    if(document.body.classList.contains('light-theme')){
        btnTemas.firstChild.src = '../img/telas-escuras.png';
    } else {
        btnTemas.firstChild.src = '../img/telas-claras.svg';
    }
})