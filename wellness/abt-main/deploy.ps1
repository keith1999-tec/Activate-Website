param(
    [string]$message = "Update website"
)

npm run build
if ($LASTEXITCODE -eq 0) {
    git add .
    git commit -m $message
    git push origin main
    Write-Host "Deployment successful." -ForegroundColor Green
} else {
    Write-Host "Build failed. Aborting deployment." -ForegroundColor Red
}