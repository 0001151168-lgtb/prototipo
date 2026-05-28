 // Dados de exemplo
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
                lotes: [
                    { numeroLote: "LOTE-ARZ-001", quantidade: 10, dataValidade: "2024-06-15" },
                    { numeroLote: "LOTE-ARZ-002", quantidade: 20, dataValidade: "2024-08-20" }
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
                lotes: [
                    { numeroLote: "LOTE-FEJ-001", quantidade: 15, dataValidade: "2024-03-10" }
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
                lotes: [
                    { numeroLote: "LOTE-CRN-001", quantidade: 8, dataValidade: "2023-12-05" }
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
                lotes: [
                    { numeroLote: "LOTE-FRG-001", quantidade: 12, dataValidade: "2024-01-20" }
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
                lotes: [
                    { numeroLote: "LOTE-BAT-001", quantidade: 8, dataValidade: "2023-11-01" }
                ]
            }
        ];

        // Histórico de movimentações
        let historicoData = [
            { id: 1, data: "2023-10-10", tipo: "entrada", itemId: 1, quantidade: 20, responsavel: "Fornecedor Alimentos SA", motivo: "Compra regular", lote: "LOTE-ARZ-002" },
            { id: 2, data: "2023-10-09", tipo: "saida", itemId: 1, quantidade: 5, responsavel: "Cozinha", motivo: "Produção: Arroz Integral", lote: "LOTE-ARZ-001" },
            { id: 3, data: "2023-10-08", tipo: "entrada", itemId: 3, quantidade: 8, responsavel: "Frigorífico Boi Gordo", motivo: "Compra semanal", lote: "LOTE-CRN-001" },
            { id: 4, data: "2023-10-07", tipo: "saida", itemId: 5, quantidade: 10, responsavel: "Cozinha", motivo: "Produção: Purê de Batata", lote: "" }
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
                rendimento: 95,
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
                rendimento: 98,
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

        let fluxosData = [
            { origem: "Recepção MP", destino: "Armazenamento", distancia: 10, tipo: "Normal", observacao: "MP para estoque" },
            { origem: "Armazenamento", destino: "Preparo", distancia: 15, tipo: "Normal", observacao: "Busca ingredientes" }
        ];

        // DOM Elements
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = {
            dashboard: document.getElementById('dashboardPage'),
            estoque: document.getElementById('estoquePage'),
            fichas: document.getElementById('fichasPage'),
            layout: document.getElementById('layoutPage')
        };

        // Modal Elements
        const novoItemModal = document.getElementById('novoItemModal');
        const novaFichaModal = document.getElementById('novaFichaModal');
        const entradaModal = document.getElementById('entradaModal');
        const saidaModal = document.getElementById('saidaModal');
        const notification = document.getElementById('notification');

        // Variáveis de controle
        let receitaAtualId = null;

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

        // Função para calcular a validade mais próxima de um item
        function calcularValidadeMaisProxima(item) {
            if (!item.lotes || item.lotes.length === 0) {
                return { dataValidade: null, diasRestantes: null, status: 'ok' };
            }
            
            // Ordenar lotes por data de validade (mais próxima primeiro)
            const lotesOrdenados = [...item.lotes].sort((a, b) => 
                new Date(a.dataValidade) - new Date(b.dataValidade)
            );
            
            const hoje = new Date();
            const validadeMaisProxima = new Date(lotesOrdenados[0].dataValidade);
            const diffTime = validadeMaisProxima - hoje;
            const diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            let status = 'ok';
            if (diasRestantes <= 0) {
                status = 'critica'; // Vencido
            } else if (diasRestantes <= 15) {
                status = 'critica'; // Próximo do vencimento (15 dias)
            } else if (diasRestantes <= 30) {
                status = 'alerta'; // Atenção (30 dias)
            }
            
            return {
                dataValidade: validadeMaisProxima.toISOString().split('T')[0],
                diasRestantes,
                status
            };
        }

        // Função para formatar data
        function formatarData(dataString) {
            if (!dataString) return 'N/A';
            const data = new Date(dataString);
            return data.toLocaleDateString('pt-BR');
        }

        // Função para atualizar o status do item baseado na quantidade
        function atualizarStatusItem(item) {
            const percentual = (item.quantidade / item.estoqueMax) * 100;
            
            if (item.quantidade <= item.estoqueMin * 0.3) {
                return 'critico';
            } else if (item.quantidade <= item.estoqueMin) {
                return 'alerta';
            } else {
                return 'ok';
            }
        }

        // Função para buscar item pelo ID
        function buscarItemPorId(id) {
            return estoqueData.find(item => item.id == id);
        }

        // Função para buscar receita pelo ID
        function buscarReceitaPorId(id) {
            return receitasData.find(receita => receita.id == id);
        }

        // Função para registrar entrada de produto
        function registrarEntrada(itemId, quantidade, lote, validade, fornecedor, notaFiscal, observacoes) {
            // Encontrar o item
            const itemIndex = estoqueData.findIndex(item => item.id == itemId);
            
            if (itemIndex === -1) return false;
            
            // Atualizar quantidade
            estoqueData[itemIndex].quantidade += parseFloat(quantidade);
            
            // Atualizar status
            estoqueData[itemIndex].status = atualizarStatusItem(estoqueData[itemIndex]);
            
            // Adicionar lote
            const novoLote = {
                numeroLote: lote || `LOTE-${Date.now()}`,
                quantidade: parseFloat(quantidade),
                dataValidade: validade || calcularDataValidadePadrao(itemId)
            };
            
            if (!estoqueData[itemIndex].lotes) {
                estoqueData[itemIndex].lotes = [];
            }
            
            estoqueData[itemIndex].lotes.push(novoLote);
            
            // Registrar no histórico
            const novaMovimentacao = {
                id: historicoData.length + 1,
                data: new Date().toISOString().split('T')[0],
                tipo: "entrada",
                itemId: itemId,
                quantidade: parseFloat(quantidade),
                responsavel: fornecedor || "Fornecedor não informado",
                motivo: observacoes || "Entrada de estoque",
                lote: lote || ""
            };
            historicoData.push(novaMovimentacao);
            
            return true;
        }

        // Função para calcular data de validade padrão
        function calcularDataValidadePadrao(itemId) {
            const item = buscarItemPorId(itemId);
            if (!item || !item.validadePadrao) {
                // Padrão: 30 dias a partir de hoje
                const data = new Date();
                data.setDate(data.getDate() + 30);
                return data.toISOString().split('T')[0];
            }
            
            const data = new Date();
            data.setDate(data.getDate() + item.validadePadrao);
            return data.toISOString().split('T')[0];
        }

        // Função para inicializar o select de itens nos modais
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

        // Função para inicializar tabela de histórico
        function initHistoricoTable(filtroTipo = 'todos', filtroData = '') {
            const tableBody = document.getElementById('historicoTableBody');
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            let historicoFiltrado = historicoData;
            
            // Aplicar filtros
            if (filtroTipo !== 'todos') {
                historicoFiltrado = historicoFiltrado.filter(mov => mov.tipo === filtroTipo);
            }
            
            if (filtroData) {
                historicoFiltrado = historicoFiltrado.filter(mov => mov.data === filtroData);
            }
            
            // Ordenar por data (mais recente primeiro)
            historicoFiltrado.sort((a, b) => new Date(b.data) - new Date(a.data));
            
            historicoFiltrado.forEach(mov => {
                const item = buscarItemPorId(mov.itemId);
                const itemNome = item ? item.nome : "Item não encontrado";
                
                // Determinar cor do badge baseado no tipo
                let badgeClass = 'badge-primary';
                if (mov.tipo === 'entrada') badgeClass = 'badge-success';
                if (mov.tipo === 'saida') badgeClass = 'badge-warning';
                if (mov.tipo === 'ajuste') badgeClass = 'badge-danger';
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${mov.data}</td>
                    <td><span class="badge ${badgeClass}">${mov.tipo.toUpperCase()}</span></td>
                    <td>${itemNome}</td>
                    <td>${mov.quantidade}</td>
                    <td>${mov.responsavel}</td>
                    <td>${mov.motivo}</td>
                    <td>${mov.lote || "-"}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Função para inicializar tabela de estoque
        function initEstoqueTable() {
            const tableBody = document.getElementById('estoqueTableBody');
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            estoqueData.forEach(item => {
                // Determinar status e cor
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
                
                // Calcular validade
                const validadeInfo = calcularValidadeMaisProxima(item);
                
                // Determinar status de validade
                let validadeStatusClass, validadeStatusText;
                if (validadeInfo.status === 'critica') {
                    validadeStatusClass = 'validade-critica';
                    validadeStatusText = validadeInfo.diasRestantes <= 0 ? 'Vencido' : 'Crítica';
                } else if (validadeInfo.status === 'alerta') {
                    validadeStatusClass = 'validade-alerta';
                    validadeStatusText = 'Atenção';
                } else {
                    validadeStatusClass = 'validade-ok';
                    validadeStatusText = 'OK';
                }
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <strong>${item.nome}</strong><br>
                        <small>Código: ${item.codigo}</small>
                    </td>
                    <td>${item.categoria}</td>
                    <td>
                        <strong>${item.quantidade} ${item.unidade}</strong><br>
                        <small>${((item.quantidade / item.estoqueMax) * 100).toFixed(1)}% do máximo</small>
                    </td>
                    <td>${item.estoqueMin} ${item.unidade}</td>
                    <td>${item.estoqueMax} ${item.unidade}</td>
                    <td>${validadeInfo.dataValidade ? formatarData(validadeInfo.dataValidade) : 'N/A'}</td>
                    <td>
                        <div class="validade-status">
                            <div class="validade-indicator ${validadeStatusClass}"></div>
                            <span class="validade-text">${validadeStatusText}${validadeInfo.diasRestantes !== null ? ` (${validadeInfo.diasRestantes} dias)` : ''}</span>
                        </div>
                    </td>
                    <td>${item.localizacao}</td>
                    <td><span class="badge ${statusClass}">${statusText}</span></td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn entrada-rapida-btn" data-id="${item.id}" title="Entrada rápida">
                                <i class="fas fa-arrow-down" style="color: var(--success-color);"></i>
                            </button>
                            <button class="action-btn saida-rapida-btn" data-id="${item.id}" title="Saída rápida">
                                <i class="fas fa-arrow-up" style="color: var(--warning-color);"></i>
                            </button>
                        </div>
                    </td>
                `;
                tableBody.appendChild(row);
            });
            
            // Adicionar eventos aos botões de ação rápida
            document.querySelectorAll('.entrada-rapida-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const itemId = btn.getAttribute('data-id');
                    const item = buscarItemPorId(itemId);
                    
                    // Preencher modal de entrada com o item selecionado
                    document.getElementById('entradaItem').value = itemId;
                    
                    // Mostrar modal de entrada
                    entradaModal.classList.add('active');
                });
            });
            
            document.querySelectorAll('.saida-rapida-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const itemId = btn.getAttribute('data-id');
                    const item = buscarItemPorId(itemId);
                    
                    // Preencher modal de saída com o item selecionado
                    document.getElementById('saidaItem').value = itemId;
                    atualizarEstoqueDisponivel(itemId);
                    
                    // Mostrar modal de saída
                    saidaModal.classList.add('active');
                });
            });
        }

        // Função para inicializar tabela de validade no dashboard
        function initValidadeTable(filtro = 'todos') {
            const tableBody = document.getElementById('validadeTableBody');
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            let itensFiltrados = estoqueData;
            
            // Aplicar filtro
            if (filtro !== 'todos') {
                itensFiltrados = estoqueData.filter(item => {
                    const validadeInfo = calcularValidadeMaisProxima(item);
                    return validadeInfo.status === filtro;
                });
            }
            
            // Ordenar por validade (mais próxima primeiro)
            itensFiltrados.sort((a, b) => {
                const validadeA = calcularValidadeMaisProxima(a);
                const validadeB = calcularValidadeMaisProxima(b);
                
                if (validadeA.diasRestantes === null && validadeB.diasRestantes === null) return 0;
                if (validadeA.diasRestantes === null) return 1;
                if (validadeB.diasRestantes === null) return -1;
                
                return validadeA.diasRestantes - validadeB.diasRestantes;
            });
            
            // Contar itens com validade crítica
            let countCritica = 0;
            estoqueData.forEach(item => {
                const validadeInfo = calcularValidadeMaisProxima(item);
                if (validadeInfo.status === 'critica') {
                    countCritica++;
                }
            });
            
            // Atualizar contador no dashboard
            document.getElementById('validadeCritica').textContent = countCritica;
            
            itensFiltrados.forEach(item => {
                const validadeInfo = calcularValidadeMaisProxima(item);
                
                // Determinar status de validade
                let validadeStatusClass, validadeStatusText;
                if (validadeInfo.status === 'critica') {
                    validadeStatusClass = 'validade-critica';
                    validadeStatusText = validadeInfo.diasRestantes <= 0 ? 'Vencido' : 'Crítica';
                } else if (validadeInfo.status === 'alerta') {
                    validadeStatusClass = 'validade-alerta';
                    validadeStatusText = 'Atenção';
                } else {
                    validadeStatusClass = 'validade-ok';
                    validadeStatusText = 'OK';
                }
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <strong>${item.nome}</strong><br>
                        <small>Código: ${item.codigo}</small>
                    </td>
                    <td>${item.categoria}</td>
                    <td>
                        <strong>${item.quantidade} ${item.unidade}</strong>
                    </td>
                    <td>${validadeInfo.dataValidade ? formatarData(validadeInfo.dataValidade) : 'N/A'}</td>
                    <td>${validadeInfo.diasRestantes !== null ? validadeInfo.diasRestantes : 'N/A'}</td>
                    <td>
                        <div class="validade-status">
                            <div class="validade-indicator ${validadeStatusClass}"></div>
                            <span class="validade-text">${validadeStatusText}</span>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline" onclick="consumirItem(${item.id})">
                            <i class="fas fa-utensils"></i> Consumir
                        </button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Função para consumir item (simplificada)
        window.consumirItem = function(itemId) {
            const item = buscarItemPorId(itemId);
            if (!item) return;
            
            const quantidade = prompt(`Quantidade de ${item.nome} a consumir (em ${item.unidade}):`, "1");
            if (!quantidade || isNaN(quantidade) || parseFloat(quantidade) <= 0) {
                showNotification('Quantidade inválida!', 'error');
                return;
            }
            
            if (parseFloat(quantidade) > item.quantidade) {
                showNotification(`Estoque insuficiente! Disponível: ${item.quantidade} ${item.unidade}`, 'error');
                return;
            }
            
            // Registrar saída
            historicoData.push({
                id: historicoData.length + 1,
                data: new Date().toISOString().split('T')[0],
                tipo: "saida",
                itemId: itemId,
                quantidade: parseFloat(quantidade),
                responsavel: "Cozinha",
                motivo: "Consumo direto",
                lote: ""
            });
            
            // Atualizar estoque
            item.quantidade -= parseFloat(quantidade);
            item.status = atualizarStatusItem(item);
            
            // Atualizar interfaces
            initEstoqueTable();
            updateKanban();
            initValidadeTable();
            
            showNotification(`${quantidade} ${item.unidade} de ${item.nome} consumido com sucesso!`, 'success');
        };

        // Função para inicializar Kanban
        function updateKanban() {
            // Contadores
            let countCritico = 0, countAlerta = 0, countOk = 0;
            
            // Calcular contadores
            estoqueData.forEach(item => {
                if (item.status === 'critico') {
                    countCritico++;
                } else if (item.status === 'alerta') {
                    countAlerta++;
                } else {
                    countOk++;
                }
            });
            
            // Atualizar contadores
            document.getElementById('countCritico').textContent = countCritico;
            document.getElementById('countAlerta').textContent = countAlerta;
            document.getElementById('countOk').textContent = countOk;
            document.getElementById('estoqueCritico').textContent = countCritico;
            
            // Limpar e atualizar kanban
            ['kanbanCritico', 'kanbanAlerta', 'kanbanOk'].forEach(columnId => {
                const column = document.getElementById(columnId);
                if (column) column.innerHTML = '';
            });
            
            estoqueData.forEach(item => {
                let columnId;
                if (item.status === 'critico') {
                    columnId = 'kanbanCritico';
                } else if (item.status === 'alerta') {
                    columnId = 'kanbanAlerta';
                } else {
                    columnId = 'kanbanOk';
                }
                
                const column = document.getElementById(columnId);
                if (!column) return;
                
                const itemElement = document.createElement('div');
                itemElement.className = `kanban-item ${item.status}`;
                itemElement.innerHTML = `
                    <div class="item-header">
                        <div class="item-title">${item.nome}</div>
                        <div class="item-status status-${item.status}">${item.status === 'critico' ? 'Crítico' : item.status === 'alerta' ? 'Alerta' : 'OK'}</div>
                    </div>
                    <div class="item-details">
                        Estoque: ${item.quantidade} ${item.unidade}<br>
                        Mín: ${item.estoqueMin} | Máx: ${item.estoqueMax}
                    </div>
                    <div class="item-footer">
                        <div>${item.localizacao}</div>
                        <div>${((item.quantidade / item.estoqueMax) * 100).toFixed(1)}%</div>
                    </div>
                `;
                
                column.appendChild(itemElement);
            });
        }

        // Função para inicializar tabela de receitas
        function initReceitasTable(filtroCategoria = '') {
            const tableBody = document.getElementById('receitasTableBody');
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            let receitasFiltradas = receitasData;
            
            // Aplicar filtro de categoria
            if (filtroCategoria) {
                receitasFiltradas = receitasFiltradas.filter(receita => receita.categoria === filtroCategoria);
            }
            
            receitasFiltradas.forEach(receita => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <strong>${receita.nome}</strong><br>
                        <small>Código: ${receita.codigo}</small>
                    </td>
                    <td>${receita.categoria}</td>
                    <td>${receita.porcoes}</td>
                    <td>R$ ${receita.custoPorcao.toFixed(2)}</td>
                    <td>${receita.tempoPreparo} min</td>
                    <td><span class="badge ${receita.status === 'ativo' ? 'badge-success' : 'badge-warning'}">${receita.status === 'ativo' ? 'Ativo' : 'Inativo'}</span></td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn view-btn" data-id="${receita.id}" title="Visualizar">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </td>
                `;
                tableBody.appendChild(row);
            });
            
            // Adicionar eventos aos botões
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    exibirDetalhesReceita(id);
                });
            });
        }

        // Função para exibir detalhes da receita
        function exibirDetalhesReceita(id) {
            const receita = buscarReceitaPorId(id);
            if (!receita) return;
            
            receitaAtualId = id;
            
            // Atualizar informações básicas
            document.getElementById('detailRecipeTitle').textContent = receita.nome;
            document.getElementById('detailRecipeCost').textContent = `Custo por porção: R$ ${receita.custoPorcao.toFixed(2)}`;
            document.getElementById('detailRecipeCategory').textContent = receita.categoria;
            document.getElementById('detailRecipePortions').textContent = receita.porcoes;
            document.getElementById('detailRecipeTime').textContent = `${receita.tempoPreparo} min`;
            document.getElementById('detailRecipeYield').textContent = `${receita.rendimento}%`;
            document.getElementById('detailRecipeTotalCost').textContent = `R$ ${receita.custoTotal.toFixed(2)}`;
            document.getElementById('detailRecipeCalories').textContent = `${receita.calories} kcal`;
            document.getElementById('detailRecipeProteins').textContent = `${receita.proteinas}g`;
            document.getElementById('detailRecipeCarbs').textContent = `${receita.carboidratos}g`;
            document.getElementById('detailRecipeFats').textContent = `${receita.gorduras}g`;
            
            // Atualizar tabela de ingredientes
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
                    <td>
                        <span class="badge ${item && item.quantidade >= ing.quantidade ? 'badge-success' : 'badge-danger'}">
                            ${item ? `${item.quantidade} ${item.unidade}` : 'N/A'}
                        </span>
                    </td>
                `;
                ingredientesBody.appendChild(row);
            });
            
            // Atualizar instruções
            const instrucoesList = document.getElementById('recipeInstructionsList');
            instrucoesList.innerHTML = '';
            
            receita.instrucoes.forEach((instrucao, index) => {
                const li = document.createElement('li');
                li.textContent = instrucao;
                instrucoesList.appendChild(li);
            });
            
            // Alternar para a aba de detalhes
            document.querySelectorAll('#fichasPage .tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('#fichasPage .tab-content').forEach(content => content.style.display = 'none');
            
            document.querySelector('#fichasPage .tab[data-subtab="fichas-detail"]').classList.add('active');
            document.getElementById('fichas-detail').style.display = 'block';
        }

        // Função para atualizar o estoque disponível no modal de saída
        function atualizarEstoqueDisponivel(itemId) {
            const item = buscarItemPorId(itemId);
            const estoqueDisponivelEl = document.getElementById('estoqueDisponivel');
            
            if (item) {
                estoqueDisponivelEl.textContent = `Disponível: ${item.quantidade} ${item.unidade}`;
                document.getElementById('saidaQuantidade').max = item.quantidade;
            } else {
                estoqueDisponivelEl.textContent = '';
            }
        }

        // Inicializar a aplicação
        function initApp() {
            // Inicializar tabelas e listas
            initEstoqueTable();
            updateKanban();
            initHistoricoTable();
            initReceitasTable();
            initValidadeTable();
            
            // Inicializar selects
            inicializarSelectItens('entradaItem');
            inicializarSelectItens('saidaItem');
            
            // Exibir página inicial (dashboard)
            pages.dashboard.style.display = 'block';
            
            // Adicionar classe active ao primeiro item do menu
            document.querySelector('.nav-link').classList.add('active');
            
            // Exibir notificação de boas-vindas
            setTimeout(() => {
                showNotification('Bem-vindo ao Inventario Ágil!', 'success');
            }, 1000);
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            initApp();
            
            // Navegação entre páginas
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Remover classe active de todos os links
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Adicionar classe active ao link clicado
                    link.classList.add('active');
                    
                    // Ocultar todas as páginas
                    Object.values(pages).forEach(page => {
                        if (page) page.style.display = 'none';
                    });
                    
                    // Mostrar a página correspondente
                    const pageName = link.getAttribute('data-page');
                    if (pages[pageName]) {
                        pages[pageName].style.display = 'block';
                        
                        if (pageName === 'dashboard') {
                            initValidadeTable();
                        }
                    }
                });
            });
            
            // Botões para abrir modais
            document.getElementById('novoItemBtn').addEventListener('click', () => {
                novoItemModal.classList.add('active');
            });
            
            document.getElementById('novaFichaBtn').addEventListener('click', () => {
                novaFichaModal.classList.add('active');
            });
            
            document.getElementById('novaReceitaBtn').addEventListener('click', () => {
                novaFichaModal.classList.add('active');
            });
            
            document.getElementById('entradaEstoqueBtn').addEventListener('click', () => {
                inicializarSelectItens('entradaItem');
                entradaModal.classList.add('active');
            });
            
            document.getElementById('saidaEstoqueBtn').addEventListener('click', () => {
                inicializarSelectItens('saidaItem');
                saidaModal.classList.add('active');
            });
            
            // Fechar modais
            document.getElementById('closeNovoItemModal').addEventListener('click', () => {
                novoItemModal.classList.remove('active');
            });
            
            document.getElementById('closeFichaModal').addEventListener('click', () => {
                novaFichaModal.classList.remove('active');
            });
            
            document.getElementById('closeEntradaModal').addEventListener('click', () => {
                entradaModal.classList.remove('active');
            });
            
            document.getElementById('closeSaidaModal').addEventListener('click', () => {
                saidaModal.classList.remove('active');
            });
            
            document.getElementById('cancelarNovoItem').addEventListener('click', () => {
                novoItemModal.classList.remove('active');
            });
            
            document.getElementById('cancelarFicha').addEventListener('click', () => {
                novaFichaModal.classList.remove('active');
            });
            
            document.getElementById('cancelarEntrada').addEventListener('click', () => {
                entradaModal.classList.remove('active');
            });
            
            document.getElementById('cancelarSaida').addEventListener('click', () => {
                saidaModal.classList.remove('active');
            });
            
            // Formulário de Novo Item
            document.getElementById('novoItemForm').addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Coletar dados do formulário
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
                    validadePadrao: parseInt(document.getElementById('validadePadrao').value) || 30,
                    custoUnitario: parseFloat(document.getElementById('custoUnitario').value) || 0,
                    status: 'ok',
                    lotes: []
                };
                
                // Adicionar ao array de dados
                estoqueData.push(novoItem);
                
                // Atualizar interface
                initEstoqueTable();
                updateKanban();
                initValidadeTable();
                
                // Fechar modal e mostrar notificação
                novoItemModal.classList.remove('active');
                showNotification(`Item "${novoItem.nome}" cadastrado com sucesso!`, 'success');
                
                // Limpar formulário
                document.getElementById('novoItemForm').reset();
            });
            
            // Formulário de Nova Ficha Técnica
            document.getElementById('novaFichaForm').addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Coletar dados do formulário
                const novaReceita = {
                    id: receitasData.length + 1,
                    codigo: document.getElementById('receitaCodigo').value,
                    nome: document.getElementById('receitaNome').value,
                    categoria: document.getElementById('receitaCategoria').value,
                    porcoes: parseInt(document.getElementById('receitaPorcoes').value),
                    tempoPreparo: parseInt(document.getElementById('tempoPreparo').value),
                    rendimento: parseInt(document.getElementById('rendimento').value) || 95,
                    descricao: document.getElementById('receitaDescricao').value,
                    custoPorcao: 0,
                    custoTotal: 0,
                    status: 'ativo',
                    calorias: 0,
                    proteinas: 0,
                    carboidratos: 0,
                    gorduras: 0,
                    ingredientes: [],
                    instrucoes: []
                };
                
                // Adicionar ao array de dados
                receitasData.push(novaReceita);
                
                // Atualizar interface
                initReceitasTable();
                
                // Fechar modal e mostrar notificação
                novaFichaModal.classList.remove('active');
                showNotification(`Ficha técnica "${novaReceita.nome}" criada com sucesso!`, 'success');
                
                // Limpar formulário
                document.getElementById('novaFichaForm').reset();
                
                // Exibir detalhes da nova receita
                exibirDetalhesReceita(novaReceita.id);
            });
            
            // Formulário de Entrada
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
                    
                    // Atualizar interfaces
                    initEstoqueTable();
                    updateKanban();
                    initValidadeTable();
                    
                    // Fechar modal e limpar formulário
                    entradaModal.classList.remove('active');
                    document.getElementById('entradaForm').reset();
                } else {
                    showNotification('Erro ao registrar entrada. Tente novamente.', 'error');
                }
            });
            
            // Formulário de Saída
            document.getElementById('saidaForm').addEventListener('submit', (e) => {
                e.preventDefault();
                
                const itemId = document.getElementById('saidaItem').value;
                const quantidade = document.getElementById('saidaQuantidade').value;
                const motivo = document.getElementById('saidaMotivo').value;
                const responsavel = document.getElementById('saidaResponsavel').value;
                const loteSelecionado = document.getElementById('saidaLote').value;
                const receita = document.getElementById('saidaReceita').value;
                const observacoes = document.getElementById('saidaObservacoes').value;
                
                if (!itemId || !quantidade || quantidade <= 0 || !motivo || !responsavel) {
                    showNotification('Preencha todos os campos obrigatórios corretamente.', 'error');
                    return;
                }
                
                // Verificar se há estoque suficiente
                const item = buscarItemPorId(itemId);
                if (item.quantidade < quantidade) {
                    showNotification(`Estoque insuficiente! Disponível: ${item.quantidade} ${item.unidade}`, 'error');
                    return;
                }
                
                // Atualizar quantidade
                item.quantidade -= parseFloat(quantidade);
                item.status = atualizarStatusItem(item);
                
                // Registrar no histórico
                historicoData.push({
                    id: historicoData.length + 1,
                    data: new Date().toISOString().split('T')[0],
                    tipo: "saida",
                    itemId: itemId,
                    quantidade: parseFloat(quantidade),
                    responsavel: responsavel,
                    motivo: motivo + (receita ? `: ${receita}` : ''),
                    lote: loteSelecionado || ""
                });
                
                showNotification(`Saída de ${quantidade} ${item.unidade} de ${item.nome} registrada com sucesso!`, 'success');
                
                // Atualizar interfaces
                initEstoqueTable();
                updateKanban();
                initValidadeTable();
                initHistoricoTable();
                
                // Fechar modal e limpar formulário
                saidaModal.classList.remove('active');
                document.getElementById('saidaForm').reset();
            });
            
            // Filtro de validade
            document.getElementById('filtroValidade').addEventListener('change', function() {
                initValidadeTable(this.value);
            });
            
            // Filtro de categoria de receitas
            document.getElementById('filtroCategoriaReceita').addEventListener('change', function() {
                initReceitasTable(this.value);
            });
            
            // Botão de nova compra no dashboard
            document.getElementById('novaCompraBtn').addEventListener('click', () => {
                // Navegar para página de estoque e abrir modal de entrada
                document.querySelector('.nav-link[data-page="estoque"]').click();
                setTimeout(() => {
                    document.getElementById('entradaEstoqueBtn').click();
                }, 100);
            });
        });
