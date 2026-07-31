// Clientes Controller

    export function renderClientes() {
      const q = (document.getElementById('searchClientes')?.value || '').toLowerCase();
      const list = window.DB.clientes.filter(c => {
        if (q && !c.nome.toLowerCase().includes(q) && !c.tel.includes(q)) return false;
        return true;
      });
      document.getElementById('tbClientes').innerHTML = list.map(c => {
        const compras = window.DB.vendas.filter(v => v.cliente === c.nome && v.status !== 'cancel');
        const total = compras.reduce((a, v) => a + v.valor, 0);
        const ult = compras.length > 0 ? compras[compras.length - 1].data : 'â€”';
        return `<tr>
      <td class="td-bold">${c.nome}</td>
      <td>${c.tel}</td>
      <td class="td-small">${c.cpf}</td>
      <td>${c.cidade}/${c.uf}</td>
      <td class="td-gold">${window.R$(total)}</td>
      <td style="color:var(--text-muted)">${compras.length}</td>
      <td class="td-small">${ult}</td>
      <td>${window.matBadge(c.pref)}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-ghost btn-xs" onclick="window.abrirDetalhesCliente('${c.nome.replace(/'/g, "\\'")}')">Ver</button>
          ${window.session.role === 'gerente' ? `<button class="btn btn-danger-ghost btn-xs" style="padding:2px 6px;line-height:1" onclick="window.excluirCliente('${c.nome.replace(/'/g, "\\'")}')" title="Excluir Cliente">&times;</button>` : ''}
        </div>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="9" class="empty-state">Nenhum cliente encontrado</td></tr>`;
    }

