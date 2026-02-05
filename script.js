let rodada = 1;
const pedidos = [5, 3, 0];
let comprasLiberadas = false;
const equipes = [];
const numEquipes = prompt("Quantas equipes? (2 a 8)", 4);
for (let i = 1; i <= numEquipes; i++) {
    equipes.push({
        nome: "Equipe " + i,
        estoque: 6,
        caixa: 100,
        vendas: 0,
        vendasPerdidas: 0,
        compras: 0,
        custoEstoque: 0
    });
}
const container = document.getElementById("equipesContainer");

function render() {
    document.getElementById("rodadaInfo").innerText = `Rodada ${rodada} — Pedido: ${pedidos[rodada - 1]} unidades`;
    container.innerHTML = "";
    equipes.forEach((equipe, index) => {
        const div = document.createElement("div");
        div.className = "equipe";
        div.innerHTML = `
            <h3>${equipe.nome}</h3>
            <p>Estoque: ${equipe.estoque}</p>
            <p>Caixa: R$ ${equipe.caixa}</p>
            <p>Vendas: ${equipe.vendas}</p>
            <p>Vendas perdidas: ${equipe.vendasPerdidas}</p>
            <p>Custo estoque: R$ ${equipe.custoEstoque}</p>
            <label>Vender: <input type="number" id="venda${index}"></label>
            <button onclick="vender(${index})">Aplicar venda</button>
            ${comprasLiberadas ? `<label>Comprar: <input type="number" id="compra${index}"></label>
            <button onclick="comprar(${index})">Aplicar compra</button>` : ""}
        `;
        container.appendChild(div);
    });
}

function vender(i) {
    const qtd = Number(document.getElementById(`venda${i}`).value);
    const pedido = pedidos[rodada - 1];
    const equipe = equipes[i];
    if (qtd > pedido) return alert("Não pode vender mais que o pedido.");
    if (qtd > equipe.estoque) {
        equipe.vendas += equipe.estoque;
        equipe.vendasPerdidas += pedido - equipe.estoque;
        equipe.caixa += equipe.estoque * 20;
        equipe.estoque = 0;
        alert("Falta de estoque gera perda de receita e imagem.");
    } else {
        equipe.vendas += qtd;
        equipe.caixa += qtd * 20;
        equipe.estoque -= qtd;
    }
    render();
}

function comprar(i) {
    const qtd = Number(document.getElementById(`compra${i}`).value);
    const equipe = equipes[i];
    const custo = qtd * 10;
    if (qtd < 4 || qtd > 8) return alert("Compra deve ser entre 4 e 8.");
    if (equipe.caixa < custo) return alert("Compra não autorizada: caixa insuficiente.");
    equipe.caixa -= custo;
    equipe.estoque += qtd;
    equipe.compras += qtd;
    render();
}

function aplicarCustoEstoque() {
    equipes.forEach(equipe => {
        const custo = equipe.estoque * 5;
        equipe.caixa -= custo;
        equipe.custoEstoque += custo;
    });
}

