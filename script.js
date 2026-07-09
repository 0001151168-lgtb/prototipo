// Dados de exemplo - DATAS ATUALIZADAS
let estoqueData = [
    {
        id: 1,
        codigo: "ING001",
        nome: "Arroz",
        categoria: "Grão",
        quantidade: 30,
        unidade: "kg",
        estoqueMin: 10,
        estoqueMax: 50,
        localizacao: "Prateleira A1",
        status: "ok",
        custoUnitario: 5.50,
        validadePadrao: 365,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-ARZ-001", quantidade: 10, dataValidade: "2026-07-12" },
            { numeroLote: "LOTE-ARZ-002", quantidade: 20, dataValidade: "2026-08-20" }
        ]
    },
    {
        id: 2,
        codigo: "ING002",
        nome: "Feijão",
        categoria: "Grão",
        quantidade: 15,
        unidade: "kg",
        estoqueMin: 5,
        estoqueMax: 25,
        localizacao: "Prateleira A2",
        status: "ok",
        custoUnitario: 8.20,
        validadePadrao: 180,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-FEJ-001", quantidade: 15, dataValidade: "2026-09-10" }
        ]
    },
    {
        id: 3,
        codigo: "ING003",
        nome: "Carne Bovina",
        categoria: "Proteína",
        quantidade: 8,
        unidade: "kg",
        estoqueMin: 3,
        estoqueMax: 15,
        localizacao: "Freezer 1",
        status: "alerta",
        custoUnitario: 32.90,
        validadePadrao: 90,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-CRN-001", quantidade: 8, dataValidade: "2026-07-05" }
        ]
    },
    {
        id: 4,
        codigo: "ING004",
        nome: "Frango",
        categoria: "Proteína",
        quantidade: 12,
        unidade: "kg",
        estoqueMin: 5,
        estoqueMax: 20,
        localizacao: "Freezer 2",
        status: "ok",
        custoUnitario: 18.50,
        validadePadrao: 90,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-FRG-001", quantidade: 12, dataValidade: "2026-01-20" }
        ]
    },
    {
        id: 5,
        codigo: "ING005",
        nome: "Batata",
        categoria: "Legume",
        quantidade: 8,
        unidade: "kg",
        estoqueMin: 8,
        estoqueMax: 30,
        localizacao: "Geladeira 1",
        status: "critico",
        custoUnitario: 4.80,
        validadePadrao: 30,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-BAT-001", quantidade: 8, dataValidade: "2027-08-01" }
        ]
    },
    {
        id: 6,
        codigo: "ING006",
        nome: "Alho",
        categoria: "Tempero",
        quantidade: 7,
        unidade: "kg",
        estoqueMin: 5,
        estoqueMax: 30,
        localizacao: "Prateleira A2",
        status: "ok",
        custoUnitario: 5.50,
        validadePadrao: 365,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-ALH-003", quantidade: 10, dataValidade: "2026-07-18" }
           
        ]
    },
    {
        id: 7,
        codigo: "ING007",
        nome: "Pernil",
        categoria: "Proteina",
        quantidade: 17,
        unidade: "kg",
        estoqueMin: 15,
        estoqueMax: 30,
        localizacao: "Freezer 1",
        status: "ok",
        custoUnitario: 5.50,
        validadePadrao: 365,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-PORCO-005", quantidade: 10, dataValidade: "2026-08-12" }
           
        ]
    },
    {
        id: 8,
        codigo: "ING008",
        nome: "Oléo",
        categoria: "Oléos/Azeites",
        quantidade: 30,
        unidade: "lt",
        estoqueMin: 10,
        estoqueMax: 50,
        localizacao: "Prateleira A2",
        status: "ok",
        custoUnitario: 5.50,
        validadePadrao: 365,
        validadePadraoData: null,
        lotes: [
            { numeroLote: "LOTE-OLEO-001", quantidade: 10, dataValidade: "2026-06-12" }
        
        ]
    },
];

// Histórico de movimentações - DATA ATUALIZADA (hoje)
let historicoData = [
    { id: 1, data: new Date().toISOString().split('T')[0], tipo: "entrada", itemId: 1, quantidade: 20, unidade: "kg", responsavel: "Fornecedor Alimentos SA", motivo: "Compra regular", lote: "LOTE-ARZ-002" },
];

// Dados de receitas
let receitasData = [
    {
        id: 1,
        codigo: "REC001",
        nome: "Feijoada Completa",
        categoria: "Prato Principal",
        porcoes: 20,
        tempoPreparo: 120,
        custoPorcao: 8.75,
        custoTotal: 175.00,
        lucro: 95,
        descricao: "Tradicional feijoada brasileira com carne bovina e linguiça",
        status: "ativo",
        calorias: 450,
        proteinas: 25,
        carboidratos: 35,
        gorduras: 18,
        ingredientes: [
            { itemId: 2, quantidade: 2.5, unidade: "kg", custoUnitario: 8.20, observacao: "Feijão preto" },
            { itemId: 3, quantidade: 3.0, unidade: "kg", custoUnitario: 32.90, observacao: "Carne bovina em cubos" }
        ],
        instrucoes: [
            "Lavar o feijão e deixar de molho por 8 horas",
            "Cozinhar o feijão na panela de pressão por 40 minutos",
            "Refogar a cebola e o alho no óleo",
            "Adicionar a carne e cozinhar até dourar",
            "Misturar o feijão cozido e ajustar o sal",
            "Cozinhar em fogo baixo por 30 minutos"
        ]
    },
    {
        id: 2,
        codigo: "REC002",
        nome: "Arroz Integral",
        categoria: "Guarnição",
        porcoes: 30,
        tempoPreparo: 30,
        custoPorcao: 1.20,
        custoTotal: 36.00,
        lucro: 98,
        descricao: "Arroz integral cozido no vapor",
        status: "ativo",
        calorias: 120,
        proteinas: 3,
        carboidratos: 25,
        gorduras: 1,
        ingredientes: [
            { itemId: 1, quantidade: 3.0, unidade: "kg", custoUnitario: 5.50, observacao: "Arroz integral" }
        ],
        instrucoes: [
            "Lavar o arroz em água corrente",
            "Refogar o arroz no óleo por 2 minutos",
            "Adicionar água na proporção 2:1 (água:arroz)",
            "Cozinhar em fogo baixo por 25 minutos",
            "Deixar repousar por 5 minutos antes de servir"
        ]
    }
];

