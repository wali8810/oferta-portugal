# Guia de Deploy - Sistema de Rotas Estáticas

Sistema unificado de rotas para 8 páginas estáticas com slugs limpos.

---

## 🏗️ ESTRUTURA DE ROTAS

```
/                → oferta-portugal-main (página principal)
/upsell1         → portugal-upsell1
/upsell2         → portugal-upsell2
/upsell3         → portugal-upsell3
/downsell1       → portugal-downsell1
/downsell2       → portugal-downsell2
/downsell3       → portugal-downsell3
/obrigado        → portugal-pagobrigado
```

---

## 📦 1. GERAR BUILD FINAL

Execute o script PowerShell na raiz do projeto:

```powershell
.\build-script.ps1
```

**O que o script faz:**
- Cria pasta `out/` limpa
- Copia página principal para raiz de `out/`
- Copia páginas secundárias para subpastas (`upsell1/`, `upsell2/`, etc)
- Gera `.htaccess` (Apache) e `_redirects` (Netlify)

**Resultado:** Pasta `out/` pronta para deploy

---

## 🧪 2. TESTES LOCAIS (Apache/XAMPP/Laragon)

### Passo a Passo:

1. **Copiar pasta `out/` para servidor local:**
   - XAMPP: `C:\xampp\htdocs\kirvano\`
   - Laragon: `C:\laragon\www\kirvano\`

2. **Iniciar Apache**

3. **Testar rotas no navegador:**

```
http://localhost/kirvano/                      → Página principal
http://localhost/kirvano/portugal-upsell1      → Upsell 1
http://localhost/kirvano/portugal-upsell2      → Upsell 2
http://localhost/kirvano/portugal-upsell3      → Upsell 3
http://localhost/kirvano/portugal-downsell1    → Downsell 1
http://localhost/kirvano/portugal-downsell2    → Downsell 2
http://localhost/kirvano/portugal-downsell3    → Downsell 3
http://localhost/kirvano/portugal-obrigado     → Página Obrigado
```

### ✅ Checklist de Validação:

- [ ] Todas as rotas carregam sem erro 404
- [ ] CSS está aplicado corretamente
- [ ] JavaScript funciona
- [ ] Imagens aparecem
- [ ] Fontes carregam
- [ ] Links internos funcionam

---

## 🚀 3. DEPLOY NO NETLIFY

### Método 1: Drag & Drop (Mais Simples)

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Faça login
3. Arraste a pasta `out/` para a área "Drag and drop your site folder here"
4. Aguarde o deploy completar
5. Acesse o domínio gerado (ex: `random-name-123.netlify.app`)

### Método 2: Netlify CLI

```bash
# Instalar CLI (se ainda não tiver)
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
cd out
netlify deploy --prod
```

### ✅ Validação em Produção:

Teste todas as rotas no domínio Netlify:

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

## 🔧 TROUBLESHOOTING

### Problema: CSS não carrega em subpáginas

**Causa:** Paths relativos incorretos  
**Solução:** O script já corrige isso automaticamente. Se persistir, verifique se executou `build-script.ps1`

### Problema: 404 nas rotas

**Apache Local:**
- Verifique se `.htaccess` está na raiz de `out/`
- Confirme que `mod_rewrite` está habilitado no Apache

**Netlify:**
- Verifique se `_redirects` está na raiz de `out/`
- Aguarde alguns minutos após deploy (cache)

### Problema: Página em branco

**Solução:**
- Abra DevTools (F12) → Console
- Verifique erros de JavaScript
- Confirme que arquivos `_next/` foram copiados corretamente

---

## 📁 ESTRUTURA FINAL DA PASTA `out/`

```
out/
├── index.html                 (página principal)
├── .htaccess                  (config Apache)
├── _redirects                 (config Netlify)
├── favicon.ico
├── _next/                     (assets Next.js)
│   ├── static/
│   └── ...
├── static/                    (arquivos estáticos)
├── portugal-upsell1/
│   ├── index.html
│   └── ...
├── portugal-upsell2/
│   ├── index.html
│   └── ...
├── portugal-upsell3/
│   ├── index.html
│   └── ...
├── portugal-downsell1/
│   ├── index.html
│   └── ...
├── portugal-downsell2/
│   ├── index.html
│   └── ...
├── portugal-downsell3/
│   ├── index.html
│   └── ...
└── portugal-obrigado/
    ├── index.html
    └── ...
```

---

## 🎯 RESUMO RÁPIDO

1. **Build:** `.\build-script.ps1`
2. **Teste Local:** Copiar `out/` para `htdocs/` e testar rotas
3. **Deploy:** Arrastar `out/` para Netlify
4. **Validar:** Testar todas as rotas em produção

**Pasta para deploy:** `out/` (essa é a única pasta que você precisa subir)

---

## 💡 DICAS

- **Domínio Customizado:** Configure em Netlify → Domain Settings
- **HTTPS:** Netlify fornece SSL automático
- **Atualizações:** Re-execute `build-script.ps1` e faça novo deploy
- **Cache:** Limpe cache do navegador se mudanças não aparecerem
