const { ipcMain } = require('electron');
const { getDb, saveDatabase } = require('../database/index.js');

module.exports = function registerSalesIPC() {
  ipcMain.handle('db:sale:create', async (event, sale) => {
    try {
      const db = getDb();
      const sql = `
        INSERT INTO sales (date, time, client_name, client_phone, product_name, material, size1, size2, quantity, value, payment_method, installments, seller_name, status, obs)
        VALUES (:date, :time, :client_name, :client_phone, :product_name, :material, :size1, :size2, :quantity, :value, :payment_method, :installments, :seller_name, :status, :obs)
      `;
      db.run(sql, {
        ':date': sale.data,
        ':time': sale.hora,
        ':client_name': sale.cliente,
        ':client_phone': sale.tel || null,
        ':product_name': sale.produto,
        ':material': sale.material || null,
        ':size1': sale.tam1 || null,
        ':size2': sale.tam2 || null,
        ':quantity': sale.qtd || 1,
        ':value': sale.valor,
        ':payment_method': sale.pagamento || null,
        ':installments': sale.parcelas || null,
        ':seller_name': sale.vendedora || null,
        ':status': sale.status || 'ok',
        ':obs': sale.obs || null
      });
      saveDatabase();
      return { success: true };
    } catch(e) {
      console.error('Erro ao salvar venda:', e);
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('db:sale:list', async (event) => {
    try {
      const db = getDb();
      // Retorna as vendas ordenadas pelas mais recentes primeiro (usando o rowid se data/time nao forem unicos)
      const result = db.exec(`
        SELECT * FROM sales 
        ORDER BY id DESC
        LIMIT 1000
      `);
      
      if (!result || result.length === 0) return { success: true, data: [] };
      
      const columns = result[0].columns;
      const values = result[0].values;
      
      const sales = values.map(row => {
        const sale = {};
        columns.forEach((col, index) => {
          sale[col] = row[index];
        });
        
        // Mapear de volta para o frontend
        return {
          id: sale.id,
          data: sale.date,
          hora: sale.time,
          cliente: sale.client_name,
          tel: sale.client_phone,
          produto: sale.product_name,
          material: sale.material,
          tam1: sale.size1,
          tam2: sale.size2,
          qtd: sale.quantity,
          valor: sale.value,
          pagamento: sale.payment_method,
          parcelas: sale.installments,
          vendedora: sale.seller_name,
          status: sale.status,
          obs: sale.obs
        };
      });
      
      return { success: true, data: sales };
    } catch(e) {
      console.error('Erro ao listar vendas:', e);
      return { success: false, error: e.message };
    }
  });
};
