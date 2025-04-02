document.addEventListener("DOMContentLoaded", () => {
    const lblSenhaSorteada = document.getElementById("lbl-senha-sorteada");
    const txtTamanhoSenha = document.getElementById("input-tamanho-senha");
    const btnSortear = document.getElementById("btn-sortear");
    const btnCopiar = document.getElementById("btn-copiar");

    // Função para gerar senha com tamanho entre 6 e 20 caracteres
    function gerarSenha(tamanho) {
        if (tamanho < 6 || tamanho > 20) {
            alert("O tamanho da senha deve ser de 6 a 20 caracteres");
            return null;
        }

        // Caracteres disponíveis para a senha
        const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let senha = "";

        // Gera a senha aleatória
        for (let i = 0; i < tamanho; i++) {
            senha += caracteres[Math.floor(Math.random() * caracteres.length)];
        }

        return senha;
    }

    // Evento para gerar senha ao clicar no botão "Sortear"
    btnSortear.addEventListener("click", () => {
        const tamanho = parseInt(txtTamanhoSenha.value, 10);
        const senhaSorteada = gerarSenha(tamanho);

        if (senhaSorteada) {
            lblSenhaSorteada.innerText = senhaSorteada;
        }
    });

    // Evento para copiar a senha ao clicar no botão "Copiar"
    btnCopiar.addEventListener("click", () => {
        if (lblSenhaSorteada.innerText !== "") {
            navigator.clipboard.writeText(lblSenhaSorteada.innerText);
            alert("Senha copiada com sucesso!");
        } else {
            alert("Não há uma senha para ser copiada!");
        }
    });
});
