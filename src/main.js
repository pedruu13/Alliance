import { createIcons, icons } from 'lucide';
window.lucide = { createIcons: (config = {}) => createIcons({ icons, ...config }) };
import './styles/main.css';
import { toast, parsePtBrFloat } from './utils/dom.js';
import './services/DatabaseService.js';
import { doLogin, doLogout } from './controllers/AuthController.js';
import { renderDashboard, renderDashboardChart } from './controllers/DashboardController.js';
import { renderVendas, updateFiltVendedora } from './controllers/VendasController.js';
import { renderEstoque } from './controllers/EstoqueController.js';
import { renderCaixa } from './controllers/CaixaController.js';
import { renderEquipe, renderPontoEquipe, setEquipeSubTab } from './controllers/EquipeController.js';
import { renderComissoes, renderPromotoresScreen } from './controllers/ComissoesController.js';
import { renderCompraOuro } from './controllers/CompraOuroController.js';
import { renderRelatorio, setRelatorioSubTab, renderLogs } from './controllers/RelatoriosController.js';
import { renderClientes } from './controllers/ClientesController.js';
import { renderDespesas } from './controllers/DespesasController.js';

// Expose utils and controllers to legacy inline scripts
window.toast = toast;
window.parsePtBrFloat = parsePtBrFloat;
window.doLogin = doLogin;
window.doLogout = doLogout;

window.renderDashboard = renderDashboard;
window.renderDashboardChart = renderDashboardChart;
window.renderVendas = renderVendas;
window.updateFiltVendedora = updateFiltVendedora;
window.renderEstoque = renderEstoque;
window.renderCaixa = renderCaixa;
window.renderEquipe = renderEquipe;
window.renderPontoEquipe = renderPontoEquipe;
window.setEquipeSubTab = setEquipeSubTab;
window.renderComissoes = renderComissoes;
window.renderPromotoresScreen = renderPromotoresScreen;
window.renderCompraOuro = renderCompraOuro;
window.renderRelatorio = renderRelatorio;
window.setRelatorioSubTab = setRelatorioSubTab;
window.renderLogs = renderLogs;
window.renderClientes = renderClientes;
window.renderDespesas = renderDespesas;

console.log("Vite modules initialized");

// Ensure icons render on initial load (since legacy.js runs before main.js)
window.addEventListener('load', () => {
    if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
    }
});
setTimeout(() => {
    if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
    }
}, 500);


