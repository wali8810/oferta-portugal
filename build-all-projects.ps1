# Script para buildar TODOS os projetos secundários
# Instala dependências e builda cada projeto

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "BUILD DE TODOS OS PROJETOS SECUNDARIOS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$projects = @(
    @{Path = "portugal-upsell1\UPSELL-main"; Name = "Portugal Upsell 1"},
    @{Path = "portugal-upsell2\UPSELL2-main"; Name = "Portugal Upsell 2"},
    @{Path = "portugal-upsell3\UPSELL3-main"; Name = "Portugal Upsell 3"},
    @{Path = "portugal-downsell1\DOWNSELL-main"; Name = "Portugal Downsell 1"},
    @{Path = "portugal-downsell2\DOWNSELL2-main"; Name = "Portugal Downsell 2"},
    @{Path = "portugal-downsell3\DOWNSELL3-main"; Name = "Portugal Downsell 3"}
)

$totalProjects = $projects.Count
$currentProject = 0

foreach ($project in $projects) {
    $currentProject++
    $projectPath = Join-Path $PSScriptRoot $project.Path
    
    Write-Host "`n[$currentProject/$totalProjects] Processando: $($project.Name)" -ForegroundColor Yellow
    Write-Host "Pasta: $projectPath" -ForegroundColor Gray
    
    if (-not (Test-Path $projectPath)) {
        Write-Host "   ERRO: Pasta nao encontrada!" -ForegroundColor Red
        continue
    }
    
    # Verificar se node_modules existe
    $nodeModules = Join-Path $projectPath "node_modules"
    if (-not (Test-Path $nodeModules)) {
        Write-Host "   Instalando dependencias..." -ForegroundColor Cyan
        
        Push-Location $projectPath
        npm install 2>&1 | Out-Null
        Pop-Location
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "   Dependencias instaladas" -ForegroundColor Green
        } else {
            Write-Host "   ERRO ao instalar dependencias" -ForegroundColor Red
            continue
        }
    } else {
        Write-Host "   Dependencias ja instaladas" -ForegroundColor Green
    }
    
    # Buildar projeto
    Write-Host "   Buildando projeto..." -ForegroundColor Cyan
    
    Push-Location $projectPath
    npm run build 2>&1 | Out-Null
    Pop-Location
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   Build concluido com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "   ERRO ao buildar projeto" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "PROCESSO CONCLUIDO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nProximo passo: Execute .\build-script.ps1 para consolidar tudo" -ForegroundColor Yellow
