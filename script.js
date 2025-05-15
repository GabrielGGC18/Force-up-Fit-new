function logar() {
    var usuario = document.getElementById("username").value.trim();
    var senha = document.getElementById("password").value.trim();
    
    if (usuario.toLowerCase() === "gabriel foda" && senha === "123456") {
        alert("Login bem-sucedido!");
        windowlocation.href = "index.html"; // Redireciona para a página inicial
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
function desmarcar() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    alert("Todas as opções foram desmarcadas!");
}

