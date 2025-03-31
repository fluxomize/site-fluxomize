# Executa a verificação do workflow
npm run verify-workflow

# Se a verificação for bem sucedida, faz o push
if ($LASTEXITCODE -eq 0) {
    Write-Host "🚀 Fazendo push para o repositório..." -ForegroundColor Yellow
    git push origin main
} 