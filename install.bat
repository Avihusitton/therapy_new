@echo off
set PATH=%CD%\node-v20.18.0-win-x64;%PATH%
npm install --legacy-peer-deps > install_log.txt 2>&1
echo Done >> install_log.txt
