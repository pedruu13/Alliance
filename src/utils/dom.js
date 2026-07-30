export function toast(msg, type = 'success') {
      const t = document.createElement('div');
      t.className = 'toast toast-' + type;
      const icon = type === 'success'
        ? '<i data-lucide="check" style="width:16px;height:16px;color:var(--success)"></i>'
        : '<i data-lucide="alert-circle" style="width:16px;height:16px;color:var(--danger)"></i>';
      t.innerHTML = icon + ' <span>' + msg + '</span>';
      document.body.appendChild(t);
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({
          attrs: { class: 'lucide-icon' },
          nameAttr: 'data-lucide',
          node: t
        });
      }
      setTimeout(() => t.remove(), 3200);
    }

export function parsePtBrFloat(val) {
      if (!val) return 0;
      return parseFloat(val.toString().replace(/\./g, '').replace(',', '.')) || 0;
    }

