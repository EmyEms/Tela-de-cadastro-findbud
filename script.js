// Função para alternar a visibilidade da senha
function togglePassword(inputId) {
    const passwordField = document.getElementById(inputId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

// Mostrar formulário de cadastro quando o botão "Criar Registro" for clicado
document.getElementById("createAccountButton").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("createAccountDiv").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
});

// Habilitar o botão de envio apenas se os termos forem aceitos
document.getElementById("termsCheckbox").addEventListener("change", function() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = !this.checked;
});

// Modal para mostrar os termos e as políticas
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

closeModal.onclick = function() {
    modal.style.display = "none"; // Fecha o modal
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Fecha o modal se clicar fora dele
    }
};

// Função para exibir os Termos de Uso
document.getElementById("termsFooter").addEventListener("click", function(event) {
    event.preventDefault();
    modalText.innerHTML = "<h2>Termos de Uso</h2><p>Ao utilizar este app, você concorda com o rastreamento em tempo real para melhorar a experiência do usuário.</p>";
    modal.style.display = "flex"; // Exibe o modal
});

// Função para exibir a Política de Privacidade
document.getElementById("privacyFooter").addEventListener("click", function(event) {
    event.preventDefault();
    modalText.innerHTML = "<h2>Política de Privacidade</h2><p>Suas informações pessoais serão utilizadas apenas para fins de rastreamento e melhoria do serviço. Não compartilhamos seus dados com terceiros.</p>";
    modal.style.display = "flex"; // Exibe o modal
});

// Função para exibir o contato
document.getElementById("contactFooter").addEventListener("click", function(event) {
    event.preventDefault();
    modalText.innerHTML = "<h2>Contato</h2><p>Entre em contato conosco via WhatsApp: (62) 98620-8272</p>";
    modal.style.display = "flex"; // Exibe o modal
});
s