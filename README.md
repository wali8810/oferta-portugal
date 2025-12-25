# 🚀 GUIA RÁPIDO - Deploy Sistema de Rotas

## ✅ BUILD CONCLUÍDO!

A pasta `out/` está pronta para deploy com:
- ✅ Página principal na raiz
- ✅ 7 páginas secundárias em subpastas
- ✅ `.htaccess` (Apache/XAMPP/Laragon)
- ✅ `_redirects` (Netlify)

---

## 📍 ROTAS DISPONÍVEIS

```
/           → Página principal (oferta-portugal-main)
/portugal-upsell1    → Portugal Upsell 1
/portugal-upsell2    → Portugal Upsell 2
/portugal-upsell3    → Portugal Upsell 3
/portugal-downsell1  → Portugal Downsell 1
/portugal-downsell2  → Portugal Downsell 2
/portugal-downsell3  → Portugal Downsell 3
/portugal-obrigado   → Página Obrigado
```

---

## 🧪 TESTAR LOCALMENTE (OPCIONAL)

### Com XAMPP:
1. Copiar pasta `out/` para `C:\xampp\htdocs\kirvano\`
2. Iniciar Apache
3. Acessar: `http://localhost/kirvano/`

### Com Laragon:
1. Copiar pasta `out/` para `C:\laragon\www\kirvano\`
2. Iniciar servidor
3. Acessar: `http://localhost/kirvano/`

---

## 🌐 DEPLOY NO NETLIFY (PRODUÇÃO)

### Passo a Passo:

1. **Acesse:** https://app.netlify.com
2. **Login** na sua conta
3. **Arraste** a pasta `out/` para área de deploy
4. **Aguarde** deploy completar (~30 segundos)
5. **Acesse** o domínio gerado

### Validar Rotas:

Teste cada rota no domínio Netlify:
```
https://seu-site.netlify.app/
https://seu-site.netlify.app/portugal-upsell1
https://seu-site.netlify.app/portugal-upsell2
https://seu-site.netlify.app/portugal-upsell3
https://seu-site.netlify.app/portugal-downsell1
https://seu-site.netlify.app/portugal-downsell2
https://seu-site.netlify.app/portugal-downsell3
https://seu-site.netlify.app/portugal-obrigado
```

---

## 🔄 ATUALIZAR SITE

Para fazer alterações:

1. Edite os projetos originais (oferta-portugal-main, portugal-upsell1, etc)
2. Execute: `.\build-script.ps1`
3. Faça novo deploy da pasta `out/` no Netlify

---

## 📦 PASTA PARA DEPLOY

**IMPORTANTE:** A única pasta que você precisa subir no Netlify é:

```
📁 out/
```

Não suba as pastas individuais dos projetos (oferta-portugal-main, portugal-upsell1, etc).

---

## 💡 DICAS

- **Domínio Customizado:** Configure em Netlify → Site Settings → Domain Management
- **SSL/HTTPS:** Netlify fornece certificado automático
- **Cache:** Se mudanças não aparecerem, limpe cache do navegador (Ctrl+Shift+R)

---

## 📚 DOCUMENTAÇÃO COMPLETA

Para mais detalhes, consulte: `DEPLOY.md`
