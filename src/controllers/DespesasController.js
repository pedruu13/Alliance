// Despesas Controller

    export function renderDespesas() {
      const q = (document.getElementById('searchDespesas')?.value || '').toLowerCase();
      const fc = document.getElementById('filtDespCat')?.value || '';
      const fs = document.getElementById('filtDespStatus')?.value || '';

      const list = (window.DB.despesas || []).filter(d => {
        if (q && !d.descricao.toLowerCase().includes(q)) return false;
        if (fc && d.categoria !== fc) return false;
        if (fs && d.status !== fs) return false;
        return true;
      });

      const total = list.reduce((a, d) => a + d.valor, 0);
      const pagas = list.filter(d => d.status === 'pago').reduce((a, d) => a + d.valor, 0);
      const pendentes = list.filter(d => d.status === 'pend').reduce((a, d) => a + d.valor, 0);

      const totalEl = document.getElementById('mDespTotal');
      if (totalEl) totalEl.textContent = window.R$(total);
      const pagasEl = document.getElementById('mDespPagas');
      if (pagasEl) pagasEl.textContent = window.R$(pagas);
      const pendEl = document.getElementById('mDespPendentes');
      if (pendEl) pendEl.textContent = window.R$(pendentes);

      const tbody = document.getElementById('tbDespesas');
      if (!tbody) return;

      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="empty-state">Nenhuma despesa encontrada</td></tr>`;
      } else {
        tbody.innerHTML = list.map(d => `<tr>
      <td class="td-small">${d.data}</td>
      <td class="td-bold">${d.descricao}</td>
      <td><span class="badge b-moeda">${d.categoria}</span></td>
      <td class="td-gold">${window.R$(d.valor)}</td>
      <td>${d.status === 'pago' ? '<span class="badge b-ok">Pago</span>' : '<span class="badge b-pend">Pendente</span>'}</td>
      <td style="display:flex;gap:4px">
        ${d.status === 'pend'
            ? `<button class="btn btn-ghost btn-xs" style="color:#15803D;border-color:#15803D" onclick="window.alterarStatusDespesa(${d.id}, 'pago')">Pago</button>`
            : `<button class="btn btn-ghost btn-xs" style="color:#B91C1C;border-color:#B91C1C" onclick="window.alterarStatusDespesa(${d.id}, 'pend')">? Pendente</button>`
          }
        <button class="btn btn-danger-ghost btn-xs" onclick="window.excluirDespesa(${d.id})">&times;</button>
      </td>
    </tr>`).join('');
      }
    }

