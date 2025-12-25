$projects = @(
    "portugal-upsell1\UPSELL-main",
    "portugal-downsell1\DOWNSELL-main",
    "portugal-upsell2\UPSELL2-main",
    "portugal-downsell2\DOWNSELL2-main"
)

foreach ($proj in $projects) {
    $path = Join-Path $PSScriptRoot $proj
    Write-Host "🏗️ Building $proj..." -ForegroundColor Cyan
    Set-Location $path
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "❌ Falha ao buildar $proj"
        exit 1
    }
}

Set-Location $PSScriptRoot
Write-Host "🔄 Consolidando tudo..." -ForegroundColor Yellow
.\build-script.ps1
Write-Host "✅ Tudo Atualizado!" -ForegroundColor Green
