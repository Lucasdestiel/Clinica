// Form simples (simulação)
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
  this.reset();
});