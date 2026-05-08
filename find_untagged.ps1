$extensions = @('*.js','*.jsx','*.ts','*.tsx','*.css','*.sh','*.cjs')
$files = Get-ChildItem -Path 'src' -Recurse -Include $extensions | Where-Object { $_.FullName -notmatch 'node_modules|\\dist\\|\\.git' }

# Also include root-level config files
$rootFiles = @('eslint.config.js','next.config.js','open-next.config.ts','postcss.config.cjs','tailwind.config.cjs','vite.config.js','fix-hook.cjs','build-cf.sh','src\index.css','src\pages.config.js','src\middleware.js')
foreach ($rf in $rootFiles) {
    $full = Join-Path (Get-Location) $rf
    if (Test-Path $full) {
        $files = $files + (Get-Item $full)
    }
}

foreach ($f in $files) {
    $line1 = (Get-Content $f.FullName -TotalCount 1 -ErrorAction SilentlyContinue)
    if ($null -eq $line1 -or $line1 -notmatch '\[Category [ABC]') {
        Write-Output $f.FullName
    }
}