// ===================== CONVERSÃO DE UNIDADES =====================
const fatoresConversao = {
    'kg': 1,
    'g': 0.001,
    'un': 1,
    'lt': 1,
    'ml': 0.001
};

function converterQuantidade(valor, unidadeOrigem, unidadeDestino) {
    const emBase = valor * (fatoresConversao[unidadeOrigem] || 1);
    return emBase / (fatoresConversao[unidadeDestino] || 1);
}

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const navLinks = document.querySelectorAll('.nav-link');
const pages = {
    dashboard: document.getElementById('dashboardPage'),
    estoque: document.getElementById('estoquePage'),
    fichas: document.getElementById('fichasPage')
};

const novoItemModal = document.getElementById('novoItemModal');
const novaFichaModal = document.getElementById('novaFichaModal');
const entradaModal = document.getElementById('entradaModal');
const saidaModal = document.getElementById('saidaModal');
const notification = document.getElementById('notification');

let receitaAtualId = null;
let editandoReceitaId = null;
let ingredientesTemp = [];

// Função para mostrar notificação
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'flex';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// ===================== FUNÇÃO DE VALIDADE (CORRIGIDA - SEM FUSO) =====================
function calcularValidadeMaisProxima(item) {
    if (!item.lotes || item.lotes.length === 0) {
        return { dataValidade: null, diasRestantes: null, status: 'ok' };
    }

    const lotesOrdenados = [...item.lotes].sort((a, b) => {
        return a.dataValidade.localeCompare(b.dataValidade);
    });

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const validadeMaisProxima = new Date(lotesOrdenados[0].dataValidade + 'T00:00:00');
    const diffTime = validadeMaisProxima - hoje;
    let diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let status = 'ok';
    if (diasRestantes < 0) {
        status = 'critica';
    } else if (diasRestantes <= 15) {
        status = 'critica';
    } else if (diasRestantes <= 30) {
        status = 'alerta';
    }

    return {
        dataValidade: lotesOrdenados[0].dataValidade,
        diasRestantes,
        status
    };
}

// Função para formatar data no padrão brasileiro (SEM FUSO)
function formatarData(dataString) {
    if (!dataString) return 'N/A';
    const partes = dataString.split('-');
    if (partes.length === 3) {
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}

// Função para atualizar o status do item baseado na quantidade
function atualizarStatusItem(item) {
    if (item.quantidade <= item.estoqueMin * 0.3) {
        return 'critico';
    } else if (item.quantidade <= item.estoqueMin) {
        return 'alerta';
    } else {
        return 'ok';
    }
}

function buscarItemPorId(id) {
    return estoqueData.find(item => item.id == id);
}

function buscarReceitaPorId(id) {
    return receitasData.find(receita => receita.id == id);
}

function calcularDataValidadePadrao(itemId) {
    const item = buscarItemPorId(itemId);
    if (!item) {
        const data = new Date();
        data.setDate(data.getDate() + 30);
        return data.toISOString().split('T')[0];
    }
    if (item.validadePadraoData) {
        return item.validadePadraoData;
    }
    const dias = item.validadePadrao || 30;
    const data = new Date();
    data.setDate(data.getDate() + dias);
    return data.toISOString().split('T')[0];
}

function registrarEntrada(itemId, quantidade, lote, validade, fornecedor, notaFiscal, observacoes) {
    const itemIndex = estoqueData.findIndex(item => item.id == itemId);
    if (itemIndex === -1) return false;

    estoqueData[itemIndex].quantidade += parseFloat(quantidade);
    estoqueData[itemIndex].status = atualizarStatusItem(estoqueData[itemIndex]);

    const novoLote = {
        numeroLote: lote || `LOTE-${Date.now()}`,
        quantidade: parseFloat(quantidade),
        dataValidade: validade || calcularDataValidadePadrao(itemId)
    };

    if (!estoqueData[itemIndex].lotes) {
        estoqueData[itemIndex].lotes = [];
    }
    estoqueData[itemIndex].lotes.push(novoLote);

    const novaMovimentacao = {
        id: historicoData.length + 1,
        data: new Date().toISOString().split('T')[0],
        tipo: "entrada",
        itemId: itemId,
        quantidade: parseFloat(quantidade),
        unidade: estoqueData[itemIndex].unidade,
        responsavel: fornecedor || "Fornecedor não informado",
        motivo: observacoes || "Entrada de estoque",
        lote: lote || ""
    };
    historicoData.push(novaMovimentacao);

    return true;
}

function inicializarSelectItens(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    select.innerHTML = '<option value="">Selecione um item...</option>';
    estoqueData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = `${item.nome} (Estoque: ${item.quantidade} ${item.unidade})`;
        select.appendChild(option);
    });
}

