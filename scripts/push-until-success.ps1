# Push to origin/main, retry every 30s until success (Ctrl+C to stop)
Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"
Set-Location (Split-Path -Parent $PSScriptRoot)

$attempt = 0
while ($true) {
    $attempt++
    Write-Host "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] Attempt $attempt - git push -u origin main"
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Push succeeded after $attempt attempt(s)."
        exit 0
    }
    Write-Host "Failed (exit $LASTEXITCODE). Retrying in 30 seconds..."
    Start-Sleep -Seconds 30
}
