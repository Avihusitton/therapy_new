# auto-push.ps1
# Watches src/ and public/ for file changes and auto-commits + pushes to GitHub.
# Usage: powershell -ExecutionPolicy Bypass -File auto-push.ps1
# Stop with: Ctrl+C

param()

$projectRoot = $PSScriptRoot
$debounceSeconds = 3
$lastPushTime = [DateTime]::MinValue

Write-Host "Auto-push watcher started." -ForegroundColor Green
Write-Host "Watching: src/, public/, index.html" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop."
Write-Host ""

function Do-Push {
    $now = [DateTime]::Now
    $diff = ($now - $script:lastPushTime).TotalSeconds
    if ($diff -lt $script:debounceSeconds) { return }
    $script:lastPushTime = $now

    $ts = $now.ToString("HH:mm:ss")
    Write-Host "[$ts] Change detected - pushing..." -ForegroundColor Cyan

    Set-Location $script:projectRoot

    $status = git status --porcelain 2>&1
    if (-not $status) {
        Write-Host "  Nothing to commit." -ForegroundColor Gray
        return
    }

    git add -A 2>&1 | Out-Null
    $msg = "auto: update " + (Get-Date -Format "yyyy-MM-dd HH:mm")
    git commit -m $msg 2>&1 | Out-Null
    git push origin main 2>&1 | Out-Null

    if ($LASTEXITCODE -eq 0) {
        Write-Host "  Pushed to GitHub successfully!" -ForegroundColor Green
    } else {
        Write-Host "  Push failed. Check your connection or git config." -ForegroundColor Red
    }
}

# Create watchers
$watchers = @()
$paths = @("$projectRoot\src", "$projectRoot\public")

foreach ($p in $paths) {
    if (Test-Path $p) {
        $w = New-Object System.IO.FileSystemWatcher
        $w.Path = $p
        $w.Filter = "*.*"
        $w.IncludeSubdirectories = $true
        $w.EnableRaisingEvents = $true
        $watchers += $w
    }
}

$action = {
    $fp = $Event.SourceEventArgs.FullPath
    if ($fp -match "node_modules|\.git|\\dist\\") { return }
    Do-Push
}

$subs = @()
foreach ($w in $watchers) {
    $subs += Register-ObjectEvent $w "Changed" -Action $action
    $subs += Register-ObjectEvent $w "Created" -Action $action
    $subs += Register-ObjectEvent $w "Deleted" -Action $action
}

Write-Host "Watcher active. Save any file in src/ or public/ to trigger auto-push."
Write-Host ""

try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    foreach ($s in $subs) { Unregister-Event -SubscriptionId $s.Id -ErrorAction SilentlyContinue }
    foreach ($w in $watchers) { $w.Dispose() }
    Write-Host "Watcher stopped." -ForegroundColor Yellow
}
