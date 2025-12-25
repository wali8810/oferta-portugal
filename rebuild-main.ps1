$ErrorActionPreference = "Stop"

Write-Host "🔄 Iniciando Rebuild do Projeto Main..." -ForegroundColor Cyan

$mainPath = Join-Path $PSScriptRoot "oferta-portugal-main"
$distPath = Join-Path $mainPath "dist"

# 1. Limpar dist antigo
if (Test-Path $distPath) {
    Write-Host "🗑️ Removendo pasta dist antiga..." -ForegroundColor Yellow
    Remove-Item -Path $distPath -Recurse -Force
}

# 2. Re-buildar
Set-Location $mainPath
Write-Host "📦 Instalando dependências..." -ForegroundColor Cyan
npm install

Write-Host "🔨 Executando Build (Isso pode demorar)..." -ForegroundColor Cyan
npm run build

if (!(Test-Path $distPath)) {
    Write-Error "❌ Falha no build! Pasta dist não foi criada."
}

# 3. Rodar script de consolidação
Set-Location $PSScriptRoot
Write-Host "🚀 Executando consolidacao..." -ForegroundColor Cyan
.\build-script.ps1

Write-Host "✅ Processo concluido! Verifique a pasta out/." -ForegroundColor Green
