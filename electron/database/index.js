const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { app } = require('electron');

let db;
let dbPath;

async function initDatabase() {
  const userDataPath = app.getPath('userData');
  dbPath = path.join(userDataPath, 'alliancea.sqlite');
  
  const SQL = await initSqlJs();
  
  let buffer;
  if (fs.existsSync(dbPath)) {
    buffer = fs.readFileSync(dbPath);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  // Criar tabelas se não existirem
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      name TEXT NOT NULL,
      initials TEXT NOT NULL
    );

    
    CREATE TABLE IF NOT EXISTS json_store (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      client_name TEXT NOT NULL,
      client_phone TEXT,
      product_name TEXT NOT NULL,
      material TEXT,
      size1 TEXT,
      size2 TEXT,
      quantity INTEGER,
      value REAL NOT NULL,
      payment_method TEXT,
      installments TEXT,
      seller_name TEXT,
      status TEXT,
      obs TEXT
    );
  `);

  // Inserir admin padrão se a tabela estiver vazia
  const countRes = db.exec('SELECT COUNT(*) as count FROM users');
  const count = countRes[0] ? countRes[0].values[0][0] : 0;
  
  if (count === 0) {
    const defaultHash = bcrypt.hashSync('admin123', 10);
    db.run(`
      INSERT INTO users (username, password_hash, role, name, initials) 
      VALUES (?, ?, ?, ?, ?)
    `, ['admin', defaultHash, 'gerente', 'Luiza Macedo', 'LM']);
    saveDatabase(); // Salva a inicialização no disco
  }

  return db;
}

// Salva o banco em memória para o disco
function saveDatabase() {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
}

function getDb() {
  if (!db) throw new Error('Database not initialized');
  return db;
}

module.exports = { initDatabase, getDb, saveDatabase };
