// Caixa Controller

    export function renderCaixa() {
      const active = window.getActiveCaixa();

      const fechadoPanel = document.getElementById('cxFechadoPanel');
      const abertoPanel = document.getElementById('cxAbertoPanel');

      if (!fechadoPanel || !abertoPanel) return;

      const btnEx = document.getElementById('btnExcluirCaixa');
      if (btnEx) btnEx.style.display = (window.session.role === 'admin') ? 'inline-flex' : 'none';

      if (!active) {
        fechadoPanel.style.display = 'block';
        abertoPanel.style.display = 'none';
      } else {
        fechadoPanel.style.display = 'none';
        abertoPanel.style.display = 'block';

        // Update active caixa info
        document.getElementById('cxInfoAbertura').textContent = `Aberto por ${active.usuarioAbertura} í s ${active.horaAbertura} de ${active.dataAbertura}`;

        // Get expected values
        const esp = window.getCaixaEsperado(active);

        document.getElementById('cxMetTroco').textContent = window.R$(active.valorInicial);
        document.getElementById('cxMetDinheiro').textContent = window.R$(esp.dinheiro);
        document.getElementById('cxMetPix').textContent = window.R$(esp.pix);
        document.getElementById('cxMetCartao').textContent = window.R$(esp.cartao);

        // Populating movements
        const movs = [];

        // 1. Vendas
        window.DB.vendas.forEach(v => {
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
        window.DB.compraOuro.forEach(c => {
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
        if (window.DB.despesas) {
          window.DB.despesas.forEach(d => {
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
          <td class="${m.isPos ? 'td-gold' : ''}" style="font-weight:600">${m.isPos ? '+' : '-'}${window.R$(m.valor)}</td>
          <td class="td-small">${m.op}</td>
        </tr>`;
          }).join('') || `<tr><td colspan="5" class="empty-state">Nenhuma movimentAçío nesta sessío</td></tr>`;
        }

        // Resumo de saldos card
        const cxResumoSaldos = document.getElementById('cxResumoSaldos');
        if (cxResumoSaldos) {
          const totalEntradas = movs.filter(m => m.isPos).reduce((acc, m) => acc + m.valor, 0);
          const totalSaidas = movs.filter(m => !m.isPos).reduce((acc, m) => acc + m.valor, 0);

          cxResumoSaldos.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px">
          <span style="color:var(--text-sub)">Fundo Inicial (Troco):</span>
          <span style="font-weight:600; color:var(--text)">${window.R$(active.valorInicial)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px">
          <span style="color:var(--text-sub)">Total de Entradas:</span>
          <span style="font-weight:600; color:#15803D">+${window.R$(totalEntradas)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:13px">
          <span style="color:var(--text-sub)">Total de Saídas:</span>
          <span style="font-weight:600; color:#B91C1C">-${window.R$(totalSaidas)}</span>
        </div>
        <div class="divider" style="margin:12px 0"></div>
        <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:700">
          <span style="color:var(--text)">Saldo Líquido em Caixa:</span>
          <span style="color:var(--gold)">${window.R$(active.valorInicial + totalEntradas - totalSaidas)}</span>
        </div>
      `;
        }
      }

      // Render historical closures
      const tbCaixaHistorico = document.getElementById('tbCaixaHistorico');
      if (tbCaixaHistorico) {
        const historico = (window.DB.caixa || []).filter(c => c.status === 'fechado');
        historico.sort((a, b) => b.timestampFechamento - a.timestampFechamento);

        tbCaixaHistorico.innerHTML = historico.map(c => {
          const totalEsp = c.esperadoDinheiro + c.esperadoPix + c.esperadoCartao;
          const totalInf = c.informadoDinheiro + c.informadoPix + c.informadoCartao;
          const dif = totalInf - totalEsp;

          let difText = window.R$(dif);
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
        <td>${window.R$(c.valorInicial)}</td>
        <td>${window.R$(c.informadoDinheiro)}<br><span style="font-size:10px;color:var(--text-sub)">Esp: ${window.R$(c.esperadoDinheiro)}</span></td>
        <td>${window.R$(c.informadoPix)}<br><span style="font-size:10px;color:var(--text-sub)">Esp: ${window.R$(c.esperadoPix)}</span></td>
        <td style="${difStyle}">${difText}</td>
        <td class="td-small" style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap" title="${c.obs || ''}">${c.obs || 'â€”'}</td>
      </tr>`;
        }).join('') || `<tr><td colspan="8" class="empty-state">Nenhum fechamento de caixa registrado</td></tr>`;
      }
    }

