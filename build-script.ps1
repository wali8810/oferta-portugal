# Build Script - Mesclando TODOS os _next
# Combina assets de todos os projetos em uma pasta _next compartilhada

Write-Host "Iniciando build com _next mesclado..." -ForegroundColor Cyan

$rootPath = $PSScriptRoot
$outPath = Join-Path $rootPath "out"

# Limpar pasta out/
if (Test-Path $outPath) {
    Write-Host "Limpando pasta out/..." -ForegroundColor Yellow
    Remove-Item -Path $outPath -Recurse -Force
}

New-Item -Path $outPath -ItemType Directory | Out-Null

# COPIAR PAGINA PRINCIPAL
Write-Host "`nCopiando pagina principal..." -ForegroundColor Cyan
$mainDist = Join-Path $rootPath "oferta-portugal-main\dist"

if (Test-Path $mainDist) {
    Get-ChildItem -Path $mainDist -Recurse | ForEach-Object {
        $targetPath = $_.FullName.Replace($mainDist, $outPath)
        
        if ($_.PSIsContainer) {
            if (-not (Test-Path $targetPath)) {
                New-Item -Path $targetPath -ItemType Directory | Out-Null
            }
        }
        else {
            Copy-Item -Path $_.FullName -Destination $targetPath -Force
        }
    }
    Write-Host "   Pagina principal copiada" -ForegroundColor Green
}
else {
    Write-Host "   ERRO: Build nao encontrado" -ForegroundColor Red
    exit 1
}

# MESCLAR _next DE TODOS OS PROJETOS
Write-Host "`nMesclando assets (_next) de todos os projetos..." -ForegroundColor Cyan

$projects = @(
    "portugal-upsell1\UPSELL-main\dist",
    "portugal-upsell2\UPSELL2-main\dist",
    "portugal-upsell3\UPSELL3-main\dist",
    "portugal-downsell1\DOWNSELL-main\dist",
    "portugal-downsell2\DOWNSELL2-main\dist",
    "portugal-downsell3\DOWNSELL3-main\dist",
    "portugal-pagobrigado\dist"
)

$outNextPath = Join-Path $outPath "_next"

foreach ($project in $projects) {
    $projectPath = Join-Path $rootPath $project
    $projectNext = Join-Path $projectPath "_next"
    
    if (Test-Path $projectNext) {
        Write-Host "   Mesclando _next de $project..." -ForegroundColor White
        
        # Copiar recursivamente, sem sobrescrever arquivos existentes
        Get-ChildItem -Path $projectNext -Recurse | ForEach-Object {
            $relativePath = $_.FullName.Substring($projectNext.Length + 1)
            $targetFile = Join-Path $outNextPath $relativePath
            
            if ($_.PSIsContainer) {
                if (-not (Test-Path $targetFile)) {
                    New-Item -Path $targetFile -ItemType Directory | Out-Null
                }
            }
            else {
                # Copiar apenas se o arquivo não existir (evita sobrescrever)
                if (-not (Test-Path $targetFile)) {
                    $targetDir = Split-Path -Parent $targetFile
                    if (-not (Test-Path $targetDir)) {
                        New-Item -Path $targetDir -ItemType Directory -Force | Out-Null
                    }
                    Copy-Item -Path $_.FullName -Destination $targetFile -Force
                }
            }
        }
    }
}

Write-Host "   Assets mesclados com sucesso" -ForegroundColor Green

# COPIAR HTML DAS PAGINAS SECUNDARIAS
Write-Host "`nCopiando HTML das paginas secundarias..." -ForegroundColor Cyan

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
    
    if (Test-Path $sourcePath) {
        New-Item -Path $targetPath -ItemType Directory -Force | Out-Null
        
        # Copiar index.html
        $indexHtml = Join-Path $sourcePath "index.html"
        if (Test-Path $indexHtml) {
            Copy-Item -Path $indexHtml -Destination $targetPath -Force
        }
        
        # Copiar favicon
        $favicon = Join-Path $sourcePath "favicon.ico"
        if (Test-Path $favicon) {
            Copy-Item -Path $favicon -Destination $targetPath -Force
        }
        
        # Copiar 404.html
        $error404 = Join-Path $sourcePath "404.html"
        if (Test-Path $error404) {
            Copy-Item -Path $error404 -Destination $targetPath -Force
        }
        
        Write-Host "      Copiado para /$($page.Target)" -ForegroundColor Green
    }
    else {
        Write-Host "      AVISO: Build nao encontrado" -ForegroundColor Yellow
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

Write-Host "`nEstrutura final:" -ForegroundColor White
Write-Host "   out/" -ForegroundColor Yellow
Write-Host "      _next/ (mesclado de TODOS os projetos)" -ForegroundColor Cyan
Write-Host "      index.html" -ForegroundColor White
Write-Host "      favicon.ico" -ForegroundColor White
Write-Host "      portugal-upsell1/index.html" -ForegroundColor White
Write-Host "      portugal-upsell2/index.html" -ForegroundColor White
Write-Host "      portugal-upsell3/index.html" -ForegroundColor White
Write-Host "      portugal-downsell1/index.html" -ForegroundColor White
Write-Host "      portugal-downsell2/index.html" -ForegroundColor White
Write-Host "      portugal-downsell3/index.html" -ForegroundColor White
Write-Host "      portugal-obrigado/index.html" -ForegroundColor White

Write-Host "`nPasta pronta: $outPath" -ForegroundColor Green
