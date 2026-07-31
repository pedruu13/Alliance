// Dashboard Controller
// Extraido de legacy.js

export function renderDashboard() {
  const DB = window.DB;
  if (!DB || !DB.vendas) return;

      const vendasMes = DB.vendas.filter(v => v.status !== 'cancel');
      const totalMes = vendasMes.reduce((a, v) => a + v.valor, 0);
      const hoje = window.today();
      const vendasHoje = vendasMes.filter(v => v.data === hoje);
      const totalHoje = vendasHoje.reduce((a, v) => a + v.valor, 0);
      const pecas = vendasMes.reduce((a, v) => a + v.qtd, 0);
      const ouroG = (DB.compraOuro || []).reduce((a, c) => a + c.peso, 0);
      const ouroV = (DB.compraOuro || []).reduce((a, c) => a + c.total, 0);

      document.getElementById('mVendasHoje').textContent = window.R$(totalHoje);
      document.getElementById('mVendasMes').textContent = window.R$(totalMes);
      document.getElementById('mPecas').textContent = pecas;
      document.getElementById('mOuroG').textContent = ouroG.toFixed(1) + 'g';
      document.getElementById('mOuroVal').textContent = 'Total pago: ' + window.R$(ouroV);

      // Calcular Lucro Líquido
      const totalCustoEstoque = vendasMes.reduce((acc, v) => {
        const item = window.findStockItemForSale(v);
        const custoUn = item ? item.custo : (v.valor * 0.5);
        return acc + (custoUn * v.qtd);
      }, 0);

      const totalDespPagas = (DB.despesas || [])
        .filter(d => d.status === 'pago')
        .reduce((acc, d) => acc + d.valor, 0);

      const lucroLiquido = totalMes - totalCustoEstoque - totalDespPagas;

      const elLucro = document.getElementById('mLucroLiquido');
      if (elLucro) {
        elLucro.textContent = window.R$(lucroLiquido);
        elLucro.style.color = lucroLiquido >= 0 ? '#15803D' : '#B91C1C';
      }

      const elLucroSub = document.getElementById('mLucroSub');
      if (elLucroSub) {
        elLucroSub.textContent = `Custo peças: ${window.R$(totalCustoEstoque)} · Despesas: ${window.R$(totalDespPagas)}`;
      }

      // Últimas vendas
      document.getElementById('tbDashVendas').innerHTML = (DB.vendas || []).slice(0, 6).map(v => `<tr>
    <td class="td-bold">${v.cliente}</td>
    <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis">${v.produto}</td>
    <td>${window.matBadge(v.material)}</td>
    <td class="td-gold">${window.R$(v.valor)}</td>
    <td>${v.vendedora}</td>
    <td>${window.statusBadge(v.status)}</td>
  </tr>`).join('');

      // Metas
      const metasHtml = (DB.equipe || []).map(e => {
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
        <span style="font-size:10px;color:var(--text-sub)">Comissão: ${window.R$(comVal)}</span>
        <span style="font-size:10px;color:var(--text-sub)">Meta: ${window.R$(e.meta)}</span>
      </div>
    </div>`;
      }).join('');
      document.getElementById('dashMetas').innerHTML = metasHtml;

      // Estoque crítico
      const criticos = (DB.estoque || []).filter(e => e.qtd <= e.min);
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
        <div class="cval">${window.R$(c.total)}</div>
      </div>
      <div style="font-size:10px;color:var(--text-sub);margin-top:5px">${c.data} · ${c.pag}</div>
    </div>`).join('');

      // Render daily sales chart
      renderDashboardChart();
    }


export function renderDashboardChart() {
  const DB = window.DB;
  if (!DB || !DB.vendas) return;

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
        ctx.fillText(window.R$(val).replace('R$', '').trim(), paddingLeft - 8, y + 3);
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

