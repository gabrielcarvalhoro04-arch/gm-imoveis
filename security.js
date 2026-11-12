function gmTexto(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function gmImagem(v) {
  var s = String(v || '').trim();
  if (/^data:image\/(?:jpeg|jpg|png|webp|gif|avif);base64,[a-z0-9+/=\s]+$/i.test(s)) return s;
  try { var u = new URL(s, window.location.href); if (u.protocol !== 'https:' && !(u.protocol === 'http:' && /^(localhost|127\.0\.0\.1)$/.test(u.hostname))) return ''; if (u.username || u.password) return ''; return u.href; } catch(e) { return ''; }
}
function gmImagemAttr(v) { return gmTexto(gmImagem(v).replace(/['"()<>\\]/g, function(c) { return '%' + c.charCodeAt(0).toString(16).toUpperCase(); })); }
function gmId(v) { var n = Number(v); return Number.isSafeInteger(n) && n >= 0 ? n : 0; }
