// --- STATE ---
    window.session = { user: null, role: null, name: null };
    window.loginRoleSelected = 'gerente';

    window.USERS = {
      admin: { pass: 'admin123', role: 'gerente', name: 'Luiza Macedo', initials: 'LM' },
      ana: { pass: '1234', role: 'vendedora', name: 'Ana Paula', initials: 'AP' },
      julia: { pass: '1234', role: 'vendedora', name: 'Júlia Santos', initials: 'JS' },
      maria: { pass: '1234', role: 'vendedora', name: 'Maria Clara', initials: 'MC' }
    };

    // --- DATA ---
    window.DB = {
      vendas: [
        { id: 1, data: '18/05/2025', hora: '14:32', cliente: 'Marcos Silva', tel: '(11)99999-0001', produto: 'Par Alianças Classic — Ouro 18k', material: 'Ouro 18k', tam1: '18', tam2: '20', qtd: 1, valor: 3200, pagamento: 'PIX', parcelas: 'À vista', vendedora: 'Ana Paula', status: 'ok', obs: '' },
        { id: 2, data: '18/05/2025', hora: '11:15', cliente: 'Carla Souza', tel: '(11)95555-0005', produto: 'Par de Alianças Banhadas a Ouro', material: 'Banhada', tam1: '16', tam2: '18', qtd: 1, valor: 480, pagamento: 'Cartão Débito', parcelas: 'À vista', vendedora: 'Júlia Santos', status: 'ok', obs: '' },
        { id: 3, data: '17/05/2025', hora: '16:50', cliente: 'Pedro Costa', tel: '(11)98888-0002', produto: 'Par de Alianças Moeda Antiga', material: 'Moeda Antiga', tam1: '20', tam2: '18', qtd: 1, valor: 1900, pagamento: 'Crédito Parcelado', parcelas: '3x', vendedora: 'Ana Paula', status: 'ok', obs: 'Entregar em 20/05' },
        { id: 4, data: '17/05/2025', hora: '10:20', cliente: 'Fernanda Lima', tel: '(11)96666-0004', produto: 'Par de Alianças Prata 925', material: 'Prata 925', tam1: '14', tam2: '16', qtd: 1, valor: 620, pagamento: 'Dinheiro', parcelas: 'À vista', vendedora: 'Maria Clara', status: 'pend', obs: 'Aguardando retirada' },
        { id: 5, data: '16/05/2025', hora: '15:40', cliente: 'Lucas Martins', tel: '(21)97777-0003', produto: 'Par Alianças Trabalhada — Ouro 18k', material: 'Ouro 18k', tam1: '18', tam2: '22', qtd: 1, valor: 4100, pagamento: 'PIX', parcelas: 'À vista', vendedora: 'Ana Paula', status: 'ok', obs: '' },
        { id: 6, data: '16/05/2025', hora: '09:05', cliente: 'Beatriz Nunes', tel: '(11)94444-0006', produto: 'Par de Alianças Banhadas a Ouro', material: 'Banhada', tam1: '16', tam2: '16', qtd: 1, valor: 390, pagamento: 'Dinheiro', parcelas: 'À vista', vendedora: 'Júlia Santos', status: 'cancel', obs: 'Desistiu' },
        { id: 7, data: '15/05/2025', hora: '14:00', cliente: 'Rafael Torres', tel: '(11)93333-0007', produto: 'Aliança Avulsa — Ouro 18k', material: 'Ouro 18k', tam1: '18', tam2: '—', qtd: 1, valor: 1700, pagamento: 'Crédito Parcelado', parcelas: '6x', vendedora: 'Maria Clara', status: 'ok', obs: '' },
        { id: 8, data: '15/05/2025', hora: '11:30', cliente: 'Camila Reis', tel: '(11)92222-0008', produto: 'Corrente — Ouro 18k', material: 'Ouro 18k', tam1: '—', tam2: '—', qtd: 1, valor: 2800, pagamento: 'PIX', parcelas: 'À vista', vendedora: 'Ana Paula', status: 'ok', obs: '' },
        { id: 9, data: '14/05/2025', hora: '16:15', cliente: 'Thiago Alves', tel: '(11)91111-0009', produto: 'Par de Alianças Prata 925', material: 'Prata 925', tam1: '20', tam2: '16', qtd: 1, valor: 620, pagamento: 'Dinheiro', parcelas: 'À vista', vendedora: 'Júlia Santos', status: 'ok', obs: '' },
      ],
      estoque: [
        { cod: 'AL-001', nome: 'Par Alianças Classic', mat: 'Ouro 18k', tipo: 'Par', tams: '12,14,16,18,20,22', qtd: 8, min: 3, custo: 1800, venda: 3200, peso: '6.5g' },
        { cod: 'AL-002', nome: 'Par Alianças Trabalhada', mat: 'Ouro 18k', tipo: 'Par', tams: '12,14,16,18,20,22', qtd: 2, min: 3, custo: 2100, venda: 4100, peso: '8.2g' },
        { cod: 'AL-003', nome: 'Par Alianças Moeda Antiga', mat: 'Moeda Antiga', tipo: 'Par', tams: '14,16,18,20,22', qtd: 5, min: 2, custo: 900, venda: 1900, peso: '10g' },
        { cod: 'AL-004', nome: 'Par Alianças Banhadas', mat: 'Banhada', tipo: 'Par', tams: '12,14,16,18,20,22', qtd: 15, min: 5, custo: 180, venda: 480, peso: '3g' },
        { cod: 'AL-005', nome: 'Par Alianças Prata 925', mat: 'Prata 925', tipo: 'Par', tams: '12,14,16,18,20,22', qtd: 7, min: 3, custo: 280, venda: 620, peso: '5g' },
        { cod: 'AV-001', nome: 'Aliança Avulsa Ouro 18k', mat: 'Ouro 18k', tipo: 'Avulsa', tams: '12,14,16,18,20,22', qtd: 1, min: 2, custo: 950, venda: 1700, peso: '3.5g' },
        { cod: 'CO-001', nome: 'Corrente Veneziana', mat: 'Ouro 18k', tipo: 'Avulsa', tams: '40cm,45cm,50cm', qtd: 4, min: 2, custo: 1400, venda: 2800, peso: '7g' },
        { cod: 'AN-001', nome: 'Anel Solitário', mat: 'Ouro 18k', tipo: 'Avulsa', tams: '12,14,16,18,20', qtd: 3, min: 2, custo: 1100, venda: 2200, peso: '4g' },
      ],
      compraOuro: [
        { id: 1, data: '18/05/2025', hora: '10:45', nome: 'José Alves', cpf: '123.456.789-00', tel: '', rg: '', tipo: 'Aliança / Anel', qui: '18k (750)', peso: 8.5, vg: 200, total: 1700, pag: 'Dinheiro', estado: 'Bom estado', obs: '', op: 'Ana Gerente' },
        { id: 2, data: '17/05/2025', hora: '14:20', nome: 'Maria Ferreira', cpf: '987.654.321-00', tel: '', rg: '', tipo: 'Corrente', qui: '18k (750)', peso: 12, vg: 195, total: 2340, pag: 'PIX', estado: 'Com desgaste', obs: 'Elos com desgaste na extremidade', op: 'Ana Gerente' },
        { id: 3, data: '16/05/2025', hora: '11:00', nome: 'Carlos Dias', cpf: '456.123.789-00', tel: '', rg: '', tipo: 'Pulseira', qui: '14k (583)', peso: 6.2, vg: 160, total: 992, pag: 'Dinheiro', estado: 'Bom estado', obs: '', op: 'Ana Paula' },
        { id: 4, data: '15/05/2025', hora: '15:30', nome: 'Lucia Rocha', cpf: '321.654.987-00', tel: '', rg: '', tipo: 'Brinco', qui: '18k (750)', peso: 4.8, vg: 198, total: 950.4, pag: 'PIX', estado: 'Bom estado', obs: '', op: 'Ana Gerente' },
      ],
      equipe: [
        { nome: 'Ana Paula', user: 'ana', meta: 15000, comissao: 5, tel: '(11) 99000-0001', cpf: '111.222.333-44', ativo: true },
        { nome: 'Júlia Santos', user: 'julia', meta: 12000, comissao: 5, tel: '(11) 99000-0002', cpf: '222.333.444-55', ativo: true },
        { nome: 'Maria Clara', user: 'maria', meta: 10000, comissao: 4, tel: '(11) 99000-0003', cpf: '333.444.555-66', ativo: true },
      ],
      clientes: [
        { nome: 'Marcos Silva', tel: '(11) 99999-0001', cpf: '555.666.777-01', cidade: 'São Paulo', uf: 'SP', email: '', obs: '', pref: 'Ouro 18k' },
        { nome: 'Pedro Costa', tel: '(11) 98888-0002', cpf: '555.666.777-02', cidade: 'Campinas', uf: 'SP', email: '', obs: '', pref: 'Moeda Antiga' },
        { nome: 'Lucas Martins', tel: '(21) 97777-0003', cpf: '555.666.777-03', cidade: 'Rio de Janeiro', uf: 'RJ', email: '', obs: '', pref: 'Ouro 18k' },
        { nome: 'Fernanda Lima', tel: '(11) 96666-0004', cpf: '555.666.777-04', cidade: 'São Paulo', uf: 'SP', email: '', obs: '', pref: 'Prata 925' },
        { nome: 'Carla Souza', tel: '(11) 95555-0005', cpf: '555.666.777-05', cidade: 'Guarulhos', uf: 'SP', email: '', obs: '', pref: 'Banhada' },
        { nome: 'Rafael Torres', tel: '(11) 93333-0007', cpf: '555.666.777-07', cidade: 'São Paulo', uf: 'SP', email: '', obs: '', pref: 'Ouro 18k' },
        { nome: 'Camila Reis', tel: '(11) 92222-0008', cpf: '555.666.777-08', cidade: 'Osasco', uf: 'SP', email: '', obs: 'Aniversário em Julho', pref: 'Ouro 18k' },
      ],
      historicoComissoes: [
        { id: 1, competencia: 'Abril/2025', vendedora: 'Ana Paula', totalVendas: 12800, pct: 5, valor: 640, dataPag: '30/04/2025', formaPag: 'PIX', pagoPor: 'Ana Gerente', obs: '' },
        { id: 2, competencia: 'Abril/2025', vendedora: 'Júlia Santos', totalVendas: 9200, pct: 5, valor: 460, dataPag: '30/04/2025', formaPag: 'PIX', pagoPor: 'Ana Gerente', obs: '' },
        { id: 3, competencia: 'Abril/2025', vendedora: 'Maria Clara', totalVendas: 7100, pct: 4, valor: 284, dataPag: '30/04/2025', formaPag: 'Dinheiro', pagoPor: 'Ana Gerente', obs: '' },
        { id: 4, competencia: 'Março/2025', vendedora: 'Ana Paula', totalVendas: 15400, pct: 5, valor: 770, dataPag: '31/03/2025', formaPag: 'PIX', pagoPor: 'Ana Gerente', obs: '' },
        { id: 5, competencia: 'Março/2025', vendedora: 'Júlia Santos', totalVendas: 10200, pct: 5, valor: 510, dataPag: '31/03/2025', formaPag: 'PIX', pagoPor: 'Ana Gerente', obs: '' },
        { id: 6, competencia: 'Março/2025', vendedora: 'Maria Clara', totalVendas: 8600, pct: 4, valor: 344, dataPag: '31/03/2025', formaPag: 'Dinheiro', pagoPor: 'Ana Gerente', obs: '' },
      ],
      despesas: [
        { id: 1, data: '10/05/2025', descricao: 'Aluguel da Loja — Ref. Maio', categoria: 'Aluguel', valor: 2500, status: 'pago' },
        { id: 2, data: '12/05/2025', descricao: 'Energia Elétrica (Enel)', categoria: 'Água / Luz / Internet', valor: 350, status: 'pago' },
        { id: 3, data: '15/05/2025', descricao: 'Internet Fibra', categoria: 'Água / Luz / Internet', valor: 150, status: 'pago' },
        { id: 4, data: '20/05/2025', descricao: 'Taxa de Marketing Instagram', categoria: 'Marketing', valor: 500, status: 'pend' }
      ],
      config: {
        lojaNome: "Querer Joias",
        cnpj: "",
        telefone: "",
        whatsapp: "",
        endereco: "",
        ouro18k: 420.00,
        ouro14k: 330.00,
        ouro10k: 235.00,
        prata925: 4.80,
        descontoMax: 10,
        parcelasMax: 12,
        taxaCartao: 2.5,
        estoqueMinPadrão: 3
      }
    };

    const API_URL = window.location.origin && window.location.origin !== 'null' && window.location.protocol.startsWith('http') ? window.location.origin : 'http://localhost:55217';

    function saveDB() {
      if (window.DatabaseService) window.DatabaseService.setStore('alliancea_db', window.DB).catch(console.error);
    }

    function saveUSERS() {
      if (window.DatabaseService) window.DatabaseService.setStore('alliancea_users', window.USERS).catch(console.error);
    }

    async function loadLocalStorageDB() {
      if (window.DatabaseService) {
        const data = await window.DatabaseService.getStore('alliancea_db');
        if (data) window.DB = data;
      }
      if (!window.DB.config) window.DB.config = {};
      if (!window.DB.config.roles) window.DB.config.roles = {};
    }

    async function loadLocalStorageUsers() {
      if (window.DatabaseService) {
        const data = await window.DatabaseService.getStore('alliancea_users');
        if (data) window.USERS = data;
      }
    }

    function migrateConfig() {
      if (!DB.config) {
        DB.config = {
          lojaNome: "Querer Joias",
          cnpj: "",
          telefone: "",
          whatsapp: "",
          endereco: "",
          ouro18k: 420.00,
          ouro14k: 330.00,
          ouro10k: 235.00,
          prata925: 4.80,
          descontoMax: 10,
          parcelasMax: 12,
          taxaCartao: 2.5,
          estoqueMinPadrão: 3
        };
      }
      if (!DB.despesas) {
        DB.despesas = [];
      }
      if (!DB.historicoComissoes) {
        DB.historicoComissoes = [];
      }
      if (!DB.recebimentos) {
        DB.recebimentos = [];
      }
      if (!DB.equipe) {
        DB.equipe = [];
      }
      if (!DB.ponto) {
        DB.ponto = [];
      }
      if (DB.config && DB.config.margemCompraOuro === undefined) {
        DB.config.margemCompraOuro = 70;
      }

      if (!DB.config.roles) {
        DB.config.roles = {
          "gerente": { "label": "Gerente", "level": "gerente" },
          "vendedora": { "label": "Vendedora", "level": "vendedora" }
        };
      }
      if (!DB.logs) {
        DB.logs = [];
      }
      if (!DB.caixa) {
        DB.caixa = [];
      }

      // 1. De-duplicate team list dynamically by username or name to repair any corrupt localStorage
      const uniqueEquipe = [];
      const seenUsers = new Set();
      const seenNames = new Set();
      DB.equipe.forEach(e => {
        const uKey = e.user ? e.user.toLowerCase().trim() : '';
        const nKey = e.nome ? e.nome.toLowerCase().trim() : '';
        if (uKey && seenUsers.has(uKey)) return;
        if (nKey && seenNames.has(nKey)) return;
        if (uKey) seenUsers.add(uKey);
        if (nKey) seenNames.add(nKey);
        uniqueEquipe.push(e);
      });
      DB.equipe = uniqueEquipe;

      // 2. Sync credentials list (USERS) into team list (DB.equipe)
      for (const username in USERS) {
        const userObj = USERS[username];
        const userLower = username.toLowerCase().trim();
        const roleKey = userObj.role || 'vendedora';
        const roleLevel = DB.config.roles[roleKey]?.level || (roleKey === 'gerente' ? 'gerente' : 'vendedora');

        let e = DB.equipe.find(x => (x.user && x.user.toLowerCase().trim() === userLower) || (x.nome && x.nome.toLowerCase().trim() === userObj.name.toLowerCase().trim()));
        if (!e) {
          DB.equipe.push({
            nome: userObj.name,
            user: userLower,
            meta: roleLevel === 'gerente' ? 0 : 10000,
            comissao: roleLevel === 'gerente' ? 0 : 5,
            tel: '',
            cpf: '',
            ativo: true
          });
        } else {
          // Repair missing properties and update name from credentials
          e.user = userLower;
          e.nome = userObj.name;
          if (e.ativo === undefined) e.ativo = true;
          if (e.meta === undefined) e.meta = roleLevel === 'gerente' ? 0 : 10000;
          if (e.comissao === undefined) e.comissao = roleLevel === 'gerente' ? 0 : 5;
        }
      }

      // 3. Sync back from DB.equipe to USERS for any custom members added
      DB.equipe.forEach(e => {
        if (e.user) {
          const userLower = e.user.toLowerCase().trim();
          if (!USERS[userLower]) {
            USERS[userLower] = {
              pass: '1234',
              role: userLower === 'admin' ? 'gerente' : 'vendedora',
              name: e.nome,
              initials: initials(e.nome)
            };
          }
        }
      });
    }

    function logAcao(acao, tipo = 'geral') {
      if (!DB.logs) DB.logs = [];
      DB.logs.unshift({
        id: DB.logs.length + 1,
        timestamp: Date.now(),
        data: today(),
        hora: now(),
        user: session.user || 'sistema',
        nome: session.name || 'Sistema',
        acao: acao,
        tipo: tipo
      });
      if (DB.logs.length > 1000) {
        DB.logs = DB.logs.slice(0, 1000);
      }
      saveDB();
    }

    async function initApp() {
      await loadLocalStorageDB();
      await loadLocalStorageUsers();
      migrateConfig();
      
      console.log("Banco de dados SQLite (Store) carregado.");
      
      const lastUser = localStorage.getItem('alliancea_lastUser');
      if (lastUser) document.getElementById('loginUser').value = lastUser;
      document.getElementById('loginRoleTitle').textContent = window.loginRoleSelected === 'gerente' ? 'Acesso Gerencial' : 'Acesso Vendedora';
      const bgMap = { 'vendedora': 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop)', 'gerente': 'url(https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop)' };
      document.getElementById('loginScreen').style.backgroundImage = bgMap[window.loginRoleSelected];
      
      // Auto-login DEV
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
         if (document.getElementById('loginUser').value === '') document.getElementById('loginUser').value = 'admin';
         if (document.getElementById('loginPass').value === '') document.getElementById('loginPass').value = 'admin';
      }
    }

    // Inicializa persistência
    
      initApp();
    

    // --- HELPERS ---
    const R$ = v => 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const today = () => new Date().toLocaleDateString('pt-BR');
    const now = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    function matBadge(m) {
      const map = { 'Ouro 18k': 'b-gold', 'Moeda Antiga': 'b-moeda', 'Banhada': 'b-banho', 'Prata 925': 'b-prata', 'Prata': 'b-prata' };
      return `<span class="badge ${map[m] || 'b-silver'}">${m}</span>`;
    }
    function statusBadge(s) {
      return { ok: `<span class="badge b-ok">Concluído</span>`, pend: `<span class="badge b-pend">Pendente</span>`, cancel: `<span class="badge b-cancel">Cancelado</span>` }[s] || '';
    }
    function initials(nome) { return nome.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase() }

    // --- AUTH ---
    function setLoginRole(role, el) {
      loginRoleSelected = role;
      document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
    }

    // --- NAVIGATION ---
    const PAGE_TITLES = { dashboard: 'Dashboard', vendas: 'Vendas', caixa: 'Fluxo de Caixa', estoque: 'Estoque', compraOuro: 'Compra de Ouro', equipe: 'Equipe', relatorio: 'Relatórios', clientes: 'Clientes', comissoes: 'Comissões', config: 'Configurações' };

    function goPage(id, el) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      const pg = document.getElementById('pg' + id.charAt(0).toUpperCase() + id.slice(1));
      if (pg) pg.classList.add('active');
      if (el) el.classList.add('active');
      document.getElementById('pageTitle').textContent = PAGE_TITLES[id] || id;
    }

    // --- MODALS ---
    function openModal(id) {
      if (id === 'mEntradaEstoque') preencheProdutoSelect();
      if (id === 'mRelRapido') geraRelRapido();
      if (id === 'mVenda') {
        preencheVendedoraMultiselect('vVendedorasDropdown', 'vVendedorasLabel');
        preencheVendaProdutoSelect();
      }
      if (id === 'mCompraOuro') {
        preencheVendedoraMultiselect('coVendedorasDropdown', 'coVendedorasLabel');
      }
      if (id === 'mVendedora') preencheRolesSelect('evRole', 'vendedora');
      document.getElementById(id).classList.add('open');
    }
    function closeModal(id) { document.getElementById(id).classList.remove('open'); }
    document.addEventListener('click', e => {
      if (e.target.classList.contains('overlay')) closeModal(e.target.id);
      // Close multiselect dropdowns if clicked outside
      if (!e.target.closest('.multiselect-container')) {
        document.querySelectorAll('.multiselect-dropdown').forEach(d => d.style.display = 'none');
      }
    });

    function toggleMultiselect(id) {
      const dropdown = document.getElementById(id);
      if (!dropdown) return;
      const isShown = dropdown.style.display === 'block';
      document.querySelectorAll('.multiselect-dropdown').forEach(d => {
        if (d.id !== id) d.style.display = 'none';
      });
      dropdown.style.display = isShown ? 'none' : 'block';
    }

    function preencheVendedoraMultiselect(dropdownId, labelId, selectedNames = []) {
      const dropdown = document.getElementById(dropdownId);
      const label = document.getElementById(labelId);
      if (!dropdown || !label) return;

      const list = DB.equipe.filter(e => e.ativo !== false);

      dropdown.innerHTML = list.map(e => {
        let isChecked = selectedNames.includes(e.nome) ? 'checked' : '';
        let isDisabled = '';

        // If user is a vendedora, she must be checked and cannot uncheck herself
        if (session.role === 'vendedora' && e.nome === session.name) {
          isChecked = 'checked';
          isDisabled = 'disabled';
        }

        return `<label class="multiselect-item">
      <input type="checkbox" value="${e.nome}" ${isChecked} ${isDisabled} onchange="updateMultiselectLabel('${dropdownId}', '${labelId}')">
      <span>${e.nome}</span>
    </label>`;
      }).join('');

      updateMultiselectLabel(dropdownId, labelId);
    }

    function updateMultiselectLabel(dropdownId, labelId) {
      const dropdown = document.getElementById(dropdownId);
      const label = document.getElementById(labelId);
      if (!dropdown || !label) return;

      const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
      const selected = [];
      checkboxes.forEach(cb => {
        if (cb.checked || cb.disabled) {
          if (cb.checked) selected.push(cb.value);
        }
      });

      if (selected.length === 0) {
        label.textContent = "Selecionar...";
      } else {
        label.textContent = selected.join(', ');
      }
    }

    function getSelectedVendedoras(dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      if (!dropdown) return [];
      const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
      const selected = [];
      checkboxes.forEach(cb => {
        if (cb.checked || cb.disabled) {
          if (cb.checked) selected.push(cb.value);
        }
      });
      return selected;
    }

    function preencheProdutoSelect() {
      const sel = document.getElementById('eProduto');
      if (!sel) return;
      sel.innerHTML = DB.estoque.map(p => `<option value="${p.cod}">${p.nome} (${p.mat}) — Atual: ${p.qtd}</option>`).join('');
    }

    function preencheVendaProdutoSelect() {
      const sel = document.getElementById('vProduto');
      if (!sel) return;
      sel.innerHTML = '<option value="">Selecionar produto...</option>' +
        DB.estoque.map(p => `<option value="${p.cod}">${p.nome} (${p.mat})</option>`).join('');
    }

    // --- TOAST ---
    

    // --- RENDER ---
      // Script de Auto-Correcao de PDFs Falsos
      setTimeout(() => {
        DB.vendas.forEach(async v => {
          if (v.nfeStatus === 'Autorizada' && v.nfePdf && v.nfePdf.includes('painel/nfe')) {
            try {
              const cfg = DB.config;
              const isProd = cfg.nfeAmbiente === '1';
              const baseUrl = isProd ? 'https://api.focusnfe.com.br' : 'https://homologacao.focusnfe.com.br';
              const req = await fetch(baseUrl + '/v2/nfe/' + v.nfeRef, { headers: { 'Authorization': 'Basic ' + btoa(cfg.nfeToken + ':') } });
              const d = await req.json();
              if (d.status === 'autorizado') {
                v.nfePdf = baseUrl + d.caminho_danfe;
                saveDB();
                renderAll();
              } else {
                v.nfeStatus = '';
                saveDB();
                renderAll();
              }
            } catch(e){}
          }
        });
      }, 1000);
    function renderAll() {
      renderDashboard();
      renderVendas();
      renderEstoque();
      renderCompraOuro();
      renderEquipe();
      renderDespesas();
      renderRelatorio();
      renderClientes();
      renderPromotoresDatalist();
      initComissoesFiltros();
      renderComissoes();
      renderCaixa();

      // Atualiza marca da loja
      const lojaNome = (DB.config && DB.config.lojaNome) || 'Querer Joias';
      document.querySelectorAll('.brand').forEach(el => {
          el.innerHTML = `<i data-lucide="gem" style="color:var(--gold);width:20px;height:20px;stroke-width:1.5px"></i> <span class="nav-text" style="margin-left:12px;font-weight:700">${name.toUpperCase()}</span>`;
        });
      document.querySelectorAll('.login-logo').forEach(el => {
        el.innerHTML = `<i data-lucide="gem" style="color:var(--gold);width:26px;height:26px;stroke-width:1.5px"></i> ${lojaNome.toUpperCase()}`;
      });

      if (document.getElementById('cfgLojaNome')) {
        loadConfigInputs();
      }

      // Inicializa os ícones do Lucide
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function renderDashboard() {
      const vendasMes = DB.vendas.filter(v => v.status !== 'cancel');
      const totalMes = vendasMes.reduce((a, v) => a + v.valor, 0);
      const hoje = today();
      const vendasHoje = vendasMes.filter(v => v.data === hoje);
      const totalHoje = vendasHoje.reduce((a, v) => a + v.valor, 0);
      const pecas = vendasMes.reduce((a, v) => a + v.qtd, 0);
      const ouroG = DB.compraOuro.reduce((a, c) => a + c.peso, 0);
      const ouroV = DB.compraOuro.reduce((a, c) => a + c.total, 0);

      document.getElementById('mVendasHoje').textContent = R$(totalHoje);
      document.getElementById('mVendasMes').textContent = R$(totalMes);
      document.getElementById('mPecas').textContent = pecas;
      document.getElementById('mOuroG').textContent = ouroG.toFixed(1) + 'g';
      document.getElementById('mOuroVal').textContent = 'Total pago: ' + R$(ouroV);

      // Calcular Lucro Líquido
      const totalCustoEstoque = vendasMes.reduce((acc, v) => {
        const item = findStockItemForSale(v);
        const custoUn = item ? item.custo : (v.valor * 0.5);
        return acc + (custoUn * v.qtd);
      }, 0);

      const totalDespPagas = (DB.despesas || [])
        .filter(d => d.status === 'pago')
        .reduce((acc, d) => acc + d.valor, 0);

      const lucroLiquido = totalMes - totalCustoEstoque - totalDespPagas;

      const elLucro = document.getElementById('mLucroLiquido');
      if (elLucro) {
        elLucro.textContent = R$(lucroLiquido);
        elLucro.style.color = lucroLiquido >= 0 ? '#15803D' : '#B91C1C';
      }

      const elLucroSub = document.getElementById('mLucroSub');
      if (elLucroSub) {
        elLucroSub.textContent = `Custo peças: ${R$(totalCustoEstoque)} · Despesas: ${R$(totalDespPagas)}`;
      }

      // Últimas vendas
      document.getElementById('tbDashVendas').innerHTML = DB.vendas.slice(0, 6).map(v => `<tr>
    <td class="td-bold">${v.cliente}</td>
    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis">${v.produto}</td>
    <td>${matBadge(v.material)}</td>
    <td class="td-gold">${R$(v.valor)}</td>
    <td>${v.vendedora}</td>
    <td>${statusBadge(v.status)}</td>
  </tr>`).join('');

      // Metas
      const metasHtml = DB.equipe.map(e => {
        const vends = DB.vendas.filter(v => {
          if (v.status === 'cancel') return false;
          return v.vendedoras ? v.vendedoras.includes(e.nome) : (v.vendedora === e.nome);
        });
        const total = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = (DB.compraOuro || []).filter(c => {
          return c.vendedoras ? c.vendedoras.includes(e.nome) : (c.op === e.nome);
        });
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        const comVal = (total * (e.comissao / 100)) + (pesoOuro * 1.00);
        const pct = e.meta > 0 ? Math.min(Math.round(comVal / e.meta * 100), 100) : 0;
        const cor = pct >= 90 ? '#15803D' : pct >= 60 ? 'var(--gold)' : '#B91C1C';
        return `<div class="meta-row">
      <div class="meta-names">
        <span class="mn">${e.nome}</span>
        <span class="mp" style="color:${cor}">${pct}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div style="display:flex;justify-content:space-between;margin-top:4px">
        <span style="font-size:10px;color:var(--text-sub)">Comissão: ${R$(comVal)}</span>
        <span style="font-size:10px;color:var(--text-sub)">Meta: ${R$(e.meta)}</span>
      </div>
    </div>`;
      }).join('');
      document.getElementById('dashMetas').innerHTML = metasHtml;

      // Estoque crítico
      const criticos = DB.estoque.filter(e => e.qtd <= e.min);
      document.getElementById('badgeCritico').textContent = criticos.length + ' itens';
      document.getElementById('dashEstoqueCrit').innerHTML = criticos.length === 0
        ? '<div class="empty-state">Nenhum item crítico</div>'
        : criticos.map(e => `<div class="stock-row">
        <div class="stock-icon" style="width:6px;height:6px;border-radius:50%;background:var(--danger);margin-right:12px;margin-top:6px;"></div>
        <div class="stock-info">
          <div class="sname">${e.nome}</div>
          <div class="smat">${e.mat} · ${e.cod}</div>
        </div>
        <div class="stock-qty-area">
          <div class="sqty">${e.qtd}</div>
          <div class="smin">mín: ${e.min}</div>
        </div>
      </div>`).join('');

      // Compras recentes
      document.getElementById('dashCompras').innerHTML = DB.compraOuro.slice(0, 3).map(c => `
    <div class="compra-mini">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div><div class="cn">${c.nome}</div><div class="ci">${c.tipo} · ${c.qui} · ${c.peso}g</div></div>
        <div class="cval">${R$(c.total)}</div>
      </div>
      <div style="font-size:10px;color:var(--text-sub);margin-top:5px">${c.data} · ${c.pag}</div>
    </div>`).join('');

      // Render daily sales chart
      renderDashboardChart();
    }

    function renderDashboardChart() {
      const canvas = document.getElementById('chartFaturamento');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      // Handle high-density screens
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const width = rect.width;
      const height = rect.height;

      // Calculate daily totals for last 7 days
      const dias = [];
      const valores = [];
      const hoje = new Date();

      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(hoje.getDate() - i);
        const dateStr = d.toLocaleDateString('pt-BR');

        const totalVendas = DB.vendas
          .filter(v => v.status !== 'cancel' && v.data === dateStr)
          .reduce((sum, v) => sum + v.valor, 0);

        dias.push(d.toLocaleDateString('pt-BR', { weekday: 'short' }).substring(0, 3).toUpperCase());
        valores.push(totalVendas);
      }

      ctx.clearRect(0, 0, width, height);

      const paddingLeft = 45;
      const paddingRight = 15;
      const paddingTop = 20;
      const paddingBottom = 25;

      const chartWidth = width - paddingLeft - paddingRight;
      const chartHeight = height - paddingTop - paddingBottom;

      const maxVal = Math.max(...valores, 100);

      // Draw Grid Lines & Y-axis labels
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 1;
      const gridLines = 4;
      for (let i = 0; i <= gridLines; i++) {
        const y = paddingTop + (chartHeight / gridLines) * i;
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(width - paddingRight, y);
        ctx.stroke();

        const val = maxVal - (maxVal / gridLines) * i;
        ctx.fillStyle = 'var(--text-sub)';
        ctx.font = '9px "Inter", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(R$(val).replace('R$', '').trim(), paddingLeft - 8, y + 3);
      }

      // Calculate point coordinates
      const points = [];
      for (let i = 0; i < 7; i++) {
        const x = paddingLeft + (chartWidth / 6) * i;
        const y = paddingTop + chartHeight - (valores[i] / maxVal) * chartHeight;
        points.push({ x, y });
      }

      // Fill gradient area under the curve
      const gradFill = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartHeight);
      gradFill.addColorStop(0, 'rgba(0, 0, 0, 0.08)');
      gradFill.addColorStop(1, 'rgba(0, 0, 0, 0.0)');
      ctx.fillStyle = gradFill;

      ctx.beginPath();
      ctx.moveTo(points[0].x, paddingTop + chartHeight);
      for (let i = 0; i < 7; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.lineTo(points[6].x, paddingTop + chartHeight);
      ctx.closePath();
      ctx.fill();

      // Draw curve line
      ctx.strokeStyle = 'var(--gold)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 6;

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < 7; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      ctx.shadowBlur = 0; // reset shadow

      // Draw circles & X-axis labels
      for (let i = 0; i < 7; i++) {
        ctx.fillStyle = 'var(--gold)';
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'var(--dark)';
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'var(--text-muted)';
        ctx.font = '9px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(dias[i], points[i].x, height - 6);
      }
    }

    function updateFiltVendedora() {
      const filt = document.getElementById('filtVendedora');
      if (!filt) return;
      const currentVal = filt.value;
      const vendedoras = DB.equipe.filter(e => e.role === 'vendedora').map(e => e.nome);
      filt.innerHTML = '<option value="">Todas as vendedoras</option>' + vendedoras.map(v => `<option value="${v}">${v}</option>`).join('');
      if (vendedoras.includes(currentVal)) filt.value = currentVal;
    }

    function renderVendas() {
      updateFiltVendedora();
      const q = (document.getElementById('searchVendas')?.value || '').toLowerCase();
      const fm = document.getElementById('filtMaterial')?.value || '';
      const fs = document.getElementById('filtStatus')?.value || '';
      const fv = document.getElementById('filtVendedora')?.value || '';
      const list = DB.vendas.filter(v => {
        if (q && !v.cliente.toLowerCase().includes(q) && !v.produto.toLowerCase().includes(q)) return false;
        if (fm && v.material !== fm) return false;
        if (fs && v.status !== fs) return false;
        if (fv && (!v.vendedora || !v.vendedora.includes(fv))) return false;
        return true;
      });
      document.getElementById('tbVendas').innerHTML = list.map(v => `<tr>
    <td class="td-small">${v.data}<br>${v.hora}</td>
    <td class="td-bold">${v.cliente}</td>
    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis">${v.produto}</td>
    <td>${matBadge(v.material)}</td>
    <td class="td-small">${v.tam1}${v.tam2 && v.tam2 !== '—' ? '/' + v.tam2 : ''}</td>
    <td>${v.qtd}${v.gramas ? ` <span style="font-size:10px;color:var(--text-muted)">(${v.gramas}g)</span>` : ''}</td>
    <td class="td-gold">${R$(v.valor)}${v.status === 'pend' && v.entrada < v.valor ? `<br><span style="font-size:11px;color:var(--danger)">Falta: ${R$(v.valor - v.entrada)}</span>` : ''}</td>
    <td style="color:var(--text-muted)">${v.pagamento}${v.parcelas !== 'À vista' ? ' · ' + v.parcelas : ''}</td>
    <td>${v.vendedora}${v.via ? `<br><span style="font-size:10px;color:var(--text-muted)">via ${v.via}</span>` : ''}</td>
    <td>${statusBadge(v.status)}</td>
    <td style="display:flex;gap:4px">
      ${v.status === 'pend' && v.entrada < v.valor ? `<button class="btn btn-gold btn-xs" onclick="abrirReceber(${v.id})" title="Receber Restante">Receber</button>` : ''}
        ${!v.nfeStatus || v.nfeStatus === 'erro_autorizacao' ? `<button class="btn btn-gold btn-xs" onclick="emitirNfeAPI(${v.id})" title="Emitir NF-e">NF-e</button>` : v.nfeStatus === 'Processando' ? `<button class="btn btn-outline btn-xs" style="border-color:#F59E0B;color:#F59E0B" title="Processando NF-e" onclick="verificarNfeAPI(${v.id})"><i data-lucide="loader-2" style="width:12px;height:12px"></i></button>` : v.nfePdf && v.nfePdf !== 'undefined' ? `<button class="btn btn-outline btn-xs" style="border-color:#15803D;color:#15803D" title="Ver NF-e PDF" onclick="abrirLinkExterno('${v.nfePdf}')"><i data-lucide="file-check-2" style="width:12px;height:12px"></i></button>` : `<button class="btn btn-gold btn-xs" onclick="emitirNfeAPI(${v.id})" title="Tentar Novamente">NF-e</button>`}
      <button class="btn btn-ghost btn-xs" onclick="imprimirReciboVenda(${v.id})" title="Imprimir Recibo"><i data-lucide="printer" style="width:12px;height:12px"></i></button>
        <button class="btn btn-ghost btn-xs" onclick="imprimirEtiquetaCorreios(${v.id})" title="Etiqueta Correios"><i data-lucide="mail" style="width:12px;height:12px"></i></button>
      <button class="btn btn-ghost btn-xs" onclick="abrirEditarVenda(${v.id})">Editar</button>
      ${session.role === 'gerente' ? `<button class="btn btn-danger-ghost btn-xs" onclick="excluirVenda(${v.id})">&times;</button>` : ''}
    </td>
  </tr>`).join('') || `<tr><td colspan="11" class="empty-state">Nenhuma venda encontrada</td></tr>`;
    }

    function renderEstoque() {
      const fm = document.getElementById('filtEstMat')?.value || '';
      const fs = document.getElementById('filtEstStatus')?.value || '';
      const list = DB.estoque.filter(e => {
        if (fm && e.mat !== fm) return false;
        if (fs === 'crit' && e.qtd > e.min) return false;
        if (fs === 'normal' && e.qtd <= e.min) return false;
        return true;
      });
      document.getElementById('tbEstoque').innerHTML = list.map(e => {
        const crit = e.qtd <= e.min;
        const margem = e.custo > 0 ? Math.round((e.venda - e.custo) / e.venda * 100) : 0;
        return `<tr>
      <td class="td-small">${e.cod}</td>
      <td class="td-bold">${e.nome}</td>
      <td>${matBadge(e.mat)}</td>
      <td style="color:var(--text-muted)">${e.tipo}</td>
      <td class="td-small">${e.tams}</td>
      <td style="${crit ? 'color:var(--danger)' : ''};font-weight:600">${e.qtd}</td>
      <td class="td-small">${e.min}</td>
      <td style="color:var(--text-muted)">${R$(e.custo)}</td>
      <td class="td-gold">${R$(e.venda)}</td>
      <td><span style="color:${margem >= 40 ? '#15803D' : 'var(--gold)'}">${margem}%</span></td>
      <td>${crit ? '<span class="badge b-cancel">Crítico</span>' : '<span class="badge b-ok">Normal</span>'}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-xs nav-gonly" onclick="abrirEditarProduto('${e.cod}')">Editar</button>
          <button class="btn btn-danger-ghost btn-xs nav-gonly" style="padding:2px 6px;line-height:1" onclick="excluirProduto('${e.cod}')" title="Excluir Produto">&times;</button>
        </div>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="12" class="empty-state">Nenhum item encontrado</td></tr>`;
    }

    function renderCompraOuro() {
      const q = (document.getElementById('searchOuro')?.value || '').toLowerCase();
      const list = DB.compraOuro.filter(c => {
        if (q && !c.nome.toLowerCase().includes(q) && !c.cpf.includes(q)) return false;
        return true;
      });
      const pesoTotal = list.reduce((a, c) => a + c.peso, 0);
      const valTotal = list.reduce((a, c) => a + c.total, 0);
      if (document.getElementById('mCOPeso')) document.getElementById('mCOPeso').textContent = pesoTotal.toFixed(1) + 'g';
      if (document.getElementById('mCOValor')) document.getElementById('mCOValor').textContent = 'Total pago: ' + R$(valTotal);
      if (document.getElementById('mCOCount')) document.getElementById('mCOCount').textContent = list.length;

      document.getElementById('tbCompraOuro').innerHTML = list.map(c => `<tr>
    <td class="td-small">${c.data}<br>${c.hora}</td>
    <td class="td-bold">${c.nome}</td>
    <td class="td-small">${c.cpf}</td>
    <td><span class="badge b-compra">${c.tipo}</span></td>
    <td style="color:var(--text-muted)">${c.qui}</td>
    <td style="color:var(--gold);font-weight:600">${c.peso}g</td>
    <td style="color:var(--text-muted)">${R$(c.vg)}</td>
    <td class="td-gold">${R$(c.total)}</td>
    <td style="color:var(--text-muted)">${c.pag}</td>
    <td class="td-small">${c.op}</td>
    <td style="display:flex;gap:4px">
      <button class="btn btn-ghost btn-xs" onclick="imprimirRecibo(${c.id})"><i data-lucide="printer" style="width:12px;height:12px"></i></button>
      ${session.role === 'gerente' ? `<button class="btn btn-danger-ghost btn-xs" onclick="excluirCompraOuro(${c.id})">&times;</button>` : ''}
    </td>
  </tr>`).join('') || `<tr><td colspan="11" class="empty-state">Nenhuma compra registrada</td></tr>`;
    }

    function renderEquipe() {
      const ranking = DB.equipe.map(e => {
        const vends = DB.vendas.filter(v => {
          if (v.status === 'cancel') return false;
          return v.vendedoras ? v.vendedoras.includes(e.nome) : (v.vendedora === e.nome);
        });
        const total = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = (DB.compraOuro || []).filter(c => {
          return c.vendedoras ? c.vendedoras.includes(e.nome) : (c.op === e.nome);
        });
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        const comVal = (total * (e.comissao / 100)) + (pesoOuro * 1.00);
        const pct = e.meta > 0 ? Math.round(comVal / e.meta * 100) : 0;
        return { ...e, total, pesoOuro, comVal, pct };
      }).sort((a, b) => b.total - a.total);

      const rankHtml = ranking.map((e, i) => `
    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="width:24px;font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:20px;color:${i === 0 ? 'var(--gold)' : i === 1 ? '#71717A' : '#A1A1AA'};text-align:center">${i + 1}</div>
      <div class="avatar" style="width:32px;height:32px;font-size:12px">${initials(e.nome)}</div>
      <div style="flex:1">
        <div style="font-size:12px;font-weight:600;color:var(--text)">${e.nome}</div>
        <div class="progress-track" style="margin-top:5px"><div class="progress-fill" style="width:${Math.min(e.pct, 100)}%"></div></div>
      </div>
      <div style="text-align:right">
        <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:16px;color:var(--gold)">${R$(e.total)}</div>
        <div style="font-size:10px;color:var(--text-sub)">${e.meta > 0 ? `${e.pct}% da meta (comissão)` : 'Sem meta'}</div>
      </div>
    </div>`).join('');
      if (document.getElementById('rankingMes')) document.getElementById('rankingMes').innerHTML = rankHtml;

      const comHtml = ranking.map(e => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:12px;font-weight:500;color:var(--text)">${e.nome}</div>
        <div style="font-size:10px;color:var(--text-muted)">
          ${e.comissao}% s/ ${R$(e.total)} ${e.pesoOuro > 0 ? `+ ${e.pesoOuro.toFixed(1)}g ouro` : ''}
        </div>
      </div>
      <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:16px;color:var(--gold)">${R$(e.comVal)}</div>
    </div>`).join('');
      if (document.getElementById('comissoes')) document.getElementById('comissoes').innerHTML = comHtml;

      document.getElementById('tbEquipe').innerHTML = ranking.map(e => {
        const uRole = USERS[e.user]?.role || 'vendedora';
        const roleObj = DB.config.roles[uRole] || ((uRole === 'gerente' || uRole === 'admin') ? { label: 'Gerente', level: 'gerente' } : { label: 'Vendedora', level: 'vendedora' });
        const isGold = roleObj.level === 'gerente';
        const badgeClass = isGold ? 'badge b-gold' : 'badge b-silver';
        const badgeHtml = `<span class="${badgeClass}" style="font-size:9px;padding:2px 4px;margin-left:4px">${roleObj.label}</span>`;
        return `<tr>
    <td class="td-bold">${e.nome} ${badgeHtml}</td>
    <td class="td-small">${e.user}</td>
    <td style="color:var(--text-muted)">${R$(e.meta)}</td>
    <td class="td-gold">${R$(e.total)}</td>
    <td>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="progress-track" style="width:80px"><div class="progress-fill" style="width:${Math.min(e.pct, 100)}%"></div></div>
        <span style="font-size:11px;color:${e.pct >= 90 ? '#15803D' : 'var(--gold)'}">${e.pct}%</span>
      </div>
    </td>
    <td style="color:var(--text-muted)">${e.comissao}%</td>
    <td style="color:#15803D">
      <div>${R$(e.comVal)}</div>
      ${e.pesoOuro > 0 ? `<div style="font-size:9px;color:var(--text-sub)">Ouro: +${R$(e.pesoOuro * 1.00)}</div>` : ''}
    </td>
    <td>${e.ativo !== false ? '<span class="badge b-ok">Ativa</span>' : '<span class="badge b-cancel">Inativa</span>'}</td>
    <td>
      <div style="display:flex;gap:4px">
        <button class="btn btn-ghost btn-xs nav-gonly" onclick="abrirEditarVendedora('${e.user}')">Editar</button>
        ${e.user !== 'admin' ? `<button class="btn btn-danger-ghost btn-xs nav-gonly" style="padding:2px 6px;line-height:1" onclick="excluirVendedora('${e.user}')" title="Excluir Funcionário">&times;</button>` : ''}
      </div>
    </td>
  </tr>`;
      }).join('');

      const divPonto = document.getElementById('subEquipePonto');
      if (divPonto && divPonto.style.display !== 'none') {
        renderPontoEquipe();
      }
    }

    function renderRelatorio() {
      const vends = DB.vendas.filter(v => v.status !== 'cancel');
      const totalGeral = vends.reduce((a, v) => a + v.valor, 0);
      const ticket = vends.length > 0 ? totalGeral / vends.length : 0;

      // por material
      const mats = {};
      vends.forEach(v => { mats[v.material] = (mats[v.material] || 0) + v.valor; });
      const matList = Object.entries(mats).sort((a, b) => b[1] - a[1]);
      const topMat = matList[0];

      // por vendedora
      const byvend = {};
      vends.forEach(v => {
        if (v.vendedoras && v.vendedoras.length) {
          const N = v.vendedoras.length;
          v.vendedoras.forEach(name => {
            byvend[name] = (byvend[name] || 0) + (v.valor / N);
          });
        } else {
          byvend[v.vendedora] = (byvend[v.vendedora] || 0) + v.valor;
        }
      });
      const topVend = Object.entries(byvend).sort((a, b) => b[1] - a[1])[0];

      // por pagamento
      const bypag = {};
      vends.forEach(v => { bypag[v.pagamento] = (bypag[v.pagamento] || 0) + v.valor; });

      // Calcular margem real
      const totalCustoRelatorio = vends.reduce((acc, v) => {
        const item = findStockItemForSale(v);
        const custoUn = item ? item.custo : (v.valor * 0.5);
        return acc + (custoUn * v.qtd);
      }, 0);

      const totalDespPagasRelatorio = (DB.despesas || [])
        .filter(d => d.status === 'pago')
        .reduce((acc, d) => acc + d.valor, 0);

      const lucroLiquidoRelatorio = totalGeral - totalCustoRelatorio - totalDespPagasRelatorio;
      const margemReal = totalGeral > 0 ? Math.round((lucroLiquidoRelatorio / totalGeral) * 100) : 0;

      if (document.getElementById('rTicket')) document.getElementById('rTicket').textContent = R$(ticket);
      if (document.getElementById('rTopProd')) document.getElementById('rTopProd').textContent = topMat ? topMat[0] : '—';
      if (document.getElementById('rMargem')) document.getElementById('rMargem').textContent = margemReal + '%';
      if (document.getElementById('rTopVend')) document.getElementById('rTopVend').textContent = topVend ? topVend[0].split(' ')[0] : '—';

      if (document.getElementById('rMateriais')) {
        document.getElementById('rMateriais').innerHTML = matList.map(([mat, val]) => {
          const pct = Math.round(val / totalGeral * 100);
          return `<div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          ${matBadge(mat)}
          <span style="font-size:12px;color:var(--gold)">${R$(val)} <span style="color:var(--text-sub)">(${pct}%)</span></span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`;
        }).join('');
      }

      if (document.getElementById('rEquipe')) {
        document.getElementById('rEquipe').innerHTML = Object.entries(byvend).sort((a, b) => b[1] - a[1]).map(([nome, val]) => {
          const pct = Math.round(val / totalGeral * 100);
          const e = DB.equipe.find(x => x.nome === nome) || { meta: 12000, comissao: 5 };
          const comVal = val * ((e.comissao || 5) / 100);
          const metaPct = e.meta > 0 ? Math.round(comVal / e.meta * 100) : 0;
          return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
        <div class="avatar" style="width:34px;height:34px;font-size:12px;flex-shrink:0">${initials(nome)}</div>
        <div style="flex:1">
          <div style="font-size:12px;font-weight:500;color:var(--text)">${nome}</div>
          <div class="progress-track" style="margin-top:5px"><div class="progress-fill" style="width:${Math.min(metaPct, 100)}%"></div></div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:15px;color:var(--gold)">${R$(val)}</div>
          <div style="font-size:10px;color:var(--text-sub)">${metaPct}% da meta (comissão)</div>
        </div>
      </div>`;
        }).join('');
      }

      if (document.getElementById('rPagamento')) {
        document.getElementById('rPagamento').innerHTML = Object.entries(bypag).sort((a, b) => b[1] - a[1]).map(([pag, val]) => {
          const pct = Math.round(val / totalGeral * 100);
          return `<div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span style="font-size:12px;color:var(--text)">${pag}</span>
          <span style="font-size:12px;color:var(--gold)">${R$(val)} <span style="color:var(--text-sub)">(${pct}%)</span></span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`;
        }).join('');
      }

      if (document.getElementById('rSemanal')) {
        const semana = ['14/05', '15/05', '16/05', '17/05', '18/05'];
        const vals = semana.map(d => DB.vendas.filter(v => v.data.startsWith(d) && v.status !== 'cancel').reduce((a, v) => a + v.valor, 0));
        const maxV = Math.max(...vals, 1);
        document.getElementById('rSemanal').innerHTML = `<div style="display:flex;align-items:flex-end;gap:10px;height:100px">
      ${semana.map((d, i) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px">
        <div style="font-size:10px;color:var(--gold)">${vals[i] > 0 ? R$(vals[i]).replace('R$ ', '') : ''}</div>
        <div style="width:100%;background:var(--gold);border-radius:3px 3px 0 0;height:${Math.max(vals[i] / maxV * 80, 4)}px;opacity:${0.5 + 0.5 * vals[i] / maxV}"></div>
        <div style="font-size:10px;color:var(--text-sub)">${d}</div>
      </div>`).join('')}
    </div>`;
      }
    }

    function setRelatorioSubTab(tab) {
      const tabDes = document.getElementById('tabRelDesempenho');
      const tabAud = document.getElementById('tabRelAuditoria');
      const divDes = document.getElementById('subRelDesempenho');
      const divAud = document.getElementById('subRelAuditoria');
      if (!tabDes || !tabAud || !divDes || !divAud) return;

      if (tab === 'desempenho') {
        tabDes.style.color = 'var(--text)';
        tabDes.style.borderBottomColor = 'var(--gold)';
        tabAud.style.color = 'var(--text-muted)';
        tabAud.style.borderBottomColor = 'transparent';
        divDes.style.display = 'block';
        divAud.style.display = 'none';
      } else {
        tabDes.style.color = 'var(--text-muted)';
        tabDes.style.borderBottomColor = 'transparent';
        tabAud.style.color = 'var(--text)';
        tabAud.style.borderBottomColor = 'var(--gold)';
        divDes.style.display = 'none';
        divAud.style.display = 'block';
        renderLogs();
      }
    }

    function renderLogs() {
      if (!DB.logs) DB.logs = [];
      const q = (document.getElementById('searchLogs')?.value || '').toLowerCase();
      const cat = document.getElementById('filtLogTipo')?.value || '';

      const list = DB.logs.filter(l => {
        if (q && !l.acao.toLowerCase().includes(q) && !l.nome.toLowerCase().includes(q)) return false;
        if (cat && l.tipo !== cat) return false;
        return true;
      });

      const tb = document.getElementById('tbLogs');
      if (!tb) return;

      const getBadgeClass = (tipo) => {
        switch (tipo) {
          case 'vendas': return 'badge b-ok';
          case 'ouro': return 'badge b-gold';
          case 'ponto': return 'badge b-silver';
          case 'estoque': return 'badge b-gold';
          case 'caixa': return 'badge b-ok';
          case 'config': return 'badge b-pend';
          default: return 'badge b-silver';
        }
      };

      const getBadgeLabel = (tipo) => {
        switch (tipo) {
          case 'vendas': return 'Venda';
          case 'ouro': return 'Ouro';
          case 'ponto': return 'Ponto';
          case 'estoque': return 'Estoque';
          case 'caixa': return 'Caixa';
          case 'config': return 'Config';
          default: return 'Geral';
        }
      };

      tb.innerHTML = list.map(l => {
        return `<tr>
      <td class="td-small">${l.data}<br>${l.hora}</td>
      <td class="td-bold">${l.nome} <span style="font-size:10px;color:var(--text-muted)">(${l.user})</span></td>
      <td style="font-size:12px;color:var(--text)">${l.acao}</td>
      <td><span class="${getBadgeClass(l.tipo)}">${getBadgeLabel(l.tipo)}</span></td>
    </tr>`;
      }).join('') || `<tr><td colspan="4" class="empty-state">Nenhum log de auditoria encontrado</td></tr>`;
    }

    // --- CAIXA DIÁRIO CONTROLLER ---

    function parseDateTime(d, h) {
      if (!d) return 0;
      const parts = d.split('/');
      if (parts.length < 3) return 0;
      const dia = parseInt(parts[0], 10);
      const mes = parseInt(parts[1], 10) - 1;
      const ano = parseInt(parts[2], 10);
      const timeParts = (h || '00:00:00').split(':');
      const hora = parseInt(timeParts[0] || 0, 10);
      const min = parseInt(timeParts[1] || 0, 10);
      const seg = parseInt(timeParts[2] || 0, 10);
      return new Date(ano, mes, dia, hora, min, seg).getTime();
    }

    function getActiveCaixa() {
      if (!DB.caixa) DB.caixa = [];
      return DB.caixa.find(c => c.status === 'aberto');
    }

    function abrirCaixa() {
      const valInput = document.getElementById('cxValorAbertura');
      if (!valInput) return;
      const valorInicial = parseFloat(valInput.value);
      if (isNaN(valorInicial) || valorInicial < 0) {
        toast('Por favor, informe um valor inicial válido (maior ou igual a zero).', 'err');
        return;
      }

      if (!DB.caixa) DB.caixa = [];

      const novoCaixa = {
        id: DB.caixa.length + 1,
        status: 'aberto',
        timestampAbertura: Date.now(),
        dataAbertura: today(),
        horaAbertura: now(),
        usuarioAbertura: session.name || 'Sistema',
        valorInicial: valorInicial,

        // Fechamento fields placeholder
        timestampFechamento: null,
        dataFechamento: null,
        horaFechamento: null,
        usuarioFechamento: null,
        informadoDinheiro: 0,
        informadoPix: 0,
        informadoCartao: 0,
        esperadoDinheiro: 0,
        esperadoPix: 0,
        esperadoCartao: 0,
        obs: ''
      };

      DB.caixa.push(novoCaixa);
      saveDB();
      logAcao(`Caixa aberto com saldo inicial de ${R$(valorInicial)}`, 'caixa');

      // Clear input
      valInput.value = '';

      // Refresh page and UI
      renderAll();
      toast('Caixa aberto com sucesso!');
    }

    function getCaixaEsperado(caixa) {
      if (!caixa) return { dinheiro: 0, pix: 0, cartao: 0 };

      const tAbertura = caixa.timestampAbertura;
      let dinheiro = caixa.valorInicial;
      let pix = 0;
      let cartao = 0;

      // 1. Entradas (Vendas de status !== 'cancel')
      DB.vendas.forEach(v => {
        if (v.status === 'cancel') return;
        const vTime = v.timestamp || parseDateTime(v.data, v.hora);
        if (vTime >= tAbertura) {
          const pag = (v.pagamento || '').toUpperCase();
          const val = v.entrada !== undefined ? parseFloat(v.entrada) : (parseFloat(v.valor) || 0);
          if (pag.includes('DINHEIRO')) {
            dinheiro += val;
          } else if (pag.includes('PIX')) {
            pix += val;
          } else if (pag.includes('CART') || pag.includes('CRÉD') || pag.includes('D-B')) {
            cartao += val;
          }
        }
      });

      // 1.5. Recebimentos de Restante
      (DB.recebimentos || []).forEach(r => {
        const rTime = r.timestamp || parseDateTime(r.data, r.hora);
        if (rTime >= tAbertura) {
          const pag = (r.pagamento || '').toUpperCase();
          const val = parseFloat(r.valor) || 0;
          if (pag.includes('DINHEIRO')) {
            dinheiro += val;
          } else if (pag.includes('PIX')) {
            pix += val;
          } else if (pag.includes('CART') || pag.includes('CRÉD') || pag.includes('DÉB') || pag.includes('D-B')) {
            cartao += val;
          }
        }
      });

      // 2. Saídas (Compras de Ouro)
      DB.compraOuro.forEach(c => {
        const cTime = c.timestamp || parseDateTime(c.data, c.hora);
        if (cTime >= tAbertura) {
          const pag = (c.pag || '').toUpperCase();
          const val = parseFloat(c.total) || 0;
          if (pag.includes('DINHEIRO')) {
            dinheiro -= val;
          } else if (pag.includes('PIX')) {
            pix -= val;
          }
        }
      });

      // 3. Saídas (Despesas PAGAS)
      if (DB.despesas) {
        DB.despesas.forEach(d => {
          if (d.status !== 'pago') return;
          const dTime = d.timestamp || parseDateTime(d.data, '12:00');
          if (dTime >= tAbertura) {
            const val = parseFloat(d.valor) || 0;
            dinheiro -= val;
          }
        });
      }

      return { dinheiro, pix, cartao };
    }

    function excluirCaixaAtivo() {
      if (session.role !== 'admin') {
        toast('Apenas administradores podem excluir o caixa.', 'err');
        return;
      }
      if (confirm('Tem certeza que deseja excluir o caixa atual? Esta operação não pode ser desfeita.')) {
        const last = DB.caixa[DB.caixa.length - 1];
        if (last && !last.dataFechamento) {
          DB.caixa.pop();
          saveDB();
          logAcao('Exclusão de caixa aberto por ' + last.usuarioAbertura, 'caixa');
          renderAll();
          toast('Caixa excluído com sucesso.');
        } else {
          toast('Nenhum caixa aberto para excluir.', 'err');
        }
      }
    }

    function abrirModalFecharCaixa() {
      const caixa = getActiveCaixa();
      if (!caixa) return;

      const esp = getCaixaEsperado(caixa);

      const elEspDin = document.getElementById('cxModalEspDinheiro');
      const elEspPix = document.getElementById('cxModalEspPix');
      const elEspCar = document.getElementById('cxModalEspCartao');

      if (elEspDin) elEspDin.textContent = R$(esp.dinheiro);
      if (elEspPix) elEspPix.textContent = R$(esp.pix);
      if (elEspCar) elEspCar.textContent = R$(esp.cartao);

      // Reset input fields
      document.getElementById('cxConfDinheiro').value = '';
      document.getElementById('cxConfPix').value = '';
      document.getElementById('cxConfCartao').value = '';
      document.getElementById('cxConfObs').value = '';

      openModal('mFecharCaixa');
    }

    function fecharCaixa() {
      const caixa = getActiveCaixa();
      if (!caixa) return;

      const infDin = parseFloat(document.getElementById('cxConfDinheiro').value);
      const infPix = parseFloat(document.getElementById('cxConfPix').value);
      const infCar = parseFloat(document.getElementById('cxConfCartao').value);
      const obs = document.getElementById('cxConfObs').value || '';

      if (isNaN(infDin) || isNaN(infPix) || isNaN(infCar)) {
        toast('Por favor, informe os valores contados/confirmados.', 'err');
        return;
      }

      const esp = getCaixaEsperado(caixa);

      caixa.status = 'fechado';
      caixa.timestampFechamento = Date.now();
      caixa.dataFechamento = today();
      caixa.horaFechamento = now();
      caixa.usuarioFechamento = session.name || 'Sistema';
      caixa.informadoDinheiro = infDin;
      caixa.informadoPix = infPix;
      caixa.informadoCartao = infCar;
      caixa.esperadoDinheiro = esp.dinheiro;
      caixa.esperadoPix = esp.pix;
      caixa.esperadoCartao = esp.cartao;
      caixa.obs = obs;

      saveDB();

      const dif = (infDin + infPix + infCar) - (esp.dinheiro + esp.pix + esp.cartao);
      logAcao(`Caixa fechado. Diferença: ${R$(dif)}`, 'caixa');

      closeModal('mFecharCaixa');
      renderAll();
      toast('Caixa fechado com sucesso!');
    }

    function renderCaixa() {
      const active = getActiveCaixa();

      const fechadoPanel = document.getElementById('cxFechadoPanel');
      const abertoPanel = document.getElementById('cxAbertoPanel');

      if (!fechadoPanel || !abertoPanel) return;

      const btnEx = document.getElementById('btnExcluirCaixa');
      if (btnEx) btnEx.style.display = (session.role === 'admin') ? 'inline-flex' : 'none';

      if (!active) {
        fechadoPanel.style.display = 'block';
        abertoPanel.style.display = 'none';
      } else {
        fechadoPanel.style.display = 'none';
        abertoPanel.style.display = 'block';

        // Update active caixa info
        document.getElementById('cxInfoAbertura').textContent = `Aberto por ${active.usuarioAbertura} às ${active.horaAbertura} de ${active.dataAbertura}`;

        // Get expected values
        const esp = getCaixaEsperado(active);

        document.getElementById('cxMetTroco').textContent = R$(active.valorInicial);
        document.getElementById('cxMetDinheiro').textContent = R$(esp.dinheiro);
        document.getElementById('cxMetPix').textContent = R$(esp.pix);
        document.getElementById('cxMetCartao').textContent = R$(esp.cartao);

        // Populating movements
        const movs = [];

        // 1. Vendas
        DB.vendas.forEach(v => {
          if (v.status === 'cancel') return;
          const vTime = v.timestamp || parseDateTime(v.data, v.hora);
          if (vTime >= active.timestampAbertura) {
            movs.push({
              hora: v.hora,
              tipo: 'Entrada (Venda)',
              desc: `Venda #${v.id} - ${v.cliente} (${v.pagamento})`,
              valor: v.valor,
              isPos: true,
              op: v.vendedora,
              time: vTime
            });
          }
        });

        // 2. Compras Ouro
        DB.compraOuro.forEach(c => {
          const cTime = c.timestamp || parseDateTime(c.data, c.hora);
          if (cTime >= active.timestampAbertura) {
            movs.push({
              hora: c.hora,
              tipo: 'Saída (Compra)',
              desc: `Compra Ouro #${c.id} - ${c.nome} (${c.pag})`,
              valor: c.total,
              isPos: false,
              op: c.op || 'Gerente',
              time: cTime
            });
          }
        });

        // 3. Despesas
        if (DB.despesas) {
          DB.despesas.forEach(d => {
            if (d.status !== 'pago') return;
            const dTime = d.timestamp || parseDateTime(d.data, '12:00');
            if (dTime >= active.timestampAbertura) {
              movs.push({
                hora: '12:00', // default time for expenses
                tipo: 'Saída (Despesa)',
                desc: `Despesa: ${d.descricao} (${d.categoria})`,
                valor: d.valor,
                isPos: false,
                op: 'Sistema',
                time: dTime
              });
            }
          });
        }

        // Sort movements by time
        movs.sort((a, b) => b.time - a.time);

        const tbCaixaMovs = document.getElementById('tbCaixaMovs');
        if (tbCaixaMovs) {
          tbCaixaMovs.innerHTML = movs.map(m => {
            return `<tr>
          <td class="td-small">${m.hora}</td>
          <td><span class="badge ${m.isPos ? 'b-ok' : 'b-pend'}">${m.tipo}</span></td>
          <td style="font-size:12px;max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.desc}</td>
          <td class="${m.isPos ? 'td-gold' : ''}" style="font-weight:600">${m.isPos ? '+' : '-'}${R$(m.valor)}</td>
          <td class="td-small">${m.op}</td>
        </tr>`;
          }).join('') || `<tr><td colspan="5" class="empty-state">Nenhuma movimentação nesta sessão</td></tr>`;
        }

        // Resumo de saldos card
        const cxResumoSaldos = document.getElementById('cxResumoSaldos');
        if (cxResumoSaldos) {
          const totalEntradas = movs.filter(m => m.isPos).reduce((acc, m) => acc + m.valor, 0);
          const totalSaidas = movs.filter(m => !m.isPos).reduce((acc, m) => acc + m.valor, 0);

          cxResumoSaldos.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px">
          <span style="color:var(--text-sub)">Fundo Inicial (Troco):</span>
          <span style="font-weight:600; color:var(--text)">${R$(active.valorInicial)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px">
          <span style="color:var(--text-sub)">Total de Entradas:</span>
          <span style="font-weight:600; color:#15803D">+${R$(totalEntradas)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px">
          <span style="color:var(--text-sub)">Total de Saídas:</span>
          <span style="font-weight:600; color:#B91C1C">-${R$(totalSaidas)}</span>
        </div>
        <div class="divider" style="margin:12px 0"></div>
        <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:700">
          <span style="color:var(--text)">Saldo Líquido em Caixa:</span>
          <span style="color:var(--gold)">${R$(active.valorInicial + totalEntradas - totalSaidas)}</span>
        </div>
      `;
        }
      }

      // Render historical closures
      const tbCaixaHistorico = document.getElementById('tbCaixaHistorico');
      if (tbCaixaHistorico) {
        const historico = (DB.caixa || []).filter(c => c.status === 'fechado');
        historico.sort((a, b) => b.timestampFechamento - a.timestampFechamento);

        tbCaixaHistorico.innerHTML = historico.map(c => {
          const totalEsp = c.esperadoDinheiro + c.esperadoPix + c.esperadoCartao;
          const totalInf = c.informadoDinheiro + c.informadoPix + c.informadoCartao;
          const dif = totalInf - totalEsp;

          let difText = R$(dif);
          let difStyle = 'color:var(--text)';
          if (dif > 0) {
            difText = '+' + difText;
            difStyle = 'color:#15803D; font-weight:600';
          } else if (dif < 0) {
            difStyle = 'color:#B91C1C; font-weight:600';
          }

          return `<tr>
        <td class="td-small">${c.dataAbertura}<br>${c.horaAbertura}</td>
        <td class="td-small">${c.dataFechamento}<br>${c.horaFechamento}</td>
        <td class="td-bold">${c.usuarioFechamento}</td>
        <td>${R$(c.valorInicial)}</td>
        <td>${R$(c.informadoDinheiro)}<br><span style="font-size:10px;color:var(--text-sub)">Esp: ${R$(c.esperadoDinheiro)}</span></td>
        <td>${R$(c.informadoPix)}<br><span style="font-size:10px;color:var(--text-sub)">Esp: ${R$(c.esperadoPix)}</span></td>
        <td style="${difStyle}">${difText}</td>
        <td class="td-small" style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap" title="${c.obs || ''}">${c.obs || '—'}</td>
      </tr>`;
        }).join('') || `<tr><td colspan="8" class="empty-state">Nenhum fechamento de caixa registrado</td></tr>`;
      }
    }

    function renderClientes() {
      const q = (document.getElementById('searchClientes')?.value || '').toLowerCase();
      const list = DB.clientes.filter(c => {
        if (q && !c.nome.toLowerCase().includes(q) && !c.tel.includes(q)) return false;
        return true;
      });
      document.getElementById('tbClientes').innerHTML = list.map(c => {
        const compras = DB.vendas.filter(v => v.cliente === c.nome && v.status !== 'cancel');
        const total = compras.reduce((a, v) => a + v.valor, 0);
        const ult = compras.length > 0 ? compras[compras.length - 1].data : '—';
        return `<tr>
      <td class="td-bold">${c.nome}</td>
      <td>${c.tel}</td>
      <td class="td-small">${c.cpf}</td>
      <td>${c.cidade}/${c.uf}</td>
      <td class="td-gold">${R$(total)}</td>
      <td style="color:var(--text-muted)">${compras.length}</td>
      <td class="td-small">${ult}</td>
      <td>${matBadge(c.pref)}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-xs" onclick="abrirDetalhesCliente('${c.nome.replace(/'/g, "\\'")}')">Ver</button>
          ${session.role === 'gerente' ? `<button class="btn btn-danger-ghost btn-xs" style="padding:2px 6px;line-height:1" onclick="excluirCliente('${c.nome.replace(/'/g, "\\'")}')" title="Excluir Cliente">&times;</button>` : ''}
        </div>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="9" class="empty-state">Nenhum cliente encontrado</td></tr>`;
    }

    // --- ACTIONS ---
    function salvarVenda() {
      if (!getActiveCaixa()) {
        toast('Operação bloqueada: O caixa diário está fechado. Por favor, abra o caixa para realizar operações.', 'err');
        return;
      }
      const cliente = document.getElementById('vCliente').value.trim();
      const prodCod = document.getElementById('vProduto').value;
      const prod = DB.estoque.find(e => e.cod === prodCod);
      const produto = prod ? prod.nome : prodCod;
      const material = document.getElementById('vMaterial').value;
      const valor = parsePtBrFloat(document.getElementById('vValor').value.replace('R$', '').trim());
      if (!cliente || !prodCod || !valor) { toast('Preencha os campos obrigatórios', 'err'); return; }
      
      const entradaStr = document.getElementById('vEntrada').value.replace('R$', '').trim();
      const entrada = entradaStr ? parsePtBrFloat(entradaStr) : valor;
      const statusVenda = entrada < valor ? 'pend' : 'ok';
      
      const promotorSel = document.getElementById('vPromotor')?.value.trim() || '';
      const promotorPct = parseFloat(document.getElementById('vPromotorPct')?.value) || 0;
      const vendedorasSelected = getSelectedVendedoras('vVendedorasDropdown');
      if (vendedorasSelected.length === 0) { toast('Selecione pelo menos uma vendedora', 'err'); return; }
      const novaVenda = {
        id: DB.vendas.length + 1,
        timestamp: Date.now(),
        data: today(), hora: now(),
        cliente, tel: document.getElementById('vTelefone').value,
        produto, material,
        tam1: document.getElementById('vTam1').value || '-',
        tam2: document.getElementById('vTam2').value || '-',
        qtd: parseInt(document.getElementById('vQtd').value) || 1,
        gramas: parseFloat(document.getElementById('vGramas').value.replace(',', '.')) || 0,
        valor, entrada, pagamento: document.getElementById('vPagamento').value,
        parcelas: document.getElementById('vParcelas').value,
        via: document.getElementById('vViaVenda')?.value || '',
        promotor: promotorSel,
        promotorPct: promotorSel ? promotorPct : 0,
        vendedora: vendedorasSelected.join(', '),
        vendedoras: vendedorasSelected,
        status: statusVenda,
        obs: document.getElementById('vObs').value
      };
      DB.vendas.unshift(novaVenda);
      if (window.DatabaseService) window.DatabaseService.saveSale(novaVenda).catch(console.error);
      if (!DB.clientes.find(c => c.nome === cliente)) {
        DB.clientes.push({ nome: cliente, tel: novaVenda.tel, cpf: document.getElementById('vCpf') ? document.getElementById('vCpf').value.trim() : '', cidade: '', uf: 'SP', email: '', obs: '', pref: material, cep: document.getElementById('vCep') ? document.getElementById('vCep').value.trim() : '' });
        logAcao("Cadastro do cliente " + cliente + " (via Venda)", "config");
      }
      saveDB();
      logAcao("Registro de venda de " + R$(valor) + " (Venda #" + novaVenda.id + ")", "vendas");
      closeModal('mVenda');
      renderAll();
      toast('Venda registrada com sucesso! ' + R$(valor));
      ['vCliente', 'vTelefone', 'vTam1', 'vTam2', 'vGramas', 'vValor', 'vEntrada', 'vObs', 'vViaVenda', 'vPromotor'].forEach(id => {
        if (document.getElementById(id)) document.getElementById(id).value = '';
      });
      if (document.getElementById('vPromotorPct')) document.getElementById('vPromotorPct').value = '10';
      document.getElementById('vQtd').value = '1';
    }

    function abrirReceber(id) {
      const v = DB.vendas.find(x => x.id === id);
      if (!v) return;
      document.getElementById('recVendaId').value = id;
      const falta = parseFloat(v.valor) - (v.entrada !== undefined ? parseFloat(v.entrada) : parseFloat(v.valor));
      document.getElementById('recValorStr').textContent = R$(falta);
      document.getElementById('recObs').value = '';
      openModal('mReceber');
    }

    function salvarRecebimento() {
      if (!getActiveCaixa()) {
        toast('Operação bloqueada: O caixa diário está fechado.', 'err');
        return;
      }
      const id = parseInt(document.getElementById('recVendaId').value);
      const v = DB.vendas.find(x => x.id === id);
      if (!v) return;
      const falta = parseFloat(v.valor) - (v.entrada !== undefined ? parseFloat(v.entrada) : parseFloat(v.valor));
      
      const novoRec = {
        id: (DB.recebimentos || []).length + 1,
        idVenda: id,
        timestamp: Date.now(),
        data: today(), hora: now(),
        valor: falta,
        pagamento: document.getElementById('recPagamento').value,
        obs: document.getElementById('recObs').value
      };
      
      if (!DB.recebimentos) DB.recebimentos = [];
      DB.recebimentos.push(novoRec);
      
      v.status = 'ok';
      
      saveDB();
      logAcao(`Recebimento de ${R$(falta)} (Venda #${id})`, 'vendas');
      closeModal('mReceber');
      renderAll();
      toast('Recebimento registrado com sucesso!');
    }

    function salvarCompraOuro() {
      if (!getActiveCaixa()) {
        toast('Operação bloqueada: O caixa diário está fechado. Por favor, abra o caixa para realizar operações.', 'err');
        return;
      }
      const nome = document.getElementById('coNome').value.trim();
      const cpf = document.getElementById('coCpf').value.trim();
      const peso = parseFloat(document.getElementById('coPeso').value) || 0;
      const vg = parseFloat(document.getElementById('coVg').value) || 0;
      if (!nome || !cpf || !peso || !vg) { toast('Preencha todos os campos obrigatórios', 'err'); return; }
      const vendedorasSelected = getSelectedVendedoras('coVendedorasDropdown');
      if (vendedorasSelected.length === 0) { toast('Selecione pelo menos uma vendedora', 'err'); return; }
      const total = peso * vg;
      const novaCompra = {
        id: DB.compraOuro.length + 1,
        timestamp: Date.now(),
        data: today(), hora: now(),
        nome, cpf,
        tel: document.getElementById('coTel').value,
        rg: document.getElementById('coRg').value,
        tipo: document.getElementById('coTipo').value,
        qui: document.getElementById('coQui').value,
        peso, vg, total,
        pag: document.getElementById('coPag').value,
        estado: document.getElementById('coEstado').value,
        obs: document.getElementById('coObs').value,
        op: vendedorasSelected.join(', '),
        vendedoras: vendedorasSelected
      };
      DB.compraOuro.unshift(novaCompra);
      saveDB();
      logAcao("Registro de compra de ouro de " + R$(total) + " (Compra #" + novaCompra.id + ")", "ouro");
      closeModal('mCompraOuro');
      renderAll();
      toast('Compra registrada! Total pago: ' + R$(total));
      ['coNome', 'coCpf', 'coTel', 'coRg', 'coPeso', 'coVg', 'coTotal', 'coObs'].forEach(id => document.getElementById(id).value = '');
    }

    function calcTotal() {
      const p = parseFloat(document.getElementById('coPeso').value) || 0;
      const v = parseFloat(document.getElementById('coVg').value) || 0;
      document.getElementById('coTotal').value = p && v ? (p * v).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '';
    }

    // Preenche a cotação padrão baseada nas configurações ao abrir a compra de ouro
    document.addEventListener('DOMContentLoaded', () => {
      const coVg = document.getElementById('coVg');
      const coQui = document.getElementById('coQui');
      if (coVg && coQui) {
        coVg.value = DB.config.ouro18k || 420;
        coQui.addEventListener('change', () => {
          const q = coQui.value;
          if (q.startsWith('18k')) coVg.value = DB.config.ouro18k || 420;
          else if (q.startsWith('14k')) coVg.value = DB.config.ouro14k || 330;
          else if (q.startsWith('10k')) coVg.value = DB.config.ouro10k || 235;
          else coVg.value = '';
          calcTotal();
        });
      }
    });

    // Auto-fill material and value when selecting a product in sale modal
    document.addEventListener('DOMContentLoaded', () => {
      const vProduto = document.getElementById('vProduto');
      if (vProduto) {
        vProduto.addEventListener('change', () => {
          const cod = vProduto.value;
          const prod = DB.estoque.find(x => x.cod === cod);
          if (prod) {
            const vMaterial = document.getElementById('vMaterial');
            if (vMaterial) {
              vMaterial.value = prod.mat;
            }
            const vValor = document.getElementById('vValor');
            if (vValor) {
              vValor.value = prod.venda.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            }
          } else {
            const vValor = document.getElementById('vValor');
            if (vValor) {
              vValor.value = '';
            }
          }
        });
      }
    });

    function salvarProduto() {
      const nome = document.getElementById('pNome').value.trim();
      const cod = document.getElementById('pCod').value.trim();
      const custo = parsePtBrFloat(document.getElementById('pCusto').value);
      const venda = parsePtBrFloat(document.getElementById('pVenda').value);
      if (!nome || !cod || !custo || !venda) { toast('Preencha os campos obrigatórios', 'err'); return; }
      DB.estoque.push({
        cod, nome,
        mat: document.getElementById('pMat').value,
        tipo: document.getElementById('pTipo').value,
        tams: document.getElementById('pTams').value || 'Universal',
        qtd: parseInt(document.getElementById('pQtd').value) || 0,
        min: parseInt(document.getElementById('pMin').value) || 3,
        custo, venda,
        peso: document.getElementById('pPeso').value || '-'
      });
      saveDB();
      logAcao("Cadastro do produto " + nome + " (Código: " + cod + ")", "estoque");
      closeModal('mProduto');
      renderAll();
      toast('Produto cadastrado: ' + nome);
      ['pNome', 'pCod', 'pTams', 'pCusto', 'pVenda', 'pPeso'].forEach(id => document.getElementById(id).value = '');
    }

    function salvarEntrada() {
      const cod = document.getElementById('eProduto').value;
      const qtd = parseInt(document.getElementById('eQtd').value) || 0;
      if (!qtd) { toast('Informe a quantidade', 'err'); return; }
      const prod = DB.estoque.find(e => e.cod === cod);
      if (prod) { prod.qtd += qtd; }
      saveDB();
      logAcao("Entrada de estoque de " + qtd + " unidades para o produto " + prod.nome + " (Código: " + cod + ")", "estoque");
      closeModal('mEntradaEstoque');
      renderAll();
      toast('Entrada registrada: +' + qtd + ' unidades de ' + prod?.nome);
    }

    function salvarVendedora() {
      const nome = document.getElementById('evNome').value.trim();
      const user = document.getElementById('evUser').value.trim().toLowerCase();
      const senha = document.getElementById('evSenha').value;
      const senha2 = document.getElementById('evSenha2').value;
      if (!nome || !user || !senha) { toast('Preencha os campos obrigatórios', 'err'); return; }
      if (senha !== senha2) { toast('As senhas não coincidem', 'err'); return; }
      if (USERS[user]) { toast('Usuário já existe', 'err'); return; }
      const role = document.getElementById('evRole').value || 'vendedora';
      USERS[user] = { pass: senha, role: role, name: nome, initials: initials(nome) };
      const meta = parsePtBrFloat(document.getElementById('evMeta').value) || 10000;
      const comissao = parsePtBrFloat(document.getElementById('evComissao').value) || 5;
      DB.equipe.push({ nome, user, role, meta, comissao, tel: document.getElementById('evTel').value, cpf: document.getElementById('evCpf').value, ativo: true });
      saveDB();
      saveUSERS();
      logAcao("Cadastro do funcionário " + nome + " (Usuário: " + user + ")", "config");
      closeModal('mVendedora');
      renderAll();
      toast('Funcionário cadastrado: ' + nome);
    }

    function salvarCliente() {
      const nome = document.getElementById('cliNome').value.trim();
      const tel = document.getElementById('cliTel').value.trim();
      if (!nome || !tel) { toast('Nome e telefone são obrigatórios', 'err'); return; }
      DB.clientes.push({ nome, tel, cpf: document.getElementById('cliCpf').value, cidade: document.getElementById('cliCidade').value, uf: document.getElementById('cliUF').value, email: document.getElementById('cliEmail').value, obs: document.getElementById('cliObs').value, pref: 'Ouro 18k', cep: document.getElementById('cliCep').value, bairro: document.getElementById('cliBairro').value, rua: document.getElementById('cliRua').value, numero: document.getElementById('cliNumero').value });
      saveDB();
      logAcao("Cadastro do cliente " + nome, "config");
      closeModal('mCliente');
      renderAll();
      toast('Cliente cadastrado: ' + nome);
    }

    function verVenda(id) {
      const v = DB.vendas.find(x => x.id === id);
      if (!v) return;
      alert(`-- VENDA #${v.id} --\nCliente: ${v.cliente}\nTel: ${v.tel || '-'}\nProduto: ${v.produto}\nMaterial: ${v.material}\nTamanhos: ${v.tam1}/${v.tam2}\nValor: ${R$(v.valor)}\nPagamento: ${v.pagamento} ${v.parcelas !== 'À vista' ? '(' + v.parcelas + ')' : ''}\nVendedora: ${v.vendedora}\nData: ${v.data} às ${v.hora}\nObs: ${v.obs || '-'}`);
    }

    function excluirVenda(id) {
      const v = DB.vendas.find(x => x.id === id);
      if (!v) return;
      const confirmado = confirm(`Excluir venda #${v.id}?\n\nCliente: ${v.cliente}\nProduto: ${v.produto}\nValor: ${R$(v.valor)}\nData: ${v.data}\n\nEsta ação não pode ser desfeita.`);
      if (!confirmado) return;
      DB.vendas = DB.vendas.filter(x => x.id !== id);
      saveDB();
      logAcao("Exclusão de venda de " + R$(v.valor) + " (Venda #" + v.id + ")", "vendas");
      renderAll();
      toast('Venda #' + id + ' excluída por ' + session.name);
    }

    function imprimirRecibo(id) {
      const c = DB.compraOuro.find(x => x.id === id);
      if (!c) return;
      const html = `<html><head><title>Recibo #${c.id}</title><style>body{font-family:sans-serif;padding:30px;max-width:400px;margin:0 auto}h1{font-size:20px;text-align:center;border-bottom:2px solid #000;padding-bottom:10px}table{width:100%;border-collapse:collapse;margin:16px 0}td{padding:6px 4px;border-bottom:1px solid #eee;font-size:13px}.label{font-weight:bold;width:45%}.total{font-size:18px;font-weight:bold;text-align:center;margin-top:20px;padding:12px;border:2px solid #000}.footer{margin-top:30px;font-size:11px;text-align:center;color:#555}</style></head><body>
  <h1>RECIBO DE COMPRA DE OURO</h1>
  <p style="text-align:center;font-size:12px">Recibo #${String(c.id).padStart(4, '0')} · ${c.data} às ${c.hora}</p>
  <table>
  <tr><td class="label">Vendedor:</td><td>${c.nome}</td></tr>
  <tr><td class="label">CPF:</td><td>${c.cpf}</td></tr>
  <tr><td class="label">Tipo de Peça:</td><td>${c.tipo}</td></tr>
  <tr><td class="label">Quilates:</td><td>${c.qui}</td></tr>
  <tr><td class="label">Peso:</td><td>${c.peso}g</td></tr>
  <tr><td class="label">Valor por grama:</td><td>${R$(c.vg)}</td></tr>
  <tr><td class="label">Pagamento:</td><td>${c.pag}</td></tr>
  <tr><td class="label">Operador:</td><td>${c.op}</td></tr>
  </table>
  <div class="total">TOTAL PAGO: ${R$(c.total)}</div>
  <div class="footer">
  <p>Vendedor declara ser proprietário e responsável legal pelo item vendido.</p>
  <p>_______________________________</p>
  <p>Assinatura do Vendedor</p>
  <p style="margin-top:20px">_______________________________</p>
  <p>Querer Joias — Operador: ${c.op}</p>
  </div></body></html>`;
      const w = window.open('', '_blank');
      w.document.write(html);
      w.document.close();
      w.print();
    }

    
    async function verificarNfeAPI(id) {
      const v = DB.vendas.find(x => x.id === id);
      if (!v || !v.nfeRef) {
        if(v) { v.nfeStatus = ''; saveDB(); renderAll(); }
        return;
      }
      toast('Verificando status...', 'sys');
      const cfg = DB.config;
      const isProd = cfg.nfeAmbiente === '1';
      const baseUrl = isProd ? 'https://api.focusnfe.com.br' : 'https://homologacao.focusnfe.com.br';
      const checkUrl = baseUrl + '/v2/nfe/' + v.nfeRef;
      
      try {
        const req = await fetch(checkUrl, { method: 'GET', headers: { 'Authorization': 'Basic ' + btoa(cfg.nfeToken + ':') } });
        const text = await req.text();
        let data;
        try { data = JSON.parse(text); } catch(err) { throw new Error('Resposta Sefaz não é JSON: ' + text.substring(0,50)); }
        if (!req.ok) {
          toast('Erro da Sefaz: ' + (data.mensagem || data.codigo || req.status), 'err');
          return;
        }
        
        if (data.status === 'autorizado') {
          v.nfeStatus = 'Autorizada';
          v.nfePdf = baseUrl + data.caminho_danfe;
          saveDB(); renderAll(); toast('NF-e Autorizada com Sucesso!', 'ok');
        } else if (data.status === 'erro_autorizacao') {
          toast('Sefaz Rejeitou: ' + ((data.erros && data.erros[0] && data.erros[0].mensagem) || data.mensagem || JSON.stringify(data)), 'err');
          v.nfeStatus = 'erro_autorizacao'; saveDB(); renderAll();
        } else if (data.status === 'processando_autorizacao') {
          toast('Ainda processando na Sefaz. Tente denovo em instantes.', 'sys');
        } else {
          toast('Status desconhecido: ' + data.status, 'err');
          v.nfeStatus = ''; saveDB(); renderAll();
        }
      } catch(e) {
        console.error(e);
        toast('Falha: ' + e.message, 'err');
      }
    }

    async function emitirNfeAPI(id) {
      const v = DB.vendas.find(x => x.id === id);
      if (!v) return;
      
      const cfg = DB.config || {};
      if (!cfg.nfeToken || !cfg.nfeCnpj) {
        toast('Configure o Token e CNPJ na aba Configura??es primeiro!', 'err');
        return;
      }

      // Encontrar cliente para pegar os dados
      let cli = DB.clientes.find(c => c.nome.toLowerCase() === v.cliente.toLowerCase() && c.cpf && c.cep);
      if (!cli) cli = DB.clientes.find(c => c.nome.toLowerCase() === v.cliente.toLowerCase());
      if (!cli || !cli.cpf || !cli.cep) {
        toast('O cliente precisa ter CPF/CNPJ e CEP cadastrados!', 'err');
        return;
      }

      const item = findStockItemForSale(v);
      const ncm = item && item.ncm ? item.ncm : '71131900'; // Default Joias
      let cfop = item && item.cfop ? item.cfop : '5102';
        // Auto-fix CFOP based on destination UF
        const destUf = cli.uf ? cli.uf.toUpperCase() : 'SP';
        if (destUf !== 'SP' && cfop.startsWith('5')) {
          cfop = '6' + cfop.substring(1);
        } else if (destUf === 'SP' && cfop.startsWith('6')) {
          cfop = '5' + cfop.substring(1);
        } // Venda dentro do estado

      toast('Iniciando emissão da NF-e...', 'sys');

      const isProd = cfg.nfeAmbiente === '1';
      const baseUrl = isProd ? 'https://api.focusnfe.com.br' : 'https://homologacao.focusnfe.com.br';
      
      toast('Consultando ViaCEP...', 'sys');
      try {
        const cepReq = await fetch('https://viacep.com.br/ws/' + cli.cep.replace(/\D/g, '') + '/json/');
        const cepDados = await cepReq.json();
        if (!cepDados.erro) {
          cli.cidade = cepDados.localidade;
          cli.uf = cepDados.uf;
          cli.bairro = cepDados.bairro || 'Centro';
          cli.rua = cepDados.logradouro || 'Nao informado';
          saveDB();
        }
      } catch(e) { console.log(e); }
      if (!cli.cidade || cli.cidade === 'Nao informada') {
        toast('Erro: CEP invalido. Nao foi possivel definir a cidade.', 'err');
        return;
      }
      const payload = {
        natureza_operacao: 'Venda de mercadoria',
        data_emissao: new Date().toISOString(),
        tipo_documento: 1, // Sa?da
        finalidade_emissao: 1, // Normal
        cnpj_emitente: cfg.nfeCnpj,
        nome_destinatario: cli.nome,
        cpf_destinatario: cli.cpf.replace(/\D/g, ''),
        logradouro_destinatario: cli.rua || 'Nao informado',
        numero_destinatario: cli.numero || 'S/N',
        bairro_destinatario: cli.bairro || 'Centro',
        municipio_destinatario: cli.cidade || 'Nao informada',
        uf_destinatario: cli.uf || 'SP',
        cep_destinatario: cli.cep.replace(/\D/g, ''),
        itens: [
          {
            numero_item: 1,
            codigo_produto: item ? item.cod : '001',
              codigo_ncm: ncm,
            descricao: v.produto,
            cfop: cfop,
            unidade_comercial: 'UN',
            quantidade_comercial: v.qtd,
            valor_unitario_comercial: (v.valor / v.qtd).toFixed(2),
            valor_bruto: v.valor.toFixed(2),
            icms_origem: 0,
            icms_situacao_tributaria: cfg.nfeRegime === '1' ? '102' : '00', // Simples Nacional vs Normal
              pis_situacao_tributaria: '99',
              cofins_situacao_tributaria: '99',
              ncm: ncm
          }
        ],
        valor_frete: 0,
        valor_seguro: 0,
        valor_total: v.valor.toFixed(2),
        valor_produtos: v.valor.toFixed(2),
        modalidade_frete: 9 // Sem frete
      };

      try {
        const res = await fetch(`${baseUrl}/v2/nfe?ref=${v.id}_${Date.now()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(cfg.nfeToken + ':')
          },
          body: JSON.stringify(payload)
        });
        
        const data = await res.json();
        if (!res.ok) {
          console.error(data);
          toast((data.mensagem || 'Erro na Sefaz') + (data.erros ? ' -> ' + JSON.stringify(data.erros) : ''), 'err');
          return;
        }

        v.nfeStatus = 'Processando';
        v.nfeRef = data.ref;
        saveDB();
        renderAll();
        toast('NF-e enviada! Processando...', 'sys');
        
          const checkUrl = baseUrl + '/v2/nfe/' + data.ref;
          const checkStatus = async () => {
            try {
              const pollReq = await fetch(checkUrl, { method: 'GET', headers: { 'Authorization': 'Basic ' + btoa(cfg.nfeToken + ':') } });
              const pollData = await pollReq.json();
              if (pollData.status === 'autorizado') {
                v.nfeStatus = 'Autorizada';
                v.nfePdf = baseUrl + pollData.caminho_danfe;
                saveDB(); renderAll(); toast('NF-e Autorizada com Sucesso!', 'ok');
              } else if (pollData.status === 'erro_autorizacao') {
                toast('Sefaz Rejeitou: ' + ((pollData.erros && pollData.erros[0] && pollData.erros[0].mensagem) || pollData.mensagem || JSON.stringify(pollData)), 'err');
                v.nfeStatus = ''; saveDB(); renderAll();
              } else {
                setTimeout(checkStatus, 3000);
              }
            } catch(e) { console.error(e); v.nfeStatus = ''; saveDB(); renderAll(); toast('Erro de conexão ao verificar NF-e', 'err'); }
          };
          setTimeout(checkStatus, 3000);
      } catch(e) { console.error('NFe error:', e); }
    }

    function imprimirReciboVenda(vendaId) {
      const v = DB.vendas.find(x => x.id === vendaId);
      if (!v) return;
      const lojaNome = (DB.config && DB.config.lojaNome) || 'Querer Joias';

      const html = `<html><head><title>Recibo de Venda #${v.id}</title><style>
    body{font-family:sans-serif;padding:30px;max-width:420px;margin:0 auto;color:#333}
    h1{font-size:20px;text-align:center;border-bottom:2px solid #C9A84C;padding-bottom:10px;color:#9B7A2C;margin-bottom:5px}
    .subtitle{text-align:center;font-size:11px;color:#666;margin-top:0;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px}
    .info-table{width:100%;border-collapse:collapse;margin:16px 0}
    .info-table td{padding:8px 4px;border-bottom:1px solid #eee;font-size:13px}
    .label{font-weight:bold;width:40%;color:#555}
    .total-box{font-size:20px;font-weight:bold;text-align:center;margin:20px 0;padding:14px;border:2px solid #C9A84C;background:#FCF9F2;color:#9B7A2C}
    .footer{margin-top:40px;font-size:11px;text-align:center;color:#777;line-height:1.6}
    .separator{border-top:1px dashed #ccc;margin:20px 0}
  </style></head><body>
  <h1>—o— ${lojaNome.toUpperCase()} —o—</h1>
  <div class="subtitle">Recibo de Venda #${String(v.id).padStart(4, '0')}</div>
  
  <table class="info-table">
    <tr><td class="label">Cliente:</td><td>${v.cliente}</td></tr>
    ${v.tel ? `<tr><td class="label">Telefone:</td><td>${v.tel}</td></tr>` : ''}
    <tr><td class="label">Data/Hora:</td><td>${v.data} às ${v.hora}</td></tr>
    <tr><td class="label">Produto:</td><td>${v.produto}</td></tr>
    <tr><td class="label">Material:</td><td>${v.material}</td></tr>
    <tr><td class="label">Tamanho:</td><td>${v.tam1}${v.tam2 && v.tam2 !== '—' ? ' / ' + v.tam2 : ''}</td></tr>
    <tr><td class="label">Quantidade:</td><td>${v.qtd}</td></tr>
    <tr><td class="label">Forma Pagto:</td><td>${v.pagamento}</td></tr>
    <tr><td class="label">Parcelas:</td><td>${v.parcelas || 'À vista'}</td></tr>
    <tr><td class="label">Vendedora(s):</td><td>${v.vendedora}</td></tr>
    ${v.obs ? `<tr><td class="label">Observações:</td><td>${v.obs}</td></tr>` : ''}
  </table>
  
  <div class="total-box">VALOR TOTAL: ${R$(v.valor)}</div>
  
  <div class="separator"></div>
  
  <div class="footer">
    <p>Obrigado pela preferência!<br>Acesse nosso catálogo e novidades.</p>
    <p style="margin-top:30px">___________________________________</p>
    <p>Assinatura do Cliente</p>
    <p style="margin-top:25px;font-size:9px;color:#999">Comprovante de venda emitido em ${new Date().toLocaleDateString('pt-BR')}</p>
  </div></body></html>`;

      const w = window.open('', '_blank');
      w.document.write(html);
      w.document.close();
      w.print();
    }

    function geraRelRapido() {
      const vends = DB.vendas.filter(v => v.status !== 'cancel');
      const total = vends.reduce((a, v) => a + v.valor, 0);
      const ouro = DB.compraOuro.reduce((a, c) => a + c.total, 0);
      const criticos = DB.estoque.filter(e => e.qtd <= e.min).length;
      const doc = document.getElementById('relRapidoBody');
      doc.innerHTML = `
    <div style="margin-bottom:14px">
      <div class="m-label" style="margin-bottom:4px">Data do Relatório</div>
      <div style="font-size:13px;color:var(--text)">${new Date().toLocaleString('pt-BR')}</div>
    </div>
    <div class="divider"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
      <div style="background:var(--dark3);border-radius:6px;padding:12px">
        <div class="m-label">Total em Vendas</div>
        <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:22px;color:var(--gold)">${R$(total)}</div>
        <div style="font-size:10px;color:var(--text-sub)">${vends.length} transações</div>
      </div>
      <div style="background:var(--dark3);border-radius:6px;padding:12px">
        <div class="m-label">Compra de Ouro</div>
        <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:22px;color:var(--gold)">${R$(ouro)}</div>
        <div style="font-size:10px;color:var(--text-sub)">${DB.compraOuro.length} compras</div>
      </div>
    </div>
    <div class="divider"></div>
    <div style="font-size:12px;color:${criticos > 0 ? '#B91C1C' : '#15803D'};margin-bottom:8px">
      ${criticos > 0 ? '—s—? ' + criticos + ' produto(s) com estoque crítico' : 'Estoque sem itens críticos'}
    </div>
    <div style="font-size:11px;color:var(--text-sub)">Gerado por ${session.name}</div>`;
    }

    function exportarDados() {
      const payload = {
        DB: DB,
        USERS: USERS
      };
      const json = JSON.stringify(payload, null, 2);
      const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'alliancea_backup_' + today().replace(/\//g, '-') + '.json';
      a.click();
      URL.revokeObjectURL(url);
      toast('Backup exportado com sucesso!');
    }

    function importarDados(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const data = JSON.parse(e.target.result);
          if (!data.DB || !data.USERS) {
            throw new Error("Formato de backup inválido. Chaves 'DB' ou 'USERS' ausentes.");
          }
          if (!Array.isArray(data.DB.vendas) || !Array.isArray(data.DB.estoque)) {
            throw new Error("Banco de dados corrompido ou incompatível.");
          }

          const confirmado = confirm("Atenção: A restauração de backup substituirá todos os dados atuais. Deseja continuar?");
          if (!confirmado) {
            event.target.value = '';
            return;
          }

          DB = data.DB;
          USERS = data.USERS;

          saveDB();
          saveUSERS();

          logAcao("Restauração de backup efetuada com sucesso", "config");
          toast('Backup restaurado com sucesso! Recarregando...');
          setTimeout(() => {
            location.reload();
          }, 1000);

        } catch (err) {
          toast('Erro ao importar backup: ' + err.message, 'err');
        } finally {
          event.target.value = '';
        }
      };
      reader.readAsText(file, "UTF-8");
    }

    // --- COMISS—.ES -------------------------------------------

    const MESES_NOMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Açãosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    function initComissoesFiltros() {
      const anoSel = document.getElementById('comAção');
      if (!anoSel) return;
      const anoAtual = new Date().getFullYear();
      anoSel.innerHTML = [anoAtual, anoAtual - 1, anoAtual - 2].map(a => `<option value="${a}">${a}</option>`).join('');
      document.getElementById('comMes').value = new Date().getMonth();
      anoSel.value = anoAtual;
    }

    function getComFiltro() {
      const mes = parseInt(document.getElementById('comMes')?.value ?? new Date().getMonth());
      const ano = parseInt(document.getElementById('comAção')?.value ?? new Date().getFullYear());
      return { mes, ano, label: MESES_NOMES[mes] + '/' + ano };
    }

    function vendasDoPeriodo(nomVendedora, mes, ano) {
      return DB.vendas.filter(v => {
        if (v.status === 'cancel') return false;
        const isMember = v.vendedoras ? v.vendedoras.includes(nomVendedora) : (v.vendedora === nomVendedora);
        if (!isMember) return false;
        const partes = v.data.split('/');
        const vMes = parseInt(partes[1]) - 1;
        const vAção = parseInt(partes[2]);
        return vMes === mes && vAção === ano;
      });
    }

    function comprasOuroDoPeriodo(nomVendedora, mes, ano) {
      if (!DB.compraOuro) return [];
      return DB.compraOuro.filter(c => {
        const isMember = c.vendedoras ? c.vendedoras.includes(nomVendedora) : (c.op === nomVendedora);
        if (!isMember) return false;
        const partes = c.data.split('/');
        const cMes = parseInt(partes[1]) - 1;
        const cAção = parseInt(partes[2]);
        return cMes === mes && cAção === ano;
      });
    }

    function vendasPromotorDoPeriodo(nomPromotor, mes, ano) {
      return DB.vendas.filter(v => {
        if (v.status === 'cancel') return false;
        if (!v.promotor || v.promotor.trim() !== nomPromotor) return false;
        const partes = v.data.split('/');
        return parseInt(partes[1]) - 1 === mes && parseInt(partes[2]) === ano;
      });
    }

    function renderPromotoresDatalist() {
      const list = document.getElementById('promotorList');
      if (!list) return;
      const promotoresUnicos = new Set();
      DB.vendas.forEach(v => {
        if (v.promotor && v.promotor.trim() !== '') promotoresUnicos.add(v.promotor.trim());
      });
      list.innerHTML = Array.from(promotoresUnicos).map(p => `<option value="${p}">`).join('');
    }

    function renderComissoes() {
      const { mes, ano, label } = getComFiltro();

      const vendedoras = DB.equipe.filter(e => {
        const role = e.role || (USERS[e.user] ? USERS[e.user].role : 'vendedora');
        return role !== 'promotor'; // Keeps backwards compatibility if any was registered
      });

      const dadosVendedoras = vendedoras.map(e => {
        const vends = vendasDoPeriodo(e.nome, mes, ano);
        const totalVendas = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = comprasOuroDoPeriodo(e.nome, mes, ano);
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        const comissaoVendas = totalVendas * (e.comissao / 100);
        const comissaoOuro = pesoOuro * 1.00;
        const valorComissao = comissaoVendas + comissaoOuro;
        const jaFechado = DB.historicoComissoes.find(h => h.competencia === label && h.vendedora === e.nome);
        return { ...e, isPromotor: false, vends, totalVendas, pesoOuro, comissaoVendas, comissaoOuro, valorComissao, jaFechado };
      });

      const dados = [...dadosVendedoras];

      const totalVendas = dados.reduce((a, d) => a + d.totalVendas, 0);
      const totalCom = dados.reduce((a, d) => a + d.valorComissao, 0);
      const totalPago = dados.filter(d => d.jaFechado).reduce((a, d) => a + d.valorComissao, 0);
      const totalPend = totalCom - totalPago;

      document.getElementById('comTotalVendas').textContent = R$(totalVendas);
      document.getElementById('comTotalComissao').textContent = R$(totalCom);
      document.getElementById('comTotalPago').textContent = R$(totalPago);
      document.getElementById('comTotalPend').textContent = R$(totalPend);

      document.getElementById('comCards').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
      ${dados.map(d => {
        const pct = d.isPromotor ? 100 : (d.meta > 0 ? Math.min(Math.round(d.valorComissao / d.meta * 100), 100) : 0);
        const cor = pct >= 100 ? '#15803D' : pct >= 70 ? 'var(--gold)' : '#B91C1C';
        const pago = !!d.jaFechado;
        const roleLabel = d.isPromotor ? 'PROMOTOR' : 'VENDEDORA';
        const subtext = d.isPromotor ? `${d.comissao}% s/ vendas atreladas` : `${d.comissao}% s/ vendas + R$1/g ouro`;
        
        return `<div style="background:var(--dark2);border:1px solid ${pago ? 'rgba(21,128,61,.2)' : 'var(--border)'};border-radius:var(--radius-lg);padding:20px;position:relative;overflow:hidden">
          ${pago ? `<div style="position:absolute;top:10px;right:10px"><span class="badge b-ok">PAGO</span></div>` : `<div style="position:absolute;top:10px;right:10px"><span class="badge b-pend">PENDENTE</span></div>`}
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
            <div class="avatar" style="width:42px;height:42px;font-size:15px;flex-shrink:0">${initials(d.nome)}</div>
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--text)">${d.nome} <span style="font-size:10px;color:var(--gold);margin-left:4px">${roleLabel}</span></div>
              <div style="font-size:10px;color:var(--text-muted)">${subtext}</div>
            </div>
          </div>
          <div style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:10px;color:var(--text-muted)">${d.isPromotor ? 'Comissão Vendas' : `Meta Comissão: ${R$(d.meta)}`}</span>
              <span style="font-size:11px;font-weight:600;color:${cor}">${d.isPromotor ? '-' : pct + '%'}</span>
            </div>
            ${!d.isPromotor ? `<div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:linear-gradient(90deg,${pct >= 100 ? '#15803D,#166534' : 'var(--gold-dark),var(--gold)'})"></div></div>` : ''}
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:14px">
            <div style="background:var(--dark3);border-radius:var(--radius);padding:8px 6px;text-align:center">
              <div style="font-size:8px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Vendas</div>
              <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px;color:var(--gold);font-weight:600">${R$(d.totalVendas)}</div>
              <div style="font-size:9px;color:var(--text-sub);white-space:nowrap">${d.vends.length} vendas</div>
            </div>
            <div style="background:var(--dark3);border-radius:var(--radius);padding:8px 6px;text-align:center;${d.isPromotor ? 'opacity:0.3' : ''}">
              <div style="font-size:8px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Ouro</div>
              <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px;color:var(--gold);font-weight:600">${d.pesoOuro.toFixed(1)}g</div>
              <div style="font-size:9px;color:var(--text-sub);white-space:nowrap">${R$(d.comissaoOuro)}</div>
            </div>
            <div style="background:var(--dark3);border-radius:var(--radius);padding:8px 6px;text-align:center;border:1px solid rgba(201,168,76,.15)">
              <div style="font-size:8px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Comissão</div>
              <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px;color:${pago ? '#15803D' : 'var(--gold)'};font-weight:600">${R$(d.valorComissao)}</div>
              <div style="font-size:9px;color:var(--text-sub);white-space:nowrap">${d.comissao}% ${!d.isPromotor ? '+ Ouro' : ''}</div>
            </div>
          </div>
          ${pago
            ? `<div style="text-align:center;font-size:11px;color:#15803D;padding:8px;background:rgba(21,128,61,.06);border-radius:var(--radius);border:1px solid rgba(21,128,61,.15)">Pago em ${d.jaFechado.dataPag} via ${d.jaFechado.formaPag}</div>`
            : (d.totalVendas > 0 || d.pesoOuro > 0)
              ? `<button class="btn btn-gold" style="width:100%;justify-content:center" onclick="abrirPagarIndividual('${d.nome}',${d.valorComissao},'${label}')">Registrar Pagamento</button>`
              : `<div style="text-align:center;font-size:11px;color:var(--text-sub);padding:8px">Sem comissão no período</div>`
          }
        </div>`;
      }).join('')}
    </div>`;

      // Histórico
      document.getElementById('tbHistoricoComissoes').innerHTML = DB.historicoComissoes
        .sort((a, b) => b.id - a.id)
      .map(h => `<tr>
      <td class="td-bold">${h.competencia}</td>
      <td>${h.vendedora}</td>
      <td class="td-gold">${R$(h.totalVendas)}</td>
      <td style="color:var(--text-muted)">${h.pct}%</td>
      <td style="color:#15803D;font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:15px">
        <div>${R$(h.valor)}</div>
        ${h.pesoOuro > 0 ? `<div style="font-size:9px;color:var(--text-sub)">Ouro: +${R$(h.comissaoOuro || (h.pesoOuro * 1.00))}</div>` : ''}
      </td>
      <td style="color:var(--text-muted)">${h.dataPag}</td>
      <td class="td-small">${h.pagoPor}</td>
      <td><span class="badge b-ok">Pago</span></td>
      <td><button class="btn btn-ghost btn-xs" onclick="imprimirComprovante(${h.id})"><i data-lucide="printer" style="width:12px;height:12px"></i></button></td>
    </tr>`).join('') || `<tr><td colspan="9" class="empty-state">Nenhum fechamento registrado</td></tr>`;
    }

    function abrirPagarIndividual(nome, valor, competencia) {
      document.getElementById('pagarIndividualInfo').innerHTML = `
    <div style="background:var(--dark3);border-radius:var(--radius);padding:14px;border:1px solid var(--border-md)">
      <div style="font-size:12px;font-weight:600;color:var(--text);margin-bottom:4px">${nome}</div>
      <div style="font-size:11px;color:var(--text-muted)">Competência: ${competencia}</div>
      <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:22px;color:var(--gold);margin-top:8px">${R$(valor)}</div>
    </div>`;
      document.getElementById('piVendedoraNome').value = nome;
      document.getElementById('piValor').value = valor;
      document.getElementById('piCompetencia').value = competencia;
      document.getElementById('piData').value = new Date().toISOString().split('T')[0];
      openModal('mPagarIndividual');
    }

    function renderPromotoresScreen() {
      const dtIni = document.getElementById('filtroPromoIni').value;
      const dtFim = document.getElementById('filtroPromoFim').value;
      const pNome = document.getElementById('filtroPromoNome').value.trim();

      if (!pNome) {
        document.getElementById('resumoPromotor').innerHTML = '';
        document.getElementById('tabelaPromotor').innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">Digite o nome do promotor para buscar.</div>';
        return;
      }

      let vendasFiltradas = DB.vendas.filter(v => v.status !== 'cancel' && v.promotor && v.promotor.trim().toLowerCase() === pNome.toLowerCase());

      if (dtIni) {
        const tIni = new Date(dtIni + 'T00:00:00').getTime();
        vendasFiltradas = vendasFiltradas.filter(v => {
          const [d, m, y] = v.data.split('/');
          return new Date(`${y}-${m}-${d}T00:00:00`).getTime() >= tIni;
        });
      }

      if (dtFim) {
        const tFim = new Date(dtFim + 'T23:59:59').getTime();
        vendasFiltradas = vendasFiltradas.filter(v => {
          const [d, m, y] = v.data.split('/');
          return new Date(`${y}-${m}-${d}T23:59:59`).getTime() <= tFim;
        });
      }

      vendasFiltradas.sort((a,b) => b.timestamp - a.timestamp);

      const totalVendas = vendasFiltradas.reduce((a, v) => a + v.valor, 0);
      const totalComissao = vendasFiltradas.reduce((a, v) => a + (v.valor * ((v.promotorPct || 0) / 100)), 0);

      const compLabel = (dtIni && dtFim) ? `${dtIni.split('-').reverse().join('/')} a ${dtFim.split('-').reverse().join('/')}` : 'Geral';
      const jaFechado = DB.historicoComissoes.find(h => h.vendedora === pNome && h.competencia === compLabel);

      // Resumo
      document.getElementById('resumoPromotor').innerHTML = `
        <div style="background:var(--dark2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Total de Vendas no Período</div>
          <div style="font-size:24px;font-weight:600;color:var(--text)">${R$(totalVendas)}</div>
          <div style="font-size:11px;color:var(--text-sub);margin-top:4px">${vendasFiltradas.length} venda(s) encontrada(s)</div>
        </div>
        <div style="background:var(--dark2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Comissão a Pagar</div>
          <div style="font-size:24px;font-weight:600;color:var(--gold)">${R$(totalComissao)}</div>
          <div style="margin-top:12px">
            ${jaFechado 
              ? `<button class="btn btn-ghost" style="width:100%;color:#15803D" disabled><i data-lucide="check-circle" style="width:14px;height:14px;margin-right:6px"></i> Pago em ${jaFechado.dataPagamento || 'Data Indefinida'}</button>` 
              : `<button class="btn btn-gold" style="width:100%;justify-content:center" onclick="abrirPagarIndividual('${pNome.replace(/'/g, "\\'")}',${totalComissao},'${compLabel}')" ${totalComissao === 0 ? 'disabled' : ''}>Registrar Pagamento</button>`}
          </div>
        </div>
      `;

      // Tabela
      if (vendasFiltradas.length === 0) {
        document.getElementById('tabelaPromotor').innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">Nenhuma venda encontrada para este período.</div>';
      } else {
        document.getElementById('tabelaPromotor').innerHTML = `
          <table class="table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Valor Venda</th>
                <th>% Combinada</th>
                <th style="text-align:right">Comissão Calculada</th>
              </tr>
            </thead>
            <tbody>
              ${vendasFiltradas.map(v => {
                const comCalc = v.valor * ((v.promotorPct || 0) / 100);
                return `
                  <tr>
                    <td><div style="font-size:13px">${v.data}</div></td>
                    <td><div style="font-weight:600;color:var(--gold)">${v.cliente || '-'}</div></td>
                    <td>${v.produto}</td>
                    <td>${R$(v.valor)}</td>
                    <td><span class="badge b-silver">${v.promotorPct || 0}%</span></td>
                    <td style="text-align:right;color:var(--gold);font-weight:600">${R$(comCalc)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;
      }
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    function confirmarPagamentoIndividual() {
      const nome = document.getElementById('piVendedoraNome').value;
      const valor = parseFloat(document.getElementById('piValor').value);
      const competencia = document.getElementById('piCompetencia').value;
      const data = document.getElementById('piData').value;
      const forma = document.getElementById('piForma').value;
      if (!data) { toast('Informe a data de pagamento', 'err'); return; }
      const e = DB.equipe.find(x => x.nome === nome);
      const { mes, ano } = getComFiltro();
      const totalVendas = vendasDoPeriodo(nome, mes, ano).reduce((a, v) => {
        const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
        return a + (v.valor / N);
      }, 0);
      const compras = comprasOuroDoPeriodo(nome, mes, ano);
      const pesoOuro = compras.reduce((a, c) => {
        const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
        return a + (c.peso / N);
      }, 0);
      const comissaoVendas = totalVendas * ((e?.comissao || 5) / 100);
      const comissaoOuro = pesoOuro * 1.00;
      const dataBR = data.split('-').reverse().join('/');
      DB.historicoComissoes.unshift({
        id: DB.historicoComissoes.length + 1,
        competencia, vendedora: nome,
        totalVendas, pct: e?.comissao || 5,
        comissaoVendas,
        pesoOuro,
        comissaoOuro,
        valor, dataPag: dataBR,
        formaPag: forma,
        pagoPor: session.name,
        obs: document.getElementById('piObs').value
      });
      saveDB();
      closeModal('mPagarIndividual');
      renderComissoes();
      toast('Pagamento de comissão registrado para ' + nome + ' — ' + R$(valor));
    }

    function abrirFechamento() {
      const { label } = getComFiltro();
      const { mes, ano } = getComFiltro();
      const dados = DB.equipe.map(e => {
        const vends = vendasDoPeriodo(e.nome, mes, ano);
        const totalVendas = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = comprasOuroDoPeriodo(e.nome, mes, ano);
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        const comissaoVendas = totalVendas * (e.comissao / 100);
        const comissaoOuro = pesoOuro * 1.00;
        const valorCom = comissaoVendas + comissaoOuro;
        return { ...e, totalVendas, pesoOuro, comissaoVendas, comissaoOuro, valorCom };
      }).filter(d => (d.totalVendas > 0 || d.pesoOuro > 0) && !DB.historicoComissoes.find(h => h.competencia === label && h.vendedora === d.nome));

      if (dados.length === 0) { toast('Todas as comissões desta competência já foram pagas', 'err'); return; }

      const total = dados.reduce((a, d) => a + d.valorCom, 0);
      document.getElementById('fechCompetencia').value = label;
      document.getElementById('fechDataPag').value = new Date().toISOString().split('T')[0];
      document.getElementById('fechTotal').value = R$(total);
      document.getElementById('fechResumo').innerHTML = `
    <div style="background:var(--dark3);border-radius:var(--radius);padding:12px">
      <div style="font-size:10px;letter-spacing:2px;color:var(--text-muted);text-transform:uppercase;margin-bottom:10px">Resumo do fechamento</div>
      ${dados.map(d => `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:12px;color:var(--text)">${d.nome}</span>
        <span style="color:var(--gold);font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px">${R$(d.valorCom)}</span>
      </div>`).join('')}
    </div>`;
      openModal('mFechamento');
    }

    function confirmarFechamento() {
      const label = document.getElementById('fechCompetencia').value;
      const dataRaw = document.getElementById('fechDataPag').value;
      const forma = document.getElementById('fechFormaPag').value;
      const obs = document.getElementById('fechObs').value;
      if (!dataRaw) { toast('Informe a data de pagamento', 'err'); return; }
      const dataBR = dataRaw.split('-').reverse().join('/');
      const { mes, ano } = getComFiltro();
      DB.equipe.forEach(e => {
        const jaExiste = DB.historicoComissoes.find(h => h.competencia === label && h.vendedora === e.nome);
        if (jaExiste) return;
        const vends = vendasDoPeriodo(e.nome, mes, ano);
        const totalVendas = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = comprasOuroDoPeriodo(e.nome, mes, ano);
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        if (totalVendas === 0 && pesoOuro === 0) return;
        const comissaoVendas = totalVendas * (e.comissao / 100);
        const comissaoOuro = pesoOuro * 1.00;
        const valor = comissaoVendas + comissaoOuro;
        DB.historicoComissoes.unshift({
          id: DB.historicoComissoes.length + 1,
          competencia: label, vendedora: e.nome,
          totalVendas, pct: e.comissao,
          comissaoVendas,
          pesoOuro,
          comissaoOuro,
          valor, dataPag: dataBR,
          formaPag: forma, pagoPor: session.name, obs
        });
      });
      saveDB();
      closeModal('mFechamento');
      renderComissoes();
      toast('Competência ' + label + ' fechada com sucesso!');
    }

    function imprimirComprovante(id) {
      const h = DB.historicoComissoes.find(x => x.id === id);
      if (!h) return;
      const pct = h.pct || 5;
      const totalVendas = h.totalVendas || 0;
      const comissaoVendas = h.comissaoVendas !== undefined ? h.comissaoVendas : (totalVendas * pct / 100);
      const pesoOuro = h.pesoOuro || 0;
      const comissaoOuro = h.comissaoOuro !== undefined ? h.comissaoOuro : 0;
      const html = `<html><head><title>Comprovante Comissão</title><style>
    body{font-family:sans-serif;padding:30px;max-width:420px;margin:0 auto}
    h1{font-size:18px;text-align:center;border-bottom:2px solid #C9A84C;padding-bottom:10px;color:#9B7A2C}
    table{width:100%;border-collapse:collapse;margin:16px 0}
    td{padding:7px 4px;border-bottom:1px solid #eee;font-size:13px}.label{font-weight:bold;width:50%}
    .total{font-size:20px;font-weight:bold;text-align:center;margin:20px 0;padding:14px;border:2px solid #C9A84C;color:#9B7A2C}
    .footer{margin-top:30px;font-size:11px;text-align:center;color:#777}
  </style></head><body>
  <h1>—o--- QUERER JOIAS --- Comprovante de Comissão</h1>
  <p style="text-align:center;font-size:11px;color:#777">Emitido em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
  <table>
    <tr><td class="label">Vendedora:</td><td>${h.vendedora}</td></tr>
    <tr><td class="label">Competência:</td><td>${h.competencia}</td></tr>
    <tr><td class="label">Total em Vendas:</td><td>${R$(totalVendas)}</td></tr>
    <tr><td class="label">Comissão s/ Vendas:</td><td>${R$(comissaoVendas)} (${pct}%)</td></tr>
    <tr><td class="label">Peso Ouro Comprado:</td><td>${pesoOuro.toFixed(1)}g</td></tr>
    <tr><td class="label">Comissão s/ Ouro:</td><td>${R$(comissaoOuro)} (R$ 1/g)</td></tr>
    <tr><td class="label">Data de Pagamento:</td><td>${h.dataPag}</td></tr>
    <tr><td class="label">Forma de Pagamento:</td><td>${h.formaPag}</td></tr>
    <tr><td class="label">Autorizado por:</td><td>${h.pagoPor}</td></tr>
  </table>
  <div class="total">COMISSÃO PAGA: ${R$(h.valor)}</div>
  <div class="footer">
    <p>_______________________________</p>
    <p>Assinatura da Vendedora: ${h.vendedora}</p>
    <p style="margin-top:20px">_______________________________</p>
    <p>Gerência — Querer Joias</p>
    <p style="margin-top:10px;font-size:10px">Este documento é um comprovante interno de pagamento de comissão.</p>
  </div></body></html>`;
      const w = window.open('', '_blank');
      w.document.write(html);
      w.document.close();
      w.print();
    }

    function imprimirFolhaPagamento() {
      const { mes, ano, label } = getComFiltro();
      const dados = DB.equipe.map(e => {
        const vends = vendasDoPeriodo(e.nome, mes, ano);
        const totalVendas = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = comprasOuroDoPeriodo(e.nome, mes, ano);
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        const comissaoVendas = totalVendas * (e.comissao / 100);
        const comissaoOuro = pesoOuro * 1.00;
        const valorCom = comissaoVendas + comissaoOuro;
        const pago = !!DB.historicoComissoes.find(h => h.competencia === label && h.vendedora === e.nome);
        return { ...e, totalVendas, pesoOuro, comissaoVendas, comissaoOuro, valorCom, pago };
      });
      const totalGeral = dados.reduce((a, d) => a + d.valorCom, 0);
      const html = `<html><head><title>Folha de Comissões ${label}</title><style>
    body{font-family:sans-serif;padding:30px;max-width:700px;margin:0 auto}
    h1{font-size:20px;text-align:center;border-bottom:2px solid #C9A84C;padding-bottom:10px;color:#9B7A2C}
    table{width:100%;border-collapse:collapse;margin:20px 0}
    th{background:#f5f0e8;padding:8px;font-size:11px;letter-spacing:1px;text-transform:uppercase;text-align:left}
    td{padding:10px 8px;border-bottom:1px solid #eee;font-size:13px}
    .total{font-weight:bold;background:#f5f0e8}
    .status-pago{color:green;font-weight:bold}
    .status-pend{color:orange;font-weight:bold}
    .footer{margin-top:40px;font-size:11px;color:#777;text-align:center}
  </style></head><body>
  <h1>—o--- QUERER JOIAS --- Folha de Comissões</h1>
  <p style="text-align:center">Competência: <strong>${label}</strong> · Emitida em: ${new Date().toLocaleDateString('pt-BR')}</p>
  <table>
    <thead><tr><th>Vendedora</th><th>Total Vendas</th><th>Comissão Vendas</th><th>Ouro Comprado</th><th>Comissão Ouro</th><th>Valor Total</th><th>Status</th></tr></thead>
    <tbody>
      ${dados.map(d => `<tr>
        <td>${d.nome}</td>
        <td>${R$(d.totalVendas)}</td>
        <td>${R$(d.comissaoVendas)} (${d.comissao}%)</td>
        <td>${d.pesoOuro.toFixed(1)}g</td>
        <td>${R$(d.comissaoOuro)}</td>
        <td><strong>${R$(d.valorCom)}</strong></td>
        <td class="${d.pago ? 'status-pago' : 'status-pend'}">${d.pago ? 'PAGO' : 'PENDENTE'}</td>
      </tr>`).join('')}
      <tr class="total"><td colspan="5"><strong>TOTAL GERAL</strong></td><td><strong>${R$(totalGeral)}</strong></td><td></td></tr>
    </tbody>
  </table>
  <div class="footer">
    <p>_______________________________</p><p>Gerência — Querer Joias</p>
  </div></body></html>`;
      const w = window.open('', '_blank');
      w.document.write(html);
      w.document.close();
      w.print();
    }

    // --- CONFIGURATION MANAGEMENT ---
    function loadConfigInputs() {
      const cfg = DB.config || {};
      document.getElementById('cfgLojaNome').value = cfg.lojaNome || 'Querer Joias';
      document.getElementById('cfgCnpj').value = cfg.cnpj || '';
      document.getElementById('cfgTelefone').value = cfg.telefone || '';
      document.getElementById('cfgWhatsapp').value = cfg.whatsapp || '';
      document.getElementById('cfgEndereco').value = cfg.endereco || '';

      document.getElementById('cfgOuro18k').value = Number(cfg.ouro18k || 420.00).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      document.getElementById('cfgOuro14k').value = Number(cfg.ouro14k || 330.00).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      document.getElementById('cfgOuro10k').value = Number(cfg.ouro10k || 235.00).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      document.getElementById('cfgPrata925').value = Number(cfg.prata925 || 4.80).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      document.getElementById('cfgMargemCompraOuro').value = cfg.margemCompraOuro || 70;

      document.getElementById('cfgDescontoMax').value = cfg.descontoMax !== undefined ? cfg.descontoMax : 10;
      document.getElementById('cfgParcelasMax').value = cfg.parcelasMax !== undefined ? cfg.parcelasMax : 12;
      document.getElementById('cfgTaxaCartao').value = cfg.taxaCartao !== undefined ? cfg.taxaCartao : 2.5;
      document.getElementById('cfgEstoqueMinPadrão').value = cfg.estoqueMinPadrão !== undefined ? cfg.estoqueMinPadrão : 3;
      document.getElementById('cfgNfeToken').value = cfg.nfeToken || '';
      document.getElementById('cfgNfeAmbiente').value = cfg.nfeAmbiente || '2';
      document.getElementById('cfgNfeCnpj').value = cfg.nfeCnpj || '';
      document.getElementById('cfgNfeRegime').value = cfg.nfeRegime || '1';
      document.getElementById('cfgNfeMun').value = cfg.nfeMun || '';
    }

    function salvarConfigNfe() {
      if (!DB.config) DB.config = {};
      DB.config.nfeToken = document.getElementById('cfgNfeToken').value.trim();
      DB.config.nfeAmbiente = document.getElementById('cfgNfeAmbiente').value;
      DB.config.nfeCnpj = document.getElementById('cfgNfeCnpj').value.trim().replace(/\D/g, '');
      DB.config.nfeRegime = document.getElementById('cfgNfeRegime').value;
      DB.config.nfeMun = document.getElementById('cfgNfeMun').value.trim();
      saveDB();
      logAcao('Atualizacao de credenciais e parametros de NF-e API', 'config');
      toast('Configurações da API NF-e salvas!');
    }

    function salvarConfigDados() {
      if (!DB.config) DB.config = {};
      DB.config.lojaNome = document.getElementById('cfgLojaNome').value.trim();
      DB.config.cnpj = document.getElementById('cfgCnpj').value.trim();
      DB.config.telefone = document.getElementById('cfgTelefone').value.trim();
      DB.config.whatsapp = document.getElementById('cfgWhatsapp').value.trim();
      DB.config.endereco = document.getElementById('cfgEndereco').value.trim();
      saveDB();

      const name = DB.config.lojaNome || 'Querer Joias';
      document.querySelectorAll('.brand').forEach(el => {
        el.innerHTML = `<i data-lucide="gem" style="color:var(--gold);width:20px;height:20px;stroke-width:1.5px"></i> ${name.toUpperCase()}`;
      });
      document.querySelectorAll('.login-logo').forEach(el => {
        el.innerHTML = `<i data-lucide="gem" style="color:var(--gold);width:26px;height:26px;stroke-width:1.5px"></i> ${name.toUpperCase()}`;
      });
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }

      logAcao("Atualização de dados cadastrais da joalheria", "config");
      toast('Dados da joalheria salvos!');
    }

    

    function salvarConfigCotacoes() {
      if (!DB.config) DB.config = {};
      DB.config.ouro18k = parsePtBrFloat(document.getElementById('cfgOuro18k').value);
      DB.config.ouro14k = parsePtBrFloat(document.getElementById('cfgOuro14k').value);
      DB.config.ouro10k = parsePtBrFloat(document.getElementById('cfgOuro10k').value);
      DB.config.prata925 = parsePtBrFloat(document.getElementById('cfgPrata925').value);
      DB.config.margemCompraOuro = parseInt(document.getElementById('cfgMargemCompraOuro').value) || 70;
      saveDB();

      renderCompraOuro();

      const coVg = document.getElementById('coVg');
      if (coVg) {
        coVg.value = DB.config.ouro18k;
        calcTotal();
      }

      logAcao("Atualização das cotações de metais e margem", "config");
      toast('Cotações de ouro e prata atualizadas!');
    }

    function sincronizarCotacoesAPI() {
      const margem = parseFloat(document.getElementById('cfgMargemCompraOuro').value) || 70;
      toast('Buscando cotações de ouro...');
      fetch('https://economia.awesomeapi.com.br/json/last/XAU-BRL')
        .then(res => {
          if (!res.ok) throw new Error('Falha ao obter cotação');
          return res.json();
        })
        .then(data => {
          if (!data || !data.XAUBRL || !data.XAUBRL.bid) throw new Error('Dado inválido');
          const bid = parseFloat(data.XAUBRL.bid);
          const xauGrama = bid / 31.1034768; // Troy Ounce to Gram

          const ouro18 = xauGrama * 0.75 * (margem / 100);
          const ouro14 = xauGrama * 0.583 * (margem / 100);
          const ouro10 = xauGrama * 0.417 * (margem / 100);

          document.getElementById('cfgOuro18k').value = ouro18.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          document.getElementById('cfgOuro14k').value = ouro14.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          document.getElementById('cfgOuro10k').value = ouro10.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

          toast('Cotações calculadas com margem de ' + margem + '%! Clique em Atualizar Cotações para salvar.');
        })
        .catch(err => {
          console.error(err);
          toast('Erro ao buscar cotação via API: ' + err.message, 'err');
        });
    }

    function salvarConfigParametros() {
      if (!DB.config) DB.config = {};
      DB.config.descontoMax = parseFloat(document.getElementById('cfgDescontoMax').value) || 10;
      DB.config.parcelasMax = parseInt(document.getElementById('cfgParcelasMax').value) || 12;
      DB.config.taxaCartao = parseFloat(document.getElementById('cfgTaxaCartao').value) || 2.5;
      DB.config.estoqueMinPadrão = parseInt(document.getElementById('cfgEstoqueMinPadrão').value) || 3;
      saveDB();
      logAcao("Atualização de parâmetros de vendas e estoque", "config");
      toast('Parâmetros de venda salvos!');
    }

    // --- NEW EDIT & VIEW ACTIONS ---

    function findStockItemForSale(v) {
      const prodName = v.produto.toLowerCase();
      const matName = v.material.toLowerCase();

      let found = DB.estoque.find(e => {
        const eNome = e.nome.toLowerCase();
        const eMat = e.mat.toLowerCase();
        if (prodName.includes(eNome) && matName.includes(eMat)) return true;
        if (prodName.includes('classic') && eNome.includes('classic')) return true;
        if (prodName.includes('trabalhada') && eNome.includes('trabalhada')) return true;
        if (prodName.includes('moeda') && eNome.includes('moeda')) return true;
        if (prodName.includes('banhad') && eNome.includes('banhad')) return true;
        if (prodName.includes('prata 925') && eNome.includes('prata 925')) return true;
        if (prodName.includes('avulsa') && eNome.includes('avulsa') && matName.includes(eMat)) return true;
        if (prodName.includes('solitário') && eNome.includes('solitário')) return true;
        if (prodName.includes('corrente') && eNome.includes('corrente')) return true;
        return false;
      });

      if (!found) {
        found = DB.estoque.find(e => {
          const eNome = e.nome.toLowerCase();
          if (prodName.includes('classic') && eNome.includes('classic')) return true;
          if (prodName.includes('trabalhada') && eNome.includes('trabalhada')) return true;
          if (prodName.includes('moeda') && eNome.includes('moeda')) return true;
          if (prodName.includes('banhad') && eNome.includes('banhad')) return true;
          if (prodName.includes('prata') && eNome.includes('prata')) return true;
          if (prodName.includes('avulsa') && eNome.includes('avulsa')) return true;
          if (prodName.includes('solitário') && eNome.includes('solitário')) return true;
          if (prodName.includes('corrente') && eNome.includes('corrente')) return true;
          return false;
        });
      }

      if (!found) {
        found = DB.estoque.find(e => e.mat.toLowerCase() === matName);
      }
      return found;
    }

    // Opção 1: Editar Produto
    function abrirEditarProduto(cod) {
      const p = DB.estoque.find(x => x.cod === cod);
      if (!p) return;
      document.getElementById('epCodOriginal').value = p.cod;
      document.getElementById('epNome').value = p.nome;
      document.getElementById('epCod').value = p.cod;
      document.getElementById('epMat').value = p.mat;
      document.getElementById('epTipo').value = p.tipo;
      document.getElementById('epTams').value = p.tams || '';
      document.getElementById('epQtd').value = p.qtd;
      document.getElementById('epMin').value = p.min;
      document.getElementById('epPeso').value = p.peso || '';
      document.getElementById('epCusto').value = p.custo;
      document.getElementById('epVenda').value = p.venda;
      openModal('mEditarProduto');
    }

    function salvarEdicaoProduto() {
      const codOriginal = document.getElementById('epCodOriginal').value;
      const p = DB.estoque.find(x => x.cod === codOriginal);
      if (!p) { toast('Produto não encontrado', 'err'); return; }

      const novoCod = document.getElementById('epCod').value.trim();
      const nome = document.getElementById('epNome').value.trim();
      const custo = parsePtBrFloat(document.getElementById('epCusto').value);
      const venda = parsePtBrFloat(document.getElementById('epVenda').value);

      if (!nome || !novoCod || custo <= 0 || venda <= 0) {
        toast('Preencha todos os campos obrigatórios corretamente', 'err');
        return;
      }

      if (novoCod !== codOriginal && DB.estoque.some(x => x.cod === novoCod)) {
        toast('Já existe um produto com o novo código cadastrado', 'err');
        return;
      }

      p.nome = nome;
      p.cod = novoCod;
      p.mat = document.getElementById('epMat').value;
      p.tipo = document.getElementById('epTipo').value;
      p.tams = document.getElementById('epTams').value || 'Universal';
      p.qtd = parseInt(document.getElementById('epQtd').value) || 0;
      p.min = parseInt(document.getElementById('epMin').value) || 0;
      p.peso = document.getElementById('epPeso').value || '—';
      p.custo = custo;
      p.venda = venda;

      saveDB();
      logAcao("Edição do produto " + nome + " (Código: " + novoCod + ")", "estoque");
      closeModal('mEditarProduto');
      renderAll();
      toast('Produto editado com sucesso!');
    }

    // Opção 2: Editar Venda
    function abrirEditarVenda(id) {
      const v = DB.vendas.find(x => x.id === id);
      if (!v) return;
      document.getElementById('evId').value = v.id;
      document.getElementById('evCliente').value = v.cliente;
      document.getElementById('evTelefone').value = v.tel || '';
      document.getElementById('evProduto').value = v.produto;
      document.getElementById('evMaterial').value = v.material;
      document.getElementById('evTam1').value = v.tam1 || '';
      document.getElementById('evTam2').value = v.tam2 || '';
      document.getElementById('evQtd').value = v.qtd;
      document.getElementById('evValor').value = v.valor;
      document.getElementById('evPagamento').value = v.pagamento;
      document.getElementById('evStatus').value = v.status;
      document.getElementById('evObs').value = v.obs || '';
      openModal('mEditarVenda');
    }

    function salvarEdicaoVenda() {
      const id = parseInt(document.getElementById('evId').value);
      const v = DB.vendas.find(x => x.id === id);
      if (!v) { toast('Venda não encontrada', 'err'); return; }

      const valor = parsePtBrFloat(document.getElementById('evValor').value);
      const qtd = parseInt(document.getElementById('evQtd').value) || 1;

      if (valor <= 0 || qtd <= 0) {
        toast('Preencha a quantidade e valor corretamente', 'err');
        return;
      }

      v.tel = document.getElementById('evTelefone').value;
      v.material = document.getElementById('evMaterial').value;
      v.tam1 = document.getElementById('evTam1').value || '—';
      v.tam2 = document.getElementById('evTam2').value || '—';
      v.qtd = qtd;
      v.valor = valor;
      v.pagamento = document.getElementById('evPagamento').value;
      v.status = document.getElementById('evStatus').value;
      v.obs = document.getElementById('evObs').value;

      const cli = DB.clientes.find(c => c.nome === v.cliente);
      if (cli) {
        cli.tel = v.tel;
      }

      saveDB();
      logAcao("Edição de venda de R$ " + valor.toFixed(2) + " (Venda #" + id + ")", "vendas");
      closeModal('mEditarVenda');
      renderAll();
      toast('Venda atualizada com sucesso!');
    }

    // Opção 3: Detalhes do Cliente
    function abrirDetalhesCliente(nome) {
      const cli = DB.clientes.find(c => c.nome === nome);
      if (!cli) return;

      const compras = DB.vendas.filter(v => v.cliente === nome);
      const comprasValidas = compras.filter(v => v.status !== 'cancel');
      const totalGasto = comprasValidas.reduce((a, v) => a + v.valor, 0);
      const qtdCompras = comprasValidas.length;

      const mats = {};
      comprasValidas.forEach(v => {
        mats[v.material] = (mats[v.material] || 0) + v.qtd;
      });
      let prefMat = cli.pref || '—';
      const matEntries = Object.entries(mats);
      if (matEntries.length > 0) {
        prefMat = matEntries.sort((a, b) => b[1] - a[1])[0][0];
      }

      document.getElementById('mcdNome').textContent = 'Ficha do Cliente: ' + cli.nome;
      document.getElementById('mcdTotalGasto').textContent = R$(totalGasto);
      document.getElementById('mcdQtdCompras').textContent = qtdCompras;
      document.getElementById('mcdPrefMaterial').innerHTML = matBadge(prefMat);

      const tbody = document.getElementById('mcdHistoricoTbody');
      if (compras.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-state">Nenhuma compra registrada.</td></tr>`;
      } else {
        tbody.innerHTML = compras.map(v => `<tr>
      <td class="td-small">${v.data}</td>
      <td class="td-bold">${v.produto}</td>
      <td>${matBadge(v.material)}</td>
      <td>${v.tam1}${v.tam2 && v.tam2 !== '—' ? '/' + v.tam2 : ''}</td>
      <td>${v.qtd}</td>
      <td class="td-gold">${R$(v.valor)}</td>
      <td>${v.vendedora}</td>
      <td>${statusBadge(v.status)}</td>
    </tr>`).join('');
      }

      openModal('mClienteDetalhes');
    }

    // Opção 4: Editar Equipe
    function abrirEditarVendedora(user) {
      try {
        const e = DB.equipe.find(x => x.user === user);
        if (!e) { alert("Funcionário não encontrado no banco de dados para o usuário: " + user); return; }
        preencheRolesSelect('edvRole', USERS[user]?.role || 'vendedora');
        document.getElementById('edvUser').value = e.user;
        document.getElementById('edvNome').value = e.nome;
        document.getElementById('edvMeta').value = e.meta;
        document.getElementById('edvComissao').value = e.comissao;
        document.getElementById('edvAtivo').value = String(e.ativo !== false);
        document.getElementById('edvTel').value = e.tel || '';
        document.getElementById('edvCpf').value = e.cpf || '';
        document.getElementById('edvSenha').value = '';
        openModal('mEditarVendedora');
      } catch (err) {
        alert("Erro ao abrir formulário de edição: " + err.message);
        console.error(err);
      }
    }

    function salvarEdicaoVendedora() {
      try {
        const user = document.getElementById('edvUser').value;
        const e = DB.equipe.find(x => x.user === user);
        if (!e) { toast('Vendedora não encontrada', 'err'); return; }

        const nome = document.getElementById('edvNome').value.trim();
        const meta = parsePtBrFloat(document.getElementById('edvMeta').value);
        const comissao = parsePtBrFloat(document.getElementById('edvComissao').value);
        const ativo = document.getElementById('edvAtivo').value === 'true';
        const novaSenha = document.getElementById('edvSenha').value;

        if (!nome || isNaN(meta) || meta < 0 || isNaN(comissao) || comissao < 0) {
          toast('Nome, meta e comissão devem ser informados e válidos', 'err');
          return;
        }

        e.nome = nome;
        e.meta = meta;
        e.comissao = comissao;
        e.ativo = ativo;
        e.tel = document.getElementById('edvTel').value;
        e.cpf = document.getElementById('edvCpf').value;

        if (USERS[user]) {
          USERS[user].name = nome;
          USERS[user].initials = initials(nome);
          const role = document.getElementById('edvRole').value || 'vendedora';
          USERS[user].role = role;
          if (novaSenha) {
            USERS[user].pass = novaSenha;
          }

          // Update active session dynamically if current user changes their own name/role
          if (session && session.user === user) {
            const roleObj = DB.config.roles[role] || ((role === 'gerente' || role === 'admin') ? { label: 'Gerente', level: 'gerente' } : { label: 'Vendedora', level: 'vendedora' });
            session.name = nome;
            session.initials = USERS[user].initials;
            session.role = roleObj.level;
            session.roleKey = role;
            session.roleLabel = roleObj.label;

            const sNameEl = document.getElementById('sName');
            const sAvatarEl = document.getElementById('sAvatar');
            const sRoleEl = document.getElementById('sRole');
            if (sNameEl) sNameEl.textContent = nome;
            if (sAvatarEl) sAvatarEl.textContent = session.initials;
            if (sRoleEl) {
              sRoleEl.textContent = roleObj.label.toUpperCase();
              sRoleEl.className = 'user-role ' + (roleObj.level === 'gerente' ? 'role-g' : 'role-v');
            }
            document.body.className = 'role-' + roleObj.level;
          }
        }

        saveDB();
        saveUSERS();
        logAcao("Edição do funcionário " + nome + " (Usuário: " + user + ")", "config");
        closeModal('mEditarVendedora');
        renderAll();
        toast('Funcionário editado com sucesso!');
      } catch (err) {
        alert("Erro ao salvar alterações da vendedora: " + err.message);
        console.error(err);
      }
    }

    function excluirVendedora(user) {
      try {
        if (user === 'admin') {
          toast('Não é permitido excluir o usuário gerente administrador', 'err');
          return;
        }
        const e = DB.equipe.find(x => x.user === user);
        if (!e) {
          toast('Funcionário não encontrado no banco de dados', 'err');
          return;
        }
        if (!confirm(`Tem certeza de que deseja excluir permanentemente o(a) funcionário(a) "${e.nome}"?\nEle(a) perderá acesso ao sistema.`)) {
          return;
        }

        // Remove from DB.equipe
        DB.equipe = DB.equipe.filter(x => x.user !== user);

        // Remove from USERS
        if (USERS[user]) {
          delete USERS[user];
        }

        saveDB();
        saveUSERS();
        logAcao("Exclusão do funcionário " + e.nome + " (Usuário: " + user + ")", "config");
        renderAll();
        toast(`Funcionário "${e.nome}" excluído com sucesso.`);
      } catch (err) {
        alert("Erro ao excluir funcionário: " + err.message);
        console.error(err);
      }
    }

    function excluirCliente(nome) {
      try {
        const c = DB.clientes.find(x => x.nome === nome);
        if (!c) {
          toast('Cliente não encontrado no banco de dados', 'err');
          return;
        }
        if (!confirm(`Tem certeza de que deseja excluir permanentemente o cadastro do(a) cliente "${nome}"?\nIsso não excluirá o histórico de compras/vendas dele(a).`)) {
          return;
        }
        DB.clientes = DB.clientes.filter(x => x.nome !== nome);
        saveDB();
        logAcao("Exclusão do cliente " + nome, "config");
        renderAll();
        toast(`Cliente "${nome}" excluído com sucesso.`);
      } catch (err) {
        alert("Erro ao excluir cliente: " + err.message);
        console.error(err);
      }
    }

    function excluirProduto(cod) {
      try {
        const p = DB.estoque.find(x => x.cod === cod);
        if (!p) {
          toast('Produto não encontrado no banco de dados', 'err');
          return;
        }
        if (!confirm(`Tem certeza de que deseja excluir permanentemente o produto "${p.nome}" (${cod})?`)) {
          return;
        }
        DB.estoque = DB.estoque.filter(x => x.cod !== cod);
        saveDB();
        logAcao("Exclusão do produto " + p.nome + " (Código: " + cod + ")", "estoque");
        renderAll();
        toast(`Produto "${p.nome}" excluído com sucesso.`);
      } catch (err) {
        alert("Erro ao excluir produto: " + err.message);
        console.error(err);
      }
    }

    function abrirGerenciarFuncoes() {
      renderFuncoes();
      openModal('mGerenciarFuncoes');
    }

    function renderFuncoes() {
      const tbody = document.getElementById('tbFuncoes');
      if (!tbody) return;

      const roles = DB.config.roles || {
        "gerente": { "label": "Gerente", "level": "gerente" },
        "vendedora": { "label": "Vendedora", "level": "vendedora" }
      };

      tbody.innerHTML = Object.entries(roles).map(([key, r]) => {
        const isDefault = key === 'gerente' || key === 'vendedora';
        return `<tr>
      <td class="td-bold">${r.label}</td>
      <td>${r.level === 'gerente' ? '<span class="badge b-gold">Gerente</span>' : '<span class="badge b-silver">Vendedora</span>'}</td>
      <td>
        ${isDefault ? '<span style="color:var(--text-muted);font-size:11px">Padrão</span>' : `<button class="btn btn-danger-ghost btn-xs" onclick="excluirFuncao('${key}')">&times;</button>`}
      </td>
    </tr>`;
      }).join('');
    }

    function adicionarFuncao() {
      const label = document.getElementById('newRoleLabel').value.trim();
      const level = document.getElementById('newRoleLevel').value;
      if (!label) { toast('Digite o nome da função', 'err'); return; }

      const key = label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '');
      if (!key) { toast('Nome de função inválido', 'err'); return; }

      if (!DB.config.roles) {
        DB.config.roles = {
          "gerente": { "label": "Gerente", "level": "gerente" },
          "vendedora": { "label": "Vendedora", "level": "vendedora" }
        };
      }

      if (DB.config.roles[key]) {
        toast('Esta função já existe', 'err');
        return;
      }

      DB.config.roles[key] = { label, level };
      saveDB();
      renderFuncoes();
      document.getElementById('newRoleLabel').value = '';
      toast('Função cadastrada com sucesso!');
    }

    function excluirFuncao(key) {
      if (key === 'gerente' || key === 'vendedora') {
        toast('Não é permitido excluir as funções padrão', 'err');
        return;
      }

      const inUse = Object.values(USERS).some(u => u.role === key);
      if (inUse) {
        toast('Não é possível excluir esta função pois ela está associada a funcionários', 'err');
        return;
      }

      if (!confirm(`Tem certeza de que deseja excluir a função "${DB.config.roles[key].label}"?`)) {
        return;
      }

      delete DB.config.roles[key];
      saveDB();
      renderFuncoes();
      toast('Função excluída com sucesso.');
    }

    function preencheRolesSelect(selectId, selectedValue) {
      const sel = document.getElementById(selectId);
      if (!sel) return;
      const roles = DB.config.roles || {
        "gerente": { "label": "Gerente", "level": "gerente" },
        "vendedora": { "label": "Vendedora", "level": "vendedora" }
      };
      
      // Legacy cleanup
      if (roles["promotor"]) {
        delete roles["promotor"];
        DB.config.roles = roles;
      }

      sel.innerHTML = Object.entries(roles).map(([key, r]) =>
        `<option value="${key}" ${key === selectedValue ? 'selected' : ''}>${r.label} (${r.level === 'gerente' ? 'Gerente' : 'Vendedora'})</option>`
      ).join('');
    }

    // Opção 5: Gerenciamento de Despesas
    function renderDespesas() {
      const q = (document.getElementById('searchDespesas')?.value || '').toLowerCase();
      const fc = document.getElementById('filtDespCat')?.value || '';
      const fs = document.getElementById('filtDespStatus')?.value || '';

      const list = (DB.despesas || []).filter(d => {
        if (q && !d.descricao.toLowerCase().includes(q)) return false;
        if (fc && d.categoria !== fc) return false;
        if (fs && d.status !== fs) return false;
        return true;
      });

      const total = list.reduce((a, d) => a + d.valor, 0);
      const pagas = list.filter(d => d.status === 'pago').reduce((a, d) => a + d.valor, 0);
      const pendentes = list.filter(d => d.status === 'pend').reduce((a, d) => a + d.valor, 0);

      const totalEl = document.getElementById('mDespTotal');
      if (totalEl) totalEl.textContent = R$(total);
      const pagasEl = document.getElementById('mDespPagas');
      if (pagasEl) pagasEl.textContent = R$(pagas);
      const pendEl = document.getElementById('mDespPendentes');
      if (pendEl) pendEl.textContent = R$(pendentes);

      const tbody = document.getElementById('tbDespesas');
      if (!tbody) return;

      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="empty-state">Nenhuma despesa encontrada</td></tr>`;
      } else {
        tbody.innerHTML = list.map(d => `<tr>
      <td class="td-small">${d.data}</td>
      <td class="td-bold">${d.descricao}</td>
      <td><span class="badge b-moeda">${d.categoria}</span></td>
      <td class="td-gold">${R$(d.valor)}</td>
      <td>${d.status === 'pago' ? '<span class="badge b-ok">Pago</span>' : '<span class="badge b-pend">Pendente</span>'}</td>
      <td style="display:flex;gap:4px">
        ${d.status === 'pend'
            ? `<button class="btn btn-ghost btn-xs" style="color:#15803D;border-color:#15803D" onclick="alterarStatusDespesa(${d.id}, 'pago')">Pago</button>`
            : `<button class="btn btn-ghost btn-xs" style="color:#B91C1C;border-color:#B91C1C" onclick="alterarStatusDespesa(${d.id}, 'pend')">? Pendente</button>`
          }
        <button class="btn btn-danger-ghost btn-xs" onclick="excluirDespesa(${d.id})">&times;</button>
      </td>
    </tr>`).join('');
      }
    }

    function salvarDespesa() {
      const data = document.getElementById('dsData').value;
      const valorStr = document.getElementById('dsValor').value;
      const categoria = document.getElementById('dsCategoria').value;
      const status = document.getElementById('dsStatus').value;
      const descricao = document.getElementById('dsDescricao').value.trim();

      const valor = parseFloat(String(valorStr).replace(',', '.')) || 0;

      if (!data || !descricao || valor <= 0) {
        toast('Preencha todos os campos obrigatórios corretamente', 'err');
        return;
      }

      let formattedDate = data;
      if (data.includes('-')) {
        const parts = data.split('-');
        formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }

      const novaDespesa = {
        id: (DB.despesas || []).length + 1,
        timestamp: Date.now(),
        data: formattedDate,
        descricao,
        categoria,
        valor,
        status
      };

      if (!DB.despesas) DB.despesas = [];
      DB.despesas.unshift(novaDespesa);
      saveDB();
      logAcao("Registro de despesa: " + descricao + " de R$ " + valor.toFixed(2), "config");
      closeModal('mDespesa');
      renderAll();
      toast('Despesa registrada com sucesso!');

      document.getElementById('dsData').value = '';
      document.getElementById('dsValor').value = '';
      document.getElementById('dsDescricao').value = '';
    }

    function alterarStatusDespesa(id, status) {
      const d = DB.despesas.find(x => x.id === id);
      if (!d) return;
      d.status = status;
      saveDB();
      logAcao("Alteração de status da despesa: " + d.descricao + " para " + status, "config");
      renderAll();
      toast('Status da despesa atualizado!');
    }

    function excluirDespesa(id) {
      const d = DB.despesas.find(x => x.id === id);
      if (!d) return;
      const confirmado = confirm(`Excluir despesa "${d.descricao}" no valor de ${R$(d.valor)}?`);
      if (!confirmado) return;
      DB.despesas = DB.despesas.filter(x => x.id !== id);
      saveDB();
      logAcao("Exclusão de despesa: " + d.descricao + " de R$ " + d.valor.toFixed(2), "config");
      renderAll();
      toast('Despesa excluída com sucesso!');
    }

    function excluirCompraOuro(id) {
      const c = DB.compraOuro.find(x => x.id === id);
      if (!c) return;
      const confirmado = confirm(`Excluir registro de compra de ouro #${c.id}?\n\nVendedor: ${c.nome}\nPeso: ${c.peso}g · Total: ${R$(c.total)}\n\nEsta ação não pode ser desfeita.`);
      if (!confirmado) return;
      DB.compraOuro = DB.compraOuro.filter(x => x.id !== id);
      saveDB();
      logAcao("Exclusão de compra de ouro de " + R$(c.total) + " (Compra #" + c.id + ")", "ouro");
      renderAll();
      toast('Compra de ouro excluída com sucesso!');
    }

    // --- PONTO ELETR—"NICO -------------------------------------------
    function timeToMinutes(timeStr) {
      if (!timeStr) return 0;
      const parts = timeStr.split(':');
      return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }

    function formatMinutesToDuration(mins) {
      if (mins <= 0) return '0h 00m (0.00h)';
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      const dec = (mins / 60).toFixed(2);
      return `${h}h ${m.toString().padStart(2, '0')}m (${dec}h)`;
    }

    let pontoRelogioInterval = null;

    function abrirRegistrarPonto() {
      const dataEl = document.getElementById('pontoData');
      const relogioEl = document.getElementById('pontoRelogio');
      if (!dataEl || !relogioEl) return;

      const atualizarRelogio = () => {
        const agora = new Date();
        dataEl.textContent = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
        relogioEl.textContent = agora.toLocaleTimeString('pt-BR');
      };

      atualizarRelogio();
      clearInterval(pontoRelogioInterval);
      pontoRelogioInterval = setInterval(atualizarRelogio, 1000);

      const grupoSel = document.getElementById('pontoSelecaoFuncionarioGrupo');
      const selFunc = document.getElementById('pontoFuncionarioSel');
      if (grupoSel && selFunc) {
        if (session.role === 'gerente') {
          grupoSel.style.display = 'block';
          const list = DB.equipe.filter(e => e.ativo !== false);
          selFunc.innerHTML = list.map(e => `<option value="${e.user}">${e.nome}</option>`).join('');
          selFunc.value = session.user;
        } else {
          grupoSel.style.display = 'none';
        }
      }

      renderRegistrosHoje();
      openModal('mRegistrarPonto');
    }

    function selecionarFuncionarioPonto() {
      renderRegistrosHoje();
    }

    function renderRegistrosHoje() {
      if (!DB.ponto) DB.ponto = [];
      const hojeStr = today();

      let targetUser = session.user;
      const selFunc = document.getElementById('pontoFuncionarioSel');
      if (session.role === 'gerente' && selFunc && selFunc.value) {
        targetUser = selFunc.value;
      }

      const registros = DB.ponto.filter(p => p.user === targetUser && p.data === hojeStr);
      const container = document.getElementById('pontoRegistrosHoje');
      if (!container) return;

      if (registros.length === 0) {
        container.innerHTML = `<div style="color:var(--text-sub);text-align:center;padding:8px 0">Nenhum registro hoje.</div>`;
        return;
      }

      container.innerHTML = registros.map(r => `
    <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
      <span style="font-weight:600;color:var(--gold)">${r.tipo}</span>
      <span style="color:var(--text-muted)">${r.hora}</span>
    </div>
  `).join('');
    }

    function salvarPonto(tipo) {
      if (!DB.ponto) DB.ponto = [];
      const hojeStr = today();
      const agora = new Date();
      const horaStr = agora.toLocaleTimeString('pt-BR');

      let targetUser = session.user;
      let targetName = session.name;

      const selFunc = document.getElementById('pontoFuncionarioSel');
      if (session.role === 'gerente' && selFunc && selFunc.value) {
        targetUser = selFunc.value;
        const emp = DB.equipe.find(e => e.user === targetUser);
        if (emp) {
          targetName = emp.nome;
        }
      }

      const jaRegistrado = DB.ponto.find(p => p.user === targetUser && p.data === hojeStr && p.tipo === tipo);
      if (jaRegistrado) {
        if (!confirm(`Já existe registro de "${tipo}" hoje às ${jaRegistrado.hora} para ${targetName}. Deseja registrar novamente?`)) {
          return;
        }
      }

      DB.ponto.push({
        id: DB.ponto.length + 1,
        user: targetUser,
        nome: targetName,
        data: hojeStr,
        hora: horaStr,
        tipo: tipo
      });

      saveDB();
      logAcao(`Registro de ponto (${tipo}) para ${targetName} (${targetUser})`, "ponto");
      renderRegistrosHoje();
      if (session.role === 'gerente') {
        renderPontoEquipe();
      }
      toast(`Ponto registrado para ${targetName}: ${tipo} às ${horaStr}!`);
    }

    function setEquipeSubTab(tab) {
      const tabMembros = document.getElementById('tabEquipeMembros');
      const tabPonto = document.getElementById('tabEquipePonto');
      const divMembros = document.getElementById('subEquipeMembros');
      const divPonto = document.getElementById('subEquipePonto');
      if (!tabMembros || !tabPonto || !divMembros || !divPonto) return;

      if (tab === 'membros') {
        tabMembros.style.color = 'var(--text)';
        tabMembros.style.borderBottomColor = 'var(--gold)';
        tabPonto.style.color = 'var(--text-muted)';
        tabPonto.style.borderBottomColor = 'transparent';

        divMembros.style.display = 'block';
        divPonto.style.display = 'none';
      } else {
        tabPonto.style.color = 'var(--text)';
        tabPonto.style.borderBottomColor = 'var(--gold)';
        tabMembros.style.color = 'var(--text-muted)';
        tabMembros.style.borderBottomColor = 'transparent';

        divMembros.style.display = 'none';
        divPonto.style.display = 'block';

        initPontoFiltros();
        renderPontoEquipe();
      }
    }

    function getPontoFiltro() {
      const mes = parseInt(document.getElementById('pontoFiltroMes')?.value ?? new Date().getMonth());
      const ano = parseInt(document.getElementById('pontoFiltroAção')?.value ?? new Date().getFullYear());
      return { mes, ano };
    }

    function initPontoFiltros() {
      const userSel = document.getElementById('pontoFiltroMembro');
      const mesSel = document.getElementById('pontoFiltroMes');
      const anoSel = document.getElementById('pontoFiltroAção');
      if (!anoSel || !userSel || !mesSel) return;

      userSel.innerHTML = '<option value="">Todos Funcionários</option>' +
        DB.equipe.map(e => `<option value="${e.user}">${e.nome}</option>`).join('');

      const anoAtual = new Date().getFullYear();
      anoSel.innerHTML = [anoAtual, anoAtual - 1, anoAtual - 2].map(a => `<option value="${a}">${a}</option>`).join('');

      mesSel.value = new Date().getMonth();
      anoSel.value = anoAtual;
    }

    function renderPontoEquipe() {
      const { mes, ano } = getPontoFiltro();
      const filterUser = document.getElementById('pontoFiltroMembro').value;

      const list = (DB.ponto || []).filter(p => {
        const partes = p.data.split('/');
        const pMes = parseInt(partes[1]) - 1;
        const pAção = parseInt(partes[2]);
        if (pMes !== mes || pAção !== ano) return false;
        if (filterUser && p.user !== filterUser) return false;
        return true;
      });

      const grupos = {};
      list.forEach(p => {
        const key = p.user + '_' + p.data;
        if (!grupos[key]) {
          grupos[key] = {
            user: p.user,
            nome: p.nome,
            data: p.data,
            punches: []
          };
        }
        grupos[key].punches.push(p);
      });

      const records = Object.values(grupos).sort((a, b) => {
        const dateA = a.data.split('/').reverse().join('-');
        const dateB = b.data.split('/').reverse().join('-');
        if (dateA !== dateB) return dateB.localeCompare(dateA);
        return a.nome.localeCompare(b.nome);
      });

      const tb = document.getElementById('tbPontoEquipe');
      if (!tb) return;

      tb.innerHTML = records.map(r => {
        const pEntrada = r.punches.find(p => p.tipo === 'Entrada')?.hora || '-';
        const pAlmocoSaida = r.punches.find(p => p.tipo === 'Almoço Saída')?.hora || '-';
        const pAlmocoRetorno = r.punches.find(p => p.tipo === 'Almoço Retorno')?.hora || '-';
        const pSaida = r.punches.find(p => p.tipo === 'Saída')?.hora || '-';

        let totalMinutos = 0;
        let hasValidInterval = false;

        const hEntrada = r.punches.find(p => p.tipo === 'Entrada')?.hora;
        const hAlmocoSaida = r.punches.find(p => p.tipo === 'Almoço Saída')?.hora;
        const hAlmocoRetorno = r.punches.find(p => p.tipo === 'Almoço Retorno')?.hora;
        const hSaida = r.punches.find(p => p.tipo === 'Saída')?.hora;

        if (hEntrada && hSaida) {
          const e = timeToMinutes(hEntrada);
          const s = timeToMinutes(hSaida);

          if (hAlmocoSaida && hAlmocoRetorno) {
            const as = timeToMinutes(hAlmocoSaida);
            const ar = timeToMinutes(hAlmocoRetorno);
            if (as >= e && ar >= as && s >= ar) {
              totalMinutos = (as - e) + (s - ar);
              hasValidInterval = true;
            }
          } else {
            if (s >= e) {
              totalMinutos = s - e;
              hasValidInterval = true;
            }
          }
        }

        const totalStr = hasValidInterval ? formatMinutesToDuration(totalMinutos) : '<span style="color:var(--text-sub)">Pendente</span>';

        return `<tr>
      <td class="td-bold">${r.data}</td>
      <td>${r.nome}</td>
      <td>${pEntrada}</td>
      <td>${pAlmocoSaida}</td>
      <td>${pAlmocoRetorno}</td>
      <td>${pSaida}</td>
      <td class="td-gold">${totalStr}</td>
      <td>
        <button class="btn btn-danger-ghost btn-xs nav-gonly" onclick="excluirDiaPonto('${r.user}', '${r.data}', '${r.nome}')" title="Excluir marcações deste dia">&times;</button>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="8" class="empty-state">Nenhum registro de ponto encontrado</td></tr>`;
    }

    function excluirDiaPonto(user, data, nome) {
      const confirmado = confirm(`Excluir TODAS as marcações de ponto de ${nome} no dia ${data}?\n\nEsta ação não pode ser desfeita.`);
      if (!confirmado) return;
      DB.ponto = DB.ponto.filter(p => !(p.user === user && p.data === data));
      saveDB();
      renderPontoEquipe();
      toast('Marcações excluídas com sucesso!');
    }

    function abrirLancarPontoManual() {
      const select = document.getElementById('pmFuncionario');
      if (!select) return;
      select.innerHTML = DB.equipe.map(e => `<option value="${e.user}">${e.nome}</option>`).join('');
      document.getElementById('pmData').value = new Date().toISOString().split('T')[0];
      document.getElementById('pmEntrada').value = '';
      document.getElementById('pmSaida').value = '';
      document.getElementById('pmAlmocoSaida').value = '';
      document.getElementById('pmAlmocoRetorno').value = '';
      openModal('mLancarPontoManual');
    }

    function salvarPontoManual() {
      const username = document.getElementById('pmFuncionario').value;
      const rawData = document.getElementById('pmData').value;
      if (!username || !rawData) {
        toast('Preencha os campos obrigatórios', 'err');
        return;
      }

      const emp = DB.equipe.find(x => x.user === username);
      if (!emp) return;

      const dataBR = rawData.split('-').reverse().join('/');

      const tEntrada = document.getElementById('pmEntrada').value;
      const tSaida = document.getElementById('pmSaida').value;
      const tAlmocoSaida = document.getElementById('pmAlmocoSaida').value;
      const tAlmocoRetorno = document.getElementById('pmAlmocoRetorno').value;

      if (!tEntrada && !tSaida && !tAlmocoSaida && !tAlmocoRetorno) {
        toast('Insira pelo menos um horário', 'err');
        return;
      }

      if (!DB.ponto) DB.ponto = [];

      DB.ponto = DB.ponto.filter(p => !(p.user === username && p.data === dataBR));

      const addPunch = (hora, tipo) => {
        if (!hora) return;
        DB.ponto.push({
          id: DB.ponto.length + 1,
          user: username,
          nome: emp.nome,
          data: dataBR,
          hora: hora + ':00',
          tipo: tipo
        });
      };

      addPunch(tEntrada, 'Entrada');
      addPunch(tAlmocoSaida, 'Almoço Saída');
      addPunch(tAlmocoRetorno, 'Almoço Retorno');
      addPunch(tSaida, 'Saída');

      saveDB();
      logAcao(`Lançamento manual de ponto para ${emp.nome} em ${dataBR}`, "ponto");
      closeModal('mLancarPontoManual');
      renderPontoEquipe();
      toast('Pontos lançados com sucesso para ' + emp.nome);
    }

    function imprimirEspelhoPonto() {
      const filterUser = document.getElementById('pontoFiltroMembro').value;
      if (!filterUser) {
        toast('Selecione um funcionário específico para imprimir o espelho de ponto', 'err');
        return;
      }

      const emp = DB.equipe.find(x => x.user === filterUser);
      if (!emp) return;

      const { mes, ano } = getPontoFiltro();
      const mesNome = MESES_NOMES[mes];

      const list = (DB.ponto || []).filter(p => {
        const partes = p.data.split('/');
        const pMes = parseInt(partes[1]) - 1;
        const pAção = parseInt(partes[2]);
        return p.user === filterUser && pMes === mes && pAção === ano;
      });

      const dias = {};
      list.forEach(p => {
        if (!dias[p.data]) {
          dias[p.data] = [];
        }
        dias[p.data].push(p);
      });

      const dates = Object.keys(dias).sort((a, b) => {
        return a.split('/').reverse().join('-').localeCompare(b.split('/').reverse().join('-'));
      });

      let totalGeralMinutos = 0;

      const rowsHtml = dates.map(dt => {
        const punches = dias[dt];
        const pEntrada = punches.find(p => p.tipo === 'Entrada')?.hora || '-';
        const pAlmocoSaida = punches.find(p => p.tipo === 'Almoço Saída')?.hora || '-';
        const pAlmocoRetorno = punches.find(p => p.tipo === 'Almoço Retorno')?.hora || '-';
        const pSaida = punches.find(p => p.tipo === 'Saída')?.hora || '-';

        let totalMinutos = 0;
        let hasValidInterval = false;

        const hEntrada = punches.find(p => p.tipo === 'Entrada')?.hora;
        const hAlmocoSaida = punches.find(p => p.tipo === 'Almoço Saída')?.hora;
        const hAlmocoRetorno = punches.find(p => p.tipo === 'Almoço Retorno')?.hora;
        const hSaida = punches.find(p => p.tipo === 'Saída')?.hora;

        if (hEntrada && hSaida) {
          const e = timeToMinutes(hEntrada);
          const s = timeToMinutes(hSaida);

          if (hAlmocoSaida && hAlmocoRetorno) {
            const as = timeToMinutes(hAlmocoSaida);
            const ar = timeToMinutes(hAlmocoRetorno);
            if (as >= e && ar >= as && s >= ar) {
              totalMinutos = (as - e) + (s - ar);
              hasValidInterval = true;
            }
          } else {
            if (s >= e) {
              totalMinutos = s - e;
              hasValidInterval = true;
            }
          }
        }

        if (hasValidInterval) {
          totalGeralMinutos += totalMinutos;
        }

        const totalStr = hasValidInterval ? formatMinutesToDuration(totalMinutos).split(' (')[0] : '--';

        return `<tr>
      <td>${dt}</td>
      <td>${pEntrada}</td>
      <td>${pAlmocoSaida}</td>
      <td>${pAlmocoRetorno}</td>
      <td>${pSaida}</td>
      <td><strong>${totalStr}</strong></td>
    </tr>`;
      }).join('');

      const totalGeralStr = formatMinutesToDuration(totalGeralMinutos);

      const html = `<html><head><title>Espelho de Ponto — ${emp.nome}</title><style>
    body{font-family:sans-serif;padding:30px;max-width:750px;margin:0 auto}
    h1{font-size:20px;text-align:center;border-bottom:2px solid #C9A84C;padding-bottom:10px;color:#9B7A2C}
    .header-info{display:flex;justify-content:space-between;margin-bottom:20px;font-size:13px}
    table{width:100%;border-collapse:collapse;margin:20px 0}
    th{background:#f5f0e8;padding:8px;font-size:11px;letter-spacing:1px;text-transform:uppercase;text-align:left}
    td{padding:8px;border-bottom:1px solid #eee;font-size:12px}
    .total{font-weight:bold;background:#f5f0e8}
    .signatures{margin-top:50px;display:flex;justify-content:space-between}
    .sig-line{border-top:1px solid #999;width:250px;text-align:center;padding-top:8px;font-size:12px}
  </style></head><body>
  <h1>—o--- QUERER JOIAS --- Espelho de Ponto</h1>
  <div class="header-info">
    <div>
      <p><strong>Funcionário:</strong> ${emp.nome}</p>
      <p><strong>Usuário:</strong> ${emp.user}</p>
    </div>
    <div style="text-align:right">
      <p><strong>Competência:</strong> ${mesNome}/${ano}</p>
      <p><strong>Gerado em:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Entrada</th>
        <th>Almoço Início</th>
        <th>Almoço Fim</th>
        <th>Saída</th>
        <th>Total Horas</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml || `<tr><td colspan="6" style="text-align:center;padding:20px;color:#777">Nenhum registro de ponto neste período.</td></tr>`}
      <tr class="total">
        <td colspan="5"><strong>TOTAL HORAS TRABALHADAS</strong></td>
        <td><strong>${totalGeralStr}</strong></td>
      </tr>
    </tbody>
  </table>
  
  <div class="signatures">
    <div class="sig-line">
      <p>Assinatura do Funcionário</p>
    </div>
    <div class="sig-line">
      <p>Gerência — Querer Joias</p>
    </div>
  </div>
  </body></html>`;

      const w = window.open('', '_blank');
      w.document.write(html);
      w.document.close();
      w.print();
    }
  
    function printHtml(html) {
      const w = window.open('', '_blank');
      if (w) { w.document.write(html); w.document.close(); setTimeout(function() { w.print(); }, 500); }
    }

    function abrirLinkExterno(url) {
      if (typeof require !== "undefined") {
        try { window.api.openExternal(url); return; } catch(e) {}
      }
      window.open(url, '_blank');
    }

    function imprimirEtiquetaCorreios(vendaId) {
      const v = DB.vendas.find(x => x.id === vendaId);
      if (!v) return;
      const cli = DB.clientes.find(c => c.nome === v.cliente) || {};
      document.getElementById('etqVendaId').value = v.id;
      document.getElementById('etqNome').value = cli.nome || v.cliente;
      document.getElementById('etqCep').value = cli.cep || '';
      document.getElementById('etqRua').value = cli.rua || '';
      document.getElementById('etqNumero').value = cli.numero || '';
      document.getElementById('etqComplemento').value = cli.complemento || '';
      document.getElementById('etqBairro').value = cli.bairro || '';
      const telEl = document.getElementById('etqTelefone'); if (telEl) telEl.value = cli.telefone || '';
      document.getElementById('etqCidade').value = cli.cidade || '';
      document.getElementById('etqUf').value = cli.uf || 'SP';
      openModal('mEtiqueta');
    }

  
    function gerarEtiquetaPdf() {
        const nome = document.getElementById('etqNome').value;
        const cep = document.getElementById('etqCep').value;
        const rua = document.getElementById('etqRua').value;
        const num = document.getElementById('etqNumero').value;
        const comp = document.getElementById('etqComplemento').value;
        const bairro = document.getElementById('etqBairro').value;
        const cidade = document.getElementById('etqCidade').value;
        const uf = document.getElementById('etqUf').value;
        const telefoneEl = document.getElementById('etqTelefone');
        const telefone = telefoneEl ? telefoneEl.value : '';
        
        const svgIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;

        const html = `<html><head><title>Etiqueta de Envio</title><style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; padding: 20px; margin: 0; background: #fff; color: #111; }
          .etiqueta-wrap { width: 10.5cm; min-height: 14cm; border: 1px dashed #aaa; padding: 5mm; box-sizing: border-box; }
          .etiqueta { border: 2px solid #000; height: 100%; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; box-sizing: border-box; }
          
          .header { background: #000; color: #fff; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; }
          .header h1 { margin: 0; font-size: 16px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; }
          .header .icon { background: #fff; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
          
          .remetente { padding: 16px; border-bottom: 2px solid #000; background: #f9f9f9; }
          .label-tag { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #555; font-weight: 700; margin-bottom: 6px; display: block; }
          .remetente p { margin: 3px 0; font-size: 13px; color: #222; }
          .remetente strong { font-size: 15px; color: #000; display: block; margin-bottom: 2px; }
          
          .destinatario { padding: 20px 16px; flex: 1; }
          .dest-nome { font-size: 20px; font-weight: 700; margin: 0 0 10px 0; line-height: 1.2; text-transform: uppercase; }
          .dest-endereco { font-size: 16px; line-height: 1.5; margin: 0 0 16px 0; color: #111; }
          
          .cep-box { display: inline-block; border: 2px solid #000; padding: 8px 16px; border-radius: 6px; font-size: 22px; font-weight: 700; letter-spacing: 2px; }
          .tel-box { margin-top: 15px; font-size: 14px; color: #333; display: flex; align-items: center; gap: 6px; }
        </style></head><body>
        <div class="etiqueta-wrap">
          <div class="etiqueta">
            <div class="header">
              <h1>Encomenda</h1>
              <div class="icon">${svgIcon}</div>
            </div>
            
            <div class="remetente">
              <span class="label-tag">Remetente</span>
              <strong>${DB.config.lojaNome || 'Querer Joias'}</strong>
              <p>${DB.config.endereco || 'Endereço não configurado'}</p>
              ${DB.config.telefone ? '<p>Cel: ' + DB.config.telefone + '</p>' : ''}
            </div>
            
            <div class="destinatario">
              <span class="label-tag" style="color: #000;">Destinatário</span>
              <h2 class="dest-nome">${nome}</h2>
              <p class="dest-endereco">
                ${rua}, ${num} ${comp ? ' - ' + comp : ''}<br>
                ${bairro}<br>
                ${cidade} / ${uf}
              </p>
              
              <div class="cep-box">CEP: ${cep}</div>
              
              ${telefone ? '<div class="tel-box"><strong>Tel:</strong> ' + telefone + '</div>' : ''}
            </div>
          </div>
        </div>
        </body></html>`;
        
        closeModal('mEtiqueta');
        printHtml(html);
      }

  
    
    /* --- PREMIUM SAAS SIDEBAR LOGIC --- */
    document.addEventListener('DOMContentLoaded', () => {
      
        const toggleBtn = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const isCollapsed = localStorage.getItem('sidebarState') === 'collapsed';
        
        function applyCollapse() {
          sidebar.classList.add('collapsed');
          sidebar.style.setProperty('width', '72px', 'important');
          sidebar.style.setProperty('flex-basis', '72px', 'important');
          sidebar.style.setProperty('min-width', '72px', 'important');
          sidebar.style.setProperty('max-width', '72px', 'important');
        }
        
        function applyExpand() {
          sidebar.classList.remove('collapsed');
          sidebar.style.setProperty('width', '280px', 'important');
          sidebar.style.setProperty('flex-basis', '280px', 'important');
          sidebar.style.setProperty('min-width', '280px', 'important');
          sidebar.style.setProperty('max-width', '280px', 'important');
        }

        if (isCollapsed && sidebar) {
          applyCollapse();
        } else if (sidebar) {
          applyExpand();
        }
  
        if (toggleBtn && sidebar) {
            toggleBtn.addEventListener('click', () => {
              sidebar.classList.add('animating');
              setTimeout(() => sidebar.classList.remove('animating'), 300);
              
              if (sidebar.classList.contains('collapsed')) {
                applyExpand();
                localStorage.setItem('sidebarState', 'expanded');
              } else {
                applyCollapse();
                localStorage.setItem('sidebarState', 'collapsed');
              }
            });
        }

    });
// Exposes
window.renderAll = renderAll;
window.goPage = goPage;
window.renderVendas = renderVendas;
window.renderEstoque = renderEstoque;
window.renderDashboard = renderDashboard;
