# Verifica se o arquivo de workflow existe
$workflowPath = ".github/workflows/deploy.yml"
if (-not (Test-Path $workflowPath)) {
    Write-Host "❌ Erro: Arquivo de workflow não encontrado em $workflowPath" -ForegroundColor Red
    exit 1
}

# Verifica se o arquivo está sendo rastreado pelo Git
$gitStatus = git ls-files --error-unmatch $workflowPath 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro: Arquivo de workflow não está sendo rastreado pelo Git" -ForegroundColor Red
    Write-Host "Execute: git add $workflowPath" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Arquivo de workflow verificado com sucesso!" -ForegroundColor Green 