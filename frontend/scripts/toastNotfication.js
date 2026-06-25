// Script para exibir notificações (toasts)


const x = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

x.addEventListener('click', close);

function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(type);
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

const formCompra = document.getElementById("form-compra");
if (formCompra) {
    formCompra.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast(
            "Pedido realizado com sucesso! Entraremos em contato em breve.",
            "success"
        );
        const closeModal = document.querySelector(".close-modal");
        if (closeModal) {
            closeModal.click();
        }
    });
}