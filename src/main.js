import './styles/main.css';
import { toast, parsePtBrFloat } from './utils/dom.js';
import './services/DatabaseService.js';
import { doLogin, doLogout } from './controllers/AuthController.js';

// Expose utils and controllers to legacy inline scripts
window.toast = toast;
window.parsePtBrFloat = parsePtBrFloat;
window.doLogin = doLogin;
window.doLogout = doLogout;

console.log("Vite modules initialized");
