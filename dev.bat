@echo off
set "NODE_DIR=%~dp0node-v20.18.0-win-x64"
set "NPM_DIR=%NODE_DIR%\node_modules\npm\bin"
set PATH=%NODE_DIR%;%NPM_DIR%;%PATH%
cd /d %~dp0
"%NODE_DIR%\node.exe" "%NPM_DIR%\npx-cli.js" next dev -p 3000