// ===================== HISTÓRICO - DATA FORMATADA =====================
function initHistoricoTable(filtroTipo = 'todos', filtroData = '') {
    const tableBody = document.getElementById('historicoTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    let historicoFiltrado = historicoData;

    if (filtroTipo !== 'todos') {
        historicoFiltrado = historicoFiltrado.filter(mov => mov.tipo === filtroTipo);
    }
    if (filtroData) {
        historicoFiltrado = historicoFiltrado.filter(mov => mov.data === filtroData);
    }

    historicoFiltrado.sort((a, b) => new Date(b.data) - new Date(a.data));

    historicoFiltrado.forEach(mov => {
        const item = buscarItemPorId(mov.itemId);
        const itemNome = item ? item.nome : "Item não encontrado";

        let badgeClass = 'badge-primary';
        if (mov.tipo === 'entrada') badgeClass = 'badge-success';
        if (mov.tipo === 'saida') badgeClass = 'badge-warning';
        if (mov.tipo === 'ajuste') badgeClass = 'badge-danger';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatarData(mov.data)}</td>
            <td><span class="badge ${badgeClass}">${mov.tipo.toUpperCase()}</span></td>
            <td>${itemNome}</td>
            <td>${mov.quantidade}</td>
            <td>${mov.unidade || '-'}</td>
            <td>${mov.responsavel}</td>
            <td>${mov.motivo}</td>
            <td>${mov.lote || "-"}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ===================== INICIALIZAÇÃO TABELA ESTOQUE =====================
function initEstoqueTable() {
    const tableBody = document.getElementById('estoqueTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    estoqueData.forEach(item => {
        let statusText, statusClass;
        if (item.status === 'critico') {
            statusText = 'Crítico';
            statusClass = 'badge-danger';
        } else if (item.status === 'alerta') {
            statusText = 'Alerta';
            statusClass = 'badge-warning';
        } else {
            statusText = 'OK';
            statusClass = 'badge-success';
        }

        const validadeInfo = calcularValidadeMaisProxima(item);

        let validadeStatusClass, validadeStatusText;
        if (validadeInfo.status === 'critica') {
            validadeStatusClass = 'validade-critica';
            validadeStatusText = validadeInfo.diasRestantes < 0 ? 'Vencido' : 'Crítica';
        } else if (validadeInfo.status === 'alerta') {
            validadeStatusClass = 'validade-alerta';
            validadeStatusText = 'Atenção';
        } else {
            validadeStatusClass = 'validade-ok';
            validadeStatusText = 'OK';
        }

        let diasTexto = '';
        if (validadeInfo.diasRestantes !== null) {
            const dias = validadeInfo.diasRestantes;
            if (dias === 0) {
                diasTexto = 'Vence hoje';
            } else if (dias < 0) {
                diasTexto = `Vencido há ${Math.abs(dias)} dias`;
            } else {
                diasTexto = `Vence em ${dias} dias`;
            }
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.nome}</strong><br><small>Código: ${item.codigo}</small></td>
            <td>${item.categoria}</td>
            <td><strong>${item.quantidade} ${item.unidade}</strong><br><small>${((item.quantidade / item.estoqueMax) * 100).toFixed(1)}% do máximo</small></td>
            <td>${item.estoqueMin} ${item.unidade}</td>
            <td>${item.estoqueMax} ${item.unidade}</td>
            <td>${validadeInfo.dataValidade ? formatarData(validadeInfo.dataValidade) : 'N/A'}</td>
            <td><div class="validade-status"><div class="validade-indicator ${validadeStatusClass}"></div><span class="validade-text">${validadeStatusText}${diasTexto ? ` (${diasTexto})` : ''}</span></div></td>
            <td>${item.localizacao}</td>
            <td><span class="badge ${statusClass}">${statusText}</span></td>
            <td><div class="table-actions"><button class="action-btn entrada-rapida-btn" data-id="${item.id}" title="Entrada rápida"><i class="fas fa-arrow-down" style="color: var(--success-color);"></i></button><button class="action-btn saida-rapida-btn" data-id="${item.id}" title="Saída rápida"><i class="fas fa-arrow-up" style="color: var(--warning-color);"></i></button></div></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.entrada-rapida-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.getAttribute('data-id');
            document.getElementById('entradaItem').value = itemId;
            entradaModal.classList.add('active');
        });
    });

    document.querySelectorAll('.saida-rapida-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.getAttribute('data-id');
            document.getElementById('saidaItem').value = itemId;
            atualizarEstoqueDisponivel(itemId);
            saidaModal.classList.add('active');
        });
    });
}

