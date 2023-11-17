// código para o hamburger menu responsivo
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navOptions = document.getElementById("nav-options");

// trocar o icon do hamburger pelo X e mostrar menu
menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

// fechar menu quando clicar em alguma opção de navegação
navOptions.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

// pegar o parágrafo de erro
const mensagemErro = document.getElementById('mensagem-erro');

// função para preencher alguns campos do formulário automaticamente após informar CEP
document.getElementById('cep').addEventListener('input', function() {
    const cep = this.value;

    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    mensagemErro.style.display = 'block';
                    resetFields();
                } else {
                    mensagemErro.style.display = 'none';
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
                mensagemErro.style.display = 'block';
                resetFields();
            });
    }
});

// resetar espaços do formulário
function resetFields() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}