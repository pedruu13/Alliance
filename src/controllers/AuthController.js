export async function doLogin() {
      const u = document.getElementById('loginUser').value.trim().toLowerCase();
      const p = document.getElementById('loginPass').value;
      const err = document.getElementById('loginErr');
      
      try {
        const response = await window.DatabaseService.login(u, p);
        
        if (!response || !response.success) {
          err.textContent = response && response.error ? response.error : 'Usuário ou senha incorretos.';
          err.style.display = 'block'; 
          return;
        }

        const usr = response.user;
        const userRole = usr.role || 'vendedora';
        const roleObj = window.DB.config.roles[userRole] || ((userRole === 'gerente' || userRole === 'admin') ? { label: 'Gerente', level: 'gerente' } : { label: 'Vendedora', level: 'vendedora' });
        const userLevel = roleObj.level;

        if ((window.loginRoleSelected === 'gerente' && userLevel !== 'gerente') || (window.loginRoleSelected === 'vendedora' && userLevel === 'gerente')) {
          err.textContent = 'Usuário ou senha incorretos.';
          err.style.display = 'block'; return;
        }
        
        if (userLevel === 'vendedora') {
          const eq = window.DB.equipe.find(x => x.user === u);
          if (eq && eq.ativo === false) {
            err.textContent = 'Conta de funcionário inativa.';
            err.style.display = 'block';
            return;
          }
        }
        
        err.style.display = 'none';
        window.session = {
          user: u,
          role: userLevel,
          roleKey: userRole,
          roleLabel: roleObj.label,
          name: usr.name,
          initials: usr.initials
        };
        
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('appWrap').style.display = 'flex';
        document.getElementById('sAvatar').textContent = usr.initials;
        document.getElementById('sName').textContent = usr.name;
        document.getElementById('sRole').textContent = roleObj.label.toUpperCase();
        document.getElementById('sRole').className = 'user-role ' + (userLevel === 'gerente' ? 'role-g' : 'role-v');
        document.getElementById('topDate').textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

        const gOnly = userLevel !== 'gerente';
        document.body.className = 'role-' + userLevel;
        if (gOnly) document.querySelector('[data-page="relatorio"]') && null;

        window.renderAll();
        window.goPage('dashboard', document.querySelector('[data-page="dashboard"]'));
      } catch(e) {
        err.textContent = 'Erro de conexão com o banco de dados.';
        err.style.display = 'block';
        console.error(e);
      }
    }

export function doLogout() {
      window.session = {};
      document.body.className = '';
      document.getElementById('appWrap').style.display = 'none';
      document.getElementById('loginScreen').style.display = 'flex';
      document.getElementById('loginUser').value = '';
      document.getElementById('loginPass').value = '';
    }