// ===================== VALIDADE NO DASHBOARD =====================
function initValidadeTable(filtro = 'todos') {
    const tableBody = document.getElementById('validadeTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    let itensFiltrados = estoqueData;

    if (filtro !== 'todos') {
        itensFiltrados = estoqueData.filter(item => {
            const validadeInfo = calcularValidadeMaisProxima(item);
            return validadeInfo.status === filtro;
        });
    }

    itensFiltrados.sort((a, b) => {
        const validadeA = calcularValidadeMaisProxima(a);
        const validadeB = calcularValidadeMaisProxima(b);
        if (validadeA.diasRestantes === null && validadeB.diasRestantes === null) return 0;
        if (validadeA.diasRestantes === null) return 1;
        if (validadeB.diasRestantes === null) return -1;
        return validadeA.diasRestantes - validadeB.diasRestantes;
    });

    let countCritica = 0;
    estoqueData.forEach(item => {
        const validadeInfo = calcularValidadeMaisProxima(item);
        if (validadeInfo.status === 'critica') countCritica++;
    });

    document.getElementById('validadeCritica').textContent = countCritica;

    // Contar produtos vencidos (diasRestantes < 0)
    let produtosVencidos = 0;
    estoqueData.forEach(item => {
        const validade = calcularValidadeMaisProxima(item);
        if (validade.diasRestantes !== null && validade.diasRestantes < 0) {
            produtosVencidos++;
        }
    });
    document.getElementById('custoMedio').textContent = produtosVencidos;

    itensFiltrados.forEach(item => {
        const validadeInfo = calcularValidadeMaisProxima(item);

        let validadeStatusClass, validadeStatusText;
        if (validadeInfo.status === 'critica') {
            validadeStatusClass = 'validade-critica';
            validadeStatusText = validadeInfo.diasRestantes < 0 ? 'Vencido' : 'Crítica';
        } else if (validadeInfo.status === 'alerta') {
            validadeStatusClass = 'validade-alerta';
            validadeStatusText = 'Atenção';
        } else {
            validadeStatusClass = 'validade-ok';
            validadeStatusText = 'OK';
        }

        let diasTexto = '';
        if (validadeInfo.diasRestantes !== null) {
            const dias = validadeInfo.diasRestantes;
            if (dias === 0) {
                diasTexto = 'Vence hoje';
            } else if (dias < 0) {
                diasTexto = `Vencido há ${Math.abs(dias)} dias`;
            } else {
                diasTexto = `Vence em ${dias} dias`;
            }
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.nome}</strong><br><small>Código: ${item.codigo}</small></td>
            <td>${item.categoria}</td>
            <td><strong>${item.quantidade} ${item.unidade}</strong></td>
            <td>${validadeInfo.dataValidade ? formatarData(validadeInfo.dataValidade) : 'N/A'}</td>
            <td>${diasTexto || 'N/A'}</td>
            <td><div class="validade-status"><div class="validade-indicator ${validadeStatusClass}"></div><span class="validade-text">${validadeStatusText}</span></div></td>
            <td><button class="btn btn-sm btn-outline" onclick="consumirItem(${item.id})"><i class="fas fa-utensils"></i> Retirar</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// ===================== CONSUMIR ITEM (agora "Retirar") =====================
window.consumirItem = function(itemId) {
    const item = buscarItemPorId(itemId);
    if (!item) return;

    const quantidade = prompt(`Quantidade de ${item.nome} a retirar (em ${item.unidade}):`, "1");
    if (!quantidade || isNaN(quantidade) || parseFloat(quantidade) <= 0) {
        showNotification('Quantidade inválida!', 'error');
        return;
    }

    const qtd = parseFloat(quantidade);
    if (qtd > item.quantidade) {
        showNotification(`❌ Estoque insuficiente! Disponível: ${item.quantidade} ${item.unidade}. Retirada não permitida.`, 'error');
        return;
    }

    historicoData.push({
        id: historicoData.length + 1,
        data: new Date().toISOString().split('T')[0],
        tipo: "saida",
        itemId: itemId,
        quantidade: qtd,
        unidade: item.unidade,
        responsavel: "Cozinha",
        motivo: "Retirada direta",
        lote: ""
    });

    item.quantidade -= qtd;
    item.status = atualizarStatusItem(item);

    initEstoqueTable();
    updateKanban();
    initValidadeTable();

    showNotification(`${qtd} ${item.unidade} de ${item.nome} retirado com sucesso!`, 'success');
};

// ===================== KANBAN =====================
function updateKanban() {
    let countCritico = 0, countAlerta = 0, countOk = 0;

    estoqueData.forEach(item => {
        if (item.status === 'critico') countCritico++;
        else if (item.status === 'alerta') countAlerta++;
        else countOk++;
    });

    document.getElementById('countCritico').textContent = countCritico;
    document.getElementById('countAlerta').textContent = countAlerta;
    document.getElementById('countOk').textContent = countOk;
    document.getElementById('estoqueCritico').textContent = countCritico;

    ['kanbanCritico', 'kanbanAlerta', 'kanbanOk'].forEach(columnId => {
        const column = document.getElementById(columnId);
        if (column) column.innerHTML = '';
    });

    estoqueData.forEach(item => {
        let columnId;
        if (item.status === 'critico') columnId = 'kanbanCritico';
        else if (item.status === 'alerta') columnId = 'kanbanAlerta';
        else columnId = 'kanbanOk';

        const column = document.getElementById(columnId);
        if (!column) return;

        const itemElement = document.createElement('div');
        itemElement.className = `kanban-item ${item.status}`;
        itemElement.innerHTML = `
            <div class="item-header"><div class="item-title">${item.nome}</div><div class="item-status status-${item.status}">${item.status === 'critico' ? 'Crítico' : item.status === 'alerta' ? 'Alerta' : 'OK'}</div></div>
            <div class="item-details">Estoque: ${item.quantidade} ${item.unidade}<br>Mín: ${item.estoqueMin} | Máx: ${item.estoqueMax}</div>
            <div class="item-footer"><div>${item.localizacao}</div><div>${((item.quantidade / item.estoqueMax) * 100).toFixed(1)}%</div></div>
        `;
        column.appendChild(itemElement);
    });
}

// ===================== FICHAS TÉCNICAS =====================
function initReceitasTable(filtroCategoria = '') {
    const tableBody = document.getElementById('receitasTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    let receitasFiltradas = receitasData;

    if (filtroCategoria) {
        receitasFiltradas = receitasFiltradas.filter(receita => receita.categoria === filtroCategoria);
    }

    receitasFiltradas.forEach(receita => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${receita.nome}</strong><br><small>Código: ${receita.codigo}</small></td>
            <td>${receita.categoria}</td>
            <td>${receita.porcoes}</td>
            <td>R$ ${receita.custoPorcao.toFixed(2)}</td>
            <td>${receita.tempoPreparo} min</td>
            <td><span class="badge ${receita.status === 'ativo' ? 'badge-success' : 'badge-warning'}">${receita.status === 'ativo' ? 'Ativo' : 'Inativo'}</span></td>
            <td>
                <div class="table-actions">
                    <button class="action-btn view-btn" data-id="${receita.id}" title="Visualizar"><i class="fas fa-eye"></i></button>
                    <button class="action-btn edit-recipe-btn" data-id="${receita.id}" title="Editar"><i class="fas fa-edit"></i></button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);

        row.querySelector('.view-btn').addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            exibirDetalhesReceita(id);
        });

        row.querySelector('.edit-recipe-btn').addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            carregarReceitaParaEdicao(id);
        });
    });
}

