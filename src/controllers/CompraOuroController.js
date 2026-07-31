// CompraOuro Controller

    export function renderCompraOuro() {
      const q = (document.getElementById('searchOuro')?.value || '').toLowerCase();
      const list = window.DB.compraOuro.filter(c => {
        if (q && !c.nome.toLowerCase().includes(q) && !c.cpf.includes(q)) return false;
        return true;
      });
      const pesoTotal = list.reduce((a, c) => a + c.peso, 0);
      const valTotal = list.reduce((a, c) => a + c.total, 0);
      if (document.getElementById('mCOPeso')) document.getElementById('mCOPeso').textContent = pesoTotal.toFixed(1) + 'g';
      if (document.getElementById('mCOValor')) document.getElementById('mCOValor').textContent = 'Total pago: ' + window.R$(valTotal);
      if (document.getElementById('mCOCount')) document.getElementById('mCOCount').textContent = list.length;

      document.getElementById('tbCompraOuro').innerHTML = list.map(c => `<tr>
    <td class="td-small">${c.data}<br>${c.hora}</td>
    <td class="td-bold">${c.nome}</td>
    <td class="td-small">${c.cpf}</td>
    <td><span class="badge b-compra">${c.tipo}</span></td>
    <td style="color:var(--text-muted)">${c.qui}</td>
    <td style="color:var(--gold);font-weight:600">${c.peso}g</td>
    <td style="color:var(--text-muted)">${window.R$(c.vg)}</td>
    <td class="td-gold">${window.R$(c.total)}</td>
    <td style="color:var(--text-muted)">${c.pag}</td>
    <td class="td-small">${c.op}</td>
    <td style="display:flex;gap:4px">
      <button class="btn btn-ghost btn-xs" onclick="window.imprimirRecibo(${c.id})"><i data-lucide="printer" style="width:12px;height:12px"></i></button>
      ${window.session.role === 'gerente' ? `<button class="btn btn-danger-ghost btn-xs" onclick="window.excluirCompraOuro(${c.id})">&times;</button>` : ''}
    </td>
  </tr>`).join('') || `<tr><td colspan="11" class="empty-state">Nenhuma compra registrada</td></tr>`;
    }

