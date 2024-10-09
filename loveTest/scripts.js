function verify() {
    const name = document.getElementById('name').value.trim().toLowerCase();
    const anniversary = document.getElementById('anniversary').value.trim();

    if (!name || !anniversary) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (name === 'luiz diogo mota dos santos' && anniversary === '16/11') {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    } else {
        alert('Informações incorretas. Tente novamente.');
        document.getElementById('name').focus();
    }
}