function exibirDetalhesReceita(id) {
    const receita = buscarReceitaPorId(id);
    if (!receita) return;

    receitaAtualId = id;

    document.getElementById('detailRecipeTitle').textContent = receita.nome;
    document.getElementById('detailRecipeCost').textContent = `Custo por porção: R$ ${receita.custoPorcao.toFixed(2)}`;
    document.getElementById('detailRecipeCategory').textContent = receita.categoria;
    document.getElementById('detailRecipePortions').textContent = receita.porcoes;
    document.getElementById('detailRecipeTime').textContent = `${receita.tempoPreparo} min`;
    document.getElementById('detailRecipeYield').textContent = `${receita.lucro}%`;
    document.getElementById('detailRecipeTotalCost').textContent = `R$ ${receita.custoTotal.toFixed(2)}`;
    document.getElementById('detailRecipeCalories').textContent = `${receita.calorias} kcal`;
    document.getElementById('detailRecipeProteins').textContent = `${receita.proteinas}g`;
    document.getElementById('detailRecipeCarbs').textContent = `${receita.carboidratos}g`;
    document.getElementById('detailRecipeFats').textContent = `${receita.gorduras}g`;

    const ingredientesBody = document.getElementById('ingredientesTableBody');
    ingredientesBody.innerHTML = '';

    receita.ingredientes.forEach(ing => {
        const item = buscarItemPorId(ing.itemId);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item ? item.nome : 'Ingrediente não encontrado'} ${ing.observacao ? `(${ing.observacao})` : ''}</td>
            <td>${ing.quantidade} ${ing.unidade}</td>
            <td>R$ ${(ing.custoUnitario || 0).toFixed(2)}</td>
            <td>R$ ${(ing.quantidade * (ing.custoUnitario || 0)).toFixed(2)}</td>
            <td><span class="badge ${item && item.quantidade >= ing.quantidade ? 'badge-success' : 'badge-danger'}">${item ? `${item.quantidade} ${item.unidade}` : 'N/A'}</span></td>
        `;
        ingredientesBody.appendChild(row);
    });

    const instrucoesList = document.getElementById('recipeInstructionsList');
    instrucoesList.innerHTML = '';
    receita.instrucoes.forEach((instrucao) => {
        const li = document.createElement('li');
        li.textContent = instrucao;
        instrucoesList.appendChild(li);
    });

    document.querySelectorAll('#fichasPage .tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('#fichasPage .tab-content').forEach(content => content.style.display = 'none');
    document.querySelector('#fichasPage .tab[data-subtab="fichas-detail"]').classList.add('active');
    document.getElementById('fichas-detail').style.display = 'block';
}

// ========== FUNÇÃO DE CÁLCULO DE CUSTOS ==========
function calcularCustosReceita(ingredientes, porcoes) {
    let custoTotal = 0;
    ingredientes.forEach(ing => {
        const item = buscarItemPorId(ing.itemId);
        if (item) {
            const quantidadeEmBase = converterQuantidade(ing.quantidade, ing.unidade, item.unidade);
            custoTotal += quantidadeEmBase * (item.custoUnitario || 0);
        }
    });
    const custoPorcao = porcoes > 0 ? custoTotal / porcoes : 0;
    return { custoTotal, custoPorcao };
}

// ========== FUNÇÃO CARREGAR RECEITA PARA EDIÇÃO ==========
function carregarReceitaParaEdicao(id) {
    const receitaId = parseInt(id, 10);
    const receita = buscarReceitaPorId(receitaId);
    if (!receita) {
        showNotification('Receita não encontrada!', 'error');
        return;
    }
    editandoReceitaId = receitaId;

    document.getElementById('receitaCodigo').value = receita.codigo;
    document.getElementById('receitaNome').value = receita.nome;
    document.getElementById('receitaCategoria').value = receita.categoria;
    document.getElementById('receitaPorcoes').value = receita.porcoes;
    document.getElementById('tempoPreparo').value = receita.tempoPreparo;
    document.getElementById('lucro').value = receita.lucro;
    document.getElementById('receitaDescricao').value = receita.descricao || '';

    ingredientesTemp = receita.ingredientes.map(ing => {
        const item = buscarItemPorId(ing.itemId);
        return {
            itemId: ing.itemId,
            nome: item ? item.nome : 'Item não encontrado',
            quantidade: ing.quantidade,
            unidade: ing.unidade,
            custoUnitario: ing.custoUnitario || (item ? item.custoUnitario : 0),
            observacao: ing.observacao || ''
        };
    });
    atualizarListaIngredientesModal();

    document.querySelector('#novaFichaModal .modal-title').textContent = 'Editar Ficha Técnica';
    novaFichaModal.classList.add('active');
}

function atualizarEstoqueDisponivel(itemId) {
    const item = buscarItemPorId(itemId);
    const estoqueDisponivelEl = document.getElementById('estoqueDisponivel');
    const saidaUnidadeSelect = document.getElementById('saidaUnidade');

    if (item) {
        estoqueDisponivelEl.textContent = `Disponível: ${item.quantidade} ${item.unidade}`;
        if (saidaUnidadeSelect) {
            saidaUnidadeSelect.value = item.unidade;
        }
    } else {
        estoqueDisponivelEl.textContent = '';
    }
}

// ===================== GERENCIAMENTO DE INGREDIENTES NO MODAL =====================
function adicionarIngrediente() {
    const select = document.getElementById('ingredienteItem');
    const itemId = parseInt(select.value);
    const quantidade = parseFloat(document.getElementById('ingredienteQuantidade').value);
    const unidade = document.getElementById('ingredienteUnidade').value;

    if (!itemId || isNaN(quantidade) || quantidade <= 0) {
        showNotification('Selecione um item e informe uma quantidade válida.', 'warning');
        return;
    }

    const item = buscarItemPorId(itemId);
    if (!item) {
        showNotification('Item não encontrado.', 'error');
        return;
    }

    const existente = ingredientesTemp.find(ing => ing.itemId === itemId);
    if (existente) {
        showNotification('Este item já foi adicionado como ingrediente.', 'warning');
        return;
    }

    ingredientesTemp.push({
        itemId: itemId,
        nome: item.nome,
        quantidade: quantidade,
        unidade: unidade,
        custoUnitario: item.custoUnitario || 0,
        observacao: ''
    });

    atualizarListaIngredientesModal();
    select.value = '';
    document.getElementById('ingredienteQuantidade').value = 1;
    document.getElementById('ingredienteUnidade').value = item.unidade || 'kg';
    showNotification(`Ingrediente "${item.nome}" adicionado.`, 'success');
}

function removerIngrediente(index) {
    ingredientesTemp.splice(index, 1);
    atualizarListaIngredientesModal();
}

function atualizarListaIngredientesModal() {
    const tbody = document.getElementById('ingredientesListaModal');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (ingredientesTemp.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#999;">Nenhum ingrediente adicionado</td></tr>';
        return;
    }

    ingredientesTemp.forEach((ing, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ing.nome}</td>
            <td>${ing.quantidade}</td>
            <td>${ing.unidade}</td>
            <td><button type="button" class="btn btn-sm btn-danger" onclick="removerIngrediente(${index})"><i class="fas fa-times"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}

function popularSelectIngredientes() {
    const select = document.getElementById('ingredienteItem');
    if (!select) return;
    select.innerHTML = '<option value="">Selecione um item...</option>';
    estoqueData.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.nome} (${item.unidade})`;
        select.appendChild(opt);
    });
}

// ===================== INICIALIZAÇÃO =====================
function initApp() {
    initEstoqueTable();
    updateKanban();
    initReceitasTable();
    initValidadeTable();
    inicializarSelectItens('entradaItem');
    inicializarSelectItens('saidaItem');
    popularSelectIngredientes();

    pages.dashboard.style.display = 'block';
    document.querySelector('.nav-link').classList.add('active');

    setTimeout(() => {
        showNotification('Bem-vindo ao Inventario Ágil!', 'success');
    }, 1000);
}

