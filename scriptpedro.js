const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach(cb => cb.addEventListener('change', calcularTotal));

function calcularTotal(){
  let total = 0;

  document.querySelectorAll('input:checked').forEach(item=>{
    total += Number(item.dataset.preco);
  });

  document.getElementById('total').innerText = `R$ ${total},00`;
}

function enviarWhatsApp(){
  let pedido = "Pedido:%0A";

  document.querySelectorAll('input:checked').forEach(item=>{
    pedido += `- ${item.value}%0A`;
  });

  pedido += `%0ATotal: ${document.getElementById('total').innerText}`;

  let telefone = "5562996040754";
  window.open(`https://wa.me/${telefone}?text=${pedido}`,'_blank');
}