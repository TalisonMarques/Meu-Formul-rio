script.js
document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    // Simples validação de CPF
    const cpf = document.getElementById('cpf').value;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    
    if (!regexCPF.test(cpf)) {
        alert("CPF inválido! Por favor, siga o formato 000.000.000-00.");
        event.preventDefault();
    }
});