// ===================== EVENT LISTENERS =====================
document.addEventListener('DOMContentLoaded', () => {
    initApp();

    const sidebarToggleElem = document.getElementById('sidebarToggle');
    if (sidebarToggleElem) {
        sidebarToggleElem.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('collapsed');
        });
    }

    const buscarInput = document.getElementById('buscarItemInput');
    if (buscarInput) {
        buscarInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            const linhas = document.querySelectorAll('#estoqueTableBody tr');
            linhas.forEach(linha => {
                const nomeItem = linha.querySelector('td:first-child')?.innerText.toLowerCase() || '';
                linha.style.display = nomeItem.includes(termo) ? '' : 'none';
            });
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            Object.values(pages).forEach(page => { if (page) page.style.display = 'none'; });
            const pageName = link.getAttribute('data-page');
            if (pages[pageName]) {
                pages[pageName].style.display = 'block';
                if (pageName === 'dashboard') initValidadeTable();
                if (pageName === 'estoque') initHistoricoTable();
                if (pageName === 'fichas') {
                    document.querySelectorAll('#fichasPage .tab').forEach(t => t.classList.remove('active'));
                    document.querySelectorAll('#fichasPage .tab-content').forEach(c => c.style.display = 'none');
                    document.querySelector('#fichasPage .tab[data-subtab="fichas-list"]').classList.add('active');
                    document.getElementById('fichas-list').style.display = 'block';
                    initReceitasTable();
                }
            }
        });
    });

    document.querySelectorAll('#fichasPage .tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('#fichasPage .tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const subtab = this.dataset.subtab;
            document.querySelectorAll('#fichasPage .tab-content').forEach(c => c.style.display = 'none');
            document.getElementById(subtab).style.display = 'block';

            if (subtab === 'fichas-detail' && receitasData.length > 0) {
                if (receitaAtualId) {
                    exibirDetalhesReceita(receitaAtualId);
                } else {
                    exibirDetalhesReceita(receitasData[0].id);
                }
            }
            if (subtab === 'fichas-list') {
                initReceitasTable();
            }
        });
    });

    const backToRecipesBtn = document.getElementById('backToRecipesBtn');
    if (backToRecipesBtn) {
        backToRecipesBtn.addEventListener('click', () => {
            document.querySelectorAll('#fichasPage .tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('#fichasPage .tab-content').forEach(content => content.style.display = 'none');
            document.querySelector('#fichasPage .tab[data-subtab="fichas-list"]').classList.add('active');
            document.getElementById('fichas-list').style.display = 'block';
            initReceitasTable();
        });
    }

    document.getElementById('editarReceitaBtn').addEventListener('click', function() {
        if (receitaAtualId !== null) {
            carregarReceitaParaEdicao(receitaAtualId);
        } else {
            showNotification('Nenhuma receita selecionada para editar.', 'warning');
        }
    });

    // ===================== BOTÃO PRODUZIR RECEITA (MÚLTIPLAS VEZES) =====================
    document.getElementById('produzirReceitaBtn').addEventListener('click', function() {
        if (receitaAtualId === null) {
            showNotification('Nenhuma receita selecionada para produção.', 'warning');
            return;
        }

        const receita = buscarReceitaPorId(receitaAtualId);
        if (!receita) {
            showNotification('Receita não encontrada.', 'error');
            return;
        }

        if (!receita.ingredientes || receita.ingredientes.length === 0) {
            showNotification(`A receita "${receita.nome}" não possui ingredientes cadastrados.`, 'warning');
            return;
        }

        const vezesInput = prompt(`Quantas vezes deseja produzir a receita "${receita.nome}"?`, "1");
        if (vezesInput === null) return;
        const vezes = parseInt(vezesInput);
        if (isNaN(vezes) || vezes <= 0) {
            showNotification('Quantidade inválida. Deve ser um número positivo.', 'error');
            return;
        }

        let podeProduzir = true;
        let faltantes = [];

        receita.ingredientes.forEach(ing => {
            const item = buscarItemPorId(ing.itemId);
            if (!item) {
                podeProduzir = false;
                faltantes.push(`Ingrediente ID ${ing.itemId} não encontrado no estoque`);
                return;
            }
            const quantidadeNecessaria = converterQuantidade(ing.quantidade, ing.unidade, item.unidade) * vezes;
            if (item.quantidade < quantidadeNecessaria) {
                podeProduzir = false;
                faltantes.push(`${item.nome} (precisa: ${quantidadeNecessaria.toFixed(2)} ${item.unidade}, disponível: ${item.quantidade} ${item.unidade})`);
            }
        });

        if (!podeProduzir) {
            showNotification(`❌ Estoque insuficiente para produzir "${receita.nome}" ${vezes} vez(es). Itens faltantes: ${faltantes.join('; ')}`, 'error');
            return;
        }

        receita.ingredientes.forEach(ing => {
            const item = buscarItemPorId(ing.itemId);
            const quantidadeNecessaria = converterQuantidade(ing.quantidade, ing.unidade, item.unidade) * vezes;
            item.quantidade = Math.round((item.quantidade - quantidadeNecessaria) * 1000) / 1000;
            item.status = atualizarStatusItem(item);

            historicoData.push({
                id: historicoData.length + 1,
                data: new Date().toISOString().split('T')[0],
                tipo: "saida",
                itemId: item.id,
                quantidade: quantidadeNecessaria,
                unidade: item.unidade,
                responsavel: "Cozinha",
                motivo: `Produção (${vezes}x): ${receita.nome}`,
                lote: ""
            });
        });

        initEstoqueTable();
        updateKanban();
        initValidadeTable();
        initHistoricoTable();
        showNotification(`✅ Receita "${receita.nome}" produzida ${vezes} vez(es) com sucesso!`, 'success');
    });

    document.getElementById('novoItemBtn').addEventListener('click', () => novoItemModal.classList.add('active'));
    document.getElementById('novaFichaBtn').addEventListener('click', () => {
        editandoReceitaId = null;
        document.querySelector('#novaFichaModal .modal-title').textContent = 'Nova Ficha Técnica';
        document.getElementById('novaFichaForm').reset();
        ingredientesTemp = [];
        atualizarListaIngredientesModal();
        novaFichaModal.classList.add('active');
    });
    document.getElementById('novaReceitaBtn').addEventListener('click', () => {
        editandoReceitaId = null;
        document.querySelector('#novaFichaModal .modal-title').textContent = 'Nova Ficha Técnica';
        document.getElementById('novaFichaForm').reset();
        ingredientesTemp = [];
        atualizarListaIngredientesModal();
        novaFichaModal.classList.add('active');
    });
    document.getElementById('entradaEstoqueBtn').addEventListener('click', () => { inicializarSelectItens('entradaItem'); entradaModal.classList.add('active'); });
    document.getElementById('saidaEstoqueBtn').addEventListener('click', () => { inicializarSelectItens('saidaItem'); saidaModal.classList.add('active'); });

    document.querySelectorAll('.modal-close, #cancelarNovoItem, #cancelarFicha, #cancelarEntrada, #cancelarSaida').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) modal.classList.remove('active');
            if (modal && modal.id === 'novaFichaModal') {
                editandoReceitaId = null;
                document.querySelector('#novaFichaModal .modal-title').textContent = 'Nova Ficha Técnica';
            }
        });
    });
    document.getElementById('closeNovoItemModal').addEventListener('click', () => novoItemModal.classList.remove('active'));
    document.getElementById('closeFichaModal').addEventListener('click', () => {
        novaFichaModal.classList.remove('active');
        editandoReceitaId = null;
        document.querySelector('#novaFichaModal .modal-title').textContent = 'Nova Ficha Técnica';
    });
    document.getElementById('closeEntradaModal').addEventListener('click', () => entradaModal.classList.remove('active'));
    document.getElementById('closeSaidaModal').addEventListener('click', () => saidaModal.classList.remove('active'));
    document.getElementById('cancelarNovoItem').addEventListener('click', () => novoItemModal.classList.remove('active'));
    document.getElementById('cancelarFicha').addEventListener('click', () => {
        novaFichaModal.classList.remove('active');
        editandoReceitaId = null;
        document.querySelector('#novaFichaModal .modal-title').textContent = 'Nova Ficha Técnica';
    });
    document.getElementById('cancelarEntrada').addEventListener('click', () => entradaModal.classList.remove('active'));
    document.getElementById('cancelarSaida').addEventListener('click', () => saidaModal.classList.remove('active'));

    document.getElementById('filtroTipoMov').addEventListener('change', () => {
        const tipo = document.getElementById('filtroTipoMov').value;
        const data = document.getElementById('filtroDataMov').value;
        initHistoricoTable(tipo, data);
    });
    document.getElementById('filtroDataMov').addEventListener('change', () => {
        const tipo = document.getElementById('filtroTipoMov').value;
        const data = document.getElementById('filtroDataMov').value;
        initHistoricoTable(tipo, data);
    });

    const movimentacoesBtn = document.getElementById('movimentacoesBtn');
    if (movimentacoesBtn) {
        movimentacoesBtn.addEventListener('click', () => {
            const historicoContainer = document.getElementById('historicoContainer');
            if (historicoContainer.style.display === 'none') {
                historicoContainer.style.display = 'block';
                initHistoricoTable();
            } else {
                historicoContainer.style.display = 'none';
            }
        });
    }

    document.getElementById('novoItemForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const novoItem = {
            id: estoqueData.length + 1,
            codigo: document.getElementById('itemCodigo').value,
            nome: document.getElementById('itemNome').value,
            categoria: document.getElementById('itemCategoria').value,
            quantidade: parseFloat(document.getElementById('quantidadeInicial').value) || 0,
            unidade: document.getElementById('itemUnidade').value,
            estoqueMin: parseFloat(document.getElementById('estoqueMin').value),
            estoqueMax: parseFloat(document.getElementById('estoqueMax').value),
            localizacao: document.getElementById('localizacao').value,
            validadePadraoData: document.getElementById('validadePadraoData').value || null,
            validadePadrao: 30,
            custoUnitario: parseFloat(document.getElementById('custoUnitario').value) || 0,
            status: 'ok',
            lotes: []
        };
        estoqueData.push(novoItem);
        initEstoqueTable();
        updateKanban();
        initValidadeTable();
        popularSelectIngredientes();
        novoItemModal.classList.remove('active');
        showNotification(`Item "${novoItem.nome}" cadastrado com sucesso!`, 'success');
        document.getElementById('novoItemForm').reset();
    });

    // ========== SUBMISSÃO DO FORMULÁRIO DE FICHA ==========
    document.getElementById('novaFichaForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const codigo = document.getElementById('receitaCodigo').value;
        const nome = document.getElementById('receitaNome').value;
        const categoria = document.getElementById('receitaCategoria').value;
        const porcoes = parseInt(document.getElementById('receitaPorcoes').value);
        const tempoPreparo = parseInt(document.getElementById('tempoPreparo').value);
        const lucro = parseInt(document.getElementById('lucro').value) || 95;
        const descricao = document.getElementById('receitaDescricao').value;

        const ingredientes = ingredientesTemp.map(ing => ({
            itemId: ing.itemId,
            quantidade: ing.quantidade,
            unidade: ing.unidade,
            custoUnitario: ing.custoUnitario || 0,
            observacao: ing.observacao || ''
        }));

        const { custoTotal, custoPorcao } = calcularCustosReceita(ingredientes, porcoes);

        if (editandoReceitaId !== null) {
            const index = receitasData.findIndex(r => r.id === editandoReceitaId);
            if (index !== -1) {
                receitasData[index].codigo = codigo;
                receitasData[index].nome = nome;
                receitasData[index].categoria = categoria;
                receitasData[index].porcoes = porcoes;
                receitasData[index].tempoPreparo = tempoPreparo;
                receitasData[index].lucro = lucro;
                receitasData[index].descricao = descricao;
                receitasData[index].ingredientes = ingredientes;
                receitasData[index].custoTotal = custoTotal;
                receitasData[index].custoPorcao = custoPorcao;
                showNotification(`Ficha técnica "${nome}" atualizada com sucesso!`, 'success');
                initReceitasTable();
                if (receitaAtualId && receitaAtualId === editandoReceitaId) {
                    exibirDetalhesReceita(editandoReceitaId);
                }
            } else {
                showNotification('Erro ao atualizar ficha. Receita não encontrada.', 'error');
                return;
            }
            editandoReceitaId = null;
            document.querySelector('#novaFichaModal .modal-title').textContent = 'Nova Ficha Técnica';
        } else {
            const novaReceita = {
                id: receitasData.length + 1,
                codigo: codigo,
                nome: nome,
                categoria: categoria,
                porcoes: porcoes,
                tempoPreparo: tempoPreparo,
                lucro: lucro,
                descricao: descricao,
                custoPorcao: custoPorcao,
                custoTotal: custoTotal,
                status: 'ativo',
                calorias: 0,
                proteinas: 0,
                carboidratos: 0,
                gorduras: 0,
                ingredientes: ingredientes,
                instrucoes: []
            };
            receitasData.push(novaReceita);
            showNotification(`Ficha técnica "${nome}" criada com sucesso!`, 'success');
            initReceitasTable();
        }

        novaFichaModal.classList.remove('active');
        document.getElementById('novaFichaForm').reset();
        ingredientesTemp = [];
        atualizarListaIngredientesModal();
    });

    document.getElementById('entradaForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const itemId = document.getElementById('entradaItem').value;
        const quantidade = document.getElementById('entradaQuantidade').value;
        const lote = document.getElementById('entradaLote').value;
        const validade = document.getElementById('entradaValidade').value;
        const fornecedor = document.getElementById('entradaFornecedor').value;
        const notaFiscal = document.getElementById('entradaNotaFiscal').value;
        const observacoes = document.getElementById('entradaObservacoes').value;

        if (!itemId || !quantidade || quantidade <= 0) {
            showNotification('Preencha todos os campos obrigatórios corretamente.', 'error');
            return;
        }

        const sucesso = registrarEntrada(itemId, quantidade, lote, validade, fornecedor, notaFiscal, observacoes);
        if (sucesso) {
            const item = buscarItemPorId(itemId);
            showNotification(`Entrada de ${quantidade} ${item.unidade} de ${item.nome} registrada com sucesso!`, 'success');
            initEstoqueTable();
            updateKanban();
            initValidadeTable();
            popularSelectIngredientes();
            entradaModal.classList.remove('active');
            document.getElementById('entradaForm').reset();
        } else {
            showNotification('Erro ao registrar entrada. Tente novamente.', 'error');
        }
    });

    document.getElementById('saidaForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const itemId = document.getElementById('saidaItem').value;
        const quantidade = parseFloat(document.getElementById('saidaQuantidade').value);
        const unidadeSaida = document.getElementById('saidaUnidade').value;
        const motivo = document.getElementById('saidaMotivo').value;
        const responsavel = document.getElementById('saidaResponsavel').value;
        const loteSelecionado = document.getElementById('saidaLote').value;
        const observacoes = document.getElementById('saidaObservacoes').value;

        if (!itemId || !quantidade || quantidade <= 0 || !motivo || !responsavel || !unidadeSaida) {
            showNotification('Preencha todos os campos obrigatórios corretamente.', 'error');
            return;
        }

        const item = buscarItemPorId(itemId);
        if (!item) {
            showNotification('Item não encontrado.', 'error');
            return;
        }

        const quantidadeEmBase = converterQuantidade(quantidade, unidadeSaida, item.unidade);

        if (quantidadeEmBase > item.quantidade) {
            showNotification(`❌ Estoque insuficiente! Disponível: ${item.quantidade} ${item.unidade}. Saída não permitida.`, 'error');
            return;
        }

        item.quantidade = Math.round((item.quantidade - quantidadeEmBase) * 1000) / 1000;
        item.status = atualizarStatusItem(item);

        historicoData.push({
            id: historicoData.length + 1,
            data: new Date().toISOString().split('T')[0],
            tipo: "saida",
            itemId: itemId,
            quantidade: quantidade,
            unidade: unidadeSaida,
            responsavel: responsavel,
            motivo: motivo,
            lote: loteSelecionado || ""
        });

        showNotification(`Saída de ${quantidade} ${unidadeSaida} de ${item.nome} registrada com sucesso!`, 'success');
        initEstoqueTable();
        updateKanban();
        initValidadeTable();
        initHistoricoTable();
        popularSelectIngredientes();
        saidaModal.classList.remove('active');
        document.getElementById('saidaForm').reset();
    });

    document.getElementById('saidaItem').addEventListener('change', function() {
        const itemId = parseInt(this.value);
        if (itemId) {
            atualizarEstoqueDisponivel(itemId);
        } else {
            document.getElementById('estoqueDisponivel').textContent = '';
        }
    });

    document.getElementById('filtroValidade').addEventListener('change', function() { initValidadeTable(this.value); });
    document.getElementById('filtroCategoriaReceita').addEventListener('change', function() { initReceitasTable(this.value); });

    document.getElementById('novaCompraBtn').addEventListener('click', () => {
        document.querySelector('.nav-link[data-page="estoque"]').click();
        setTimeout(() => { document.getElementById('entradaEstoqueBtn').click(); }, 100);
    });

    document.getElementById('addIngredienteBtn').addEventListener('click', adicionarIngrediente);

    document.addEventListener('change', function(e) {
        if (e.target.id === 'ingredienteItem') {
            const itemId = parseInt(e.target.value);
            if (itemId) {
                const item = buscarItemPorId(itemId);
                if (item) {
                    document.getElementById('ingredienteUnidade').value = item.unidade;
                }
            }
        }
    });
});

// ===================== ATUALIZAR CARD VENCIDOS =====================
function atualizarCardVencidos() {
    const vencidos = [];
    estoqueData.forEach(item => {
        const validade = calcularValidadeMaisProxima(item);
        if (validade.diasRestantes !== null && validade.diasRestantes < 0) {
            vencidos.push({
                nome: item.nome,
                quantidade: item.quantidade,
                unidade: item.unidade,
                dias: Math.abs(validade.diasRestantes)
            });
        }
    });

    document.getElementById('custoMedio').textContent = vencidos.length;

    const lista = document.getElementById('listaVencidos');
    if (!lista) return;

    if (vencidos.length === 0) {
        lista.innerHTML = '<li style="color: #999; font-style: italic;">Nenhum produto vencido</li>';
    } else {
        lista.innerHTML = vencidos.map(item =>
            `<li><span class="item-nome">${item.nome}</span><span class="item-dias">${item.dias} dias</span></li>`
        ).join('');
    }
}