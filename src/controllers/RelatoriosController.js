// Relatorios Controller

    export function renderRelatorio() {
      const vends = window.DB.vendas.filter(v => v.status !== 'cancel');
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
        const item = window.findStockItemForSale(v);
        const custoUn = item ? item.custo : (v.valor * 0.5);
        return acc + (custoUn * v.qtd);
      }, 0);

      const totalDespPagasRelatorio = (window.DB.despesas || [])
        .filter(d => d.status === 'pago')
        .reduce((acc, d) => acc + d.valor, 0);

      const lucroLiquidoRelatorio = totalGeral - totalCustoRelatorio - totalDespPagasRelatorio;
      const margemReal = totalGeral > 0 ? Math.round((lucroLiquidoRelatorio / totalGeral) * 100) : 0;

      if (document.getElementById('rTicket')) document.getElementById('rTicket').textContent = window.R$(ticket);
      if (document.getElementById('rTopProd')) document.getElementById('rTopProd').textContent = topMat ? topMat[0] : 'â€”';
      if (document.getElementById('rMargem')) document.getElementById('rMargem').textContent = margemReal + '%';
      if (document.getElementById('rTopVend')) document.getElementById('rTopVend').textContent = topVend ? topVend[0].split(' ')[0] : 'â€”';

      if (document.getElementById('rMateriais')) {
        document.getElementById('rMateriais').innerHTML = matList.map(([mat, val]) => {
          const pct = Math.round(val / totalGeral * 100);
          return `<div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          ${window.matBadge(mat)}
          <span style="font-size:12px;color:var(--gold)">${window.R$(val)} <span style="color:var(--text-sub)">(${pct}%)</span></span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`;
        }).join('');
      }

      if (document.getElementById('rEquipe')) {
        document.getElementById('rEquipe').innerHTML = Object.entries(byvend).sort((a, b) => b[1] - a[1]).map(([nome, val]) => {
          const pct = Math.round(val / totalGeral * 100);
          const e = window.DB.equipe.find(x => x.nome === nome) || { meta: 12000, comissao: 5 };
          const comVal = val * ((e.comissao || 5) / 100);
          const metaPct = e.meta > 0 ? Math.round(comVal / e.meta * 100) : 0;
          return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
        <div class="avatar" style="width:34px;height:34px;font-size:12px;flex-shrink:0">${window.initials(nome)}</div>
        <div style="flex:1">
          <div style="font-size:12px;font-weight:500;color:var(--text)">${nome}</div>
          <div class="progress-track" style="margin-top:5px"><div class="progress-fill" style="width:${Math.min(metaPct, 100)}%"></div></div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:15px;color:var(--gold)">${window.R$(val)}</div>
          <div style="font-size:10px;color:var(--text-sub)">${metaPct}% da meta (comissío)</div>
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
          <span style="font-size:12px;color:var(--gold)">${window.R$(val)} <span style="color:var(--text-sub)">(${pct}%)</span></span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`;
        }).join('');
      }

      if (document.getElementById('rSemanal')) {
        const semana = ['14/05', '15/05', '16/05', '17/05', '18/05'];
        const vals = semana.map(d => window.DB.vendas.filter(v => v.data.startsWith(d) && v.status !== 'cancel').reduce((a, v) => a + v.valor, 0));
        const maxV = Math.max(...vals, 1);
        document.getElementById('rSemanal').innerHTML = `<div style="display:flex;align-items:flex-end;gap:10px;height:100px">
      ${semana.map((d, i) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px">
        <div style="font-size:10px;color:var(--gold)">${vals[i] > 0 ? window.R$(vals[i]).replace('R$ ', '') : ''}</div>
        <div style="width:100%;background:var(--gold);border-radius:3px 3px 0 0;height:${Math.max(vals[i] / maxV * 80, 4)}px;opacity:${0.5 + 0.5 * vals[i] / maxV}"></div>
        <div style="font-size:10px;color:var(--text-sub)">${d}</div>
      </div>`).join('')}
    </div>`;
      }
    }

    export function setRelatorioSubTab(tab) {
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

    export function renderLogs() {
      if (!window.DB.logs) window.DB.logs = [];
      const q = (document.getElementById('searchLogs')?.value || '').toLowerCase();
      const cat = document.getElementById('filtLogTipo')?.value || '';

      const list = window.DB.logs.filter(l => {
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
      <td><span class="${window.getBadgeClass(l.tipo)}">${window.getBadgeLabel(l.tipo)}</span></td>
    </tr>`;
      }).join('') || `<tr><td colspan="4" class="empty-state">Nenhum log de auditoria encontrado</td></tr>`;
    }

