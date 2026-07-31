// Equipe Controller

    export function renderEquipe() {
      const ranking = window.DB.equipe.map(e => {
        const vends = window.DB.vendas.filter(v => {
          if (v.status === 'cancel') return false;
          return v.vendedoras ? v.vendedoras.includes(e.nome) : (v.vendedora === e.nome);
        });
        const total = vends.reduce((a, v) => {
          const N = (v.vendedoras && v.vendedoras.length) ? v.vendedoras.length : 1;
          return a + (v.valor / N);
        }, 0);
        const compras = (window.DB.compraOuro || []).filter(c => {
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
      <div class="avatar" style="width:32px;height:32px;font-size:12px">${window.initials(e.nome)}</div>
      <div style="flex:1">
        <div style="font-size:12px;font-weight:600;color:var(--text)">${e.nome}</div>
        <div class="progress-track" style="margin-top:5px"><div class="progress-fill" style="width:${Math.min(e.pct, 100)}%"></div></div>
      </div>
      <div style="text-align:right">
        <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:16px;color:var(--gold)">${window.R$(e.total)}</div>
        <div style="font-size:10px;color:var(--text-sub)">${e.meta > 0 ? `${e.pct}% da meta (comissío)` : 'Sem meta'}</div>
      </div>
    </div>`).join('');
      if (document.getElementById('rankingMes')) document.getElementById('rankingMes').innerHTML = rankHtml;

      const comHtml = ranking.map(e => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:12px;font-weight:500;color:var(--text)">${e.nome}</div>
        <div style="font-size:10px;color:var(--text-muted)">
          ${e.comissao}% s/ ${window.R$(e.total)} ${e.pesoOuro > 0 ? `+ ${e.pesoOuro.toFixed(1)}g ouro` : ''}
        </div>
      </div>
      <div style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;font-size:16px;color:var(--gold)">${window.R$(e.comVal)}</div>
    </div>`).join('');
      if (document.getElementById('comissoes')) document.getElementById('comissoes').innerHTML = comHtml;

      document.getElementById('tbEquipe').innerHTML = ranking.map(e => {
        const uRole = USERS[e.user]?.role || 'vendedora';
        const roleObj = window.DB.config.roles[uRole] || ((uRole === 'gerente' || uRole === 'admin') ? { label: 'Gerente', level: 'gerente' } : { label: 'Vendedora', level: 'vendedora' });
        const isGold = roleObj.level === 'gerente';
        const badgeClass = isGold ? 'badge b-gold' : 'badge b-silver';
        const badgeHtml = `<span class="${badgeClass}" style="font-size:9px;padding:2px 4px;margin-left:4px">${roleObj.label}</span>`;
        return `<tr>
    <td class="td-bold">${e.nome} ${badgeHtml}</td>
    <td class="td-small">${e.user}</td>
    <td style="color:var(--text-muted)">${window.R$(e.meta)}</td>
    <td class="td-gold">${window.R$(e.total)}</td>
    <td>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="progress-track" style="width:80px"><div class="progress-fill" style="width:${Math.min(e.pct, 100)}%"></div></div>
        <span style="font-size:11px;color:${e.pct >= 90 ? '#15803D' : 'var(--gold)'}">${e.pct}%</span>
      </div>
    </td>
    <td style="color:var(--text-muted)">${e.comissao}%</td>
    <td style="color:#15803D">
      <div>${window.R$(e.comVal)}</div>
      ${e.pesoOuro > 0 ? `<div style="font-size:9px;color:var(--text-sub)">Ouro: +${window.R$(e.pesoOuro * 1.00)}</div>` : ''}
    </td>
    <td>${e.ativo !== false ? '<span class="badge b-ok">Ativa</span>' : '<span class="badge b-cancel">Inativa</span>'}</td>
    <td>
      <div style="display:flex;gap:4px">
        <button class="btn btn-ghost btn-xs nav-gonly" onclick="window.abrirEditarVendedora('${e.user}')">Editar</button>
        ${e.user !== 'admin' ? `<button class="btn btn-danger-ghost btn-xs nav-gonly" style="padding:2px 6px;line-height:1" onclick="window.excluirVendedora('${e.user}')" title="Excluir Funcionário">&times;</button>` : ''}
      </div>
    </td>
  </tr>`;
      }).join('');

      const divPonto = document.getElementById('subEquipePonto');
      if (divPonto && divPonto.style.display !== 'none') {
        renderPontoEquipe();
      }
    }

    export function renderPontoEquipe() {
      const { mes, ano } = window.getPontoFiltro();
      const filterUser = document.getElementById('pontoFiltroMembro').value;

      const list = (window.DB.ponto || []).filter(p => {
        const partes = p.data.split('/');
        const pMes = parseInt(partes[1]) - 1;
        const pAçío = parseInt(partes[2]);
        if (pMes !== mes || pAçío !== ano) return false;
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
          const e = window.timeToMinutes(hEntrada);
          const s = window.timeToMinutes(hSaida);

          if (hAlmocoSaida && hAlmocoRetorno) {
            const as = window.timeToMinutes(hAlmocoSaida);
            const ar = window.timeToMinutes(hAlmocoRetorno);
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

        const totalStr = hasValidInterval ? window.formatMinutesToDuration(totalMinutos) : '<span style="color:var(--text-sub)">Pendente</span>';

        return `<tr>
      <td class="td-bold">${r.data}</td>
      <td>${r.nome}</td>
      <td>${pEntrada}</td>
      <td>${pAlmocoSaida}</td>
      <td>${pAlmocoRetorno}</td>
      <td>${pSaida}</td>
      <td class="td-gold">${totalStr}</td>
      <td>
        <button class="btn btn-danger-ghost btn-xs nav-gonly" onclick="window.excluirDiaPonto('${r.user}', '${r.data}', '${r.nome}')" title="Excluir marcações deste dia">&times;</button>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="8" class="empty-state">Nenhum registro de ponto encontrado</td></tr>`;
    }

    export function setEquipeSubTab(tab) {
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

        window.initPontoFiltros();
        renderPontoEquipe();
      }
    }

