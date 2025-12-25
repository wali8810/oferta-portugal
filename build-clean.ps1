# Build Script - Estrutura Limpa
# Copia apenas arquivos essenciais (index.html, favicon, _next)

Write-Host "Iniciando build com estrutura limpa..." -ForegroundColor Cyan

$rootPath = $PSScriptRoot
$outPath = Join-Path $rootPath "out"

# Limpar pasta out/
if (Test-Path $outPath) {
    Write-Host "Limpando pasta out/..." -ForegroundColor Yellow
    Remove-Item -Path $outPath -Recurse -Force
}

New-Item -Path $outPath -ItemType Directory | Out-Null

# Funcao para copiar apenas arquivos essenciais
function Copy-EssentialFiles {
    param(
        [string]$SourceDist,
        [string]$TargetPath
    )
    
    if (-not (Test-Path $SourceDist)) {
        return $false
    }
    
    # Criar pasta de destino
    if (-not (Test-Path $TargetPath)) {
        New-Item -Path $TargetPath -ItemType Directory | Out-Null
    }
    
    # Copiar index.html
    $indexHtml = Join-Path $SourceDist "index.html"
    if (Test-Path $indexHtml) {
        Copy-Item -Path $indexHtml -Destination $TargetPath -Force
    }
    
    # Copiar favicon.ico
    $favicon = Join-Path $SourceDist "favicon.ico"
    if (Test-Path $favicon) {
        Copy-Item -Path $favicon -Destination $TargetPath -Force
    }
    
    # Copiar pasta _next (assets)
    $nextFolder = Join-Path $SourceDist "_next"
    if (Test-Path $nextFolder) {
        $targetNext = Join-Path $TargetPath "_next"
        Copy-Item -Path $nextFolder -Destination $targetNext -Recurse -Force
    }
    
    # Copiar 404.html se existir
    $error404 = Join-Path $SourceDist "404.html"
    if (Test-Path $error404) {
        Copy-Item -Path $error404 -Destination $TargetPath -Force
    }
    
    return $true
}

# COPIAR PAGINA PRINCIPAL
Write-Host "`nCopiando pagina principal..." -ForegroundColor Cyan
$mainDist = Join-Path $rootPath "oferta-portugal-main\dist"
if (Copy-EssentialFiles -SourceDist $mainDist -TargetPath $outPath) {
    Write-Host "   Pagina principal copiada" -ForegroundColor Green
}
else {
    Write-Host "   ERRO: Build nao encontrado" -ForegroundColor Red
    exit 1
}

# COPIAR PAGINAS SECUNDARIAS
Write-Host "`nCopiando paginas secundarias..." -ForegroundColor Cyan

$pages = @(
    @{Source = "portugal-upsell1\UPSELL-main\dist"; Target = "portugal-upsell1"; Name = "Upsell 1" },
    @{Source = "portugal-upsell2\UPSELL2-main\dist"; Target = "portugal-upsell2"; Name = "Upsell 2" },
    @{Source = "portugal-upsell3\UPSELL3-main\dist"; Target = "portugal-upsell3"; Name = "Upsell 3" },
    @{Source = "portugal-downsell1\DOWNSELL-main\dist"; Target = "portugal-downsell1"; Name = "Downsell 1" },
    @{Source = "portugal-downsell2\DOWNSELL2-main\dist"; Target = "portugal-downsell2"; Name = "Downsell 2" },
    @{Source = "portugal-downsell3\DOWNSELL3-main\dist"; Target = "portugal-downsell3"; Name = "Downsell 3" },
    @{Source = "portugal-pagobrigado\dist"; Target = "portugal-obrigado"; Name = "Pagina Obrigado" }
)

foreach ($page in $pages) {
    $sourcePath = Join-Path $rootPath $page.Source
    $targetPath = Join-Path $outPath $page.Target
    
    Write-Host "   $($page.Name)..." -ForegroundColor White
    
    if (Copy-EssentialFiles -SourceDist $sourcePath -TargetPath $targetPath) {
        Write-Host "      Copiado para /$($page.Target)" -ForegroundColor Green
    }
    else {
        Write-Host "      AVISO: Build nao encontrado - $($page.Source)" -ForegroundColor Yellow
    }
}

# CRIAR .htaccess
Write-Host "`nCriando .htaccess..." -ForegroundColor Cyan
$htaccessContent = @"
RewriteEngine On
RewriteBase /

# Rotas de slugs limpos
RewriteRule ^portugal-upsell1/?$ /portugal-upsell1/index.html [L]
RewriteRule ^portugal-upsell2/?$ /portugal-upsell2/index.html [L]
RewriteRule ^portugal-upsell3/?$ /portugal-upsell3/index.html [L]
RewriteRule ^portugal-downsell1/?$ /portugal-downsell1/index.html [L]
RewriteRule ^portugal-downsell2/?$ /portugal-downsell2/index.html [L]
RewriteRule ^portugal-downsell3/?$ /portugal-downsell3/index.html [L]
RewriteRule ^portugal-obrigado/?$ /portugal-obrigado/index.html [L]

# Permitir acesso direto a arquivos existentes
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Fallback para index.html
RewriteRule ^(.*)$ /index.html [L]
"@

Set-Content -Path (Join-Path $outPath ".htaccess") -Value $htaccessContent -Encoding UTF8
Write-Host "   .htaccess criado" -ForegroundColor Green

# CRIAR _redirects
Write-Host "Criando _redirects..." -ForegroundColor Cyan
$redirectsContent = @"
/portugal-upsell1    /portugal-upsell1/index.html    200
/portugal-upsell2    /portugal-upsell2/index.html    200
/portugal-upsell3    /portugal-upsell3/index.html    200
/portugal-downsell1  /portugal-downsell1/index.html  200
/portugal-downsell2  /portugal-downsell2/index.html  200
/portugal-downsell3  /portugal-downsell3/index.html  200
/portugal-obrigado   /portugal-obrigado/index.html   200
/*                   /index.html                     200
"@

Set-Content -Path (Join-Path $outPath "_redirects") -Value $redirectsContent -Encoding UTF8
Write-Host "   _redirects criado" -ForegroundColor Green

# RESUMO
Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "BUILD CONCLUIDO!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan

Write-Host "`nEstrutura criada (limpa):" -ForegroundColor White
Write-Host "   out/" -ForegroundColor Yellow
Write-Host "      index.html" -ForegroundColor White
Write-Host "      favicon.ico" -ForegroundColor White
Write-Host "      _next/" -ForegroundColor White
Write-Host "      portugal-upsell1/" -ForegroundColor White
Write-Host "      portugal-upsell2/" -ForegroundColor White
Write-Host "      portugal-upsell3/" -ForegroundColor White
Write-Host "      portugal-downsell1/" -ForegroundColor White
Write-Host "      portugal-downsell2/" -ForegroundColor White
Write-Host "      portugal-downsell3/" -ForegroundColor White
Write-Host "      portugal-obrigado/" -ForegroundColor White
Write-Host "      .htaccess" -ForegroundColor Cyan
Write-Host "      _redirects" -ForegroundColor Cyan

Write-Host "`nPasta pronta: $outPath" -ForegroundColor Green
