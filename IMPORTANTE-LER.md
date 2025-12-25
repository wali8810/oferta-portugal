# ⚠️ ATENÇÃO - Projetos Secundários Não Estão Estáticos

## Situação Atual

✅ **FUNCIONANDO:**
- `oferta-portugal-main` → Build estático completo (index.html na raiz)
- Sistema de rotas `.htaccess` e `_redirects` criado
- Pasta `out/` estruturada corretamente

❌ **PROBLEMA IDENTIFICADO:**
Os projetos secundários foram buildados com `next build` (servidor) ao invés de export estático:
- `portugal-upsell2`
- `portugal-upsell3`
- `portugal-downsell1`
- `portugal-downsell2`
- `portugal-downsell3`
- `portugal-pagobrigado`

**Resultado:** Essas pastas contêm apenas arquivos de servidor Next.js (sem `index.html`), incompatíveis com deploy estático no Netlify.

---

## Soluções Disponíveis

### OPÇÃO 1: Re-buildar Projetos como Estáticos (RECOMENDADO)

Para cada projeto secundário, execute:

```bash
cd portugal-upsell2/UPSELL2-main
npm run build
# OU se tiver script de export:
npm run export
```

**Verificar:** Cada projeto deve ter `dist/index.html` após o build.

Depois, execute novamente:
```powershell
.\build-script.ps1
```

---

### OPÇÃO 2: Deploy Separado (Alternativa Rápida)

Se os projetos secundários precisam de servidor Next.js:

1. **Deploy página principal** (oferta-portugal-main) no Netlify
2. **Deploy projetos secundários** em Vercel (suporta Next.js com servidor)
3. **Configurar redirects** no Netlify apontando para Vercel:

```
# _redirects no Netlify
/upsell1    https://upsell1.vercel.app    301
/upsell2    https://upsell2.vercel.app    301
# etc...
```

---

### OPÇÃO 3: Converter para Estático Manualmente

Se os projetos não usam funcionalidades de servidor, adicione ao `package.json` de cada um:

```json
{
  "scripts": {
    "build": "next build",
    "export": "next export"
  }
}
```

E no `next.config.js`:

```javascript
module.exports = {
  output: 'export',
  // ... resto da config
}
```

Depois re-buildar todos os projetos.

---

## O Que Já Está Pronto

✅ Script de build automatizado (`build-script.ps1`)
✅ Configuração `.htaccess` para Apache
✅ Configuração `_redirects` para Netlify
✅ Documentação completa (`README.md`, `DEPLOY.md`)
✅ Estrutura de pastas `out/` criada

**Falta apenas:** Builds estáticos dos 6 projetos secundários

---

## Próximos Passos Recomendados

1. **Verificar** se os projetos secundários podem ser estáticos
2. **Re-buildar** com `output: 'export'` no Next.js
3. **Executar** `.\build-script.ps1` novamente
4. **Deploy** pasta `out/` no Netlify

---

## Teste Rápido

Para verificar se um projeto é estático:

```powershell
# Deve retornar True se for estático
Test-Path "portugal-upsell2\UPSELL2-main\dist\index.html"
```

Se retornar `False`, o projeto precisa ser re-buildado como estático.
