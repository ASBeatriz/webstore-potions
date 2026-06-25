const apiBaseUrl = "http://localhost:3000";

async function fetchPotions() {
    const response = await fetch(`${apiBaseUrl}/potions`);
    if (!response.ok) {
        throw new Error("Falha ao buscar poções");
    }
    return response.json();
}

function formatPrice(value) {
    return Number(value).toFixed(2);
}

function getPurchaseModalElements() {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");
    return { overlay, modal };
}

async function loadPotions() {
    const carrossel = document.getElementById("carrossel-produtos");
    if (!carrossel) return;

    let potions = [];
    try {
        potions = await fetchPotions();
    } catch (error) {
        console.error(error);
        return;
    }

    carrossel.innerHTML = "";
    const { overlay, modal } = getPurchaseModalElements();

    potions.forEach((potion) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h1><strong>${potion.nome}</strong></h1>
            <img src="${apiBaseUrl}/${potion.imagem}" alt="${potion.nome}">
            <p>${potion.descricao}</p>
            <p class="price"><strong>Valor</strong>: $${formatPrice(potion.preco)}</p>
            <button class="btn-comprar">Comprar</button>
        `;

        carrossel.appendChild(card);

        const btnComprar = card.querySelector(".btn-comprar");
        if (!btnComprar || !overlay || !modal) return;

        btnComprar.addEventListener("click", () => {
            overlay.classList.remove("hidden");
            modal.classList.remove("hidden");
            modal.querySelector("h1").textContent = `Comprar ${potion.nome}`;
        });
    });
}

function setupPotionForm() {
    const form = document.getElementById("potionForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const response = await fetch(`${apiBaseUrl}/potions`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            if (typeof showToast === "function") {
                showToast("Erro ao cadastrar poção", "error");
            }
            return;
        }

        const result = await response.json();
        console.log(result);
        if (typeof showToast === "function") {
            showToast("Poção cadastrada com sucesso!", "success");
        }
        await loadPotionsAdmin();
    });
}

async function loadPotionsAdmin() {
    const tbody = document.getElementById("potionsTableBody");
    if (!tbody) return;

    let potions = [];
    try {
        potions = await fetchPotions();
    } catch (error) {
        console.error(error);
        return;
    }

    tbody.innerHTML = "";
    potions.forEach((potion) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <img
                    src="${apiBaseUrl}/${potion.imagem}"
                    alt="${potion.nome}"
                >
            </td>
            <td>${potion.nome}</td>
            <td>${potion.descricao}</td>
            <td>$ ${formatPrice(potion.preco)}</td>
            <td>
                <button class="btn-remover" data-id="${potion.id}">
                    Remover
                </button>
            </td>
        `;

        tbody.appendChild(tr);
        const btnRemover = tr.querySelector(".btn-remover");
        if (!btnRemover) return;

        btnRemover.addEventListener("click", async () => {
            const response = await fetch(`${apiBaseUrl}/potions/${potion.id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Erro ao deletar poção");
            }

            const result = await response.json();
            console.log(result);
            if (typeof showToast === "function") {
                showToast("Poção removida com sucesso!", "success");
            }
            await loadPotionsAdmin();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadPotions();
    setupPotionForm();
    loadPotionsAdmin();
});