function avancarRodada() {
    aplicarCustoEstoque();
let rodada = 1;
const pedidos = [5, 3, 0];
let comprasLiberadas = false;
const equipes = [];
const numEquipes = prompt("Quantas equipes? (2 a 8)", 4);
for (let i = 1; i <= numEquipes; i++) {
    equipes.push({
        nome: "Equipe " + i,
        estoque: 6,
        caixa: 100,
        vendas: 0,
        vendasPerdidas: 0,
        compras: 0,
        custoEstoque: 0
    });
}
const container = document.getElementById("equipesContainer");

function render() {
    document.getElementById("rodadaInfo").innerText = `Rodada ${rodada} — Pedido: ${pedidos[rodada - 1]} unidades`;
    container.innerHTML = "";
    equipes.forEach((equipe, index) => {
        const div = document.createElement("div");
        div.className = "equipe";
        div.innerHTML = `
            <h3>${equipe.nome}</h3>
            <p>Estoque: ${equipe.estoque}</p>
            <p>Caixa: R$ ${equipe.caixa}</p>
            <p>Vendas: ${equipe.vendas}</p>
            <p>Vendas perdidas: ${equipe.vendasPerdidas}</p>
            <p>Custo estoque: R$ ${equipe.custoEstoque}</p>
            <label>Vender: <input type="number" id="venda${index}"></label>
            <button onclick="vender(${index})">Aplicar venda</button>
            ${comprasLiberadas ? `<label>Comprar: <input type="number" id="compra${index}"></label>
            <button onclick="comprar(${index})">Aplicar compra</button>` : ""}
        `;
        container.appendChild(div);
    });
}

function vender(i) {
    const qtd = Number(document.getElementById(`venda${i}`).value);
    const pedido = pedidos[rodada - 1];
    const equipe = equipes[i];
    if (qtd > pedido) return alert("Não pode vender mais que o pedido.");
    if (qtd > equipe.estoque) {
        equipe.vendas += equipe.estoque;
        equipe.vendasPerdidas += pedido - equipe.estoque;
        equipe.caixa += equipe.estoque * 20;
        equipe.estoque = 0;
        alert("Falta de estoque gera perda de receita e imagem.");
    } else {
        equipe.vendas += qtd;
        equipe.caixa += qtd * 20;
        equipe.estoque -= qtd;
    }
    render();
}

function comprar(i) {
    const qtd = Number(document.getElementById(`compra${i}`).value);
    const equipe = equipes[i];
    const custo = qtd * 10;
    if (qtd < 4 || qtd > 8) return alert("Compra deve ser entre 4 e 8.");
    if (equipe.caixa < custo) return alert("Compra não autorizada: caixa insuficiente.");
    equipe.caixa -= custo;
    equipe.estoque += qtd;
    equipe.compras += qtd;
    render();
}

function aplicarCustoEstoque() {
    equipes.forEach(equipe => {
        const custo = equipe.estoque * 5;
        equipe.caixa -= custo;
        equipe.custoEstoque += custo;
    });
}

function avancarRodada() {
    aplicarCustoEstoque();
    if (rodada < 3) {
        rodada++;
        render();
    } else {
        alert("Última rodada alcançada.");
    }
}

function liberarCompras() {
    if (rodada === 2) {
        comprasLiberadas = true;
        render();
    } else {
        alert("Compras só após a Rodada 2.");
    }
}

function encerrarJogo() {
    aplicarCustoEstoque();
    const ranking = document.getElementById("ranking");
    ranking.classList.remove("hidden");
    equipes.sort((a, b) => b.caixa - a.caixa);
    ranking.innerHTML = "<h2>Ranking Final</h2>" + equipes.map((e, i) =>
        `${i + 1}º ${e.nome} — Caixa: R$ ${e.caixa} | Vendas perdidas: ${e.vendasPerdidas} | Custo estoque: R$ ${e.custoEstoque}`
    ).join("");
}

function reiniciar() {
    location.reload();
}

render();    if (rodada < 3) {
        rodada++;
        render();
    } else {
        alert("Última rodada alcançada.");
    }
}

function liberarCompras() {
    if (rodada === 2) {
        comprasLiberadas = true;
        render();
    } else {
        alert("Compras só após a Rodada 2.");
    }
}

function encerrarJogo() {
    aplicarCustoEstoque();
    const ranking = document.getElementById("ranking");
    ranking.classList.remove("hidden");
    equipes.sort((a, b) => b.caixa - a.caixa);
    ranking.innerHTML = "<h2>Ranking Final</h2>" + equipes.map((e, i) =>
        `${i + 1}º ${e.nome} — Caixa: R$ ${e.caixa} | Vendas perdidas: ${e.vendasPerdidas} | Custo estoque: R$ ${e.custoEstoque}`
    ).join("");
}

function reiniciar() {
    location.reload();
}

render();
