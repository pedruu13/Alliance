// Vendas Controller
// Extraído de legacy.js

export function updateFiltVendedora() {
  const DB = window.DB;
  if (!DB || !DB.equipe) return;
  const filt = document.getElementById('filtVendedora');
  if (!filt) return;
  const currentVal = filt.value;
  const vendedoras = DB.equipe.filter(e => e.role === 'vendedora' || e.role === 'gerente').map(e => e.nome); // Allow both roles to be selected or default to legacy behavior
  filt.innerHTML = '<option value="">Todas as vendedoras</option>' + vendedoras.map(v => `<option value="${v}">${v}</option>`).join('');
  if (vendedoras.includes(currentVal)) filt.value = currentVal;
}

export function renderVendas() {
  const DB = window.DB;
  const session = window.session;
  if (!DB || !DB.vendas || !session) return;
  
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
  
  const tbVendas = document.getElementById('tbVendas');
  if (!tbVendas) return;

  tbVendas.innerHTML = list.map(v => `<tr>
    <td class="td-small">${v.data}<br>${v.hora}</td>
    <td class="td-bold">${v.cliente}</td>
    <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis">${v.produto}</td>
    <td>${window.matBadge(v.material)}</td>
    <td class="td-small">${v.tam1}${v.tam2 && v.tam2 !== '—' ? '/' + v.tam2 : ''}</td>
    <td>${v.qtd}${v.gramas ? ` <span style="font-size:10px;color:var(--text-muted)">(${v.gramas}g)</span>` : ''}</td>
    <td class="td-gold">${window.R$(v.valor)}${v.status === 'pend' && v.entrada < v.valor ? `<br><span style="font-size:11px;color:var(--danger)">Falta: ${window.R$(v.valor - v.entrada)}</span>` : ''}</td>
    <td style="color:var(--text-muted)">${v.pagamento}${v.parcelas !== 'À vista' ? ' · ' + v.parcelas : ''}</td>
    <td>${v.vendedora}${v.via ? `<br><span style="font-size:10px;color:var(--text-muted)">via ${v.via}</span>` : ''}</td>
    <td>${window.statusBadge(v.status)}</td>
    <td style="display:flex;gap:4px">
      ${v.status === 'pend' && v.entrada < v.valor ? `<button class="btn btn-gold btn-xs" onclick="window.abrirReceber(${v.id})" title="Receber Restante">Receber</button>` : ''}
        ${!v.nfeStatus || v.nfeStatus === 'erro_autorizacao' ? `<button class="btn btn-gold btn-xs" onclick="window.emitirNfeAPI(${v.id})" title="Emitir NF-e">NF-e</button>` : v.nfeStatus === 'Processando' ? `<button class="btn btn-outline btn-xs" style="border-color:#F59E0B;color:#F59E0B" title="Processando NF-e" onclick="window.verificarNfeAPI(${v.id})"><i data-lucide="loader-2" style="width:12px;height:12px"></i></button>` : v.nfePdf && v.nfePdf !== 'undefined' ? `<button class="btn btn-outline btn-xs" style="border-color:#15803D;color:#15803D" title="Ver NF-e PDF" onclick="window.abrirLinkExterno('${v.nfePdf}')"><i data-lucide="file-check-2" style="width:12px;height:12px"></i></button>` : `<button class="btn btn-gold btn-xs" onclick="window.emitirNfeAPI(${v.id})" title="Tentar Novamente">NF-e</button>`}
      <button class="btn btn-ghost btn-xs" onclick="window.imprimirReciboVenda(${v.id})" title="Imprimir Recibo"><i data-lucide="printer" style="width:12px;height:12px"></i></button>
        <button class="btn btn-ghost btn-xs" onclick="window.imprimirEtiquetaCorreios(${v.id})" title="Etiqueta Correios"><i data-lucide="mail" style="width:12px;height:12px"></i></button>
      <button class="btn btn-ghost btn-xs" onclick="window.abrirEditarVenda(${v.id})">Editar</button>
      ${session.role === 'gerente' ? `<button class="btn btn-danger-ghost btn-xs" onclick="window.excluirVenda(${v.id})">&times;</button>` : ''}
    </td>
  </tr>`).join('') || `<tr><td colspan="11" class="empty-state">Nenhuma venda encontrada</td></tr>`;
  
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

