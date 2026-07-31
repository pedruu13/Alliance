// Estoque Controller
// Extraído de legacy.js

export function renderEstoque() {
  const DB = window.DB;
  if (!DB || !DB.estoque) return;

  const fm = document.getElementById('filtEstMat')?.value || '';
  const fsFilt = document.getElementById('filtEstStatus')?.value || '';
  
  const list = DB.estoque.filter(e => {
    if (fm && e.mat !== fm) return false;
    if (fsFilt === 'crit' && e.qtd > e.min) return false;
    if (fsFilt === 'normal' && e.qtd <= e.min) return false;
    return true;
  });

  const tbEstoque = document.getElementById('tbEstoque');
  if (!tbEstoque) return;

  tbEstoque.innerHTML = list.map(e => {
    const crit = e.qtd <= e.min;
    const margem = e.custo > 0 ? Math.round((e.venda - e.custo) / e.venda * 100) : 0;
    return `<tr>
  <td class="td-small">${e.cod}</td>
  <td class="td-bold">${e.nome}</td>
  <td>${window.matBadge(e.mat)}</td>
  <td style="color:var(--text-muted)">${e.tipo}</td>
  <td class="td-small">${e.tams}</td>
  <td style="${crit ? 'color:var(--danger)' : ''};font-weight:600">${e.qtd}</td>
  <td class="td-small">${e.min}</td>
  <td style="color:var(--text-muted)">${window.R$(e.custo)}</td>
  <td class="td-gold">${window.R$(e.venda)}</td>
  <td><span style="color:${margem >= 40 ? '#15803D' : 'var(--gold)'}">${margem}%</span></td>
  <td>${crit ? '<span class="badge b-cancel">Crítico</span>' : '<span class="badge b-ok">Normal</span>'}</td>
  <td>
    <div style="display:flex;gap:4px">
      <button class="btn btn-ghost btn-xs nav-gonly" onclick="window.abrirEditarProduto('${e.cod}')">Editar</button>
      <button class="btn btn-danger-ghost btn-xs nav-gonly" style="padding:2px 6px;line-height:1" onclick="window.excluirProduto('${e.cod}')" title="Excluir Produto">&times;</button>
    </div>
  </td>
</tr>`;
  }).join('') || `<tr><td colspan="12" class="empty-state">Nenhum item encontrado</td></tr>`;
}

