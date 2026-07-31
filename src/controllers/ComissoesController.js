// Comissoes Controller

    export function renderComissoes() {
      const { mes, ano, label } = window.getComFiltro();

      const vendedoras = window.DB.equipe.filter(e => {
        const role = e.role || (USERS[e.user] ? USERS[e.user].role : 'vendedora');
        return role !== 'promotor'; // Keeps backwards compatibility if any was registered
      });

      const dadosVendedoras = vendedoras.map(e => {
        const vends = window.vendasDoPeriodo(e.nome, mes, ano);
        const totalVendas = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = window.comprasOuroDoPeriodo(e.nome, mes, ano);
        const pesoOuro = compras.reduce((a, c) => {
          const N = (c.vendedoras && c.vendedoras.length) ? c.vendedoras.length : 1;
          return a + (c.peso / N);
        }, 0);
        const comissaoVendas = totalVendas * (e.comissao / 100);
        const comissaoOuro = pesoOuro * 1.00;
        const valorComissao = comissaoVendas + comissaoOuro;
        const jaFechado = window.DB.historicoComissoes.find(h => h.competencia === label && h.vendedora === e.nome);
        return { ...e, isPromotor: false, vends, totalVendas, pesoOuro, comissaoVendas, comissaoOuro, valorComissao, jaFechado };
      });

      const dados = [...dadosVendedoras];

      const totalVendas = dados.reduce((a, d) => a + d.totalVendas, 0);
      const totalCom = dados.reduce((a, d) => a + d.valorComissao, 0);
      const totalPago = dados.filter(d => d.jaFechado).reduce((a, d) => a + d.valorComissao, 0);
      const totalPend = totalCom - totalPago;

      document.getElementById('comTotalVendas').textContent = window.R$(totalVendas);
      document.getElementById('comTotalComissao').textContent = window.R$(totalCom);
      document.getElementById('comTotalPago').textContent = window.R$(totalPago);
      document.getElementById('comTotalPend').textContent = window.R$(totalPend);

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
            <div class="avatar" style="width:42px;height:42px;font-size:15px;flex-shrink:0">${window.initials(d.nome)}</div>
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--text)">${d.nome} <span style="font-size:10px;color:var(--gold);margin-left:4px">${roleLabel}</span></div>
              <div style="font-size:10px;color:var(--text-muted)">${subtext}</div>
            </div>
          </div>
          <div style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;margin-bottom:5px">
              <span style="font-size:10px;color:var(--text-muted)">${d.isPromotor ? 'Comissío Vendas' : `Meta Comissío: ${window.R$(d.meta)}`}</span>
              <span style="font-size:11px;font-weight:600;color:${cor}">${d.isPromotor ? '-' : pct + '%'}</span>
            </div>
            ${!d.isPromotor ? `<div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:linear-gradient(90deg,${pct >= 100 ? '#15803D,#166534' : 'var(--gold-dark),var(--gold)'})"></div></div>` : ''}
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:14px">
            <div style="background:var(--dark3);border-radius:var(--radius);padding:8px 6px;text-align:center">
              <div style="font-size:8px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Vendas</div>
              <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px;color:var(--gold);font-weight:600">${window.R$(d.totalVendas)}</div>
              <div style="font-size:9px;color:var(--text-sub);white-space:nowrap">${d.vends.length} vendas</div>
            </div>
            <div style="background:var(--dark3);border-radius:var(--radius);padding:8px 6px;text-align:center;${d.isPromotor ? 'opacity:0.3' : ''}">
              <div style="font-size:8px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Ouro</div>
              <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px;color:var(--gold);font-weight:600">${d.pesoOuro.toFixed(1)}g</div>
              <div style="font-size:9px;color:var(--text-sub);white-space:nowrap">${window.R$(d.comissaoOuro)}</div>
            </div>
            <div style="background:var(--dark3);border-radius:var(--radius);padding:8px 6px;text-align:center;border:1px solid rgba(201,168,76,.15)">
              <div style="font-size:8px;letter-spacing:1px;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Comissío</div>
              <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:14px;color:${pago ? '#15803D' : 'var(--gold)'};font-weight:600">${window.R$(d.valorComissao)}</div>
              <div style="font-size:9px;color:var(--text-sub);white-space:nowrap">${d.comissao}% ${!d.isPromotor ? '+ Ouro' : ''}</div>
            </div>
          </div>
          ${pago
            ? `<div style="text-align:center;font-size:11px;color:#15803D;padding:8px;background:rgba(21,128,61,.06);border-radius:var(--radius);border:1px solid rgba(21,128,61,.15)">Pago em ${d.jaFechado.dataPag} via ${d.jaFechado.formaPag}</div>`
            : (d.totalVendas > 0 || d.pesoOuro > 0)
              ? `<button class="btn btn-gold" style="width:100%;justify-content:center" onclick="window.abrirPagarIndividual('${d.nome}',${d.valorComissao},'${label}')">Registrar Pagamento</button>`
              : `<div style="text-align:center;font-size:11px;color:var(--text-sub);padding:8px">Sem comissío no período</div>`
          }
        </div>`;
      }).join('')}
    </div>`;

      // Histórico
      document.getElementById('tbHistoricoComissoes').innerHTML = window.DB.historicoComissoes
        .sort((a, b) => b.id - a.id)
      .map(h => `<tr>
      <td class="td-bold">${h.competencia}</td>
      <td>${h.vendedora}</td>
      <td class="td-gold">${window.R$(h.totalVendas)}</td>
      <td style="color:var(--text-muted)">${h.pct}%</td>
      <td style="color:#15803D;font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:15px">
        <div>${window.R$(h.valor)}</div>
        ${h.pesoOuro > 0 ? `<div style="font-size:9px;color:var(--text-sub)">Ouro: +${window.R$(h.comissaoOuro || (h.pesoOuro * 1.00))}</div>` : ''}
      </td>
      <td style="color:var(--text-muted)">${h.dataPag}</td>
      <td class="td-small">${h.pagoPor}</td>
      <td><span class="badge b-ok">Pago</span></td>
      <td><button class="btn btn-ghost btn-xs" onclick="window.imprimirComprovante(${h.id})"><i data-lucide="printer" style="width:12px;height:12px"></i></button></td>
    </tr>`).join('') || `<tr><td colspan="9" class="empty-state">Nenhum fechamento registrado</td></tr>`;
    }

    export function renderPromotoresScreen() {
      const dtIni = document.getElementById('filtroPromoIni').value;
      const dtFim = document.getElementById('filtroPromoFim').value;
      const pNome = document.getElementById('filtroPromoNome').value.trim();

      if (!pNome) {
        document.getElementById('resumoPromotor').innerHTML = '';
        document.getElementById('tabelaPromotor').innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">Digite o nome do promotor para buscar.</div>';
        return;
      }

      let vendasFiltradas = window.DB.vendas.filter(v => v.status !== 'cancel' && v.promotor && v.promotor.trim().toLowerCase() === pNome.toLowerCase());

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
      const jaFechado = window.DB.historicoComissoes.find(h => h.vendedora === pNome && h.competencia === compLabel);

      // Resumo
      document.getElementById('resumoPromotor').innerHTML = `
        <div style="background:var(--dark2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Total de Vendas no Período</div>
          <div style="font-size:24px;font-weight:600;color:var(--text)">${window.R$(totalVendas)}</div>
          <div style="font-size:11px;color:var(--text-sub);margin-top:4px">${vendasFiltradas.length} venda(s) encontrada(s)</div>
        </div>
        <div style="background:var(--dark2);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Comissío a Pagar</div>
          <div style="font-size:24px;font-weight:600;color:var(--gold)">${window.R$(totalComissao)}</div>
          <div style="margin-top:12px">
            ${jaFechado 
              ? `<button class="btn btn-ghost" style="width:100%;color:#15803D" disabled><i data-lucide="check-circle" style="width:14px;height:14px;margin-right:6px"></i> Pago em ${jaFechado.dataPagamento || 'Data Indefinida'}</button>` 
              : `<button class="btn btn-gold" style="width:100%;justify-content:center" onclick="window.abrirPagarIndividual('${pNome.replace(/'/g, "\\'")}',${totalComissao},'${compLabel}')" ${totalComissao === 0 ? 'disabled' : ''}>Registrar Pagamento</button>`}
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
                <th style="text-align:right">Comissío Calculada</th>
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
                    <td>${window.R$(v.valor)}</td>
                    <td><span class="badge b-silver">${v.promotorPct || 0}%</span></td>
                    <td style="text-align:right;color:var(--gold);font-weight:600">${window.R$(comCalc)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;
      }
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

